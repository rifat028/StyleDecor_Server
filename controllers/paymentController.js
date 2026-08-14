// ========== Imports ==========
const stripe = require("stripe")(process.env.STRIPE_API_SECRET);
const { ObjectId } = require("mongodb");
const { bookingCollection, paymentsCollection } = require("../models/collections");

// ========== Create Checkout Session ==========
// Generates a Stripe checkout session URL for a given booking and returns it
const createCheckoutSession = async (req, res) => {
  try {
    const paymentInfo = req.body;
    const unitAmount = Number(paymentInfo.unitCost) * 100; // Stripe expects amounts in cents
    
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "bdt",
            unit_amount: unitAmount,
            product_data: { name: paymentInfo.serviceName },
          },
          quantity: paymentInfo.unit,
        },
      ],
      customer_email: paymentInfo.clientEmail,
      mode: "payment",
      metadata: {
        bookingID: paymentInfo.id,
        serviceName: paymentInfo.serviceName,
      },
      success_url: `${process.env.DOMAIN}/dashboard/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.DOMAIN}/dashboard/my-bookings`,
    });
    
    res.send({ url: session.url });
  } catch (error) {
    res.status(500).send({ message: "Error creating checkout session", error });
  }
};

// ========== Handle Payment Success ==========
// Verifies the Stripe session and updates the database indicating successful payment
const handlePaymentSuccess = async (req, res) => {
  try {
    const session_id = req.query.session_id;
    const session = await stripe.checkout.sessions.retrieve(session_id);
    
    // Construct payment record
    const paymentInfo = {
      clientEmail: session.customer_email,
      transactionId: session.payment_intent,
      bookingID: session.metadata.bookingID,
      serviceName: session.metadata.serviceName,
      status: session.payment_status,
      amount: session.amount_total / 100, // Convert back to standard currency unit
      paidAT: new Date().toISOString().split("T")[0],
    };

    // If payment was successfully completed in Stripe
    if (session.payment_status === "paid") {
      const bookingQuery = {
        _id: new ObjectId(session.metadata.bookingID),
      };
      
      const updateBooking = {
        $set: {
          paid: true,
        },
      };
      
      // Update booking to paid status
      const bookingResult = await bookingCollection.updateOne(
        bookingQuery,
        updateBooking
      );
      
      // Save payment transaction record
      const paymentExist = await paymentsCollection.findOne({
        transactionId: session.payment_intent,
      });
      let paymentResult = {};
      if (!paymentExist) {
        paymentResult = await paymentsCollection.insertOne(paymentInfo);
      }
      
      return res.send({
        success: true,
        bookingResult,
        paymentResult,
        transactionId: session.payment_intent,
      });
    }
    return res.send({ success: false });
  } catch (error) {
    res.status(500).send({ message: "Error handling payment success", error });
  }
};

// ========== Get Transactions ==========
// Retrieves all payment transactions made by a specific user
const getTransactions = async (req, res) => {
  try {
    const email = req.query.email;

    if (!email) {
      return res.status(400).send({ message: "email query is required" });
    }

    if (email !== req.decoded_email) {
      return res.status(403).send({ message: "forbidden access" });
    }

    const result = await paymentsCollection
      .find({ clientEmail: email })
      .sort({ _id: -1 })
      .toArray();

    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching transactions", error });
  }
};

module.exports = {
  createCheckoutSession,
  handlePaymentSuccess,
  getTransactions,
};

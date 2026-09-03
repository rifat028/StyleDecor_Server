// ========== Imports ==========
const { ObjectId } = require("mongodb");
const {
  paymentsCollection,
  bookingCollection,
  userCollection,
  decoratorCollection,
  agentCollection,
} = require("../models/collections");

// Initialize Stripe conditionally
let stripe = null;
if (process.env.STRIPE_API_SECRET) {
  try {
    stripe = require("stripe")(process.env.STRIPE_API_SECRET);
  } catch (stripeErr) {
    console.warn("Stripe initialization skipped:", stripeErr.message);
  }
}

// ========== Helper: Generate Unique Payment Code ==========
const generatePaymentCode = () => {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randomSuffix = Math.floor(100 + Math.random() * 900);
  return `PAY-${dateStr.slice(0, 4)}-${dateStr.slice(4, 8)}-${randomSuffix}`;
};

// ========== Helper: Batch Entity Enrichment ==========
const enrichPayments = async (payments) => {
  if (!Array.isArray(payments) || payments.length === 0) return [];

  // Extract unique ObjectIds
  const bookingIds = [...new Set(payments.map((p) => p.bookingId?.toString()).filter(Boolean))];

  const userIds = [
    ...new Set(
      payments
        .flatMap((p) => [
          p.sender?.userId?.toString(),
          p.receiver?.userId?.toString(),
          p.customerId?.toString(),
        ])
        .filter(Boolean)
    ),
  ];

  const decoratorIds = [
    ...new Set(
      payments
        .flatMap((p) => [
          p.sender?.decoratorId?.toString(),
          p.receiver?.decoratorId?.toString(),
          p.decoratorId?.toString(),
        ])
        .filter(Boolean)
    ),
  ];

  const agentIds = [
    ...new Set(
      payments
        .flatMap((p) => [
          p.receiver?.agentId?.toString(),
          p.agentId?.toString(),
        ])
        .filter(Boolean)
    ),
  ];

  // Batch query related collections in parallel
  const [users, decorators, agents, bookings] = await Promise.all([
    userIds.length > 0
      ? userCollection.find({ _id: { $in: userIds.map((id) => new ObjectId(id)) } }).toArray()
      : [],
    decoratorIds.length > 0
      ? decoratorCollection.find({ _id: { $in: decoratorIds.map((id) => new ObjectId(id)) } }).toArray()
      : [],
    agentIds.length > 0
      ? agentCollection.find({ _id: { $in: agentIds.map((id) => new ObjectId(id)) } }).toArray()
      : [],
    bookingIds.length > 0
      ? bookingCollection.find({ _id: { $in: bookingIds.map((id) => new ObjectId(id)) } }).toArray()
      : [],
  ]);

  const userMap = new Map(users.map((u) => [u._id.toString(), u]));
  const decoratorMap = new Map(decorators.map((d) => [d._id.toString(), d]));
  const agentMap = new Map(agents.map((a) => [a._id.toString(), a]));
  const bookingMap = new Map(bookings.map((b) => [b._id.toString(), b]));

  return payments.map((p) => {
    const bkg = p.bookingId ? bookingMap.get(p.bookingId.toString()) : null;

    // Resolve sender details
    let senderDetails = { role: p.sender?.role || "customer", name: "Unknown Sender" };
    if (p.sender?.role === "customer" || (!p.sender?.role && p.customerId)) {
      const custUser = userMap.get((p.sender?.userId || p.customerId)?.toString());
      senderDetails = {
        role: "customer",
        name: custUser?.name || "Customer",
        email: custUser?.email || "",
        phone: custUser?.phone || "",
        photoUrl: custUser?.photoUrl || "",
        district: custUser?.address?.district || "",
      };
    } else if (p.sender?.role === "decorator") {
      const dec = decoratorMap.get(p.sender?.decoratorId?.toString());
      senderDetails = {
        role: "decorator",
        name: dec?.businessName || "Decorator Agency",
        businessName: dec?.businessName || "Decorator Agency",
        logo: dec?.logo || "",
        phone: dec?.contactInfo?.phone || "",
        district: dec?.contactInfo?.district || "",
      };
    }

    // Resolve receiver details
    let receiverDetails = { role: p.receiver?.role || "decorator", name: "Unknown Receiver" };
    if (p.receiver?.role === "decorator" || (!p.receiver?.role && p.decoratorId)) {
      const dec = decoratorMap.get((p.receiver?.decoratorId || p.decoratorId)?.toString());
      receiverDetails = {
        role: "decorator",
        name: dec?.businessName || "Decorator Agency",
        businessName: dec?.businessName || "Decorator Agency",
        logo: dec?.logo || "",
        phone: dec?.contactInfo?.phone || "",
        district: dec?.contactInfo?.district || "",
      };
    } else if (p.receiver?.role === "admin") {
      const adminUser = userMap.get(p.receiver?.userId?.toString());
      receiverDetails = {
        role: "admin",
        name: adminUser?.name || "System Admin",
        email: adminUser?.email || "",
        photoUrl: adminUser?.photoUrl || "",
      };
    } else if (p.receiver?.role === "agent") {
      const agent = agentMap.get(p.receiver?.agentId?.toString());
      receiverDetails = {
        role: "agent",
        name: agent?.name || "Field Agent",
        phone: agent?.phone || "",
        photoUrl: agent?.photoUrl || "",
        district: agent?.assignedArea?.district || "",
        specialization: agent?.specialization || "",
      };
    }

    return {
      ...p,
      sender: {
        ...(p.sender || {}),
        ...senderDetails,
      },
      receiver: {
        ...(p.receiver || {}),
        ...receiverDetails,
      },
      booking: bkg || null,
      // Backward compatibility fields
      customer: senderDetails.role === "customer" ? senderDetails : null,
      decorator:
        receiverDetails.role === "decorator"
          ? receiverDetails
          : senderDetails.role === "decorator"
          ? senderDetails
          : null,
    };
  });
};

// ========== 1. Get All Payments (Admin Global Query & Filters) ==========
const getPayments = async (req, res) => {
  try {
    const {
      paymentType,
      type,
      decoratorId,
      paymentMethod,
      search,
      sort = "newest",
      page = 1,
      limit = 10,
    } = req.query;

    const andConditions = [];

    // Filter by paymentType (advance_payment, full_payment, platform_fee, agent_fee)
    const selectedType = paymentType || type;
    if (selectedType && selectedType !== "all") {
      andConditions.push({ paymentType: selectedType });
    }

    // Filter by paymentMethod
    if (paymentMethod && paymentMethod !== "all") {
      andConditions.push({ paymentMethod });
    }

    // Filter by Decorator (can be sender or receiver)
    if (decoratorId && ObjectId.isValid(decoratorId)) {
      const decObjectId = new ObjectId(decoratorId);
      andConditions.push({
        $or: [
          { "sender.decoratorId": decObjectId },
          { "receiver.decoratorId": decObjectId },
          { decoratorId: decObjectId },
        ],
      });
    }

    // Search Keyword
    if (search && search.trim()) {
      const q = search.trim();
      const searchOr = [
        { paymentCode: { $regex: q, $options: "i" } },
        { paymentType: { $regex: q, $options: "i" } },
        { paymentMethod: { $regex: q, $options: "i" } },
      ];
      if (!isNaN(Number(q))) {
        searchOr.push({ amount: Number(q) });
      }
      andConditions.push({ $or: searchOr });
    }

    const query = andConditions.length > 0 ? { $and: andConditions } : {};

    // Sorting
    let sortObj = { paidAt: -1, createdAt: -1, _id: -1 };
    if (sort === "oldest") sortObj = { paidAt: 1, createdAt: 1, _id: 1 };
    if (sort === "amount_high" || sort === "amount_desc") sortObj = { amount: -1 };
    if (sort === "amount_low" || sort === "amount_asc") sortObj = { amount: 1 };

    const pageNum = Math.max(1, parseInt(page, 10));
    const limitNum = Math.max(1, parseInt(limit, 10));
    const skip = (pageNum - 1) * limitNum;

    const totalCount = await paymentsCollection.countDocuments(query);
    const rawPayments = await paymentsCollection
      .find(query)
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .toArray();

    const data = await enrichPayments(rawPayments);

    res.send({
      success: true,
      totalCount,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.max(1, Math.ceil(totalCount / limitNum)),
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching payments list",
      error: error.message,
    });
  }
};

// ========== 2. Get Payment Financial Statistics (Admin & Analytics) ==========
const getPaymentStats = async (req, res) => {
  try {
    const allPayments = await paymentsCollection.find({}).toArray();

    const advancePayments = allPayments.filter((p) => p.paymentType === "advance_payment");
    const fullPayments = allPayments.filter((p) => p.paymentType === "full_payment");
    const platformFeePayments = allPayments.filter((p) => p.paymentType === "platform_fee");
    const agentFeePayments = allPayments.filter((p) => p.paymentType === "agent_fee");

    const totalVolume = allPayments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
    const advanceVolume = advancePayments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
    const fullVolume = fullPayments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
    const platformVolume = platformFeePayments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
    const agentVolume = agentFeePayments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);

    res.send({
      success: true,
      stats: {
        total: allPayments.length,
        totalVolume,
        volume: totalVolume,
        advance_payment: {
          count: advancePayments.length,
          volume: advanceVolume,
        },
        full_payment: {
          count: fullPayments.length,
          volume: fullVolume,
        },
        platform_fee: {
          count: platformFeePayments.length,
          volume: platformVolume,
        },
        agent_fee: {
          count: agentFeePayments.length,
          volume: agentVolume,
        },
        // Flat counters
        advanceCount: advancePayments.length,
        fullCount: fullPayments.length,
        platformCount: platformFeePayments.length,
        agentCount: agentFeePayments.length,
        // Backward compatibility metrics for Analytics dashboard
        platformCommission: platformVolume,
        vendorReceivables: fullVolume - platformVolume,
        gatewayFees: Math.round(totalVolume * 0.015),
        totalRefunded: 0,
        completedTransactionsCount: fullPayments.length + advancePayments.length,
        totalTransactionsCount: allPayments.length,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error computing payment statistics",
      error: error.message,
    });
  }
};

// ========== 3. Get Payments by Customer ID ==========
const getPaymentsByCustomer = async (req, res) => {
  try {
    const { customerId } = req.params;

    if (!ObjectId.isValid(customerId)) {
      return res.status(400).send({ success: false, message: "Invalid customer ID format" });
    }

    const rawPayments = await paymentsCollection
      .find({ customerId: new ObjectId(customerId) })
      .sort({ createdAt: -1, _id: -1 })
      .toArray();

    const data = await enrichPayments(rawPayments);

    res.send({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching customer payments",
      error: error.message,
    });
  }
};

// ========== 4. Get Payments by Decorator Agency ID ==========
const getPaymentsByDecorator = async (req, res) => {
  try {
    const { decoratorId } = req.params;

    if (!ObjectId.isValid(decoratorId)) {
      return res.status(400).send({ success: false, message: "Invalid decorator ID format" });
    }

    const rawPayments = await paymentsCollection
      .find({ decoratorId: new ObjectId(decoratorId) })
      .sort({ createdAt: -1, _id: -1 })
      .toArray();

    const data = await enrichPayments(rawPayments);

    // Compute Net Earnings for Decorator
    const netReceivables = data
      .filter((p) => p.status === "completed")
      .reduce((sum, p) => sum + (p.breakdown?.vendorReceivable || Math.round(p.amount * 0.885)), 0);

    res.send({
      success: true,
      count: data.length,
      netReceivables,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching decorator earnings",
      error: error.message,
    });
  }
};

// ========== 5. Get Payments by Booking ID ==========
const getPaymentsByBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;

    if (!ObjectId.isValid(bookingId)) {
      return res.status(400).send({ success: false, message: "Invalid booking ID format" });
    }

    const rawPayments = await paymentsCollection
      .find({ bookingId: new ObjectId(bookingId) })
      .sort({ createdAt: -1, _id: -1 })
      .toArray();

    const data = await enrichPayments(rawPayments);

    res.send({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching booking payments",
      error: error.message,
    });
  }
};

// ========== 6. Get Single Payment Dossier by ID ==========
const getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid payment ID format" });
    }

    const payment = await paymentsCollection.findOne({ _id: new ObjectId(id) });
    if (!payment) {
      return res.status(404).send({ success: false, message: "Payment record not found" });
    }

    const [enriched] = await enrichPayments([payment]);

    res.send({
      success: true,
      data: enriched,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching payment dossier",
      error: error.message,
    });
  }
};

// ========== 7. Initiate / Create Payment Transaction ==========
const createPayment = async (req, res) => {
  try {
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    const {
      bookingId,
      amount,
      paymentType = "advance_deposit", // advance_deposit | full_payment | remaining_balance
      paymentMethod = "bkash", // bkash | nagad | sslcommerz | bank_transfer | stripe
      currency = "BDT",
    } = req.body;

    if (!bookingId || !ObjectId.isValid(bookingId)) {
      return res.status(400).send({ success: false, message: "Valid bookingId is required" });
    }

    const booking = await bookingCollection.findOne({ _id: new ObjectId(bookingId) });
    if (!booking) {
      return res.status(404).send({ success: false, message: "Booking not found" });
    }

    const grandTotal = Number(booking.pricingBreakdown?.grandTotal || booking.totalCost || 0);
    const existingPaid = Number(booking.pricingBreakdown?.paidAmount || 0);
    const remainingDue = grandTotal - existingPaid;

    let payAmount = Number(amount);
    if (!payAmount || payAmount <= 0) {
      if (paymentType === "advance_deposit") {
        payAmount = Math.round(grandTotal * 0.40); // 40% standard deposit
      } else {
        payAmount = remainingDue > 0 ? remainingDue : grandTotal;
      }
    }

    const gatewayFee = Math.round(payAmount * 0.015); // 1.5%
    const platformCommission = Math.round(payAmount * 0.10); // 10%
    const vendorReceivable = payAmount - gatewayFee - platformCommission;

    const randomTrx = `TRX${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    const paymentCode = generatePaymentCode();

    const newPayment = {
      paymentCode: paymentCode,
      bookingId: booking._id,
      customerId: user ? user._id : (booking.customerId || null),
      decoratorId: booking.decoratorId || null,
      amount: payAmount,
      currency: currency,
      paymentType: paymentType,
      paymentMethod: paymentMethod,
      gatewayDetails: {
        gateway: paymentMethod.toUpperCase(),
        transactionId: randomTrx,
        gatewayResponseCode: "0000",
        valId: `VAL_${paymentMethod.toUpperCase()}_${Math.floor(10000 + Math.random() * 90000)}`,
      },
      breakdown: {
        baseAmount: payAmount,
        gatewayFee: gatewayFee,
        platformCommission: platformCommission,
        vendorReceivable: vendorReceivable,
      },
      status: "completed", // Marked completed upon successful simulated/gateway process
      paidAt: new Date(),
      refundDetails: {
        isRefunded: false,
        refundAmount: 0,
        refundReason: null,
        refundedAt: null,
      },
      // Backward compatibility fields
      clientEmail: email,
      bookingID: booking._id.toString(),
      serviceName: booking.serviceSnapshot?.title || booking.serviceName || "Decoration Setup",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await paymentsCollection.insertOne(newPayment);

    // ========== Synchronize Linked Booking Financials ==========
    const updatedPaidAmount = existingPaid + payAmount;
    const updatedDueAmount = Math.max(0, grandTotal - updatedPaidAmount);
    const newPaymentStatus = updatedDueAmount === 0 ? "paid" : "partially_paid";

    const bookingUpdate = {
      paymentStatus: newPaymentStatus,
      paid: newPaymentStatus === "paid",
      "pricingBreakdown.paidAmount": updatedPaidAmount,
      "pricingBreakdown.dueAmount": updatedDueAmount,
      updatedAt: new Date(),
    };

    // Auto-advance booking lifecycle status if appropriate
    if (booking.status === "pending" || booking.status === "in_draft" || booking.status === "accepted") {
      if (newPaymentStatus === "partially_paid") {
        bookingUpdate.status = "advance_paid";
      } else if (newPaymentStatus === "paid") {
        bookingUpdate.status = "fully_paid";
      }
    } else if (booking.status === "completed" && newPaymentStatus === "paid") {
      bookingUpdate.status = "fully_paid";
    }

    await bookingCollection.updateOne(
      { _id: booking._id },
      { $set: bookingUpdate }
    );

    res.status(201).send({
      success: true,
      message: "Payment processed successfully",
      paymentId: result.insertedId,
      paymentCode: paymentCode,
      transactionId: randomTrx,
      data: { _id: result.insertedId, ...newPayment },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error processing payment",
      error: error.message,
    });
  }
};

// ========== 8. Process Refund (Admin / Cancellation) ==========
const processRefund = async (req, res) => {
  try {
    const { id } = req.params;
    const { refundReason, refundAmount } = req.body;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid payment ID format" });
    }

    const payment = await paymentsCollection.findOne({ _id: new ObjectId(id) });
    if (!payment) {
      return res.status(404).send({ success: false, message: "Payment record not found" });
    }

    if (payment.status === "refunded") {
      return res.status(400).send({ success: false, message: "Payment has already been refunded" });
    }

    const finalRefundAmount = Number(refundAmount || payment.amount);

    const updatePayment = {
      status: "refunded",
      "refundDetails.isRefunded": true,
      "refundDetails.refundAmount": finalRefundAmount,
      "refundDetails.refundReason": refundReason || "Client requested refund.",
      "refundDetails.refundedAt": new Date(),
      updatedAt: new Date(),
    };

    await paymentsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatePayment }
    );

    // Sync linked booking
    if (payment.bookingId) {
      await bookingCollection.updateOne(
        { _id: payment.bookingId },
        {
          $set: {
            status: "rejected",
            paymentStatus: "refunded",
            cancellationReason: refundReason || "Booking cancelled and payment refunded.",
            updatedAt: new Date(),
          },
        }
      );
    }

    res.send({
      success: true,
      message: "Refund processed successfully",
      refundAmount: finalRefundAmount,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error processing refund",
      error: error.message,
    });
  }
};

// ========== 9. Stripe Checkout Session (Stripe Gateway) ==========
const createCheckoutSession = async (req, res) => {
  try {
    if (!stripe) {
      return res.status(503).send({
        success: false,
        message: "Stripe gateway is not configured in this environment.",
      });
    }

    const { bookingId, clientEmail, serviceName, amount, unit = 1 } = req.body;
    const unitAmount = Math.round(Number(amount || 25000) * 100); // in cents

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "bdt",
            unit_amount: unitAmount,
            product_data: { name: serviceName || "Event Decoration Setup" },
          },
          quantity: Number(unit),
        },
      ],
      customer_email: clientEmail || req.decoded_email,
      mode: "payment",
      metadata: {
        bookingID: bookingId || "",
        serviceName: serviceName || "",
      },
      success_url: `${process.env.DOMAIN || "http://localhost:5173"}/dashboard/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.DOMAIN || "http://localhost:5173"}/dashboard/my-bookings`,
    });

    res.send({ success: true, url: session.url, sessionId: session.id });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error creating checkout session",
      error: error.message,
    });
  }
};

// ========== 10. Handle Payment Success (Stripe Callback) ==========
const handlePaymentSuccess = async (req, res) => {
  try {
    const sessionId = req.query.session_id;
    if (!stripe || !sessionId) {
      return res.status(400).send({ success: false, message: "Invalid session callback" });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      const bookingId = session.metadata?.bookingID;
      let booking = null;
      if (bookingId && ObjectId.isValid(bookingId)) {
        booking = await bookingCollection.findOne({ _id: new ObjectId(bookingId) });
      }

      const payAmount = session.amount_total / 100;
      const paymentCode = generatePaymentCode();

      const paymentInfo = {
        paymentCode: paymentCode,
        bookingId: booking ? booking._id : (bookingId && ObjectId.isValid(bookingId) ? new ObjectId(bookingId) : null),
        customerId: booking?.customerId || null,
        decoratorId: booking?.decoratorId || null,
        amount: payAmount,
        currency: "BDT",
        paymentType: "full_payment",
        paymentMethod: "stripe",
        gatewayDetails: {
          gateway: "Stripe",
          transactionId: session.payment_intent,
          gatewayResponseCode: "0000",
          valId: session.id,
        },
        breakdown: {
          baseAmount: payAmount,
          gatewayFee: Math.round(payAmount * 0.015),
          platformCommission: Math.round(payAmount * 0.10),
          vendorReceivable: Math.round(payAmount * 0.885),
        },
        status: "completed",
        paidAt: new Date(),
        refundDetails: { isRefunded: false, refundAmount: 0 },
        clientEmail: session.customer_email,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const paymentExist = await paymentsCollection.findOne({
        "gatewayDetails.transactionId": session.payment_intent,
      });

      let paymentResult = {};
      if (!paymentExist) {
        paymentResult = await paymentsCollection.insertOne(paymentInfo);
      }

      if (booking) {
        await bookingCollection.updateOne(
          { _id: booking._id },
          {
            $set: {
              paymentStatus: "paid",
              paid: true,
              "pricingBreakdown.paidAmount": payAmount,
              "pricingBreakdown.dueAmount": 0,
              status: "fully_paid",
              updatedAt: new Date(),
            },
          }
        );
      }

      return res.send({
        success: true,
        transactionId: session.payment_intent,
        paymentCode,
      });
    }

    res.send({ success: false, message: "Payment status not completed" });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error handling payment success",
      error: error.message,
    });
  }
};

// ========== 11. Legacy Transactions Query (Backward Compatibility) ==========
const getTransactions = async (req, res) => {
  try {
    const email = req.query.email || req.decoded_email;
    const user = await userCollection.findOne({ email });

    const query = {};
    if (user) {
      query.$or = [{ customerId: user._id }, { clientEmail: email }];
    } else {
      query.clientEmail = email;
    }

    const rawPayments = await paymentsCollection
      .find(query)
      .sort({ createdAt: -1, _id: -1 })
      .toArray();

    const data = await enrichPayments(rawPayments);

    res.send(data);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching transactions",
      error: error.message,
    });
  }
};

module.exports = {
  getPayments,
  getPaymentStats,
  getPaymentsByCustomer,
  getPaymentsByDecorator,
  getPaymentsByBooking,
  getPaymentById,
  createPayment,
  processRefund,
  createCheckoutSession,
  handlePaymentSuccess,
  getTransactions,
};

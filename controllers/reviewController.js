// ========== Imports ==========
const { ObjectId } = require("mongodb");
const { reviewCollection, bookingCollection, agentCollection, decoratorCollection, userCollection } = require("../models/collections");

// ========== 1. Get Reviews for Decorator Agency ==========
const getReviewsByDecorator = async (req, res) => {
  try {
    const { decoratorId } = req.params;
    if (!ObjectId.isValid(decoratorId)) {
      return res.status(400).send({ success: false, message: "Invalid decorator ID" });
    }

    const reviews = await reviewCollection
      .find({
        decoratorId: new ObjectId(decoratorId),
        status: "published",
      })
      .sort({ createdAt: -1 })
      .toArray();

    res.send({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching reviews for decorator",
      error: error.message,
    });
  }
};

// ========== 2. Get Reviews for Field Agent ==========
const getReviewsByAgent = async (req, res) => {
  try {
    const { agentId } = req.params;
    if (!ObjectId.isValid(agentId)) {
      return res.status(400).send({ success: false, message: "Invalid agent ID" });
    }

    const reviews = await reviewCollection
      .find({
        agentId: new ObjectId(agentId),
        status: "published",
      })
      .sort({ createdAt: -1 })
      .toArray();

    res.send({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching reviews for agent",
      error: error.message,
    });
  }
};

// ========== 3. Get Reviews for Service ==========
const getReviewsByService = async (req, res) => {
  try {
    const { serviceId } = req.params;
    if (!ObjectId.isValid(serviceId)) {
      return res.status(400).send({ success: false, message: "Invalid service ID" });
    }

    const reviews = await reviewCollection
      .find({
        serviceId: new ObjectId(serviceId),
        status: "published",
      })
      .sort({ createdAt: -1 })
      .toArray();

    res.send({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching reviews for service",
      error: error.message,
    });
  }
};

// ========== 4. Get All Reviews (Admin & Global Filter) ==========
const getReviews = async (req, res) => {
  try {
    const { decoratorId, agentId, serviceId, status = "published", page = 1, limit = 20 } = req.query;
    const query = {};

    if (status && status !== "all") query.status = status;
    if (decoratorId && ObjectId.isValid(decoratorId)) query.decoratorId = new ObjectId(decoratorId);
    if (agentId && ObjectId.isValid(agentId)) query.agentId = new ObjectId(agentId);
    if (serviceId && ObjectId.isValid(serviceId)) query.serviceId = new ObjectId(serviceId);

    const pageNum = Math.max(1, parseInt(page, 10));
    const limitNum = Math.max(1, parseInt(limit, 10));
    const skip = (pageNum - 1) * limitNum;

    const totalCount = await reviewCollection.countDocuments(query);
    const reviews = await reviewCollection
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum)
      .toArray();

    res.send({
      success: true,
      totalCount,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.max(1, Math.ceil(totalCount / limitNum)),
      data: reviews,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching reviews",
      error: error.message,
    });
  }
};

// ========== 5. Create Review (Customer / Decorator) ==========
const createReview = async (req, res) => {
  try {
    const {
      bookingId,
      decoratorId,
      serviceId,
      agentId,
      rating,
      comment,
      images = [],
    } = req.body;

    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    let linkedBooking = null;
    if (bookingId && ObjectId.isValid(bookingId)) {
      linkedBooking = await bookingCollection.findOne({ _id: new ObjectId(bookingId) });
    }

    let finalDecoratorId = decoratorId && ObjectId.isValid(decoratorId) ? new ObjectId(decoratorId) : (linkedBooking?.decoratorId || null);
    let finalServiceId = serviceId && ObjectId.isValid(serviceId) ? new ObjectId(serviceId) : (linkedBooking?.serviceId || null);
    let finalAgentId = agentId && ObjectId.isValid(agentId) ? new ObjectId(agentId) : (linkedBooking?.assignedAgentId || null);
    let agentName = "Field Specialist";

    if (finalAgentId) {
      const agentDoc = await agentCollection.findOne({ _id: finalAgentId });
      if (agentDoc) agentName = agentDoc.name;
    }

    const newReview = {
      bookingId: linkedBooking ? linkedBooking._id : (bookingId && ObjectId.isValid(bookingId) ? new ObjectId(bookingId) : null),
      customerId: user ? user._id : null,
      customerName: user?.name || "Valued Client",
      customerEmail: email,
      customerPhotoUrl: user?.photoUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      decoratorId: finalDecoratorId,
      serviceId: finalServiceId,
      agentId: finalAgentId,
      agentName: agentName,
      rating: Number(rating) || 5,
      comment: comment || "Excellent setup and professional coordination!",
      images: Array.isArray(images) ? images : [],
      vendorReply: null,
      isVerifiedBooking: Boolean(linkedBooking),
      status: "published",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await reviewCollection.insertOne(newReview);

    // Recalculate Decorator Rating
    if (finalDecoratorId) {
      const decReviews = await reviewCollection.find({ decoratorId: finalDecoratorId, status: "published" }).toArray();
      const avg = (decReviews.reduce((sum, r) => sum + Number(r.rating), 0) / decReviews.length).toFixed(1);
      await decoratorCollection.updateOne(
        { _id: finalDecoratorId },
        { $set: { "metrics.rating": Number(avg), "metrics.reviewCount": decReviews.length, updatedAt: new Date() } }
      );
    }

    // Recalculate Agent Rating
    if (finalAgentId) {
      const agReviews = await reviewCollection.find({ agentId: finalAgentId, status: "published" }).toArray();
      const agAvg = (agReviews.reduce((sum, r) => sum + Number(r.rating), 0) / agReviews.length).toFixed(1);
      await agentCollection.updateOne(
        { _id: finalAgentId },
        { $set: { "metrics.rating": Number(agAvg), updatedAt: new Date() } }
      );
    }

    res.status(201).send({
      success: true,
      message: "Review published successfully",
      reviewId: result.insertedId,
      data: { _id: result.insertedId, ...newReview },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error creating review",
      error: error.message,
    });
  }
};

// ========== 6. Vendor Reply to Review ==========
const replyToReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid review ID" });
    }

    if (!reply || !reply.trim()) {
      return res.status(400).send({ success: false, message: "Reply text is required" });
    }

    const result = await reviewCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          vendorReply: {
            reply: reply.trim(),
            repliedAt: new Date(),
          },
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).send({ success: false, message: "Review not found" });
    }

    res.send({
      success: true,
      message: "Vendor reply saved successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error replying to review",
      error: error.message,
    });
  }
};

// ========== 7. Delete Review (Admin) ==========
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid review ID" });
    }

    const result = await reviewCollection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return res.status(404).send({ success: false, message: "Review not found" });
    }

    res.send({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error deleting review",
      error: error.message,
    });
  }
};

module.exports = {
  getReviewsByDecorator,
  getReviewsByAgent,
  getReviewsByService,
  getReviews,
  createReview,
  replyToReview,
  deleteReview,
};

// ========== Imports ==========
const { ObjectId } = require("mongodb");
const {
  reviewCollection,
  bookingCollection,
  agentCollection,
  decoratorCollection,
  userCollection,
  serviceCollection,
} = require("../models/collections");
const { resolveDateRange, buildDateQuery } = require("../utils/dateFilter");

// ========== Helper: Recalculate Ratings for Decorator & Agent ==========
const recalculateMetrics = async (decoratorId, agentId) => {
  try {
    if (decoratorId && ObjectId.isValid(decoratorId)) {
      const decId = new ObjectId(decoratorId);
      const decReviews = await reviewCollection.find({ decoratorId: decId, status: "published" }).toArray();
      const count = decReviews.length;
      const avg = count > 0 ? (decReviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) / count).toFixed(1) : 5.0;
      await decoratorCollection.updateOne(
        { _id: decId },
        { $set: { "metrics.rating": Number(avg), "metrics.reviewCount": count, updatedAt: new Date() } }
      );
    }

    if (agentId && ObjectId.isValid(agentId)) {
      const agId = new ObjectId(agentId);
      const agReviews = await reviewCollection.find({ agentId: agId, status: "published" }).toArray();
      const count = agReviews.length;
      const avg = count > 0 ? (agReviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) / count).toFixed(1) : 5.0;
      await agentCollection.updateOne(
        { _id: agId },
        { $set: { "metrics.rating": Number(avg), updatedAt: new Date() } }
      );
    }
  } catch (err) {
    console.warn("Warning: Error updating review metrics:", err.message);
  }
};

// Helper: Calculate Distribution Breakdown
const calculateDistribution = (reviews) => {
  const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((r) => {
    const star = Math.min(5, Math.max(1, Math.round(Number(r.rating) || 5)));
    dist[star] = (dist[star] || 0) + 1;
  });
  return dist;
};

// =========================================================================
// ============================= 1. PUBLIC APIS ============================
// =========================================================================

// 1.1 Fetch Service Reviews
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

    const totalCount = reviews.length;
    const averageRating =
      totalCount > 0
        ? Number((reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) / totalCount).toFixed(1))
        : 5.0;

    res.send({
      success: true,
      count: totalCount,
      aggregateRating: averageRating,
      ratingDistribution: calculateDistribution(reviews),
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

// 1.2 Fetch Decorator Reviews
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

    const totalCount = reviews.length;
    const averageRating =
      totalCount > 0
        ? Number((reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) / totalCount).toFixed(1))
        : 5.0;

    res.send({
      success: true,
      count: totalCount,
      aggregateRating: averageRating,
      ratingDistribution: calculateDistribution(reviews),
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

// 1.3 Fetch Featured Reviews (for Landing Page Testimonials)
const getFeaturedReviews = async (req, res) => {
  try {
    const { limit = 8 } = req.query;
    const reviews = await reviewCollection
      .find({
        status: "published",
        rating: { $gte: 4 },
      })
      .sort({ rating: -1, createdAt: -1 })
      .limit(Number(limit))
      .toArray();

    res.send({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching featured reviews",
      error: error.message,
    });
  }
};

// =========================================================================
// ============================ 2. CUSTOMER APIS ===========================
// =========================================================================

// 2.1 Create Review (for Completed / Verified Booking)
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

    if (!linkedBooking && (!decoratorId || !ObjectId.isValid(decoratorId))) {
      return res.status(400).send({
        success: false,
        message: "Valid booking ID or decorator ID is required to submit a review",
      });
    }

    // Prevent duplicate review for the same booking by the same user
    if (linkedBooking) {
      const existing = await reviewCollection.findOne({
        bookingId: linkedBooking._id,
        $or: [{ customerId: user?._id }, { customerEmail: email }],
      });
      if (existing) {
        return res.status(400).send({
          success: false,
          message: "You have already reviewed this booking. You can edit your existing review instead.",
        });
      }
    }

    const finalDecoratorId = linkedBooking?.decoratorId || new ObjectId(decoratorId);
    const finalServiceId = linkedBooking?.serviceId || (serviceId && ObjectId.isValid(serviceId) ? new ObjectId(serviceId) : null);
    const finalAgentId = linkedBooking?.assignedAgentId || (agentId && ObjectId.isValid(agentId) ? new ObjectId(agentId) : null);

    let agentName = "Field Specialist";
    if (finalAgentId) {
      const agentDoc = await agentCollection.findOne({ _id: finalAgentId });
      if (agentDoc) agentName = agentDoc.name;
    }

    let decoratorName = "StyleDecor Agency";
    if (finalDecoratorId) {
      const decDoc = await decoratorCollection.findOne({ _id: finalDecoratorId });
      if (decDoc) decoratorName = decDoc.businessName || decDoc.name || decoratorName;
    }

    let serviceTitle = "Event Decoration";
    if (finalServiceId) {
      const srvDoc = await serviceCollection.findOne({ _id: finalServiceId });
      if (srvDoc) serviceTitle = srvDoc.title || serviceTitle;
    } else if (linkedBooking?.serviceSnapshot?.title) {
      serviceTitle = linkedBooking.serviceSnapshot.title;
    }

    const newReview = {
      bookingId: linkedBooking ? linkedBooking._id : null,
      customerId: user ? user._id : null,
      customerName: user?.name || "Valued Client",
      customerEmail: email,
      customerPhotoUrl: user?.photoUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      decoratorId: finalDecoratorId,
      decoratorName: decoratorName,
      serviceId: finalServiceId,
      serviceTitle: serviceTitle,
      agentId: finalAgentId,
      agentName: agentName,
      rating: Math.min(5, Math.max(1, Number(rating) || 5)),
      comment: comment?.trim() || "Excellent setup and professional coordination!",
      images: Array.isArray(images) ? images : [],
      vendorReply: null,
      isVerifiedBooking: Boolean(linkedBooking),
      status: "published",
      featured: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await reviewCollection.insertOne(newReview);

    // Update real-time aggregate ratings
    await recalculateMetrics(finalDecoratorId, finalAgentId);

    res.status(201).send({
      success: true,
      message: "Review submitted successfully",
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

// 2.2 Get Customer Reviews (Logged-in Customer)
const getCustomerReviews = async (req, res) => {
  try {
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    const query = user
      ? { $or: [{ customerId: user._id }, { customerEmail: email }] }
      : { customerEmail: email };

    const reviews = await reviewCollection.find(query).sort({ createdAt: -1 }).toArray();

    res.send({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching customer reviews",
      error: error.message,
    });
  }
};

// 2.3 Update Customer Review
const updateCustomerReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment, images } = req.body;
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid review ID" });
    }

    const review = await reviewCollection.findOne({ _id: new ObjectId(id) });
    if (!review) {
      return res.status(404).send({ success: false, message: "Review not found" });
    }

    // Ownership check (Customer owner or Admin)
    const isOwner =
      (user && review.customerId && review.customerId.toString() === user._id.toString()) ||
      review.customerEmail === email ||
      user?.role === "admin";

    if (!isOwner) {
      return res.status(403).send({ success: false, message: "Access denied. You cannot edit this review." });
    }

    const updateDoc = { updatedAt: new Date() };
    if (rating !== undefined) updateDoc.rating = Math.min(5, Math.max(1, Number(rating)));
    if (comment !== undefined) updateDoc.comment = comment.trim();
    if (images !== undefined && Array.isArray(images)) updateDoc.images = images;

    await reviewCollection.updateOne({ _id: new ObjectId(id) }, { $set: updateDoc });

    // Recalculate metrics
    await recalculateMetrics(review.decoratorId, review.agentId);

    const updated = await reviewCollection.findOne({ _id: new ObjectId(id) });

    res.send({
      success: true,
      message: "Review updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating review",
      error: error.message,
    });
  }
};

// 2.4 Delete Customer Review
const deleteCustomerReview = async (req, res) => {
  try {
    const { id } = req.params;
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid review ID" });
    }

    const review = await reviewCollection.findOne({ _id: new ObjectId(id) });
    if (!review) {
      return res.status(404).send({ success: false, message: "Review not found" });
    }

    const isOwner =
      (user && review.customerId && review.customerId.toString() === user._id.toString()) ||
      review.customerEmail === email ||
      user?.role === "admin";

    if (!isOwner) {
      return res.status(403).send({ success: false, message: "Access denied. You cannot delete this review." });
    }

    await reviewCollection.deleteOne({ _id: new ObjectId(id) });

    // Recalculate metrics
    await recalculateMetrics(review.decoratorId, review.agentId);

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

// =========================================================================
// ============================ 3. DECORATOR APIS ==========================
// =========================================================================

// 3.1 Get Agency Reviews (Logged-in Decorator)
const getAgencyReviews = async (req, res) => {
  try {
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    let decorator = null;
    if (user) {
      decorator = await decoratorCollection.findOne({ userId: user._id });
    }
    if (!decorator) {
      decorator = await decoratorCollection.findOne({
        $or: [{ email }, { "contactInfo.email": email }],
      });
    }

    if (!decorator) {
      return res.status(404).send({ success: false, message: "Decorator agency profile not found" });
    }

    const reviews = await reviewCollection
      .find({ decoratorId: decorator._id })
      .sort({ createdAt: -1 })
      .toArray();

    const totalCount = reviews.length;
    const publishedCount = reviews.filter((r) => r.status === "published").length;
    const repliedCount = reviews.filter((r) => r.vendorReply && r.vendorReply.reply).length;
    const pendingRepliesCount = publishedCount - repliedCount;
    const avgRating =
      publishedCount > 0
        ? Number(
            (
              reviews
                .filter((r) => r.status === "published")
                .reduce((sum, r) => sum + Number(r.rating || 0), 0) / publishedCount
            ).toFixed(1)
          )
        : 5.0;

    res.send({
      success: true,
      decoratorId: decorator._id,
      businessName: decorator.businessName,
      stats: {
        totalReviews: totalCount,
        publishedCount,
        repliedCount,
        pendingRepliesCount,
        averageRating: avgRating,
      },
      ratingDistribution: calculateDistribution(reviews.filter((r) => r.status === "published")),
      data: reviews,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching agency reviews",
      error: error.message,
    });
  }
};

// 3.2 Reply to Review (Official Vendor Response)
const replyToReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid review ID" });
    }

    if (!reply || !reply.trim()) {
      return res.status(400).send({ success: false, message: "Reply text is required" });
    }

    const review = await reviewCollection.findOne({ _id: new ObjectId(id) });
    if (!review) {
      return res.status(404).send({ success: false, message: "Review not found" });
    }

    // Verify decorator ownership or admin
    if (user?.role !== "admin") {
      const decorator = await decoratorCollection.findOne({
        $or: [{ userId: user?._id }, { email }, { "contactInfo.email": email }],
      });
      if (!decorator || decorator._id.toString() !== review.decoratorId?.toString()) {
        return res.status(403).send({ success: false, message: "Access denied. You do not own this agency review." });
      }
    }

    await reviewCollection.updateOne(
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

    const updated = await reviewCollection.findOne({ _id: new ObjectId(id) });

    res.send({
      success: true,
      message: "Official vendor response saved successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error replying to review",
      error: error.message,
    });
  }
};

// 3.3 Delete Review Reply
const deleteReviewReply = async (req, res) => {
  try {
    const { id } = req.params;
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid review ID" });
    }

    const review = await reviewCollection.findOne({ _id: new ObjectId(id) });
    if (!review) {
      return res.status(404).send({ success: false, message: "Review not found" });
    }

    if (user?.role !== "admin") {
      const decorator = await decoratorCollection.findOne({
        $or: [{ userId: user?._id }, { email }, { "contactInfo.email": email }],
      });
      if (!decorator || decorator._id.toString() !== review.decoratorId?.toString()) {
        return res.status(403).send({ success: false, message: "Access denied. You do not own this agency review." });
      }
    }

    await reviewCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          vendorReply: null,
          updatedAt: new Date(),
        },
      }
    );

    res.send({
      success: true,
      message: "Vendor reply removed successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error deleting review reply",
      error: error.message,
    });
  }
};

// =========================================================================
// ============================== 4. AGENT APIS ============================
// =========================================================================

// 4.1 Get Assigned Event Reviews (Logged-in Agent)
const getMyAgentReviews = async (req, res) => {
  try {
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    let agent = await agentCollection.findOne({ userId: user?._id });
    if (!agent) agent = await agentCollection.findOne({ email });

    if (!agent) {
      return res.status(404).send({ success: false, message: "Field specialist profile not found" });
    }

    const reviews = await reviewCollection
      .find({
        agentId: agent._id,
        status: "published",
      })
      .sort({ createdAt: -1 })
      .toArray();

    const totalCount = reviews.length;
    const avgRating =
      totalCount > 0
        ? Number((reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) / totalCount).toFixed(1))
        : agent.metrics?.rating || 5.0;

    res.send({
      success: true,
      agentId: agent._id,
      agentName: agent.name,
      designation: agent.designation,
      count: totalCount,
      averageRating: avgRating,
      ratingDistribution: calculateDistribution(reviews),
      data: reviews,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching agent reviews",
      error: error.message,
    });
  }
};

// 4.2 Get Reviews by Agent ID (Public / Admin lookup)
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

    const totalCount = reviews.length;
    const avgRating =
      totalCount > 0
        ? Number((reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) / totalCount).toFixed(1))
        : 5.0;

    res.send({
      success: true,
      count: totalCount,
      averageRating: avgRating,
      ratingDistribution: calculateDistribution(reviews),
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

// =========================================================================
// ============================== 5. ADMIN APIS ============================
// =========================================================================

// 5.1 Get All Reviews (Admin Supervision & Moderation Filters)
const getAllReviewsAdmin = async (req, res) => {
  try {
    const {
      status = "all",
      search = "",
      decoratorId,
      agentId,
      rating,
      featured,
      sort = "newest",
      page = 1,
      limit = 20,
      timeFilter = "max",
      startDate = "",
      endDate = "",
    } = req.query;

    const query = {};

    const dateRange = resolveDateRange(timeFilter, startDate, endDate);
    const dateQuery = buildDateQuery(["createdAt", "updatedAt"], dateRange);
    if (dateQuery) {
      Object.assign(query, dateQuery);
    }

    if (status === "featured") {
      query.featured = true;
    } else if (status && status !== "all") {
      query.status = status;
    }

    if (featured === "true" || featured === true) {
      query.featured = true;
    } else if (featured === "false" || featured === false) {
      query.featured = false;
    }
    if (decoratorId && ObjectId.isValid(decoratorId)) {
      query.decoratorId = new ObjectId(decoratorId);
    }
    if (agentId && ObjectId.isValid(agentId)) {
      query.agentId = new ObjectId(agentId);
    }
    if (rating && !isNaN(rating)) {
      query.rating = Number(rating);
    }
    if (search && search.trim()) {
      const q = search.trim();
      query.$or = [
        { customerName: { $regex: q, $options: "i" } },
        { customerEmail: { $regex: q, $options: "i" } },
        { comment: { $regex: q, $options: "i" } },
        { agentName: { $regex: q, $options: "i" } },
      ];
    }

    // Dynamic sorting
    let sortObj = { createdAt: -1 };
    if (sort === "highest_rating") {
      sortObj = { rating: -1, createdAt: -1 };
    } else if (sort === "lowest_rating") {
      sortObj = { rating: 1, createdAt: -1 };
    } else if (sort === "oldest") {
      sortObj = { createdAt: 1 };
    }

    const pageNum = Math.max(1, parseInt(page, 10));
    const limitNum = Math.max(1, parseInt(limit, 10));
    const skip = (pageNum - 1) * limitNum;

    const totalCount = await reviewCollection.countDocuments(query);
    const reviews = await reviewCollection
      .find(query)
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .toArray();

    // Summary counts for tabs and decorators
    const statsQuery = dateQuery || {};
    const allReviews = await reviewCollection.find(statsQuery).toArray();
    const decoratorStats = {};
    let publishedCount = 0;
    let hiddenCount = 0;
    let featuredCount = 0;
    let totalRatingSum = 0;

    allReviews.forEach((r) => {
      if (r.status === "hidden") hiddenCount++;
      else publishedCount++;

      if (r.featured) featuredCount++;
      if (r.rating) totalRatingSum += Number(r.rating) || 0;

      const decId = r.decoratorId?.toString();
      if (!decId) return;
      if (!decoratorStats[decId]) {
        decoratorStats[decId] = {
          total: 0,
          published: 0,
          hidden: 0,
        };
      }
      decoratorStats[decId].total += 1;
      if (r.status === "hidden") {
        decoratorStats[decId].hidden += 1;
      } else {
        decoratorStats[decId].published += 1;
      }
    });

    const totalAll = allReviews.length;
    const averageRating = totalAll > 0 ? Number((totalRatingSum / totalAll).toFixed(1)) : 5.0;

    res.send({
      success: true,
      totalCount,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.max(1, Math.ceil(totalCount / limitNum)),
      stats: {
        totalReviews: totalAll,
        publishedCount,
        hiddenCount,
        featuredCount,
        all: totalAll,
        total: totalAll,
        published: publishedCount,
        hidden: hiddenCount,
        featured: featuredCount,
        decoratorStats,
        averageRating,
      },
      data: reviews,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching reviews for admin",
      error: error.message,
    });
  }
};

// 5.2 Moderate Review Status (published | hidden)
const moderateReviewStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid review ID" });
    }

    const validStatuses = ["published", "hidden"];
    if (!validStatuses.includes(status)) {
      return res.status(400).send({
        success: false,
        message: `Invalid status. Allowed: ${validStatuses.join(", ")}`,
      });
    }

    const review = await reviewCollection.findOne({ _id: new ObjectId(id) });
    if (!review) {
      return res.status(404).send({ success: false, message: "Review not found" });
    }

    await reviewCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status, updatedAt: new Date() } }
    );

    // Recalculate metrics
    await recalculateMetrics(review.decoratorId, review.agentId);

    res.send({
      success: true,
      message: `Review status updated to "${status}"`,
      status,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error moderating review status",
      error: error.message,
    });
  }
};

// 5.3 Toggle Featured Review (Admin Feature Showcase)
const toggleFeaturedReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { featured } = req.body || {};

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid review ID" });
    }

    const review = await reviewCollection.findOne({ _id: new ObjectId(id) });
    if (!review) {
      return res.status(404).send({ success: false, message: "Review not found" });
    }

    const newFeatured = typeof featured === "boolean" ? featured : !Boolean(review.featured);

    await reviewCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { featured: newFeatured, updatedAt: new Date() } }
    );

    res.send({
      success: true,
      message: `Review ${newFeatured ? "marked as featured" : "unmarked from featured"} successfully`,
      featured: newFeatured,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating featured status",
      error: error.message,
    });
  }
};

// 5.3 Delete Review Permanently (Admin)
const deleteReviewPermanently = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid review ID" });
    }

    const review = await reviewCollection.findOne({ _id: new ObjectId(id) });
    if (!review) {
      return res.status(404).send({ success: false, message: "Review not found" });
    }

    await reviewCollection.deleteOne({ _id: new ObjectId(id) });

    // Recalculate metrics
    await recalculateMetrics(review.decoratorId, review.agentId);

    res.send({
      success: true,
      message: "Review permanently deleted",
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
  // Public
  getReviewsByService,
  getReviewsByDecorator,
  getFeaturedReviews,
  // Customer
  createReview,
  getCustomerReviews,
  updateCustomerReview,
  deleteCustomerReview,
  // Decorator
  getAgencyReviews,
  replyToReview,
  deleteReviewReply,
  // Agent
  getMyAgentReviews,
  getReviewsByAgent,
  // Admin
  getAllReviewsAdmin,
  moderateReviewStatus,
  toggleFeaturedReview,
  deleteReviewPermanently,
};

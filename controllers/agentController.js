// ========== Imports ==========
const { ObjectId } = require("mongodb");
const {
  agentCollection,
  userCollection,
  decoratorCollection,
  bookingCollection,
  agentReviewCollection,
} = require("../models/collections");

// ========== Helper: Batch Entity Enrichment ==========
const enrichAgents = async (agents) => {
  if (!Array.isArray(agents) || agents.length === 0) return [];

  const decoratorIds = [...new Set(agents.map((a) => a.decoratorId?.toString()).filter(Boolean))];
  const userIds = [...new Set(agents.map((a) => a.userId?.toString()).filter(Boolean))];
  const agentIds = agents.map((a) => a._id);

  const [decorators, users, activeBookingsCounts] = await Promise.all([
    decoratorIds.length > 0
      ? decoratorCollection.find({ _id: { $in: decoratorIds.map((id) => new ObjectId(id)) } }).toArray()
      : [],
    userIds.length > 0
      ? userCollection.find({ _id: { $in: userIds.map((id) => new ObjectId(id)) } }).toArray()
      : [],
    bookingCollection
      .aggregate([
        {
          $match: {
            assignedAgentId: { $in: agentIds },
            status: { $in: ["accepted", "advance_paid", "preparing", "on_the_way", "in_progress"] },
          },
        },
        { $group: { _id: "$assignedAgentId", count: { $sum: 1 } } },
      ])
      .toArray(),
  ]);

  const decoratorMap = new Map(decorators.map((d) => [d._id.toString(), d]));
  const userMap = new Map(users.map((u) => [u._id.toString(), u]));
  const activeCountMap = new Map(activeBookingsCounts.map((b) => [b._id.toString(), b.count]));

  return agents.map((a) => {
    const dec = a.decoratorId ? decoratorMap.get(a.decoratorId.toString()) : null;
    const usr = a.userId ? userMap.get(a.userId.toString()) : null;
    const activeAssigned = activeCountMap.get(a._id.toString()) || 0;

    return {
      ...a,
      decorator: dec
        ? {
            _id: dec._id,
            businessName: dec.businessName,
            logo: dec.logo,
            city: dec.contactInfo?.city || "Dhaka",
            phone: dec.contactInfo?.phone || "",
          }
        : null,
      user: usr
        ? {
            _id: usr._id,
            name: usr.name,
            email: usr.email,
            phone: usr.phone,
            photoUrl: usr.photoUrl,
          }
        : null,
      metrics: {
        ...(a.metrics || {}),
        activeAssignedBookings: activeAssigned,
      },
    };
  });
};

// ========== 1. Get Current Authenticated Agent Profile ==========
const getMyAgentProfile = async (req, res) => {
  try {
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    if (!user) {
      return res.status(404).send({ success: false, message: "User account not found" });
    }

    let agent = await agentCollection.findOne({ userId: user._id });
    if (!agent) {
      agent = await agentCollection.findOne({ email: email });
    }

    if (!agent) {
      return res.status(404).send({ success: false, message: "Field Agent profile not found for this user account" });
    }

    const [enriched] = await enrichAgents([agent]);

    res.send({
      success: true,
      data: enriched,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching agent profile",
      error: error.message,
    });
  }
};

// ========== 2. Update Current Authenticated Agent Profile ==========
const updateMyAgentProfile = async (req, res) => {
  try {
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    let agent = await agentCollection.findOne({ userId: user?._id });
    if (!agent) agent = await agentCollection.findOne({ email });

    if (!agent) {
      return res.status(404).send({ success: false, message: "Field Agent profile not found" });
    }

    const {
      name,
      phone,
      photoUrl,
      designation,
      specialization,
      experienceYears,
      assignedArea,
      status, // available | on_assignment | off_duty | on_leave
      bio,
      emergencyContact,
    } = req.body;

    const updateDoc = {
      updatedAt: new Date(),
    };

    if (name !== undefined) updateDoc.name = name.trim();
    if (phone !== undefined) updateDoc.phone = phone.trim();
    if (photoUrl !== undefined) updateDoc.photoUrl = photoUrl.trim();
    if (designation !== undefined) updateDoc.designation = designation.trim();
    if (specialization !== undefined) updateDoc.specialization = specialization.trim();
    if (experienceYears !== undefined) updateDoc.experienceYears = Number(experienceYears);
    if (assignedArea !== undefined) updateDoc.assignedArea = assignedArea;
    if (status !== undefined) updateDoc.status = status;
    if (bio !== undefined) updateDoc.bio = bio;
    if (emergencyContact !== undefined) updateDoc.emergencyContact = emergencyContact;

    await agentCollection.updateOne({ _id: agent._id }, { $set: updateDoc });

    // Sync user photoUrl and phone if provided
    if (user && (photoUrl || phone || name)) {
      const userUpdate = {};
      if (name) userUpdate.name = name.trim();
      if (phone) userUpdate.phone = phone.trim();
      if (photoUrl) userUpdate.photoUrl = photoUrl.trim();
      await userCollection.updateOne({ _id: user._id }, { $set: userUpdate });
    }

    const updated = await agentCollection.findOne({ _id: agent._id });
    const [enriched] = await enrichAgents([updated]);

    res.send({
      success: true,
      message: "Agent profile updated successfully",
      data: enriched,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating agent profile",
      error: error.message,
    });
  }
};

// ========== 3. Get Agent's Assigned Schedule & Events ==========
const getMySchedule = async (req, res) => {
  try {
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    let agent = await agentCollection.findOne({ userId: user?._id });
    if (!agent) agent = await agentCollection.findOne({ email });

    if (!agent) {
      return res.status(404).send({ success: false, message: "Field Agent profile not found" });
    }

    const { timeline = "all" } = req.query; // all | upcoming | today | past | active
    const query = { assignedAgentId: agent._id };

    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    if (timeline === "upcoming") {
      query["eventDetails.eventDate"] = { $gte: todayStart };
    } else if (timeline === "today") {
      query["eventDetails.eventDate"] = { $gte: todayStart, $lte: todayEnd };
    } else if (timeline === "past") {
      query["eventDetails.eventDate"] = { $lt: todayStart };
    } else if (timeline === "active") {
      query.status = { $in: ["preparing", "on_the_way", "in_progress", "advance_paid", "accepted"] };
    }

    const rawBookings = await bookingCollection
      .find(query)
      .sort({ "eventDetails.eventDate": 1, _id: 1 })
      .toArray();

    // Enrich customer and decorator details
    const customerIds = [...new Set(rawBookings.map((b) => b.customerId?.toString()).filter(Boolean))];
    const decoratorIds = [...new Set(rawBookings.map((b) => b.decoratorId?.toString()).filter(Boolean))];

    const [customers, decorators] = await Promise.all([
      customerIds.length > 0
        ? userCollection.find({ _id: { $in: customerIds.map((id) => new ObjectId(id)) } }).toArray()
        : [],
      decoratorIds.length > 0
        ? decoratorCollection.find({ _id: { $in: decoratorIds.map((id) => new ObjectId(id)) } }).toArray()
        : [],
    ]);

    const custMap = new Map(customers.map((c) => [c._id.toString(), c]));
    const decMap = new Map(decorators.map((d) => [d._id.toString(), d]));

    const data = rawBookings.map((b) => ({
      ...b,
      customer: b.customerId ? custMap.get(b.customerId.toString()) : null,
      decorator: b.decoratorId ? decMap.get(b.decoratorId.toString()) : null,
    }));

    res.send({
      success: true,
      count: data.length,
      agentName: agent.name,
      agentId: agent._id,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching agent schedule",
      error: error.message,
    });
  }
};

// ========== 4. Get Agent's Active Events for On-Site Execution ==========
const getActiveExecutionEvents = async (req, res) => {
  try {
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    let agent = await agentCollection.findOne({ userId: user?._id });
    if (!agent) agent = await agentCollection.findOne({ email });

    if (!agent) {
      return res.status(404).send({ success: false, message: "Field Agent profile not found" });
    }

    const activeEvents = await bookingCollection
      .find({
        assignedAgentId: agent._id,
        status: { $in: ["accepted", "advance_paid", "preparing", "on_the_way", "in_progress"] },
      })
      .sort({ "eventDetails.eventDate": 1 })
      .toArray();

    // Enrich customer profile
    const customerIds = [...new Set(activeEvents.map((b) => b.customerId?.toString()).filter(Boolean))];
    const customers = customerIds.length > 0
      ? await userCollection.find({ _id: { $in: customerIds.map((id) => new ObjectId(id)) } }).toArray()
      : [];
    const custMap = new Map(customers.map((c) => [c._id.toString(), c]));

    const data = activeEvents.map((b) => ({
      ...b,
      customer: b.customerId ? custMap.get(b.customerId.toString()) : null,
    }));

    res.send({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching active execution events",
      error: error.message,
    });
  }
};

// ========== 5. Update Active Event Execution Stage by Agent ==========
const updateExecutionStage = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { status, milestoneNote, checklistCompleted } = req.body;
    const email = req.decoded_email;

    if (!bookingId || !ObjectId.isValid(bookingId)) {
      return res.status(400).send({ success: false, message: "Valid bookingId is required" });
    }

    const user = await userCollection.findOne({ email });
    let agent = await agentCollection.findOne({ userId: user?._id });
    if (!agent) agent = await agentCollection.findOne({ email });

    if (!agent) {
      return res.status(403).send({ success: false, message: "Unauthorized: Agent profile required" });
    }

    const booking = await bookingCollection.findOne({ _id: new ObjectId(bookingId) });
    if (!booking) {
      return res.status(404).send({ success: false, message: "Booking project not found" });
    }

    // Verify agent is assigned to this booking
    if (booking.assignedAgentId && booking.assignedAgentId.toString() !== agent._id.toString()) {
      return res.status(403).send({ success: false, message: "You are not assigned to execute this event" });
    }

    const allowedStages = ["preparing", "on_the_way", "in_progress", "completed"];
    if (!allowedStages.includes(status)) {
      return res.status(400).send({
        success: false,
        message: `Invalid stage. Agent can update to: ${allowedStages.join(", ")}`,
      });
    }

    const updateDoc = {
      status,
      updatedAt: new Date(),
    };

    if (milestoneNote) {
      updateDoc["executionLog.lastAgentNote"] = milestoneNote;
      updateDoc["executionLog.lastUpdatedByAgentAt"] = new Date();
    }
    if (checklistCompleted !== undefined) {
      updateDoc["executionLog.checklistCompleted"] = Boolean(checklistCompleted);
    }
    if (status === "completed") {
      updateDoc.completedAt = new Date().toISOString().split("T")[0];
      // Increment completed events in agent metrics
      await agentCollection.updateOne(
        { _id: agent._id },
        { $inc: { "metrics.completedEvents": 1 } }
      );
    }

    await bookingCollection.updateOne({ _id: new ObjectId(bookingId) }, { $set: updateDoc });

    res.send({
      success: true,
      message: `Event execution milestone advanced to "${status}"`,
      status,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating execution stage",
      error: error.message,
    });
  }
};

// ========== 6. Get Agent Performance & Appraisals Dossier ==========
const getMyPerformance = async (req, res) => {
  try {
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    let agent = await agentCollection.findOne({ userId: user?._id });
    if (!agent) agent = await agentCollection.findOne({ email });

    if (!agent) {
      return res.status(404).send({ success: false, message: "Field Agent profile not found" });
    }

    // Fetch all appraisal reviews from agentReviewCollection
    const reviews = await agentReviewCollection
      .find({ agentId: agent._id })
      .sort({ createdAt: -1 })
      .toArray();

    const totalReviews = reviews.length;
    const averageRating = totalReviews > 0
      ? (reviews.reduce((sum, r) => sum + (Number(r.rating) || 0), 0) / totalReviews).toFixed(1)
      : agent.metrics?.rating || 5.0;

    const outstandingOutcomes = reviews.filter((r) => r.eventOutcome === "outstanding").length;
    const recommendationsCount = reviews.filter((r) => r.recommendedForBigEvents).length;

    // Badges calculation
    const badges = [
      { id: "verified", name: "Verified Field Specialist", icon: "ShieldCheck", earned: true },
      { id: "top_performer", name: "Top Rated Execution", icon: "Award", earned: Number(averageRating) >= 4.5 },
      { id: "experience_master", name: "Master Craftsperson", icon: "Sparkles", earned: (agent.metrics?.completedEvents || 0) >= 20 },
      { id: "big_events", name: "Grand Gala Recommended", icon: "Star", earned: recommendationsCount >= 3 },
    ];

    res.send({
      success: true,
      agent: {
        _id: agent._id,
        name: agent.name,
        photoUrl: agent.photoUrl,
        designation: agent.designation,
        specialization: agent.specialization,
        experienceYears: agent.experienceYears,
      },
      metrics: {
        rating: Number(averageRating),
        totalReviews,
        completedEvents: agent.metrics?.completedEvents || 0,
        outstandingOutcomes,
        recommendationRate: totalReviews > 0 ? Math.round((recommendationsCount / totalReviews) * 100) : 100,
      },
      badges: badges.filter((b) => b.earned),
      reviews,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching agent performance dossier",
      error: error.message,
    });
  }
};

// ========== 7. Get Agents by Decorator Agency ID (Decorator & Public) ==========
const getAgentsByDecorator = async (req, res) => {
  try {
    const { decoratorId } = req.params;
    if (!ObjectId.isValid(decoratorId)) {
      return res.status(400).send({ success: false, message: "Invalid decorator ID" });
    }

    const rawAgents = await agentCollection
      .find({
        decoratorId: new ObjectId(decoratorId),
      })
      .sort({ experienceYears: -1, _id: 1 })
      .toArray();

    const data = await enrichAgents(rawAgents);

    res.send({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching agents for decorator",
      error: error.message,
    });
  }
};

// ========== 8. Get All Agents (Admin & Filtered Query) ==========
const getAgents = async (req, res) => {
  try {
    const {
      decoratorId,
      status,
      city,
      specialization,
      search,
      sort = "rating",
      page = 1,
      limit = 12,
    } = req.query;

    const query = {};

    if (status && status !== "all") query.status = status;
    if (decoratorId && ObjectId.isValid(decoratorId)) {
      query.decoratorId = new ObjectId(decoratorId);
    }
    if (city && city !== "all") {
      query["assignedArea.city"] = city;
    }
    if (specialization && specialization !== "all") {
      query.specialization = { $regex: specialization, $options: "i" };
    }

    if (search && search.trim()) {
      const q = search.trim();
      query.$or = [
        { name: { $regex: q, $options: "i" } },
        { email: { $regex: q, $options: "i" } },
        { phone: { $regex: q, $options: "i" } },
        { designation: { $regex: q, $options: "i" } },
        { specialization: { $regex: q, $options: "i" } },
      ];
    }

    let sortObj = { "metrics.rating": -1, _id: 1 };
    if (sort === "experience") sortObj = { experienceYears: -1 };
    if (sort === "name_asc") sortObj = { name: 1 };
    if (sort === "completedEvents") sortObj = { "metrics.completedEvents": -1 };

    const pageNum = Math.max(1, parseInt(page, 10));
    const limitNum = Math.max(1, parseInt(limit, 10));
    const skip = (pageNum - 1) * limitNum;

    const totalCount = await agentCollection.countDocuments(query);
    const rawAgents = await agentCollection
      .find(query)
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .toArray();

    const data = await enrichAgents(rawAgents);

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
      message: "Error fetching agents list",
      error: error.message,
    });
  }
};

// ========== 9. Get Agent Statistics (Admin & Overview) ==========
const getAgentStats = async (req, res) => {
  try {
    const allAgents = await agentCollection.find({}).toArray();

    const totalAgents = allAgents.length;
    const availableCount = allAgents.filter((a) => a.status === "available").length;
    const onAssignmentCount = allAgents.filter((a) => a.status === "on_assignment" || a.status === "assigned").length;
    const offDutyCount = allAgents.filter((a) => a.status === "off_duty" || a.status === "on_leave").length;

    const totalCompletedEvents = allAgents.reduce((sum, a) => sum + (a.metrics?.completedEvents || 0), 0);
    const avgRating = totalAgents > 0
      ? (allAgents.reduce((sum, a) => sum + (Number(a.metrics?.rating) || 4.5), 0) / totalAgents).toFixed(2)
      : 4.8;

    res.send({
      success: true,
      stats: {
        totalAgents,
        availableCount,
        onAssignmentCount,
        offDutyCount,
        totalCompletedEvents,
        avgRating: Number(avgRating),
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching agent statistics",
      error: error.message,
    });
  }
};

// ========== 10. Get Single Agent Dossier by ID ==========
const getAgentById = async (req, res) => {
  try {
    const { id } = req.params;

    let query = {};
    if (ObjectId.isValid(id)) {
      query = { $or: [{ _id: new ObjectId(id) }, { userId: new ObjectId(id) }] };
    } else {
      query = { email: id };
    }

    const agent = await agentCollection.findOne(query);
    if (!agent) {
      return res.status(404).send({ success: false, message: "Agent not found" });
    }

    const [enriched] = await enrichAgents([agent]);

    // Fetch recent reviews
    const reviews = await agentReviewCollection
      .find({ agentId: agent._id })
      .sort({ createdAt: -1 })
      .limit(10)
      .toArray();

    res.send({
      success: true,
      data: {
        ...enriched,
        reviews,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching agent by ID",
      error: error.message,
    });
  }
};

// ========== 11. Create / Add New Agent (Decorator Agency / Admin) ==========
const createAgent = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      photoUrl,
      decoratorId,
      designation = "Field Specialist",
      specialization = "General Stage & Floral Setup",
      experienceYears = 2,
      assignedArea = { city: "Dhaka", zones: ["Dhanmondi"] },
      status = "available",
    } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).send({ success: false, message: "Name, email, and phone are required" });
    }

    // Check for existing agent
    const existing = await agentCollection.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).send({ success: false, message: "An agent with this email already exists" });
    }

    let linkedUser = await userCollection.findOne({ email: email.toLowerCase() });
    let userId = linkedUser ? linkedUser._id : null;

    let decId = null;
    if (decoratorId && ObjectId.isValid(decoratorId)) {
      decId = new ObjectId(decoratorId);
    } else {
      // If creator is a decorator, link their decorator agency
      const creatorEmail = req.decoded_email;
      const creatorUser = await userCollection.findOne({ email: creatorEmail });
      const creatorDec = await decoratorCollection.findOne({ userId: creatorUser?._id });
      if (creatorDec) decId = creatorDec._id;
    }

    const newAgent = {
      userId,
      decoratorId: decId,
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      photoUrl: photoUrl || `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80`,
      designation: designation.trim(),
      specialization: specialization.trim(),
      experienceYears: Number(experienceYears) || 1,
      assignedArea: typeof assignedArea === "object" ? assignedArea : { city: "Dhaka", zones: ["Dhaka"] },
      metrics: {
        rating: 5.0,
        completedEvents: 0,
        activeAssignedBookings: 0,
      },
      status,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await agentCollection.insertOne(newAgent);

    res.status(201).send({
      success: true,
      message: "Agent profile created successfully",
      agentId: result.insertedId,
      data: { _id: result.insertedId, ...newAgent },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error creating agent",
      error: error.message,
    });
  }
};

// ========== 12. Update Agent Profile (Decorator / Admin) ==========
const updateAgent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid agent ID" });
    }

    const {
      name,
      phone,
      photoUrl,
      designation,
      specialization,
      experienceYears,
      assignedArea,
      status,
      decoratorId,
    } = req.body;

    const updateDoc = { updatedAt: new Date() };

    if (name !== undefined) updateDoc.name = name.trim();
    if (phone !== undefined) updateDoc.phone = phone.trim();
    if (photoUrl !== undefined) updateDoc.photoUrl = photoUrl.trim();
    if (designation !== undefined) updateDoc.designation = designation.trim();
    if (specialization !== undefined) updateDoc.specialization = specialization.trim();
    if (experienceYears !== undefined) updateDoc.experienceYears = Number(experienceYears);
    if (assignedArea !== undefined) updateDoc.assignedArea = assignedArea;
    if (status !== undefined) updateDoc.status = status;
    if (decoratorId && ObjectId.isValid(decoratorId)) updateDoc.decoratorId = new ObjectId(decoratorId);

    const result = await agentCollection.updateOne({ _id: new ObjectId(id) }, { $set: updateDoc });

    if (result.matchedCount === 0) {
      return res.status(404).send({ success: false, message: "Agent not found" });
    }

    const updated = await agentCollection.findOne({ _id: new ObjectId(id) });
    const [enriched] = await enrichAgents([updated]);

    res.send({
      success: true,
      message: "Agent updated successfully",
      data: enriched,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating agent",
      error: error.message,
    });
  }
};

// ========== 13. Update Agent Status / Verification (Admin / Decorator) ==========
const updateAgentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid agent ID" });
    }

    const allowed = ["available", "on_assignment", "off_duty", "on_leave", "suspended", "active"];
    if (!allowed.includes(status)) {
      return res.status(400).send({
        success: false,
        message: `Invalid status. Allowed: ${allowed.join(", ")}`,
      });
    }

    await agentCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status, updatedAt: new Date() } }
    );

    res.send({
      success: true,
      message: `Agent status updated to "${status}"`,
      status,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating agent status",
      error: error.message,
    });
  }
};

// ========== 14. Delete Agent (Admin / Decorator) ==========
const deleteAgent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid agent ID" });
    }

    // Unassign this agent from any active bookings
    await bookingCollection.updateMany(
      { assignedAgentId: new ObjectId(id) },
      { $set: { assignedAgentId: null, updatedAt: new Date() } }
    );

    const result = await agentCollection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return res.status(404).send({ success: false, message: "Agent not found" });
    }

    res.send({
      success: true,
      message: "Agent deleted successfully and removed from assignments",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error deleting agent",
      error: error.message,
    });
  }
};

// ========== 15. Submit Appraisal / Review for Agent (Decorator / Client) ==========
const createAgentReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment, eventOutcome = "outstanding", recommendedForBigEvents = true, bookingId } = req.body;
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid agent ID" });
    }

    const agent = await agentCollection.findOne({ _id: new ObjectId(id) });
    if (!agent) {
      return res.status(404).send({ success: false, message: "Agent not found" });
    }

    const newReview = {
      bookingId: bookingId && ObjectId.isValid(bookingId) ? new ObjectId(bookingId) : null,
      decoratorId: agent.decoratorId || null,
      reviewedBy: {
        userId: user ? user._id : null,
        name: user?.name || "Verified Decorator Lead",
        email: email,
      },
      agentId: agent._id,
      agentUserId: agent.userId || null,
      agentName: agent.name,
      agentEmail: agent.email,
      agentPhotoUrl: agent.photoUrl,
      agentDesignation: agent.designation,
      rating: Number(rating) || 5,
      comment: comment || "Great execution, professional on-site coordination.",
      eventOutcome,
      recommendedForBigEvents: Boolean(recommendedForBigEvents),
      status: "published",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await agentReviewCollection.insertOne(newReview);

    // Recalculate agent rating
    const allReviews = await agentReviewCollection.find({ agentId: agent._id }).toArray();
    const newAvg = (allReviews.reduce((sum, r) => sum + Number(r.rating), 0) / allReviews.length).toFixed(1);

    await agentCollection.updateOne(
      { _id: agent._id },
      { $set: { "metrics.rating": Number(newAvg), updatedAt: new Date() } }
    );

    res.status(201).send({
      success: true,
      message: "Appraisal review submitted successfully",
      reviewId: result.insertedId,
      newRating: Number(newAvg),
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error submitting agent review",
      error: error.message,
    });
  }
};

module.exports = {
  getMyAgentProfile,
  updateMyAgentProfile,
  getMySchedule,
  getActiveExecutionEvents,
  updateExecutionStage,
  getMyPerformance,
  getAgentsByDecorator,
  getAgents,
  getAgentStats,
  getAgentById,
  createAgent,
  updateAgent,
  updateAgentStatus,
  deleteAgent,
  createAgentReview,
};

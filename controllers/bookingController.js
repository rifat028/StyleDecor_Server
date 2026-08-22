// ========== Imports ==========
const { ObjectId } = require("mongodb");
const {
  bookingCollection,
  decoratorCollection,
  userCollection,
  serviceCollection,
  agentCollection,
} = require("../models/collections");

// Helper to generate unique Booking Codes (e.g., BK-202608-84920)
const generateBookingCode = () => {
  const dateStr = new Date().toISOString().slice(0, 7).replace("-", "");
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `BK-${dateStr}-${randomNum}`;
};

// Helper to enrich bookings with Customer, Decorator, Agent, and Service references
const enrichBookings = async (bookings) => {
  if (!bookings || bookings.length === 0) return [];

  // Extract Unique IDs
  const customerIds = [...new Set(bookings.map((b) => b.customerId).filter(Boolean))];
  const decoratorIds = [...new Set(bookings.map((b) => b.decoratorId || (b.assignTo && ObjectId.isValid(b.assignTo) ? new ObjectId(b.assignTo) : null)).filter(Boolean))];
  const agentIds = [...new Set(bookings.map((b) => b.assignedAgentId).filter(Boolean))];
  const serviceIds = [...new Set(bookings.map((b) => b.serviceId && ObjectId.isValid(b.serviceId) ? new ObjectId(b.serviceId) : null).filter(Boolean))];

  // Batch Lookups
  const [customers, decorators, agents, services] = await Promise.all([
    userCollection.find({ _id: { $in: customerIds } }).project({ name: 1, email: 1, phone: 1, photoUrl: 1, photoURL: 1, address: 1 }).toArray(),
    decoratorCollection.find({ _id: { $in: decoratorIds } }).project({ businessName: 1, logo: 1, "contactInfo.phone": 1, "contactInfo.district": 1, "contactInfo.division": 1, "contactInfo.city": 1, verification: 1 }).toArray(),
    agentCollection.find({ _id: { $in: agentIds } }).project({ name: 1, photoUrl: 1, phone: 1, designation: 1, assignedArea: 1 }).toArray(),
    serviceCollection.find({ _id: { $in: serviceIds } }).project({ title: 1, serviceName: 1, coverImage: 1, primaryImage: 1, pricing: 1, category: 1, subCategory: 1 }).toArray(),
  ]);

  const customerMap = new Map(customers.map((c) => [c._id.toString(), c]));
  const decoratorMap = new Map(decorators.map((d) => [d._id.toString(), d]));
  const agentMap = new Map(agents.map((a) => [a._id.toString(), a]));
  const serviceMap = new Map(services.map((s) => [s._id.toString(), s]));

  return bookings.map((b) => {
    const cust = b.customerId ? customerMap.get(b.customerId.toString()) : null;
    const decId = b.decoratorId || (b.assignTo && ObjectId.isValid(b.assignTo) ? new ObjectId(b.assignTo) : null);
    const dec = decId ? decoratorMap.get(decId.toString()) : null;
    const agent = b.assignedAgentId ? agentMap.get(b.assignedAgentId.toString()) : null;
    const srv = b.serviceId && ObjectId.isValid(b.serviceId) ? serviceMap.get(b.serviceId.toString()) : null;

    return {
      ...b,
      customer: cust || {
        name: b.clientName || "Valued Client",
        email: b.clientEmail || "",
        phone: b.contact || "",
      },
      decorator: dec || null,
      assignedAgent: agent || null,
      service: srv || null,
    };
  });
};

// ========== Get All Bookings (Admin & Filtered Query) ==========
const getBookings = async (req, res) => {
  try {
    const {
      status,
      paymentStatus,
      decoratorId,
      customerId,
      assignedAgentId,
      search,
      assigned,
      paid,
      sort = "newest",
      sortDate,
      page = 1,
      limit = 10,
    } = req.query;

    const query = {};

    // 1. Status Filter
    if (status && status !== "all") {
      query.status = status;
    }

    // 2. Payment Status Filter
    if (paymentStatus && paymentStatus !== "all") {
      query.paymentStatus = paymentStatus;
    }

    // Legacy paid filter fallback
    if (paid === "true") query.$or = [{ paymentStatus: "paid" }, { paid: true }];
    if (paid === "false") query.$or = [{ paymentStatus: { $ne: "paid" } }, { paid: false }];

    // 3. Decorator Filter
    if (decoratorId && ObjectId.isValid(decoratorId)) {
      query.$or = [
        { decoratorId: new ObjectId(decoratorId) },
        { assignTo: decoratorId },
      ];
    }

    // Legacy assigned filter fallback
    if (assigned === "true") query.$or = [{ decoratorId: { $exists: true, $ne: null } }, { assigned: true }];
    if (assigned === "false") query.$or = [{ decoratorId: null }, { assigned: false }, { assignTo: { $exists: false } }];

    // 4. Customer Filter
    if (customerId && ObjectId.isValid(customerId)) {
      query.customerId = new ObjectId(customerId);
    }

    // 5. Agent Filter
    if (assignedAgentId && ObjectId.isValid(assignedAgentId)) {
      query.assignedAgentId = new ObjectId(assignedAgentId);
    }

    // 6. Search Filter
    if (search && search.trim() !== "") {
      const regex = { $regex: search.trim(), $options: "i" };
      query.$or = [
        { bookingCode: regex },
        { "serviceSnapshot.title": regex },
        { "eventDetails.venueName": regex },
        { "eventDetails.venueAddress": regex },
        { clientName: regex },
        { clientEmail: regex },
      ];
    }

    // 7. Sorting
    let sortObj = { createdAt: -1, _id: -1 };
    if (sort === "eventDate_asc" || sortDate === "asc") {
      sortObj = { "eventDetails.eventDate": 1, bookingDate: 1, _id: 1 };
    } else if (sort === "eventDate_desc" || sortDate === "desc") {
      sortObj = { "eventDetails.eventDate": -1, bookingDate: -1, _id: -1 };
    } else if (sort === "amount_desc") {
      sortObj = { "pricingBreakdown.grandTotal": -1, totalCost: -1, _id: -1 };
    } else if (sort === "amount_asc") {
      sortObj = { "pricingBreakdown.grandTotal": 1, totalCost: 1, _id: 1 };
    }

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.max(1, parseInt(limit, 10) || 10);
    const skip = (pageNum - 1) * limitNum;

    const totalCount = await bookingCollection.countDocuments(query);
    const rawBookings = await bookingCollection
      .find(query)
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .toArray();

    const data = await enrichBookings(rawBookings);

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
      message: "Error fetching bookings",
      error: error.message,
    });
  }
};

// ========== Get My Bookings (Customer) ==========
const getMyBookings = async (req, res) => {
  try {
    const email = req.params.email || req.decoded_email;
    const user = await userCollection.findOne({ email });

    const query = {};
    if (user) {
      query.$or = [{ customerId: user._id }, { clientEmail: email }];
    } else {
      query.clientEmail = email;
    }

    const rawBookings = await bookingCollection
      .find(query)
      .sort({ createdAt: -1, _id: -1 })
      .toArray();

    const data = await enrichBookings(rawBookings);

    res.send(data);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching my bookings",
      error: error.message,
    });
  }
};

// ========== Get Bookings by Decorator Agency ==========
const getBookingsByDecorator = async (req, res) => {
  try {
    const { decoratorId } = req.params;
    const query = {};

    if (ObjectId.isValid(decoratorId)) {
      query.$or = [
        { decoratorId: new ObjectId(decoratorId) },
        { assignTo: decoratorId },
      ];
    } else {
      query.assignTo = decoratorId;
    }

    const rawBookings = await bookingCollection
      .find(query)
      .sort({ "eventDetails.eventDate": 1, bookingDate: 1, _id: -1 })
      .toArray();

    const data = await enrichBookings(rawBookings);

    res.send(data);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching decorator bookings",
      error: error.message,
    });
  }
};

// ========== Get Bookings by Agent ==========
const getBookingsByAgent = async (req, res) => {
  try {
    const { agentId } = req.params;
    if (!ObjectId.isValid(agentId)) {
      return res.status(400).send({ success: false, message: "Invalid agent ID format" });
    }

    const rawBookings = await bookingCollection
      .find({ assignedAgentId: new ObjectId(agentId) })
      .sort({ "eventDetails.eventDate": 1, _id: -1 })
      .toArray();

    const data = await enrichBookings(rawBookings);

    res.send({ success: true, count: data.length, data });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching agent assignments",
      error: error.message,
    });
  }
};

// ========== Get Single Booking by ID ==========
const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid booking ID format" });
    }

    const booking = await bookingCollection.findOne({ _id: new ObjectId(id) });
    if (!booking) {
      return res.status(404).send({ success: false, message: "Booking not found" });
    }

    const [enriched] = await enrichBookings([booking]);

    res.send({ success: true, data: enriched });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching booking by ID",
      error: error.message,
    });
  }
};

// ========== Create Booking (Customer) ==========
const createBooking = async (req, res) => {
  try {
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    const {
      serviceId,
      decoratorId,
      selectedPackage,
      unitPrice,
      eventDate,
      startTime,
      endTime,
      venueName,
      venueAddress,
      guestCountEstimate,
      specialInstructions,
      // Legacy inputs fallback
      contact,
      location,
      totalCost,
      bookingDate,
      unit,
    } = req.body;

    let service = null;
    if (serviceId && ObjectId.isValid(serviceId)) {
      service = await serviceCollection.findOne({ _id: new ObjectId(serviceId) });
    }

    // Determine Decorator ID
    let decId = decoratorId;
    if (!decId && service?.decoratorId) {
      decId = service.decoratorId;
    }

    const finalUnitPrice = Number(unitPrice || service?.pricing?.discountedPrice || service?.pricing?.basePrice || service?.cost || totalCost || 20000);
    const subtotal = finalUnitPrice * Math.max(1, Number(unit || 1));
    const serviceTax = Math.round(subtotal * 0.05); // 5% service platform tax
    const grandTotal = subtotal + serviceTax;

    const newBooking = {
      bookingCode: generateBookingCode(),
      customerId: user ? user._id : null,
      clientName: user?.name || req.body.clientName || "Valued Client",
      clientEmail: email,
      contact: contact || user?.phone || "",
      serviceId: service ? service._id : (serviceId && ObjectId.isValid(serviceId) ? new ObjectId(serviceId) : null),
      decoratorId: decId && ObjectId.isValid(decId) ? new ObjectId(decId) : null,
      assignedAgentId: null,
      serviceSnapshot: {
        title: service?.title || service?.serviceName || req.body.serviceName || "Decoration Setup",
        category: typeof service?.category === "string" ? service.category : (service?.category?.name || req.body.serviceCategory || "Event Decor"),
        subCategory: service?.subCategory?.name || "General Setup",
        selectedPackage: selectedPackage || "Standard Package",
        unitPrice: finalUnitPrice,
      },
      eventDetails: {
        eventDate: eventDate ? new Date(eventDate) : (bookingDate ? new Date(bookingDate) : new Date()),
        startTime: startTime || "16:00",
        endTime: endTime || "22:00",
        venueName: venueName || location || "Private Venue",
        venueAddress: venueAddress || location || "Dhaka, Bangladesh",
        guestCountEstimate: Number(guestCountEstimate) || 100,
        specialInstructions: specialInstructions || "",
      },
      pricingBreakdown: {
        subtotal: subtotal,
        discountAmount: 0,
        serviceTax: serviceTax,
        grandTotal: grandTotal,
        paidAmount: 0,
        dueAmount: grandTotal,
      },
      status: "pending",
      paymentStatus: "unpaid",
      cancellationReason: null,
      // Backward compatibility fields
      totalCost: grandTotal,
      bookingDate: eventDate || bookingDate || new Date().toISOString().split("T")[0],
      location: venueAddress || location || "Dhaka",
      unit: unit || 1,
      assigned: Boolean(decId),
      assignTo: decId ? decId.toString() : null,
      paid: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await bookingCollection.insertOne(newBooking);

    res.send({
      success: true,
      message: "Booking created successfully",
      insertedId: result.insertedId,
      bookingCode: newBooking.bookingCode,
      data: { _id: result.insertedId, ...newBooking },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error creating booking",
      error: error.message,
    });
  }
};

// ========== Assign Booking to Agent / Decorator (Admin / Decorator) ==========
const assignBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { decoratorId, agentId, assignTo, status = "confirmed" } = req.body;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid booking ID" });
    }

    const updateDoc = {
      updatedAt: new Date(),
      status: status,
    };

    if (decoratorId && ObjectId.isValid(decoratorId)) {
      updateDoc.decoratorId = new ObjectId(decoratorId);
      updateDoc.assignTo = decoratorId;
      updateDoc.assigned = true;
    } else if (assignTo && ObjectId.isValid(assignTo)) {
      updateDoc.decoratorId = new ObjectId(assignTo);
      updateDoc.assignTo = assignTo;
      updateDoc.assigned = true;
    }

    if (agentId && ObjectId.isValid(agentId)) {
      updateDoc.assignedAgentId = new ObjectId(agentId);
    }

    await bookingCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateDoc }
    );

    res.send({
      success: true,
      message: "Booking assigned successfully",
      data: updateDoc,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error assigning booking",
      error: error.message,
    });
  }
};

// ========== Update Booking Status (Lifecycle Progress) ==========
const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, cancellationReason } = req.body;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid booking ID" });
    }

    const allowedStatuses = [
      "pending",
      "confirmed",
      "in_progress",
      "completed",
      "cancelled",
      // Legacy status support
      "Assigned",
      "Planning",
      "Equipping",
      "On Way",
      "Setting up",
      "Completed",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).send({
        success: false,
        message: "Invalid status value",
      });
    }

    const booking = await bookingCollection.findOne({ _id: new ObjectId(id) });
    if (!booking) {
      return res.status(404).send({ success: false, message: "Booking not found" });
    }

    const updateDoc = {
      status,
      updatedAt: new Date(),
    };

    if (status === "completed" || status === "Completed") {
      updateDoc.completedAt = new Date();
      updateDoc.paymentStatus = "paid";
      if (booking.pricingBreakdown) {
        updateDoc["pricingBreakdown.paidAmount"] = booking.pricingBreakdown.grandTotal;
        updateDoc["pricingBreakdown.dueAmount"] = 0;
      }
      // Increment decorator completed events metric
      if (booking.decoratorId) {
        await decoratorCollection.updateOne(
          { _id: booking.decoratorId },
          { $inc: { "metrics.completedEvents": 1 } }
        );
      }
    }

    if (status === "cancelled") {
      updateDoc.cancellationReason = cancellationReason || "Cancelled by client/agency";
    }

    await bookingCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateDoc }
    );

    res.send({
      success: true,
      message: "Booking status updated successfully",
      data: updateDoc,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating booking status",
      error: error.message,
    });
  }
};

// ========== Update Booking Details (Customer / Admin) ==========
const updateBookingInfo = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid booking ID" });
    }

    const {
      venueName,
      venueAddress,
      eventDate,
      startTime,
      endTime,
      guestCountEstimate,
      specialInstructions,
      contact,
      location,
    } = req.body;

    const updateDoc = {
      updatedAt: new Date(),
    };

    if (venueName) updateDoc["eventDetails.venueName"] = venueName;
    if (venueAddress) {
      updateDoc["eventDetails.venueAddress"] = venueAddress;
      updateDoc.location = venueAddress;
    } else if (location) {
      updateDoc["eventDetails.venueAddress"] = location;
      updateDoc.location = location;
    }
    if (eventDate) {
      updateDoc["eventDetails.eventDate"] = new Date(eventDate);
      updateDoc.bookingDate = eventDate;
    }
    if (startTime) updateDoc["eventDetails.startTime"] = startTime;
    if (endTime) updateDoc["eventDetails.endTime"] = endTime;
    if (guestCountEstimate) updateDoc["eventDetails.guestCountEstimate"] = Number(guestCountEstimate);
    if (specialInstructions) updateDoc["eventDetails.specialInstructions"] = specialInstructions;
    if (contact) updateDoc.contact = contact;

    await bookingCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateDoc }
    );

    res.send({
      success: true,
      message: "Booking updated successfully",
      data: updateDoc,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating booking details",
      error: error.message,
    });
  }
};

// ========== Delete / Cancel Booking ==========
const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid booking ID" });
    }

    await bookingCollection.deleteOne({ _id: new ObjectId(id) });

    res.send({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error deleting booking",
      error: error.message,
    });
  }
};

// ========== Get Booking Statistics (Admin / Overview) ==========
const getBookingStats = async (req, res) => {
  try {
    const allBookings = await bookingCollection.find({}).toArray();

    const total = allBookings.length;
    const pending = allBookings.filter((b) => b.status === "pending" || b.status === "draft").length;
    const accepted = allBookings.filter((b) => b.status === "accepted").length;
    const advancePaid = allBookings.filter((b) => b.status === "advance_paid").length;
    const inProgress = allBookings.filter((b) => b.status === "preparing" || b.status === "on_the_way" || b.status === "in_progress").length;
    const completed = allBookings.filter((b) => b.status === "completed").length;
    const cancelled = allBookings.filter((b) => b.status === "cancelled").length;

    // Total gross volume & received revenue
    const totalVolume = allBookings.reduce((sum, b) => {
      const amt = b.pricingBreakdown?.grandTotal || b.financials?.totalAmount || b.totalCost || b.serviceSnapshot?.unitPrice || 0;
      return sum + Number(amt);
    }, 0);

    const totalRevenueCollected = allBookings.reduce((sum, b) => {
      const paid = b.pricingBreakdown?.paidAmount || b.financials?.advancePaid || (b.paid ? b.totalCost : 0) || 0;
      return sum + Number(paid);
    }, 0);

    res.send({
      success: true,
      stats: {
        total,
        pending,
        accepted,
        advancePaid,
        inProgress,
        completed,
        cancelled,
        totalVolume,
        totalRevenueCollected,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching booking statistics",
      error: error.message,
    });
  }
};

module.exports = {
  getBookings,
  getBookingStats,
  getMyBookings,
  getBookingsByDecorator,
  getBookingsByAgent,
  getBookingById,
  createBooking,
  assignBooking,
  updateBookingStatus,
  updateBookingInfo,
  deleteBooking,
};

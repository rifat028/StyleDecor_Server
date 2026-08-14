// ========== Imports ==========
const { ObjectId } = require("mongodb");
const { bookingCollection, decoratorCollection } = require("../models/collections");

// ========== Create Booking ==========
// Allows a client to create a new service booking
const createBooking = async (req, res) => {
  try {
    const newBooking = req.body;
    if (newBooking.clientEmail !== req.decoded_email) {
      return res.status(403).send({ message: "forbidden access...!" });
    }
    const result = await bookingCollection.insertOne(newBooking);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error creating booking", error });
  }
};

// ========== Get All Bookings (Admin) ==========
// Retrieves all bookings with optional filtering (assigned/paid), sorting, and pagination
const getBookings = async (req, res) => {
  try {
    const {
      assigned,
      paid,
      page = 1,
      limit = 5,
      sortDate = "desc",
    } = req.query;

    const query = {};
    if (assigned === "true") query.assigned = true;
    if (assigned === "false") query.assigned = false;
    if (paid === "true") query.paid = true;
    if (paid === "false") query.paid = false;

    // Pagination calculations
    const pageNum = Math.max(1, Number(page));
    const limitNum = Math.max(1, Number(limit));
    const skipNum = (pageNum - 1) * limitNum;

    const sortOrder = sortDate === "asc" ? 1 : -1;

    const totalCount = await bookingCollection.countDocuments(query);

    const data = await bookingCollection
      .find(query)
      .sort({ bookingDate: sortOrder })
      .skip(skipNum)
      .limit(limitNum)
      .toArray();

    res.send({ data, totalCount });
  } catch (error) {
    res.status(500).send({ message: "Error fetching bookings", error });
  }
};

// ========== Get Bookings By Decorator ==========
// Retrieves bookings assigned to a specific decorator ID
const getBookingsByDecorator = async (req, res) => {
  try {
    const decoratorId = req.params.decoratorId;
    const bookings = await bookingCollection
      .find({ assignTo: decoratorId })
      .sort({ bookingDate: 1 })
      .toArray();
    res.send(bookings);
  } catch (error) {
    res.status(500).send({ message: "Error fetching decorator bookings", error });
  }
};

// ========== Get My Bookings (Client) ==========
// Retrieves bookings belonging to a specific client
const getMyBookings = async (req, res) => {
  try {
    const email = req.params.email;
    if (email !== req.decoded_email) {
      return res.status(403).send({ message: "forbidden access...!" });
    }
    const cursor = bookingCollection
      .find({ clientEmail: email })
      .sort({ _id: -1 });
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching my bookings", error });
  }
};

// ========== Delete Booking ==========
// Allows a client to delete their own booking
const deleteBooking = async (req, res) => {
  try {
    const id = req.params.id;
    const booking = await bookingCollection.findOne({
      _id: new ObjectId(id),
    });
    if (booking.clientEmail !== req.decoded_email) {
      return res.status(403).send({ message: "Forbidden access...!" });
    }
    const result = await bookingCollection.deleteOne({
      _id: new ObjectId(id),
    });
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error deleting booking", error });
  }
};

// ========== Assign Booking to Decorator ==========
// Allows an Admin to assign a decorator to a booking
const assignBooking = async (req, res) => {
  try {
    const id = req.params.id;
    const { assignTo, status = "Assigned", assigned = true } = req.body;

    if (!assignTo) {
      return res.status(400).send({ message: "assignTo is required" });
    }

    const updateDoc = {
      $set: {
        assignTo,
        status,
        assigned: Boolean(assigned),
      },
    };
    const result = await bookingCollection.updateOne(
      { _id: new ObjectId(id) },
      updateDoc
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error assigning booking", error });
  }
};

// ========== Update Booking Status (Decorator) ==========
// Allows a decorator to update the progress status of a booking
const updateBookingStatus = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const { status } = req.body;

    const allowedStatuses = [
      "Assigned",
      "Planning",
      "Equipping",
      "On Way",
      "Setting up",
      "Completed",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).send({ message: "Invalid status" });
    }

    const booking = await bookingCollection.findOne({
      _id: new ObjectId(bookingId),
    });

    if (!booking) {
      return res.status(404).send({ message: "Booking not found" });
    }

    const updateDoc = {
      $set: {
        status,
        statusUpdatedAt: new Date().toISOString().split("T")[0],
      },
    };

    // If marked completed, set completion date
    if (status === "Completed") {
      updateDoc.$set.completedAt = new Date().toISOString().split("T")[0];
    }

    await bookingCollection.updateOne(
      { _id: new ObjectId(bookingId) },
      updateDoc
    );

    // Update the decorator's stats if the task is completed
    if (status === "Completed" && booking.assignTo) {
      await decoratorCollection.updateOne(
        { _id: new ObjectId(booking.assignTo) },
        {
          $inc: {
            taskCompleted: 1,
            taskPending: -1,
          },
        }
      );
    }

    res.send({
      success: true,
      message: "Booking status updated successfully",
    });
  } catch (error) {
    res.status(500).send({ message: "Error updating booking status", error });
  }
};

// ========== Update Booking Info (Client) ==========
// Allows a client to update specific details of their booking
const updateBookingInfo = async (req, res) => {
  try {
    const id = req.params.id;
    const booking = await bookingCollection.findOne({
      _id: new ObjectId(id),
    });
    if (booking.clientEmail !== req.decoded_email) {
      return res.status(403).send({ message: "Forbidden access" });
    }
    const { contact, location, unit, bookingDate, totalCost } = req.body;
    const updateDoc = {
      $set: {
        contact,
        location,
        unit,
        bookingDate,
        totalCost,
      },
    };
    const result = await bookingCollection.updateOne(
      { _id: new ObjectId(id) },
      updateDoc
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error updating booking info", error });
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingsByDecorator,
  getMyBookings,
  deleteBooking,
  assignBooking,
  updateBookingStatus,
  updateBookingInfo,
};

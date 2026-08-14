// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin, verifyDecorator } = require("../middleware/authMiddleware");
const bookingController = require("../controllers/bookingController");

// ========== Booking Endpoints ==========

// Create a service booking
router.post("/", verifyFbToken, bookingController.createBooking);

// Get all bookings with filter and pagination (Admin only)
router.get("/", verifyFbToken, verifyAdmin, bookingController.getBookings);

// Get bookings assigned to a specific decorator (Decorator only)
router.get("/decorator/:decoratorId", verifyFbToken, verifyDecorator, bookingController.getBookingsByDecorator);

// Get my own booking by email
router.get("/:email", verifyFbToken, bookingController.getMyBookings);

// Delete a booking by client
router.delete("/:id", verifyFbToken, bookingController.deleteBooking);

// Assign decorator to booking (Admin only)
router.patch("/:id/assign", verifyFbToken, verifyAdmin, bookingController.assignBooking);

// Update booking status (Decorator only)
router.patch("/:id/status", verifyFbToken, verifyDecorator, bookingController.updateBookingStatus);

// Update booking details (Client only)
router.patch("/:id", verifyFbToken, bookingController.updateBookingInfo);

module.exports = router;

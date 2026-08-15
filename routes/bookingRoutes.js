// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin, verifyDecorator } = require("../middleware/authMiddleware");
const bookingController = require("../controllers/bookingController");

// ========== Booking Endpoints ==========

// 1. Specific Entity Lookup Routes
router.get("/customer/:customerId", verifyFbToken, bookingController.getBookingsByCustomer);
router.get("/decorator/:decoratorId", verifyFbToken, bookingController.getBookingsByDecorator);
router.get("/agent/:agentId", verifyFbToken, bookingController.getBookingsByAgent);
router.get("/id/:id", verifyFbToken, bookingController.getBookingById);

// 2. Query List & Create
router.get("/", verifyFbToken, bookingController.getBookings);
router.post("/", verifyFbToken, bookingController.createBooking);

// 3. Assign & Status Lifecycle Updates
router.patch("/:id/assign", verifyFbToken, bookingController.assignBooking);
router.patch("/:id/status", verifyFbToken, bookingController.updateBookingStatus);

// 4. Update & Delete
router.patch("/:id", verifyFbToken, bookingController.updateBookingInfo);
router.delete("/:id", verifyFbToken, bookingController.deleteBooking);

// 5. Lookup by Single Booking ID
router.get("/:id", verifyFbToken, bookingController.getBookingById);

module.exports = router;

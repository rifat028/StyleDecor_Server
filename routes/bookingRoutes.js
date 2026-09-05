// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin, verifyDecorator } = require("../middleware/authMiddleware");
const bookingController = require("../controllers/bookingController");

// ========== Booking Endpoints ==========

// 1. Static / Specific Named Routes
router.get("/stats", verifyFbToken, verifyAdmin, bookingController.getBookingStats);
router.get("/my-bookings", verifyFbToken, bookingController.getMyBookings);
router.get("/customer/:customerId", verifyFbToken, bookingController.getBookingsByCustomer);
router.get("/user/:email", verifyFbToken, bookingController.getMyBookings);
router.get("/client/:email", verifyFbToken, bookingController.getMyBookings);
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

// 5. Fallback for Email Param (Backward Compatibility: GET /bookings/:email)
router.get("/:email", verifyFbToken, (req, res, next) => {
  if (req.params.email && req.params.email.includes("@")) {
    return bookingController.getMyBookings(req, res);
  }
  return bookingController.getBookingById(req, res);
});

module.exports = router;

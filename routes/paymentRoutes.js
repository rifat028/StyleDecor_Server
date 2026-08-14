// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken } = require("../middleware/authMiddleware");
const paymentController = require("../controllers/paymentController");

// ========== Payment Endpoints ==========

// Initialize Stripe checkout session for a booking
router.post("/create-checkout-session", verifyFbToken, paymentController.createCheckoutSession);

// Handle successful payment callback and update DB records
router.patch("/payment-success", verifyFbToken, paymentController.handlePaymentSuccess);

// Get all transactions for a specific user
router.get("/transactions", verifyFbToken, paymentController.getTransactions);

module.exports = router;

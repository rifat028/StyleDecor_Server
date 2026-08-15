// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin } = require("../middleware/authMiddleware");
const paymentController = require("../controllers/paymentController");

// ========== Payment Endpoints ==========

// 1. Statistics & Aggregations (Admin)
router.get("/stats", verifyFbToken, verifyAdmin, paymentController.getPaymentStats);

// 2. Specific Entity Payment Lookup Routes
router.get("/customer/:customerId", verifyFbToken, paymentController.getPaymentsByCustomer);
router.get("/decorator/:decoratorId", verifyFbToken, paymentController.getPaymentsByDecorator);
router.get("/booking/:bookingId", verifyFbToken, paymentController.getPaymentsByBooking);
router.get("/id/:id", verifyFbToken, paymentController.getPaymentById);

// 3. Legacy Transactions Endpoint (Backward Compatibility)
router.get("/transactions", verifyFbToken, paymentController.getTransactions);

// 4. Global Query List (Admin)
router.get("/", verifyFbToken, paymentController.getPayments);

// 5. Payment Creation & Processing
router.post("/initiate", verifyFbToken, paymentController.createPayment);
router.post("/", verifyFbToken, paymentController.createPayment);

// 6. Refund Processing (Admin)
router.post("/:id/refund", verifyFbToken, verifyAdmin, paymentController.processRefund);

// 7. Stripe Checkout Integration
router.post("/create-checkout-session", verifyFbToken, paymentController.createCheckoutSession);
router.patch("/payment-success", verifyFbToken, paymentController.handlePaymentSuccess);

// 8. Lookup Single Payment Record by ID
router.get("/:id", verifyFbToken, paymentController.getPaymentById);

module.exports = router;

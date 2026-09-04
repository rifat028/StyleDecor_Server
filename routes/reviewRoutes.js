// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin } = require("../middleware/authMiddleware");
const reviewController = require("../controllers/reviewController");

// ========== 1. Public Review Routes ==========
router.get("/featured", reviewController.getFeaturedReviews);
router.get("/service/:serviceId", reviewController.getReviewsByService);
router.get("/decorator/:decoratorId", reviewController.getReviewsByDecorator);
router.get("/agent/:agentId", reviewController.getReviewsByAgent);

// ========== 2. Customer Review Routes ==========
router.get("/customer/my-reviews", verifyFbToken, reviewController.getCustomerReviews);
router.get("/customer/me", verifyFbToken, reviewController.getCustomerReviews);
router.post("/", verifyFbToken, reviewController.createReview);
router.patch("/customer/:id", verifyFbToken, reviewController.updateCustomerReview);
router.delete("/customer/:id", verifyFbToken, reviewController.deleteCustomerReview);

// ========== 3. Decorator Review Routes ==========
router.get("/agency/my-reviews", verifyFbToken, reviewController.getAgencyReviews);
router.get("/decorator/me", verifyFbToken, reviewController.getAgencyReviews);
router.patch("/:id/reply", verifyFbToken, reviewController.replyToReview);
router.delete("/:id/reply", verifyFbToken, reviewController.deleteReviewReply);

// ========== 4. Agent Review Routes ==========
router.get("/agent/my-reviews", verifyFbToken, reviewController.getMyAgentReviews);
router.get("/agent/me", verifyFbToken, reviewController.getMyAgentReviews);

// ========== 5. Admin Review Routes ==========
router.get("/", verifyFbToken, verifyAdmin, reviewController.getAllReviewsAdmin);
router.get("/admin/all", verifyFbToken, verifyAdmin, reviewController.getAllReviewsAdmin);
router.patch("/admin/:id/status", verifyFbToken, verifyAdmin, reviewController.moderateReviewStatus);
router.patch("/admin/:id/featured", verifyFbToken, verifyAdmin, reviewController.toggleFeaturedReview);
router.patch("/admin/:id/feature", verifyFbToken, verifyAdmin, reviewController.toggleFeaturedReview);
router.delete("/admin/:id", verifyFbToken, verifyAdmin, reviewController.deleteReviewPermanently);

// ========== 6. General / Contextual ID Routes ==========
router.patch("/:id/status", verifyFbToken, verifyAdmin, reviewController.moderateReviewStatus);
router.patch("/:id/featured", verifyFbToken, verifyAdmin, reviewController.toggleFeaturedReview);
router.patch("/:id/feature", verifyFbToken, verifyAdmin, reviewController.toggleFeaturedReview);
router.patch("/:id", verifyFbToken, reviewController.updateCustomerReview);
router.delete("/:id", verifyFbToken, reviewController.deleteReviewPermanently);

module.exports = router;

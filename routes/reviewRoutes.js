// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin, verifyDecorator } = require("../middleware/authMiddleware");
const reviewController = require("../controllers/reviewController");

// ========== Review Routes ==========
router.get("/decorator/:decoratorId", reviewController.getReviewsByDecorator);
router.get("/agent/:agentId", reviewController.getReviewsByAgent);
router.get("/service/:serviceId", reviewController.getReviewsByService);
router.get("/", reviewController.getReviews);

router.post("/", verifyFbToken, reviewController.createReview);
router.patch("/:id/reply", verifyFbToken, reviewController.replyToReview);
router.delete("/:id", verifyFbToken, verifyAdmin, reviewController.deleteReview);

module.exports = router;

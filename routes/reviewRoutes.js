// ========== Imports ==========
const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// ========== Review Routes ==========
router.get("/decorator/:decoratorId", reviewController.getReviewsByDecorator);
router.get("/agent/:agentId", reviewController.getReviewsByAgent);

module.exports = router;

// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin } = require("../middleware/authMiddleware");
const decoratorController = require("../controllers/decoratorController");

// ========== Decorator Routes ==========

// Public Collections & Highlights
router.get("/toprated", decoratorController.getTopRatedDecorators);
router.get("/featured", decoratorController.getFeaturedDecorators);

// Authenticated: Current Logged-in Decorator Profile
router.get("/me", verifyFbToken, decoratorController.getMyDecoratorProfile);

// Specific Lookup Endpoints (Placed before parameterized routes)
router.get("/id/:id", decoratorController.getDecoratorById);
router.get("/slug/:slug", decoratorController.getDecoratorBySlug);
router.get("/email/:email", decoratorController.getDecoratorByEmail);

// Backward Compatibility for legacy /:email route
router.get("/:email([\\w.%+-]+@[\\w.-]+\\.[a-zA-Z]{2,})", decoratorController.getDecoratorByEmail);

// Query-able List (Public & Admin, with filtering, search, pagination)
router.get("/", decoratorController.getDecorators);

// Create / Apply as Decorator (Authenticated)
router.post("/", verifyFbToken, decoratorController.createDecorator);

// Admin-only: Update verification status, active status, or featured state
router.patch("/:id/status", verifyFbToken, verifyAdmin, decoratorController.updateDecoratorStatus);

// Update Decorator Profile (Self / Admin)
router.patch("/:id", verifyFbToken, decoratorController.updateDecorator);

// Admin-only: Delete Decorator Profile
router.delete("/:id", verifyFbToken, verifyAdmin, decoratorController.deleteDecorator);

module.exports = router;

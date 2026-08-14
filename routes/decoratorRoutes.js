// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin, verifyDecorator } = require("../middleware/authMiddleware");
const decoratorController = require("../controllers/decoratorController");

// ========== Decorator Endpoints ==========

// Important: place /toprated before /:email to avoid route collision

// Add a decorator request
router.post("/", verifyFbToken, decoratorController.createDecoratorRequest);

// Get selected decorators based on status or location (Admin only)
router.get("/", verifyFbToken, verifyAdmin, decoratorController.getDecorators);

// Get top rated decorators for the home page (Publicly accessible)
router.get("/toprated", decoratorController.getTopRatedDecorators);

// Get a decorator request by email (Decorator only)
router.get("/:email", verifyFbToken, verifyDecorator, decoratorController.getDecoratorByEmail);

// Update a decorator's pending task count when assigned (Admin only)
router.patch("/:id/task", verifyFbToken, verifyAdmin, decoratorController.updateDecoratorTaskCount);

// Update a decorator's acceptance status (Admin only)
router.patch("/:id", verifyFbToken, verifyAdmin, decoratorController.updateDecoratorStatus);

// Delete a decorator (Admin only)
router.delete("/:id", verifyFbToken, verifyAdmin, decoratorController.deleteDecorator);

module.exports = router;

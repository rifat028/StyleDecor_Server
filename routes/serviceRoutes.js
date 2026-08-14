// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin } = require("../middleware/authMiddleware");
const serviceController = require("../controllers/serviceController");

// ========== Service Endpoints ==========

// Create a new service (Admin only)
router.post("/", verifyFbToken, verifyAdmin, serviceController.createService);

// Update an existing service (Admin only)
router.patch("/:id", verifyFbToken, verifyAdmin, serviceController.updateService);

// Delete a service (Admin only)
router.delete("/:id", verifyFbToken, verifyAdmin, serviceController.deleteService);

// Get all services with optional filters (search, category, price range)
router.get("/", serviceController.getServices);

// Get latest 8 services
router.get("/latest", serviceController.getLatestServices);

// Get a single service by ID
router.get("/:id", serviceController.getServiceById);

module.exports = router;

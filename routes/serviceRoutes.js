// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin } = require("../middleware/authMiddleware");
const serviceController = require("../controllers/serviceController");

// ========== Service Endpoints ==========

// 1. Static / Named Endpoints
router.get("/latest", serviceController.getLatestServices);
router.get("/decorator/:decoratorId", serviceController.getServicesByDecorator);

// 2. Query-able List (Public & Admin, with search, category, price filtering)
router.get("/", serviceController.getServices);

// 3. Create a new service (Admin / Decorator)
router.post("/", verifyFbToken, serviceController.createService);

// 4. Update an existing service (Admin / Decorator)
router.patch("/:id", verifyFbToken, serviceController.updateService);

// 5. Delete a service (Admin / Decorator)
router.delete("/:id", verifyFbToken, serviceController.deleteService);

// 6. Get a single service by ID
router.get("/:id", serviceController.getServiceById);

module.exports = router;

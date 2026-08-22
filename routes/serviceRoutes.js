// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin } = require("../middleware/authMiddleware");
const serviceController = require("../controllers/serviceController");

// ========== Service Endpoints ==========

// 1. Static / Named Endpoints
router.get("/latest", serviceController.getLatestServices);
router.get("/toprated", serviceController.getTopRatedServices);
router.get("/decorator/:decoratorId", serviceController.getServicesByDecorator);

// 2. Query-able List (Public & Admin, with search, category, city, price filtering)
router.get("/", serviceController.getServices);

// 3. Create a new service (Authenticated Decorator / Admin)
router.post("/", verifyFbToken, serviceController.createService);

// 4. Update service status (Active / Inactive)
router.patch("/:id/status", verifyFbToken, serviceController.updateServiceStatus);

// 5. Update service details (Owner Decorator / Admin)
router.patch("/:id", verifyFbToken, serviceController.updateService);

// 6. Delete a service (Owner Decorator / Admin)
router.delete("/:id", verifyFbToken, serviceController.deleteService);

// 7. Get single service by ID (with populated Decorator agency)
router.get("/id/:id", serviceController.getServiceById);
router.get("/:id", serviceController.getServiceById);

module.exports = router;

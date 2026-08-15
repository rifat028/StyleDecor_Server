// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin } = require("../middleware/authMiddleware");
const agentController = require("../controllers/agentController");

// ========== Agent Specific Endpoints (Agent Role / Self) ==========

// 1. Authenticated Agent Self Profile & Updates
router.get("/me", verifyFbToken, agentController.getMyAgentProfile);
router.patch("/me", verifyFbToken, agentController.updateMyAgentProfile);

// 2. Assigned Schedule & Upcoming Events
router.get("/my-schedule", verifyFbToken, agentController.getMySchedule);

// 3. Active Event Execution
router.get("/active-events", verifyFbToken, agentController.getActiveExecutionEvents);
router.patch("/bookings/:bookingId/stage", verifyFbToken, agentController.updateExecutionStage);

// 4. Performance & Appraisals
router.get("/my-performance", verifyFbToken, agentController.getMyPerformance);

// ========== Statistics & Overview (Admin) ==========
router.get("/stats", verifyFbToken, agentController.getAgentStats);

// ========== Decorator Agency & Lookup Endpoints ==========
router.get("/decorator/:decoratorId", verifyFbToken, agentController.getAgentsByDecorator);
router.get("/id/:id", verifyFbToken, agentController.getAgentById);

// ========== Reviews & Appraisals ==========
router.post("/:id/reviews", verifyFbToken, agentController.createAgentReview);

// ========== Admin / Decorator Status & Management ==========
router.patch("/:id/status", verifyFbToken, agentController.updateAgentStatus);

// ========== Global List & Entity CRUD ==========
router.get("/", verifyFbToken, agentController.getAgents);
router.post("/", verifyFbToken, agentController.createAgent);
router.patch("/:id", verifyFbToken, agentController.updateAgent);
router.delete("/:id", verifyFbToken, agentController.deleteAgent);
router.get("/:id", verifyFbToken, agentController.getAgentById);

module.exports = router;

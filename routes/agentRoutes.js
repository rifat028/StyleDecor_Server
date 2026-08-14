// ========== Imports ==========
const express = require("express");
const router = express.Router();
const agentController = require("../controllers/agentController");

// ========== Agent Routes ==========
router.get("/decorator/:decoratorId", agentController.getAgentsByDecorator);
router.get("/id/:id", agentController.getAgentById);
router.get("/:id", agentController.getAgentById);
router.get("/", agentController.getAgents);

module.exports = router;

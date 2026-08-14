// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin } = require("../middleware/authMiddleware");
const userController = require("../controllers/userController");

// ========== User Endpoints ==========

// Create a new user (Client by default)
router.post("/", userController.createUser);

// Get a single user by email (User access only)
router.get("/:email", verifyFbToken, userController.getUserByEmail);

// Update user role (Admin only)
router.patch("/role", verifyFbToken, verifyAdmin, userController.updateUserRole);

module.exports = router;

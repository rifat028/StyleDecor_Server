// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin } = require("../middleware/authMiddleware");
const userController = require("../controllers/userController");

// ========== User Endpoints ==========

// Create or sync user upon login/signup
router.post("/", userController.createUser);

// Get current logged-in user profile (from auth token)
router.get("/me", verifyFbToken, userController.getMyProfile);

// Get user statistics (Admin only)
router.get("/stats", verifyFbToken, verifyAdmin, userController.getUserStats);

// Get all users with filters & pagination (Admin only)
router.get("/", verifyFbToken, verifyAdmin, userController.getAllUsers);

// Get a single user by ID
router.get("/:id", userController.getUserById);

// Update current user profile
router.patch("/profile", verifyFbToken, userController.updateUserProfile);

// Update user role (Admin only)
router.patch("/role", verifyFbToken, verifyAdmin, userController.updateUserRole);

module.exports = router;

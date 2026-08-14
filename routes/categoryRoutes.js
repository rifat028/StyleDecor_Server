// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin } = require("../middleware/authMiddleware");
const categoryController = require("../controllers/categoryController");

// ========== Category Endpoints ==========

// Create a new category (Admin only)
router.post("/", verifyFbToken, verifyAdmin, categoryController.createCategory);

// Update an existing category (Admin only)
router.patch("/:id", verifyFbToken, verifyAdmin, categoryController.updateCategory);

// Delete a category (Admin only)
router.delete("/:id", verifyFbToken, verifyAdmin, categoryController.deleteCategory);

// Get all categories (Public)
router.get("/", categoryController.getAllCategories);

module.exports = router;

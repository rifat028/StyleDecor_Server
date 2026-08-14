// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin } = require("../middleware/authMiddleware");
const categoryController = require("../controllers/categoryController");

// ========== Public Category Endpoints ==========

// Get all categories with search & status filters
router.get("/", categoryController.getAllCategories);

// Get single category by ID
router.get("/:id", categoryController.getCategoryById);

// ========== Admin Protected Endpoints ==========

// Create a new main category
router.post("/", verifyFbToken, verifyAdmin, categoryController.createCategory);

// Update a category by ID
router.patch("/:id", verifyFbToken, verifyAdmin, categoryController.updateCategory);

// Add a subcategory to a category
router.post("/:id/subcategories", verifyFbToken, verifyAdmin, categoryController.addSubCategory);

// Update a subcategory in a category (e.g. toggle status, rename)
router.patch("/:id/subcategories/:subId", verifyFbToken, verifyAdmin, categoryController.updateSubCategory);

// Delete a subcategory from a category
router.delete("/:id/subcategories/:subId", verifyFbToken, verifyAdmin, categoryController.deleteSubCategory);

// Delete a full category
router.delete("/:id", verifyFbToken, verifyAdmin, categoryController.deleteCategory);

module.exports = router;

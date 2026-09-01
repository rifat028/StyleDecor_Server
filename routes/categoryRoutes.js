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

// Reorder categories (must precede /:id)
router.patch("/reorder", verifyFbToken, verifyAdmin, categoryController.reorderCategories);

// Bulk delete categories (must precede /:id)
router.post("/bulk-delete", verifyFbToken, verifyAdmin, categoryController.bulkDeleteCategories);
router.delete("/bulk", verifyFbToken, verifyAdmin, categoryController.bulkDeleteCategories);

// Create a new main category
router.post("/", verifyFbToken, verifyAdmin, categoryController.createCategory);

// Reorder subcategories inside a category (must precede /:id/subcategories/:subId)
router.patch("/:id/subcategories/reorder", verifyFbToken, verifyAdmin, categoryController.reorderSubCategories);

// Bulk delete subcategories inside a category (must precede /:id/subcategories/:subId)
router.post("/:id/subcategories/bulk-delete", verifyFbToken, verifyAdmin, categoryController.bulkDeleteSubCategories);
router.delete("/:id/subcategories/bulk", verifyFbToken, verifyAdmin, categoryController.bulkDeleteSubCategories);

// Add a subcategory to a category
router.post("/:id/subcategories", verifyFbToken, verifyAdmin, categoryController.addSubCategory);

// Update a subcategory in a category
router.patch("/:id/subcategories/:subId", verifyFbToken, verifyAdmin, categoryController.updateSubCategory);

// Delete a subcategory from a category
router.delete("/:id/subcategories/:subId", verifyFbToken, verifyAdmin, categoryController.deleteSubCategory);

// Update a category by ID
router.patch("/:id", verifyFbToken, verifyAdmin, categoryController.updateCategory);

// Delete a full category
router.delete("/:id", verifyFbToken, verifyAdmin, categoryController.deleteCategory);

module.exports = router;

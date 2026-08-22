// ========== Imports ==========
const { ObjectId } = require("mongodb");
const { categoryCollection } = require("../models/collections");

// Helper to generate slugs
const generateSlug = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

// ========== Get All Categories ==========
// Retrieves all categories with optional search, status filtering, and sorting
const getAllCategories = async (req, res) => {
  try {
    const { status, featured, feature, search } = req.query;
    const query = {};

    if (status && status !== "all") {
      query.status = status;
    }

    if (featured === "true" || feature === "true") {
      query.feature = true;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { "subCategories.name": { $regex: search, $options: "i" } },
      ];
    }

    const categories = await categoryCollection
      .find(query)
      .sort({ order: 1, createdAt: 1 })
      .toArray();

    const formattedCategories = categories.map((cat) => ({
      ...cat,
      slug: cat.slug || generateSlug(cat.name),
      subCategories: Array.isArray(cat.subCategories)
        ? cat.subCategories.map((sub, idx) => ({
            ...sub,
            id: sub.id !== undefined ? sub.id : idx + 1,
            slug: sub.slug || generateSlug(sub.name),
          }))
        : [],
    }));

    res.send({
      success: true,
      totalCount: formattedCategories.length,
      data: formattedCategories,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching categories",
      error: error.message,
    });
  }
};

// ========== Get Category By ID ==========
// Retrieves a single category by its MongoDB ObjectId
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid category ID format" });
    }

    const category = await categoryCollection.findOne({ _id: new ObjectId(id) });
    if (!category) {
      return res.status(404).send({ success: false, message: "Category not found" });
    }

    const formatted = {
      ...category,
      slug: category.slug || generateSlug(category.name),
      subCategories: Array.isArray(category.subCategories)
        ? category.subCategories.map((sub, idx) => ({
            ...sub,
            id: sub.id !== undefined ? sub.id : idx + 1,
            slug: sub.slug || generateSlug(sub.name),
          }))
        : [],
    };

    res.send({ success: true, data: formatted });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching category",
      error: error.message,
    });
  }
};

// ========== Create Category (Admin Only) ==========
// Creates a new main category with subcategories
const createCategory = async (req, res) => {
  try {
    const { name, description, order, feature, featured, status = "active", subCategories = [] } = req.body;

    if (!name) {
      return res.status(400).send({ success: false, message: "Category name is required" });
    }

    // Check for duplicate category name
    const existing = await categoryCollection.findOne({
      name: { $regex: `^${name.trim()}$`, $options: "i" },
    });
    if (existing) {
      return res.status(400).send({
        success: false,
        message: "Category with this name already exists",
      });
    }

    // Format subcategories if provided
    const formattedSubCategories = subCategories.map((sub, index) => ({
      id: sub.id !== undefined ? sub.id : index + 1,
      name: sub.name,
      status: sub.status || "active",
      order: sub.order !== undefined ? Number(sub.order) : index + 1,
    }));

    const newCategory = {
      name: name.trim(),
      status,
      order: order !== undefined ? Number(order) : 1,
      feature: Boolean(feature ?? featured ?? false),
      description: description || "",
      subCategories: formattedSubCategories,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await categoryCollection.insertOne(newCategory);

    res.status(201).send({
      success: true,
      message: "Category created successfully",
      insertedId: result.insertedId,
      data: { _id: result.insertedId, ...newCategory },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error creating category",
      error: error.message,
    });
  }
};

// ========== Update Category (Admin Only) ==========
// Updates top-level category info
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid category ID format" });
    }

    const { name, description, order, status, feature, featured, subCategories } = req.body;
    const updateDoc = {
      $set: {
        updatedAt: new Date(),
      },
    };

    if (name !== undefined) updateDoc.$set.name = name.trim();
    if (description !== undefined) updateDoc.$set.description = description;
    if (order !== undefined) updateDoc.$set.order = Number(order);
    if (status !== undefined) updateDoc.$set.status = status;
    if (feature !== undefined || featured !== undefined) {
      updateDoc.$set.feature = Boolean(feature ?? featured);
    }
    if (subCategories !== undefined && Array.isArray(subCategories)) {
      updateDoc.$set.subCategories = subCategories.map((sub, index) => ({
        id: sub.id !== undefined ? sub.id : index + 1,
        name: sub.name,
        status: sub.status || "active",
        order: sub.order !== undefined ? Number(sub.order) : index + 1,
      }));
    }

    const result = await categoryCollection.updateOne(
      { _id: new ObjectId(id) },
      updateDoc
    );

    if (result.matchedCount === 0) {
      return res.status(404).send({ success: false, message: "Category not found" });
    }

    const updatedCategory = await categoryCollection.findOne({ _id: new ObjectId(id) });

    res.send({
      success: true,
      message: "Category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating category",
      error: error.message,
    });
  }
};

// ========== Add SubCategory (Admin Only) ==========
// Appends a new subcategory to a category
const addSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid category ID format" });
    }

    const { name, status = "active", order, id: subId } = req.body;
    if (!name) {
      return res.status(400).send({ success: false, message: "Subcategory name is required" });
    }

    const category = await categoryCollection.findOne({ _id: new ObjectId(id) });
    if (!category) {
      return res.status(404).send({ success: false, message: "Category not found" });
    }

    const existingSubs = category.subCategories || [];
    const calculatedId = subId !== undefined ? subId : (existingSubs.length > 0 ? Math.max(...existingSubs.map((s) => Number(s.id) || 0)) + 1 : 1);

    const newSub = {
      id: calculatedId,
      name: name.trim(),
      status,
      order: order !== undefined ? Number(order) : existingSubs.length + 1,
    };

    await categoryCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $push: { subCategories: newSub },
        $set: { updatedAt: new Date() },
      }
    );

    res.status(201).send({
      success: true,
      message: "Subcategory added successfully",
      data: newSub,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error adding subcategory",
      error: error.message,
    });
  }
};

// ========== Update SubCategory (Admin Only) ==========
// Modifies an existing subcategory inside a category
const updateSubCategory = async (req, res) => {
  try {
    const { id, subId } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid category ID format" });
    }

    const { name, status, order } = req.body;
    const numericSubId = !isNaN(Number(subId)) ? Number(subId) : subId;

    const category = await categoryCollection.findOne({
      _id: new ObjectId(id),
      $or: [{ "subCategories.id": subId }, { "subCategories.id": numericSubId }],
    });

    if (!category) {
      return res.status(404).send({ success: false, message: "Subcategory not found" });
    }

    const updatedSubCategories = category.subCategories.map((sub) => {
      if (sub.id === subId || sub.id === numericSubId) {
        return {
          ...sub,
          name: name !== undefined ? name.trim() : sub.name,
          status: status !== undefined ? status : sub.status,
          order: order !== undefined ? Number(order) : sub.order,
        };
      }
      return sub;
    });

    await categoryCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          subCategories: updatedSubCategories,
          updatedAt: new Date(),
        },
      }
    );

    const updated = await categoryCollection.findOne({ _id: new ObjectId(id) });

    res.send({
      success: true,
      message: "Subcategory updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating subcategory",
      error: error.message,
    });
  }
};

// ========== Delete SubCategory (Admin Only) ==========
// Removes a subcategory from a category
const deleteSubCategory = async (req, res) => {
  try {
    const { id, subId } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid category ID format" });
    }

    const numericSubId = !isNaN(Number(subId)) ? Number(subId) : subId;

    const result = await categoryCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $pull: {
          subCategories: {
            id: { $in: [subId, numericSubId] },
          },
        },
        $set: { updatedAt: new Date() },
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).send({ success: false, message: "Category not found" });
    }

    res.send({
      success: true,
      message: "Subcategory deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error deleting subcategory",
      error: error.message,
    });
  }
};

// ========== Delete Category (Admin Only) ==========
// Deletes a top-level category and all its nested subcategories
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid category ID format" });
    }

    const result = await categoryCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).send({ success: false, message: "Category not found" });
    }

    res.send({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error deleting category",
      error: error.message,
    });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  addSubCategory,
  updateSubCategory,
  deleteSubCategory,
  deleteCategory,
};

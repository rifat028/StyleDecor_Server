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
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

// ========== Get All Categories ==========
// Retrieves all categories with optional search, status filtering, and sorting
const getAllCategories = async (req, res) => {
  try {
    const { status, search } = req.query;
    const query = {};

    if (status && status !== "all") {
      query.status = status;
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

    res.send({
      success: true,
      totalCount: categories.length,
      data: categories,
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

    res.send({ success: true, data: category });
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
    const { name, description, order, status = "active", subCategories = [] } = req.body;

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
      id: sub.id || `sub_${Date.now()}_${index}`,
      name: sub.name,
      slug: sub.slug || generateSlug(sub.name),
      status: sub.status || "active",
      order: sub.order !== undefined ? Number(sub.order) : index + 1,
    }));

    const newCategory = {
      name: name.trim(),
      status,
      order: order !== undefined ? Number(order) : 1,
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

    const { name, description, order, status, subCategories } = req.body;
    const updateDoc = {
      $set: {
        updatedAt: new Date(),
      },
    };

    if (name !== undefined) updateDoc.$set.name = name.trim();
    if (description !== undefined) updateDoc.$set.description = description;
    if (order !== undefined) updateDoc.$set.order = Number(order);
    if (status !== undefined) updateDoc.$set.status = status;
    if (subCategories !== undefined && Array.isArray(subCategories)) {
      updateDoc.$set.subCategories = subCategories.map((sub, index) => ({
        id: sub.id || `sub_${Date.now()}_${index}`,
        name: sub.name,
        slug: sub.slug || generateSlug(sub.name),
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

    const { name, slug, status = "active", order } = req.body;
    if (!name) {
      return res.status(400).send({ success: false, message: "Subcategory name is required" });
    }

    const newSub = {
      id: `sub_${Date.now()}`,
      name: name.trim(),
      slug: slug || generateSlug(name),
      status,
      order: order !== undefined ? Number(order) : 1,
    };

    const result = await categoryCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $push: { subCategories: newSub },
        $set: { updatedAt: new Date() },
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).send({ success: false, message: "Category not found" });
    }

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
// Updates an individual subcategory (e.g. status toggle, name, order)
const updateSubCategory = async (req, res) => {
  try {
    const { id, subId } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid category ID format" });
    }

    const { name, slug, status, order } = req.body;
    const updateFields = { updatedAt: new Date() };

    if (name !== undefined) updateFields["subCategories.$.name"] = name.trim();
    if (slug !== undefined) updateFields["subCategories.$.slug"] = slug.trim();
    if (status !== undefined) updateFields["subCategories.$.status"] = status;
    if (order !== undefined) updateFields["subCategories.$.order"] = Number(order);

    const result = await categoryCollection.updateOne(
      { _id: new ObjectId(id), "subCategories.id": subId },
      { $set: updateFields }
    );

    if (result.matchedCount === 0) {
      return res.status(404).send({ success: false, message: "Category or subcategory not found" });
    }

    res.send({
      success: true,
      message: "Subcategory updated successfully",
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

    const result = await categoryCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $pull: { subCategories: { id: subId } },
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

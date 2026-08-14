// ========== Imports ==========
const { categoryCollection } = require("../models/collections");
const { ObjectId } = require("mongodb");

// ========== Get All Categories ==========
const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryCollection.find({}).sort({ order: 1 }).toArray();
    res.send(categories);
  } catch (error) {
    res.status(500).send({ message: "Error fetching categories", error });
  }
};

// ========== Create Category ==========
const createCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    // You could add validation here if needed
    const result = await categoryCollection.insertOne(newCategory);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error creating category", error });
  }
};

// ========== Update Category ==========
const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    // Remove _id from updatedData if present so MongoDB doesn't throw error
    if (updatedData._id) {
        delete updatedData._id;
    }

    const result = await categoryCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error updating category", error });
  }
};

// ========== Delete Category ==========
const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await categoryCollection.deleteOne({ _id: new ObjectId(id) });
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error deleting category", error });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};

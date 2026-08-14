// ========== Imports ==========
const { ObjectId } = require("mongodb");
const { decoratorReviewCollection, agentReviewCollection } = require("../models/collections");

// ========== Get Reviews for Decorator Agency ==========
const getReviewsByDecorator = async (req, res) => {
  try {
    const { decoratorId } = req.params;
    if (!ObjectId.isValid(decoratorId)) {
      return res.status(400).send({ success: false, message: "Invalid decorator ID" });
    }

    const reviews = await decoratorReviewCollection
      .find({
        decoratorId: new ObjectId(decoratorId),
        status: "published",
      })
      .sort({ createdAt: -1 })
      .toArray();

    res.send({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching reviews for decorator",
      error: error.message,
    });
  }
};

// ========== Get Reviews for Agent ==========
const getReviewsByAgent = async (req, res) => {
  try {
    const { agentId } = req.params;
    if (!ObjectId.isValid(agentId)) {
      return res.status(400).send({ success: false, message: "Invalid agent ID" });
    }

    const reviews = await agentReviewCollection
      .find({
        agentId: new ObjectId(agentId),
        status: "published",
      })
      .sort({ createdAt: -1 })
      .toArray();

    res.send({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching reviews for agent",
      error: error.message,
    });
  }
};

module.exports = {
  getReviewsByDecorator,
  getReviewsByAgent,
};

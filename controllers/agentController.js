// ========== Imports ==========
const { ObjectId } = require("mongodb");
const { agentCollection } = require("../models/collections");

// ========== Get Agents by Decorator ID ==========
const getAgentsByDecorator = async (req, res) => {
  try {
    const { decoratorId } = req.params;
    if (!ObjectId.isValid(decoratorId)) {
      return res.status(400).send({ success: false, message: "Invalid decorator ID" });
    }

    const agents = await agentCollection
      .find({
        decoratorId: new ObjectId(decoratorId),
        status: "active",
      })
      .sort({ experienceYears: -1, _id: 1 })
      .toArray();

    res.send({
      success: true,
      count: agents.length,
      data: agents,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching agents for decorator",
      error: error.message,
    });
  }
};

// ========== Get All Agents ==========
const getAgents = async (req, res) => {
  try {
    const { decoratorId, status = "active", area } = req.query;
    const query = {};

    if (status && status !== "all") query.status = status;
    if (decoratorId && ObjectId.isValid(decoratorId)) {
      query.decoratorId = new ObjectId(decoratorId);
    }
    if (area && area !== "all") {
      query.assignedArea = area;
    }

    const agents = await agentCollection.find(query).toArray();
    res.send({ success: true, count: agents.length, data: agents });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error fetching agents", error: error.message });
  }
};

// ========== Get Single Agent by ID ==========
const getAgentById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid agent ID" });
    }

    const agent = await agentCollection.findOne({ _id: new ObjectId(id) });
    if (!agent) {
      return res.status(404).send({ success: false, message: "Agent not found" });
    }

    res.send({ success: true, data: agent });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error fetching agent", error: error.message });
  }
};

module.exports = {
  getAgentsByDecorator,
  getAgents,
  getAgentById,
};

// ========== Imports ==========
const { ObjectId } = require("mongodb");
const { decoratorCollection } = require("../models/collections");

// ========== Create Decorator Request ==========
// Allows a user to apply to become a decorator
const createDecoratorRequest = async (req, res) => {
  try {
    const decoratorData = req.body;
    if (decoratorData.email !== req.decoded_email) {
      return res.status(403).send({ message: "Forbidden access" });
    }
    decoratorData.createdAt = new Date().toISOString().split("T")[0];
    const result = await decoratorCollection.insertOne(decoratorData);
    res.send({
      acknowledged: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    res.status(500).send({ message: "Error creating decorator request", error });
  }
};

// ========== Get Decorators ==========
// Retrieves decorators with optional filters (e.g. status: pending/accepted)
const getDecorators = async (req, res) => {
  try {
    const { status, location } = req.query;
    let query = {};
    if (status) query.status = status;
    if (location) query.location = location;
    const result = await decoratorCollection
      .find(query)
      .sort({ _id: -1 })
      .toArray();
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching decorators", error });
  }
};

// ========== Get Top Rated Decorators ==========
// Retrieves the top 6 decorators for the public homepage based on ratings/experience
const getTopRatedDecorators = async (req, res) => {
  try {
    const decorators = await decoratorCollection
      .find({ status: "accepted" })
      .sort({ rating: -1, taskCompleted: -1, experience: -1 })
      .limit(6)
      .project({
        name: 1,
        photoUrl: 1,
        experience: 1,
        rating: 1,
        taskCompleted: 1,
      })
      .toArray();
    res.send(decorators);
  } catch (error) {
    res.status(500).send({ message: "Error fetching top rated decorators", error });
  }
};

// ========== Get Decorator By Email ==========
// Retrieves details of a single decorator
const getDecoratorByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    if (email !== req.decoded_email) {
      return res.status(403).send({ message: "forbidden access...!" });
    }
    const result = await decoratorCollection.findOne({ email });
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching decorator", error });
  }
};

// ========== Update Decorator Task Count ==========
// Increments pending task count when a new booking is assigned to them
const updateDecoratorTaskCount = async (req, res) => {
  try {
    const id = req.params.id;
    const { incPendingBy = 1 } = req.body;
    const incValue = Number(incPendingBy);
    const result = await decoratorCollection.updateOne(
      { _id: new ObjectId(id) },
      { $inc: { taskPending: incValue } }
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error updating task count", error });
  }
};

// ========== Update Decorator Status ==========
// Approves/rejects decorator applications or updates their completion metrics
const updateDecoratorStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const { status, taskCompleted, taskPending } = req.body;
    const updateDoc = {
      $set: {
        status: status || "accepted",
        taskCompleted: Number(taskCompleted ?? 0),
        taskPending: Number(taskPending ?? 0),
      },
    };
    const result = await decoratorCollection.updateOne(
      { _id: new ObjectId(id) },
      updateDoc
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error updating decorator status", error });
  }
};

// ========== Delete Decorator ==========
// Removes a decorator profile completely
const deleteDecorator = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await decoratorCollection.deleteOne({
      _id: new ObjectId(id),
    });
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error deleting decorator", error });
  }
};

module.exports = {
  createDecoratorRequest,
  getDecorators,
  getTopRatedDecorators,
  getDecoratorByEmail,
  updateDecoratorTaskCount,
  updateDecoratorStatus,
  deleteDecorator,
};

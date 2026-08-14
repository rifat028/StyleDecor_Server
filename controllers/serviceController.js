// ========== Imports ==========
const { ObjectId } = require("mongodb");
const { serviceCollection } = require("../models/collections");

// ========== Create Service ==========
// Inserts a new service into the database
const createService = async (req, res) => {
  try {
    const newService = req.body;
    const result = await serviceCollection.insertOne(newService);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error creating service", error });
  }
};

// ========== Update Service ==========
// Updates an existing service by its ID
const updateService = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedService = req.body;
    const updateDoc = {
      $set: {
        serviceName: updatedService.serviceName,
        serviceCategory: updatedService.serviceCategory,
        description: updatedService.description,
        cost: updatedService.cost,
        unit: updatedService.unit,
        rating: updatedService.rating,
        totalReviews: updatedService.totalReviews,
      },
    };
    const result = await serviceCollection.updateOne(
      { _id: new ObjectId(id) },
      updateDoc
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error updating service", error });
  }
};

// ========== Delete Service ==========
// Deletes a service by its ID
const deleteService = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await serviceCollection.deleteOne({
      _id: new ObjectId(id),
    });
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error deleting service", error });
  }
};

// ========== Get All Services ==========
// Retrieves all services, supporting query filters like search text, category, and cost range
const getServices = async (req, res) => {
  try {
    const { search_text, category, min_cost, max_cost } = req.query;
    let query = {};
    let sort = { _id: -1 };
    
    if (search_text) {
      query.serviceName = { $regex: search_text, $options: "i" };
    }
    
    if (category && category !== "all") query.serviceCategory = category;
    
    if (min_cost || max_cost) {
      query.cost = {};
      sort = { cost: 1 };
    }
    if (min_cost) query.cost.$gte = Number(min_cost);
    if (max_cost) query.cost.$lte = Number(max_cost);
    
    const cursor = serviceCollection.find(query).sort(sort);
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching services", error });
  }
};

// ========== Get Latest Services ==========
// Retrieves the 8 most recently added services
const getLatestServices = async (req, res) => {
  try {
    const cursor = serviceCollection.find({}).sort({ _id: -1 }).limit(8);
    const result = await cursor.toArray();
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching latest services", error });
  }
};

// ========== Get Service By ID ==========
// Retrieves a single service by its ID
const getServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    const query = {
      _id: new ObjectId(id),
    };
    const result = await serviceCollection.findOne(query);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching service", error });
  }
};

module.exports = {
  createService,
  updateService,
  deleteService,
  getServices,
  getLatestServices,
  getServiceById,
};

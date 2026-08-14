// ========== Imports ==========
const { ObjectId } = require("mongodb");
const { serviceCollection, decoratorCollection } = require("../models/collections");

// ========== Create Service ==========
// Inserts a new service into the database
const createService = async (req, res) => {
  try {
    const newService = {
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    if (newService.decoratorId && typeof newService.decoratorId === "string") {
      newService.decoratorId = new ObjectId(newService.decoratorId);
    }

    const result = await serviceCollection.insertOne(newService);
    res.send({ success: true, message: "Service created successfully", insertedId: result.insertedId });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error creating service", error: error.message });
  }
};

// ========== Update Service ==========
// Updates an existing service by its ID
const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid service ID" });
    }

    const updatedData = {
      ...req.body,
      updatedAt: new Date(),
    };
    delete updatedData._id;

    if (updatedData.decoratorId && typeof updatedData.decoratorId === "string") {
      updatedData.decoratorId = new ObjectId(updatedData.decoratorId);
    }

    const result = await serviceCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );

    res.send({ success: true, message: "Service updated successfully", result });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error updating service", error: error.message });
  }
};

// ========== Delete Service ==========
// Deletes a service by its ID
const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid service ID" });
    }

    const result = await serviceCollection.deleteOne({
      _id: new ObjectId(id),
    });

    res.send({ success: true, message: "Service deleted successfully", result });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error deleting service", error: error.message });
  }
};

// ========== Get All Services ==========
// Retrieves all services, supporting query filters like search text, category, decoratorId, status, and price range
const getServices = async (req, res) => {
  try {
    const {
      search_text,
      search,
      category,
      subCategory,
      decoratorId,
      status = "active",
      min_cost,
      max_cost,
      sort = "newest",
      page = 1,
      limit = 12,
    } = req.query;

    let query = {};

    // Status filter
    if (status && status !== "all") {
      query.status = status;
    }

    // Decorator ID filter
    if (decoratorId) {
      if (ObjectId.isValid(decoratorId)) {
        query.decoratorId = new ObjectId(decoratorId);
      }
    }

    // Keyword Search (supports title, serviceName, shortDescription)
    const keyword = search_text || search;
    if (keyword && keyword.trim() !== "") {
      const searchRegex = { $regex: keyword.trim(), $options: "i" };
      query.$or = [
        { title: searchRegex },
        { serviceName: searchRegex },
        { shortDescription: searchRegex },
        { "category.name": searchRegex },
        { serviceCategory: searchRegex },
      ];
    }

    // Category filter
    if (category && category !== "all") {
      query.$or = [
        { "category.name": category },
        { "category.slug": category },
        { serviceCategory: category },
      ];
    }

    // SubCategory filter
    if (subCategory && subCategory !== "all") {
      query["subCategory.name"] = subCategory;
    }

    // Price / Cost range (supports pricing.basePrice or cost)
    if (min_cost || max_cost) {
      const min = Number(min_cost) || 0;
      const max = Number(max_cost) || Infinity;
      query.$or = [
        { "pricing.basePrice": { $gte: min, ...(max !== Infinity && { $lte: max }) } },
        { cost: { $gte: min, ...(max !== Infinity && { $lte: max }) } },
      ];
    }

    // Sorting
    let sortObj = { _id: -1 };
    if (sort === "price_asc") sortObj = { "pricing.basePrice": 1, cost: 1 };
    if (sort === "price_desc") sortObj = { "pricing.basePrice": -1, cost: -1 };
    if (sort === "rating") sortObj = { "metrics.rating": -1, rating: -1 };
    if (sort === "popular") sortObj = { "metrics.completedBookings": -1, totalReviews: -1 };

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.max(1, parseInt(limit, 10) || 12);
    const skip = (pageNum - 1) * limitNum;

    const totalCount = await serviceCollection.countDocuments(query);
    const services = await serviceCollection
      .find(query)
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .toArray();

    res.send({
      success: true,
      totalCount,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.max(1, Math.ceil(totalCount / limitNum)),
      data: services,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error fetching services", error: error.message });
  }
};

// ========== Get Services by Decorator Agency ==========
// Retrieves all active services created by a specific decorator
const getServicesByDecorator = async (req, res) => {
  try {
    const { decoratorId } = req.params;
    if (!ObjectId.isValid(decoratorId)) {
      return res.status(400).send({ success: false, message: "Invalid decorator ID format" });
    }

    const services = await serviceCollection
      .find({
        decoratorId: new ObjectId(decoratorId),
        status: "active",
      })
      .sort({ "metrics.rating": -1, _id: -1 })
      .toArray();

    res.send({
      success: true,
      count: services.length,
      data: services,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching decorator services",
      error: error.message,
    });
  }
};

// ========== Get Latest Services ==========
// Retrieves the 8 most recently added services
const getLatestServices = async (req, res) => {
  try {
    const services = await serviceCollection
      .find({ status: "active" })
      .sort({ _id: -1 })
      .limit(8)
      .toArray();

    res.send({ success: true, data: services });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error fetching latest services", error: error.message });
  }
};

// ========== Get Service By ID ==========
// Retrieves a single service by its ID
const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid service ID" });
    }

    const service = await serviceCollection.findOne({ _id: new ObjectId(id) });
    if (!service) {
      return res.status(404).send({ success: false, message: "Service not found" });
    }

    // Attach decorator info if available
    if (service.decoratorId) {
      const decorator = await decoratorCollection.findOne({ _id: service.decoratorId });
      service.decorator = decorator;
    }

    res.send({ success: true, data: service });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error fetching service", error: error.message });
  }
};

module.exports = {
  createService,
  updateService,
  deleteService,
  getServices,
  getServicesByDecorator,
  getLatestServices,
  getServiceById,
};

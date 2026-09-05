// ========== Imports ==========
const { ObjectId } = require("mongodb");
const {
  serviceCollection,
  decoratorCollection,
  userCollection,
} = require("../models/collections");
const { resolveDateRange, buildDateQuery } = require("../utils/dateFilter");

// Helper to generate SEO friendly slugs
const generateSlug = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

// ========== Get All Services (Public & Filtered) ==========
// Supports search, category, subcategory, decoratorId, city, price range, sorting & pagination
const getServices = async (req, res) => {
  try {
    const {
      search,
      search_text,
      category,
      subCategory,
      decoratorId,
      district,
      division,
      city,
      minPrice,
      maxPrice,
      min_cost,
      max_cost,
      featured,
      status = "active",
      sort = "newest",
      page = 1,
      limit = 12,
      timeFilter = "max",
      startDate,
      endDate,
    } = req.query;

    const query = {};

    // Time / Date Filter
    if (timeFilter && timeFilter !== "max") {
      const range = resolveDateRange(timeFilter, startDate, endDate);
      const dateQuery = buildDateQuery(["createdAt"], range);
      if (dateQuery) {
        query.$and = query.$and || [];
        query.$and.push(dateQuery);
      }
    }

    // 1. Status Filter
    if (status && status !== "all") {
      if (status === "active") {
        query.$and = query.$and || [];
        query.$and.push({
          $or: [{ status: "active" }, { status: { $exists: false } }],
        });
      } else {
        query.status = status;
      }
    }

    // 2. Decorator Filter
    if (decoratorId) {
      if (ObjectId.isValid(decoratorId)) {
        query.decoratorId = new ObjectId(decoratorId);
      }
    }

    // 3. Featured Filter
    if (featured === "true") {
      query.featured = true;
    }

    // 4. Keyword Search
    const keyword = search || search_text;
    if (keyword && keyword.trim() !== "") {
      const searchRegex = { $regex: keyword.trim(), $options: "i" };
      query.$or = [
        { title: searchRegex },
        { serviceName: searchRegex },
        { shortDescription: searchRegex },
        { fullDescription: searchRegex },
        { category: searchRegex },
        { "category.name": searchRegex },
        { "subCategory.name": searchRegex },
      ];
    }

    // 5. Category Filter
    if (category && category !== "all") {
      query.$or = [
        { category: { $regex: category.trim(), $options: "i" } },
        { "category.name": { $regex: category.trim(), $options: "i" } },
        { "category.slug": { $regex: category.trim(), $options: "i" } },
        { serviceCategory: { $regex: category.trim(), $options: "i" } },
      ];
    }

    // 6. SubCategory Filter
    if (subCategory && subCategory !== "all") {
      query.$or = [
        { "subCategory.name": { $regex: subCategory.trim(), $options: "i" } },
        { "subCategory.slug": { $regex: subCategory.trim(), $options: "i" } },
        { "subCategory.id": subCategory.trim() },
      ];
    }

    // 7. District / Division / City Filter (checks if decorator operates in that district/division)
    const locationFilters = [];
    if (district && district !== "all") {
      locationFilters.push(
        { "contactInfo.district": { $regex: district.trim(), $options: "i" } },
        { serviceAreas: { $regex: district.trim(), $options: "i" } }
      );
    }
    if (division && division !== "all") {
      locationFilters.push({ "contactInfo.division": { $regex: division.trim(), $options: "i" } });
    }
    if (city && city !== "all") {
      locationFilters.push(
        { "contactInfo.district": { $regex: city.trim(), $options: "i" } },
        { "contactInfo.division": { $regex: city.trim(), $options: "i" } },
        { "contactInfo.city": { $regex: city.trim(), $options: "i" } },
        { serviceAreas: { $regex: city.trim(), $options: "i" } }
      );
    }

    if (locationFilters.length > 0) {
      const decoratorsInLocation = await decoratorCollection
        .find({ $or: locationFilters })
        .project({ _id: 1 })
        .toArray();

      const decoratorIds = decoratorsInLocation.map((d) => d._id);
      query.decoratorId = { $in: decoratorIds };
    }

    // 8. Price Range Filter (supports new pricing structure & legacy cost)
    const minP = Number(minPrice || min_cost);
    const maxP = Number(maxPrice || max_cost);
    if (!isNaN(minP) || !isNaN(maxP)) {
      const priceConditions = [];
      const min = !isNaN(minP) ? minP : 0;
      const max = !isNaN(maxP) ? maxP : Infinity;

      priceConditions.push({
        "pricing.discountedPrice": {
          $gte: min,
          ...(max !== Infinity && { $lte: max }),
        },
      });
      priceConditions.push({
        "pricing.basePrice": {
          $gte: min,
          ...(max !== Infinity && { $lte: max }),
        },
      });
      priceConditions.push({
        cost: {
          $gte: min,
          ...(max !== Infinity && { $lte: max }),
        },
      });

      if (query.$or) {
        query.$and = [{ $or: query.$or }, { $or: priceConditions }];
        delete query.$or;
      } else {
        query.$or = priceConditions;
      }
    }

    // 9. Sorting
    let sortObj = { createdAt: -1, _id: 1 };
    if (sort === "price_asc") {
      sortObj = { "pricing.discountedPrice": 1, "pricing.basePrice": 1, cost: 1, _id: 1 };
    } else if (sort === "price_desc") {
      sortObj = { "pricing.discountedPrice": -1, "pricing.basePrice": -1, cost: -1, _id: 1 };
    } else if (sort === "rating") {
      sortObj = { "metrics.rating": -1, rating: -1, _id: 1 };
    } else if (sort === "popular") {
      sortObj = { "metrics.bookingCount": -1, "metrics.reviewCount": -1, _id: 1 };
    } else if (sort === "name" || sort === "title") {
      sortObj = { title: 1, serviceName: 1, _id: 1 };
    }

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

    // Populate Decorator agency info for each service
    const decoratorIds = [...new Set(services.map((s) => s.decoratorId).filter(Boolean))];
    const decorators = await decoratorCollection
      .find({ _id: { $in: decoratorIds } })
      .project({
        businessName: 1,
        logo: 1,
        "contactInfo.district": 1,
        "contactInfo.division": 1,
        "contactInfo.city": 1,
        "contactInfo.phone": 1,
        "contactInfo.address": 1,
        "metrics.rating": 1,
        verification: 1,
      })
      .toArray();

    const decoratorMap = new Map(decorators.map((d) => [d._id.toString(), d]));

    const enrichedServices = services.map((s) => {
      const dec = s.decoratorId ? decoratorMap.get(s.decoratorId.toString()) : null;
      return {
        ...s,
        decorator: dec || null,
      };
    });

    res.send({
      success: true,
      totalCount,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.max(1, Math.ceil(totalCount / limitNum)),
      data: enrichedServices,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching services",
      error: error.message,
    });
  }
};

// ========== Get Latest Services (Home Highlights) ==========
const getLatestServices = async (req, res) => {
  try {
    const { limit = 8 } = req.query;
    const services = await serviceCollection
      .find({ $or: [{ status: "active" }, { status: { $exists: false } }] })
      .sort({ createdAt: -1, _id: -1 })
      .limit(Number(limit))
      .toArray();

    // Populate Decorators
    const decoratorIds = [...new Set(services.map((s) => s.decoratorId).filter(Boolean))];
    const decorators = await decoratorCollection
      .find({ _id: { $in: decoratorIds } })
      .project({
        businessName: 1,
        logo: 1,
        "contactInfo.district": 1,
        "contactInfo.division": 1,
        "contactInfo.city": 1,
        "contactInfo.phone": 1,
        verification: 1,
      })
      .toArray();
    const decoratorMap = new Map(decorators.map((d) => [d._id.toString(), d]));

    const enriched = services.map((s) => ({
      ...s,
      decorator: s.decoratorId ? decoratorMap.get(s.decoratorId.toString()) : null,
    }));

    res.send({ success: true, count: enriched.length, data: enriched });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching latest services",
      error: error.message,
    });
  }
};

// ========== Get Featured / Top Rated Services ==========
const getTopRatedServices = async (req, res) => {
  try {
    const { limit = 6 } = req.query;
    const services = await serviceCollection
      .find({ status: "active" })
      .sort({ "metrics.rating": -1, "metrics.bookingCount": -1, _id: 1 })
      .limit(Number(limit))
      .toArray();

    const decoratorIds = [...new Set(services.map((s) => s.decoratorId).filter(Boolean))];
    const decorators = await decoratorCollection
      .find({ _id: { $in: decoratorIds } })
      .project({
        businessName: 1,
        logo: 1,
        "contactInfo.city": 1,
        verification: 1,
      })
      .toArray();
    const decoratorMap = new Map(decorators.map((d) => [d._id.toString(), d]));

    const enriched = services.map((s) => ({
      ...s,
      decorator: s.decoratorId ? decoratorMap.get(s.decoratorId.toString()) : null,
    }));

    res.send({ success: true, count: enriched.length, data: enriched });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching top rated services",
      error: error.message,
    });
  }
};

// ========== Get Services by Decorator Agency ==========
const getServicesByDecorator = async (req, res) => {
  try {
    const { decoratorId } = req.params;
    if (!ObjectId.isValid(decoratorId)) {
      return res.status(400).send({ success: false, message: "Invalid decorator ID format" });
    }

    const { status = "active" } = req.query;
    const query = { decoratorId: new ObjectId(decoratorId) };
    if (status !== "all") query.status = status;

    const services = await serviceCollection
      .find(query)
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

// ========== Get Service By ID ==========
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

    // Attach full Decorator profile
    if (service.decoratorId) {
      const decorator = await decoratorCollection.findOne({ _id: service.decoratorId });
      service.decorator = decorator || null;
    }

    res.send({ success: true, data: service });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching service by ID",
      error: error.message,
    });
  }
};

// ========== Create Service (Authenticated Decorator / Admin) ==========
const createService = async (req, res) => {
  try {
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" });
    }

    const {
      title,
      category,
      subCategory,
      shortDescription,
      fullDescription,
      pricing = {},
      packages = [],
      images = [],
      coverImage,
      specifications = {},
      inclusions = [],
      exclusions = [],
      decoratorId,
    } = req.body;

    if (!title || !category) {
      return res.status(400).send({
        success: false,
        message: "Title and Category are required",
      });
    }

    // Determine decoratorId
    let decId = decoratorId;
    if (user.role === "decorator") {
      const myDec = await decoratorCollection.findOne({ userId: user._id });
      if (myDec) decId = myDec._id;
    }

    if (!decId || !ObjectId.isValid(decId)) {
      return res.status(400).send({
        success: false,
        message: "Valid decorator agency ID is required to create a service",
      });
    }

    const newService = {
      decoratorId: new ObjectId(decId),
      title: title.trim(),
      slug: `${generateSlug(title)}-${Date.now().toString().slice(-4)}`,
      category: typeof category === "string" ? category.trim() : category.name,
      subCategory: typeof subCategory === "object" ? subCategory : { name: subCategory },
      shortDescription: shortDescription?.trim() || "",
      fullDescription: fullDescription?.trim() || "",
      pricing: {
        basePrice: Number(pricing.basePrice) || 0,
        discountedPrice: Number(pricing.discountedPrice) || Number(pricing.basePrice) || 0,
        unit: pricing.unit || "per_event",
        depositRequiredPercent: Number(pricing.depositRequiredPercent) || 25,
      },
      packages: Array.isArray(packages) ? packages : [],
      images: Array.isArray(images) && images.length > 0 ? images : [coverImage || "https://images.unsplash.com/photo-1519741497674-611481863552?w=800"],
      coverImage: coverImage || images[0] || "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      specifications: {
        setupDurationHours: Number(specifications.setupDurationHours) || 6,
        teardownDurationHours: Number(specifications.teardownDurationHours) || 2,
        minimumNoticeDays: Number(specifications.minimumNoticeDays) || 3,
        spaceRequirement: specifications.spaceRequirement || "Standard Hall/Stage",
        isOutdoorSuitable: Boolean(specifications.isOutdoorSuitable),
      },
      inclusions: Array.isArray(inclusions) ? inclusions : [],
      exclusions: Array.isArray(exclusions) ? exclusions : [],
      metrics: {
        rating: 5.0,
        reviewCount: 0,
        bookingCount: 0,
      },
      status: "active",
      featured: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await serviceCollection.insertOne(newService);

    res.send({
      success: true,
      message: "Service created successfully",
      insertedId: result.insertedId,
      data: { _id: result.insertedId, ...newService },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error creating service",
      error: error.message,
    });
  }
};

// ========== Update Service (Self / Admin) ==========
const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid service ID" });
    }

    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });
    const existingService = await serviceCollection.findOne({ _id: new ObjectId(id) });

    if (!existingService) {
      return res.status(404).send({ success: false, message: "Service not found" });
    }

    // Permission Check: If decorator, verify ownership
    if (user.role === "decorator") {
      const myDec = await decoratorCollection.findOne({ userId: user._id });
      if (!myDec || !existingService.decoratorId.equals(myDec._id)) {
        return res.status(403).send({
          success: false,
          message: "You can only edit services belonging to your agency",
        });
      }
    }

    const updateFields = { ...req.body, updatedAt: new Date() };
    delete updateFields._id;
    delete updateFields.decoratorId; // Prevent changing decorator owner

    if (updateFields.title && updateFields.title !== existingService.title) {
      updateFields.slug = `${generateSlug(updateFields.title)}-${id.slice(-4)}`;
    }

    await serviceCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateFields }
    );

    const updated = await serviceCollection.findOne({ _id: new ObjectId(id) });

    res.send({
      success: true,
      message: "Service updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating service",
      error: error.message,
    });
  }
};

// ========== Update Service Status (Active / Inactive) ==========
const updateServiceStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid service ID" });
    }

    if (!["active", "inactive", "archived"].includes(status)) {
      return res.status(400).send({
        success: false,
        message: "Invalid status. Allowed: active, inactive, archived",
      });
    }

    await serviceCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status, updatedAt: new Date() } }
    );

    res.send({
      success: true,
      message: `Service status updated to ${status}`,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating service status",
      error: error.message,
    });
  }
};

// ========== Delete Service (Self / Admin) ==========
const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid service ID" });
    }

    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });
    const existingService = await serviceCollection.findOne({ _id: new ObjectId(id) });

    if (!existingService) {
      return res.status(404).send({ success: false, message: "Service not found" });
    }

    // Permission Check: Admin cannot delete services
    if (user?.role === "admin") {
      return res.status(403).send({
        success: false,
        message: "Administrators are not permitted to delete services",
      });
    }

    if (user.role === "decorator") {
      const myDec = await decoratorCollection.findOne({ userId: user._id });
      if (!myDec || !existingService.decoratorId.equals(myDec._id)) {
        return res.status(403).send({
          success: false,
          message: "You can only delete services belonging to your agency",
        });
      }
    }

    await serviceCollection.deleteOne({ _id: new ObjectId(id) });

    res.send({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error deleting service",
      error: error.message,
    });
  }
};

// ========== Get Service Stats (Admin) ==========
const getServiceStats = async (req, res) => {
  try {
    const { timeFilter = "max", startDate, endDate } = req.query;
    const range = resolveDateRange(timeFilter, startDate, endDate);
    const dateQuery = buildDateQuery(["createdAt"], range);
    const baseQuery = dateQuery || {};

    const allServices = await serviceCollection.find(baseQuery).toArray();
    const total = allServices.length;
    const active = allServices.filter((s) => s.status === "active" || !s.status).length;
    const inactive = allServices.filter((s) => s.status === "inactive").length;
    const featured = allServices.filter((s) => Boolean(s.featured)).length;

    const pipeline = [];
    if (dateQuery) {
      pipeline.push({ $match: dateQuery });
    }
    pipeline.push(
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
          avgPrice: { $avg: "$pricing.basePrice" },
        },
      },
      { $sort: { count: -1 } }
    );

    const categoryStats = await serviceCollection.aggregate(pipeline).toArray();

    res.send({
      success: true,
      data: {
        total,
        active,
        inactive,
        featured,
        byCategory: categoryStats,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching service stats",
      error: error.message,
    });
  }
};

module.exports = {
  getServices,
  getServiceStats,
  getLatestServices,
  getTopRatedServices,
  getServicesByDecorator,
  getServiceById,
  createService,
  updateService,
  updateServiceStatus,
  deleteService,
};

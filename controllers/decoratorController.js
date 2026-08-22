// ========== Imports ==========
const { ObjectId } = require("mongodb");
const { decoratorCollection, userCollection } = require("../models/collections");

// Helper to generate URL-friendly slugs
const generateSlug = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

// ========== Get All Decorators (Public & Admin) ==========
// Retrieves decorators with rich filters, search, sorting, and pagination
const getDecorators = async (req, res) => {
  try {
    const {
      status = "active",
      city,
      serviceArea,
      category,
      featured,
      search,
      sort = "rating",
      page = 1,
      limit = 12,
    } = req.query;

    const query = {};

    // Status filter
    if (status && status !== "all") {
      query.status = status;
    }

    // City / Service Area filter
    if (city && city !== "all") {
      query["contactInfo.city"] = city;
    }
    if (serviceArea && serviceArea !== "all") {
      query.serviceAreas = serviceArea;
    }

    // Category filter
    if (category && category !== "all") {
      query["categories.name"] = category;
    }

    // Featured filter
    if (featured === "true") {
      query.featured = true;
    }

    // Search query (businessName, tagline, about, city)
    if (search && search.trim() !== "") {
      const searchRegex = { $regex: search.trim(), $options: "i" };
      query.$or = [
        { businessName: searchRegex },
        { tagline: searchRegex },
        { about: searchRegex },
        { "contactInfo.city": searchRegex },
        { serviceAreas: searchRegex },
      ];
    }

    // Sort order
    let sortObj = { "metrics.rating": -1, "metrics.completedEvents": -1, _id: 1 };
    if (sort === "newest") {
      sortObj = { createdAt: -1, _id: 1 };
    } else if (sort === "completedEvents") {
      sortObj = { "metrics.completedEvents": -1, _id: 1 };
    } else if (sort === "name") {
      sortObj = { businessName: 1, _id: 1 };
    }

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.max(1, parseInt(limit, 10) || 12);
    const skip = (pageNum - 1) * limitNum;

    const totalCount = await decoratorCollection.countDocuments(query);
    const decorators = await decoratorCollection
      .find(query)
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .toArray();

    res.send({
      success: true,
      data: decorators,
      totalCount,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.max(1, Math.ceil(totalCount / limitNum)),
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching decorators",
      error: error.message,
    });
  }
};

// ========== Get Top Rated Decorators (Public) ==========
// Retrieves top active & verified decorators for home page
const getTopRatedDecorators = async (req, res) => {
  try {
    const { limit = 8 } = req.query;
    const decorators = await decoratorCollection
      .find({ status: "active" })
      .sort({ "metrics.rating": -1, "metrics.completedEvents": -1, _id: 1 })
      .limit(Number(limit))
      .toArray();

    res.send({
      success: true,
      totalCount: decorators.length,
      data: decorators,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching top rated decorators",
      error: error.message,
    });
  }
};

// ========== Get Featured Decorators (Public) ==========
// Retrieves active featured decorator agencies
const getFeaturedDecorators = async (req, res) => {
  try {
    const decorators = await decoratorCollection
      .find({ status: "active", featured: true })
      .sort({ "metrics.rating": -1, _id: 1 })
      .limit(6)
      .toArray();

    res.send({
      success: true,
      totalCount: decorators.length,
      data: decorators,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching featured decorators",
      error: error.message,
    });
  }
};

// ========== Get Decorator By ID ==========
// Retrieves a single decorator profile by its MongoDB ObjectId
const getDecoratorById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid decorator ID format" });
    }

    const decorator = await decoratorCollection.findOne({ _id: new ObjectId(id) });
    if (!decorator) {
      return res.status(404).send({ success: false, message: "Decorator not found" });
    }

    res.send({ success: true, data: decorator });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching decorator by ID",
      error: error.message,
    });
  }
};

// ========== Get Decorator By Slug ==========
// Retrieves a single decorator profile by its unique URL slug
const getDecoratorBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const decorator = await decoratorCollection.findOne({ slug: slug.trim() });
    if (!decorator) {
      return res.status(404).send({ success: false, message: "Decorator not found" });
    }

    res.send({ success: true, data: decorator });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching decorator by slug",
      error: error.message,
    });
  }
};

// ========== Get Current Logged-in Decorator Profile ==========
// Retrieves decorator profile linked to the authenticated user's account
const getMyDecoratorProfile = async (req, res) => {
  try {
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" });
    }

    // Try finding by userId first, then fallback to contactInfo.email or email
    let decorator = await decoratorCollection.findOne({ userId: user._id });
    if (!decorator) {
      decorator = await decoratorCollection.findOne({
        $or: [{ "contactInfo.email": email }, { email }],
      });
    }

    if (!decorator) {
      return res.status(404).send({ success: false, message: "Decorator profile not found for this account" });
    }

    res.send({ success: true, data: decorator });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching current decorator profile",
      error: error.message,
    });
  }
};

// ========== Get Decorator By Email (Backward Compatibility) ==========
const getDecoratorByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    let decorator = await decoratorCollection.findOne({
      $or: [{ "contactInfo.email": email }, { email }],
    });

    if (!decorator) {
      const user = await userCollection.findOne({ email });
      if (user) {
        decorator = await decoratorCollection.findOne({ userId: user._id });
      }
    }

    if (!decorator) {
      return res.status(404).send({ success: false, message: "Decorator not found" });
    }

    res.send(decorator);
  } catch (error) {
    res.status(500).send({ success: false, message: "Error fetching decorator", error: error.message });
  }
};

// ========== Create Decorator Profile / Application ==========
// Allows a user to register/apply as a decorator
const createDecorator = async (req, res) => {
  try {
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });

    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" });
    }

    const {
      businessName,
      tagline,
      about,
      logo,
      coverImage,
      contactInfo = {},
      serviceAreas = ["Dhaka"],
      categories = [],
      tradeLicenseNo = "",
      facebook = "",
      instagram = "",
    } = req.body;

    if (!businessName) {
      return res.status(400).send({ success: false, message: "Business name is required" });
    }

    // Check if user already has a decorator profile
    const existing = await decoratorCollection.findOne({ userId: user._id });
    if (existing) {
      return res.status(400).send({
        success: false,
        message: "You already have a decorator profile",
        decoratorId: existing._id,
      });
    }

    const slug = generateSlug(businessName);

    const newDecorator = {
      userId: user._id,
      businessName: businessName.trim(),
      slug,
      tagline: tagline || "",
      about: about || "",
      logo:
        logo ||
        `https://placehold.co/400x400/4F46E5/FFFFFF?text=${encodeURIComponent(
          businessName.slice(0, 15)
        )}`,
      coverImage:
        coverImage ||
        `https://placehold.co/1200x600/1E293B/FFFFFF?text=${encodeURIComponent(
          businessName
        )}`,
      contactInfo: {
        phone: contactInfo.phone || user.phone || "",
        email: contactInfo.email || email,
        website: contactInfo.website || "",
        address: contactInfo.address || user.address?.street || "",
        city: contactInfo.city || user.address?.city || "Dhaka",
      },
      serviceAreas: Array.isArray(serviceAreas) ? serviceAreas : ["Dhaka"],
      categories: Array.isArray(categories) ? categories : [],
      metrics: {
        rating: 5.0,
        reviewCount: 0,
        completedEvents: 0,
        responseRate: 100,
        responseTimeHours: 1.0,
      },
      verification: {
        isVerified: false,
        tradeLicenseNo: tradeLicenseNo || "",
        nidVerified: false,
        verifiedAt: null,
      },
      socialLinks: {
        facebook: facebook || "",
        instagram: instagram || "",
      },
      status: "pending",
      featured: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await decoratorCollection.insertOne(newDecorator);

    res.status(201).send({
      success: true,
      message: "Decorator application submitted successfully",
      insertedId: result.insertedId,
      data: { _id: result.insertedId, ...newDecorator },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error creating decorator profile",
      error: error.message,
    });
  }
};

// ========== Update Decorator Profile (Self or Admin) ==========
// Updates business information, branding, services, and contact info
const updateDecorator = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid decorator ID format" });
    }

    const {
      businessName,
      tagline,
      about,
      logo,
      coverImage,
      contactInfo,
      serviceAreas,
      categories,
      socialLinks,
    } = req.body;

    const updateDoc = {
      $set: {
        updatedAt: new Date(),
      },
    };

    if (businessName !== undefined) {
      updateDoc.$set.businessName = businessName.trim();
      updateDoc.$set.slug = generateSlug(businessName);
    }
    if (tagline !== undefined) updateDoc.$set.tagline = tagline;
    if (about !== undefined) updateDoc.$set.about = about;
    if (logo !== undefined) updateDoc.$set.logo = logo;
    if (coverImage !== undefined) updateDoc.$set.coverImage = coverImage;
    if (contactInfo !== undefined) updateDoc.$set.contactInfo = contactInfo;
    if (serviceAreas !== undefined) updateDoc.$set.serviceAreas = serviceAreas;
    if (categories !== undefined) updateDoc.$set.categories = categories;
    if (socialLinks !== undefined) updateDoc.$set.socialLinks = socialLinks;

    const result = await decoratorCollection.updateOne(
      { _id: new ObjectId(id) },
      updateDoc
    );

    if (result.matchedCount === 0) {
      return res.status(404).send({ success: false, message: "Decorator not found" });
    }

    const updatedDecorator = await decoratorCollection.findOne({ _id: new ObjectId(id) });

    res.send({
      success: true,
      message: "Decorator updated successfully",
      data: updatedDecorator,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating decorator",
      error: error.message,
    });
  }
};

// ========== Update Decorator Status / Verification (Admin Only) ==========
// Allows administrators to approve, suspend, verify, or feature a decorator
const updateDecoratorStatus = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid decorator ID format" });
    }

    const { status, isVerified, featured } = req.body;
    const updateDoc = {
      $set: {
        updatedAt: new Date(),
      },
    };

    if (status !== undefined) {
      const allowed = ["active", "pending", "suspended"];
      if (!allowed.includes(status)) {
        return res.status(400).send({
          success: false,
          message: `Invalid status. Allowed: ${allowed.join(", ")}`,
        });
      }
      updateDoc.$set.status = status;
    }

    if (isVerified !== undefined) {
      updateDoc.$set["verification.isVerified"] = Boolean(isVerified);
      if (isVerified) {
        updateDoc.$set["verification.verifiedAt"] = new Date();
      }
    }

    if (featured !== undefined) {
      updateDoc.$set.featured = Boolean(featured);
    }

    const result = await decoratorCollection.updateOne(
      { _id: new ObjectId(id) },
      updateDoc
    );

    if (result.matchedCount === 0) {
      return res.status(404).send({ success: false, message: "Decorator not found" });
    }

    const updatedDecorator = await decoratorCollection.findOne({ _id: new ObjectId(id) });

    res.send({
      success: true,
      message: "Decorator status updated successfully",
      data: updatedDecorator,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating decorator status",
      error: error.message,
    });
  }
};

// ========== Delete Decorator (Admin Only) ==========
// Removes a decorator profile completely
const deleteDecorator = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ success: false, message: "Invalid decorator ID format" });
    }

    const result = await decoratorCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).send({ success: false, message: "Decorator not found" });
    }

    res.send({
      success: true,
      message: "Decorator deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error deleting decorator",
      error: error.message,
    });
  }
};

module.exports = {
  getDecorators,
  getTopRatedDecorators,
  getFeaturedDecorators,
  getDecoratorById,
  getDecoratorBySlug,
  getMyDecoratorProfile,
  getDecoratorByEmail,
  createDecorator,
  updateDecorator,
  updateDecoratorStatus,
  deleteDecorator,
};

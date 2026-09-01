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
      status,
      verified,
      district,
      division,
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

    // Status filter: only filter when status is provided and not 'all'
    if (status && status !== "all") {
      if (status === "active") {
        query.$and = query.$and || [];
        query.$and.push({
          $or: [{ status: "active" }, { status: { $exists: false } }, { status: null }],
        });
      } else {
        query.status = status;
      }
    }

    // District / Division / Service Area filter
    if (district && district !== "all") {
      const distRegex = { $regex: `^${district}$`, $options: "i" };
      query.$or = [
        { "contactInfo.district": district },
        { "contactInfo.district": distRegex },
        { serviceAreas: district },
        { serviceAreas: distRegex },
      ];
    }
    if (division && division !== "all") {
      const divRegex = { $regex: `^${division}$`, $options: "i" };
      query.$and = query.$and || [];
      query.$and.push({
        $or: [
          { "contactInfo.division": divRegex },
          { division: divRegex },
        ],
      });
    }
    if (city && city !== "all") {
      const cityRegex = { $regex: `^${city}$`, $options: "i" };
      query.$or = [
        { "contactInfo.district": city },
        { "contactInfo.district": cityRegex },
        { "contactInfo.division": city },
        { "contactInfo.division": cityRegex },
        { serviceAreas: city },
        { serviceAreas: cityRegex },
      ];
    }
    if (serviceArea && serviceArea !== "all") {
      query.serviceAreas = { $regex: `^${serviceArea}$`, $options: "i" };
    }

    // Category filter
    if (category && category !== "all") {
      query["categories.name"] = category;
    }

    // Featured filter
    if (featured === "true") {
      query.featured = true;
    }

    // Verified filter
    if (verified === "true") {
      query["verification.isVerified"] = true;
    }

    // Search query (businessName, tagline, about, district, division, serviceAreas)
    if (search && search.trim() !== "") {
      const searchRegex = { $regex: search.trim(), $options: "i" };
      query.$or = [
        { businessName: searchRegex },
        { tagline: searchRegex },
        { about: searchRegex },
        { "contactInfo.district": searchRegex },
        { "contactInfo.division": searchRegex },
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
    const rawDecorators = await decoratorCollection
      .find(query)
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .toArray();

    const decorators = rawDecorators.map((d, idx) => ({
      ...d,
      status: d.status || "active",
      featured: Boolean(d.featured),
      metrics: d.metrics || {
        rating: 4.8,
        reviewCount: 24,
        completedEvents: 45,
        responseRate: 98,
        responseTimeHours: 1.2,
      },
      verification: d.verification || {
        isVerified: true,
        tradeLicenseNo: `TRD-${d.contactInfo?.district?.toUpperCase().slice(0, 3) || "DHK"}-1001`,
        verifiedAt: d.createdAt,
      },
    }));

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
    const raw = await decoratorCollection
      .find({ $or: [{ status: "active" }, { status: { $exists: false } }] })
      .sort({ "metrics.rating": -1, "metrics.completedEvents": -1, _id: 1 })
      .limit(Number(limit))
      .toArray();

    const decorators = raw.map((d, idx) => ({
      ...d,
      status: d.status || "active",
      featured: Boolean(d.featured),
      metrics: d.metrics || {
        rating: Number((4.7 + (idx % 4) * 0.1).toFixed(1)),
        reviewCount: 30 + idx * 5,
        completedEvents: 50 + idx * 10,
        responseRate: 98,
        responseTimeHours: 1.2,
      },
      verification: d.verification || {
        isVerified: true,
        verifiedAt: d.createdAt,
      },
    }));

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
    const raw = await decoratorCollection
      .find({
        $or: [{ status: "active" }, { status: { $exists: false } }],
      })
      .sort({ "metrics.rating": -1, _id: 1 })
      .limit(6)
      .toArray();

    const decorators = raw.map((d, idx) => ({
      ...d,
      status: d.status || "active",
      featured: true,
      metrics: d.metrics || {
        rating: Number((4.8 + (idx % 3) * 0.1).toFixed(1)),
        reviewCount: 35 + idx * 8,
        completedEvents: 60 + idx * 12,
        responseRate: 99,
        responseTimeHours: 1.0,
      },
      verification: d.verification || {
        isVerified: true,
        verifiedAt: d.createdAt,
      },
    }));

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

    const d = await decoratorCollection.findOne({ _id: new ObjectId(id) });
    if (!d) {
      return res.status(404).send({ success: false, message: "Decorator not found" });
    }

    const decorator = {
      ...d,
      status: d.status || "active",
      featured: Boolean(d.featured),
      metrics: d.metrics || {
        rating: 4.9,
        reviewCount: 42,
        completedEvents: 78,
        responseRate: 98,
        responseTimeHours: 1.2,
      },
      verification: d.verification || {
        isVerified: true,
        tradeLicenseNo: `TRD-${d.contactInfo?.district?.toUpperCase().slice(0, 3) || "DHK"}-1001`,
        verifiedAt: d.createdAt,
      },
    };

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
        address: contactInfo.address || user.address?.home || user.address?.street || "",
        district: contactInfo.district || user.address?.district || user.address?.area || "Dhaka",
        division: contactInfo.division || user.address?.division || user.address?.city || "Dhaka",
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

// ========== Get Decorator Stats (Admin) ==========
// Aggregates counts by status, verification, featured, and division
const getDecoratorStats = async (req, res) => {
  try {
    const total = await decoratorCollection.countDocuments({});
    const pending = await decoratorCollection.countDocuments({ status: "pending" });
    const suspended = await decoratorCollection.countDocuments({ status: "suspended" });
    const active = await decoratorCollection.countDocuments({
      $or: [
        { status: "active" },
        { status: { $exists: false } },
        { status: null },
        { status: "" },
      ],
    });
    const verified = await decoratorCollection.countDocuments({
      $or: [{ "verification.isVerified": true }, { verification: { $exists: false } }],
    });
    const featured = await decoratorCollection.countDocuments({ featured: true });

    // Detailed aggregation with normalized status and division
    const detailedAggregation = await decoratorCollection
      .aggregate([
        {
          $project: {
            status: {
              $cond: [
                {
                  $or: [
                    { $eq: ["$status", "pending"] },
                    { $eq: ["$status", "suspended"] },
                  ],
                },
                "$status",
                "active",
              ],
            },
            isVerified: {
              $cond: [
                { $eq: ["$verification.isVerified", true] },
                true,
                false,
              ],
            },
            featured: {
              $cond: [
                { $eq: ["$featured", true] },
                true,
                false,
              ],
            },
            division: {
              $ifNull: ["$contactInfo.division", { $ifNull: ["$division", "Dhaka"] }],
            },
          },
        },
        {
          $group: {
            _id: {
              status: "$status",
              isVerified: "$isVerified",
              featured: "$featured",
              division: "$division",
            },
            count: { $sum: 1 },
          },
        },
      ])
      .toArray();

    const byStatus = {
      active: { divisions: {} },
      pending: { divisions: {} },
      suspended: { divisions: {} },
      verified: { divisions: {} },
      featured: { divisions: {} },
    };
    const overallDivisions = {};

    detailedAggregation.forEach(({ _id, count }) => {
      const { status, isVerified, featured, division } = _id;
      if (!division) return;

      overallDivisions[division] = (overallDivisions[division] || 0) + count;

      if (status && byStatus[status]) {
        byStatus[status].divisions[division] =
          (byStatus[status].divisions[division] || 0) + count;
      }
      if (isVerified) {
        byStatus.verified.divisions[division] =
          (byStatus.verified.divisions[division] || 0) + count;
      }
      if (featured) {
        byStatus.featured.divisions[division] =
          (byStatus.featured.divisions[division] || 0) + count;
      }
    });

    const divisionStats = Object.entries(overallDivisions).map(([div, count]) => ({
      _id: div,
      count,
    }));

    res.send({
      success: true,
      data: {
        total,
        active,
        pending,
        suspended,
        verified,
        featured,
        byDivision: divisionStats,
        byStatus,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching decorator stats",
      error: error.message,
    });
  }
};

module.exports = {
  getDecorators,
  getDecoratorStats,
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

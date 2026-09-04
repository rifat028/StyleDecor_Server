// ========== Imports ==========
const { ObjectId } = require("mongodb");
const { userCollection } = require("../models/collections");
const { resolveDateRange, buildDateQuery } = require("../utils/dateFilter");

// ========== Create or Sync User ==========
// Inserts a new user or syncs existing user upon Firebase login/registration
const createUser = async (req, res) => {
  try {
    const { firebaseUid, name, email, phone, photoUrl, address } = req.body;

    if (!email) {
      return res.status(400).send({ message: "Email is required" });
    }

    // Check if user already exists
    const existingUser = await userCollection.findOne({ email });

    if (existingUser) {
      // Sync Firebase UID or profile photo if missing
      const updateFields = {
        updatedAt: new Date(),
      };
      if (firebaseUid && !existingUser.firebaseUid) updateFields.firebaseUid = firebaseUid;
      if (photoUrl && !existingUser.photoUrl) updateFields.photoUrl = photoUrl;
      if (name && !existingUser.name) updateFields.name = name;

      if (Object.keys(updateFields).length > 1) {
        await userCollection.updateOne({ email }, { $set: updateFields });
      }

      const updatedUser = await userCollection.findOne({ email });
      return res.send({ message: "User exists and synced", user: updatedUser });
    }

    // Construct new user with standard 'customer' role
    const newUser = {
      firebaseUid: firebaseUid || null,
      name: name || "Anonymous User",
      email,
      phone: phone || "",
      photoUrl: photoUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      role: "customer",
      address: {
        home: address?.home || address?.street || "",
        district: address?.district || address?.area || "Dhaka",
        division: address?.division || address?.city || "Dhaka",
        postalCode: address?.postalCode || "",
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await userCollection.insertOne(newUser);
    res.status(201).send({
      message: "User created successfully",
      insertedId: result.insertedId,
      user: { _id: result.insertedId, ...newUser },
    });
  } catch (error) {
    res.status(500).send({ message: "Error creating or syncing user", error: error.message });
  }
};

// ========== Get Current Logged-in User Profile ==========
// Retrieves profile for the authenticated user based on decoded token
const getMyProfile = async (req, res) => {
  try {
    const email = req.decoded_email;
    const user = await userCollection.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User profile not found" });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: "Error fetching user profile", error: error.message });
  }
};

// ========== Get All Users (Admin) ==========
const getAllUsers = async (req, res) => {
  try {
    const {
      search,
      role,
      division,
      district,
      page = 1,
      limit = 10,
      sort = "desc",
      timeFilter = "max",
      startDate,
      endDate,
    } = req.query;

    const andConditions = [];

    // Time / Date Filter
    if (timeFilter && timeFilter !== "max") {
      const range = resolveDateRange(timeFilter, startDate, endDate);
      const dateQuery = buildDateQuery(["createdAt", "updatedAt"], range);
      if (dateQuery) {
        andConditions.push(dateQuery);
      }
    }

    if (search) {
      andConditions.push({
        $or: [
          { name: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } },
          { phone: { $regex: search, $options: "i" } },
        ],
      });
    }

    if (role && role !== "all") {
      andConditions.push({ role });
    }

    if (division && division !== "all") {
      andConditions.push({
        $or: [
          { "address.division": division },
          { "address.division": { $regex: `^${division}$`, $options: "i" } },
        ],
      });
    }

    if (district && district !== "all") {
      andConditions.push({
        $or: [
          { "address.district": district },
          { "address.district": { $regex: `^${district}$`, $options: "i" } },
        ],
      });
    }

    const query = andConditions.length > 0 ? { $and: andConditions } : {};

    const pageNum = Math.max(1, parseInt(page, 10));
    const limitNum = Math.max(1, parseInt(limit, 10));
    const skip = (pageNum - 1) * limitNum;

    const totalCount = await userCollection.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limitNum);

    const users = await userCollection
      .find(query)
      .sort({ createdAt: sort === "asc" ? 1 : -1 })
      .skip(skip)
      .limit(limitNum)
      .toArray();

    res.send({
      users,
      page: pageNum,
      limit: limitNum,
      totalPages,
      totalCount,
    });
  } catch (error) {
    res.status(500).send({ message: "Error fetching users", error: error.message });
  }
};

// ========== Get User By ID ==========
// Retrieves user by ObjectId
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid user ID format" });
    }
    const user = await userCollection.findOne({ _id: new ObjectId(id) });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: "Error fetching user by ID", error: error.message });
  }
};

// ========== Update Current User Profile ==========
// Updates user's personal details, phone, and address
const updateUserProfile = async (req, res) => {
  try {
    const email = req.decoded_email;
    const { name, phone, photoUrl, address } = req.body;
    const updateDoc = {
      $set: {
        updatedAt: new Date()
      }
    };

    if (name) updateDoc.$set.name = name;
    if (phone) updateDoc.$set.phone = phone;
    if (photoUrl) updateDoc.$set.photoUrl = photoUrl;
    if (address) {
      updateDoc.$set.address = {
        home: address.home ?? address.street ?? "",
        district: address.district ?? address.area ?? "Dhaka",
        division: address.division ?? address.city ?? "Dhaka",
        postalCode: address.postalCode ?? "",
      };
    }

    const result = await userCollection.updateOne({ email }, updateDoc);
    const updatedUser = await userCollection.findOne({ email });
    res.send({ message: "Profile updated successfully", result, user: updatedUser });
  } catch (error) {
    res.status(500).send({ message: "Error updating user profile", error: error.message });
  }
};

// ========== Update User By ID (Admin Only) ==========
// Allows administrators to modify any user's data & role
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid user ID" });
    }

    const { name, phone, photoUrl, role, address } = req.body;
    const updateDoc = {
      $set: {
        updatedAt: new Date(),
      },
    };

    if (name) updateDoc.$set.name = name;
    if (phone !== undefined) updateDoc.$set.phone = phone;
    if (photoUrl) updateDoc.$set.photoUrl = photoUrl;
    if (role) {
      const allowedRoles = ["admin", "decorator", "agent", "customer"];
      if (!allowedRoles.includes(role)) {
        return res.status(400).send({ message: `Invalid role. Allowed: ${allowedRoles.join(", ")}` });
      }
      updateDoc.$set.role = role;
    }
    if (address) {
      updateDoc.$set.address = {
        home: address.home ?? address.street ?? "",
        district: address.district ?? address.area ?? "Dhaka",
        division: address.division ?? address.city ?? "Dhaka",
        postalCode: address.postalCode ?? "",
      };
    }

    const result = await userCollection.updateOne({ _id: new ObjectId(id) }, updateDoc);
    const updatedUser = await userCollection.findOne({ _id: new ObjectId(id) });
    res.send({ message: "User updated successfully", result, user: updatedUser });
  } catch (error) {
    res.status(500).send({ message: "Error updating user", error: error.message });
  }
};

// ========== Update User Role (Admin Only) ==========
// Allows administrators to modify user roles
const updateUserRole = async (req, res) => {
  try {
    const { email, role } = req.body;
    const allowedRoles = ["admin", "decorator", "agent", "customer"];

    if (!allowedRoles.includes(role)) {
      return res.status(400).send({ message: `Invalid role. Allowed roles: ${allowedRoles.join(", ")}` });
    }

    const result = await userCollection.updateOne(
      { email },
      { $set: { role, updatedAt: new Date() } }
    );
    res.send({ message: `Role updated to ${role}`, result });
  } catch (error) {
    res.status(500).send({ message: "Error updating user role", error: error.message });
  }
};

// ========== Delete User (Admin Only) ==========
// Removes a user from the system
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid user ID" });
    }

    // Check if target is super admin
    const targetUser = await userCollection.findOne({ _id: new ObjectId(id) });
    if (!targetUser) {
      return res.status(404).send({ message: "User not found" });
    }
    if (targetUser.email === "admin.styledecor1@gmail.com") {
      return res.status(403).send({ message: "Super Admin cannot be deleted" });
    }

    const result = await userCollection.deleteOne({ _id: new ObjectId(id) });
    res.send({ message: "User deleted successfully", result });
  } catch (error) {
    res.status(500).send({ message: "Error deleting user", error: error.message });
  }
};

// ========== Get User Statistics (Admin) ==========
// Returns total counts categorized by role, division, district, and cross-combinations
const getUserStats = async (req, res) => {
  try {
    const { timeFilter = "max", startDate, endDate } = req.query;
    const range = resolveDateRange(timeFilter, startDate, endDate);
    const dateQuery = buildDateQuery(["createdAt", "updatedAt"], range);
    const baseQuery = dateQuery || {};

    const totalUsers = await userCollection.countDocuments(baseQuery);
    const adminCount = await userCollection.countDocuments({ ...baseQuery, role: "admin" });
    const decoratorCount = await userCollection.countDocuments({ ...baseQuery, role: "decorator" });
    const agentCount = await userCollection.countDocuments({ ...baseQuery, role: "agent" });
    const customerCount = await userCollection.countDocuments({ ...baseQuery, role: "customer" });

    // Aggregate counts by role, division, and district
    const pipeline = [];
    if (dateQuery) {
      pipeline.push({ $match: dateQuery });
    }
    pipeline.push({
      $group: {
        _id: {
          role: "$role",
          division: "$address.division",
          district: "$address.district",
        },
        count: { $sum: 1 },
      },
    });

    const detailedAggregation = await userCollection
      .aggregate(pipeline)
      .toArray();

    const divisions = {};
    const districts = {};
    const byRole = {
      admin: { divisions: {}, districts: {}, divisionDistricts: {} },
      decorator: { divisions: {}, districts: {}, divisionDistricts: {} },
      agent: { divisions: {}, districts: {}, divisionDistricts: {} },
      customer: { divisions: {}, districts: {}, divisionDistricts: {} },
    };
    const divisionDistricts = {};

    detailedAggregation.forEach(({ _id, count }) => {
      const role = _id?.role && typeof _id.role === "string" ? _id.role.trim() : null;
      const division = _id?.division && typeof _id.division === "string" ? _id.division.trim() : null;
      const district = _id?.district && typeof _id.district === "string" ? _id.district.trim() : null;

      // Overall divisions count
      if (division) {
        divisions[division] = (divisions[division] || 0) + count;
      }

      // Overall districts count
      if (district) {
        districts[district] = (districts[district] || 0) + count;
      }

      // Overall division -> district breakdown
      if (division && district) {
        if (!divisionDistricts[division]) divisionDistricts[division] = {};
        divisionDistricts[division][district] = (divisionDistricts[division][district] || 0) + count;
      }

      // Cross-aggregation by role
      if (role) {
        if (!byRole[role]) {
          byRole[role] = { divisions: {}, districts: {}, divisionDistricts: {} };
        }
        if (division) {
          byRole[role].divisions[division] = (byRole[role].divisions[division] || 0) + count;
          if (district) {
            if (!byRole[role].divisionDistricts[division]) {
              byRole[role].divisionDistricts[division] = {};
            }
            byRole[role].divisionDistricts[division][district] =
              (byRole[role].divisionDistricts[division][district] || 0) + count;
          }
        }
        if (district) {
          byRole[role].districts[district] = (byRole[role].districts[district] || 0) + count;
        }
      }
    });

    res.send({
      totalUsers,
      roles: {
        admin: adminCount,
        decorator: decoratorCount,
        agent: agentCount,
        customer: customerCount,
      },
      divisions,
      districts,
      byRole,
      divisionDistricts,
    });
  } catch (error) {
    res.status(500).send({ message: "Error fetching user stats", error: error.message });
  }
};

module.exports = {
  createUser,
  getMyProfile,
  getAllUsers,
  getUserById,
  updateUserProfile,
  updateUserById,
  updateUserRole,
  deleteUser,
  getUserStats,
};

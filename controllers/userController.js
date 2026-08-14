// ========== Imports ==========
const { ObjectId } = require("mongodb");
const { userCollection } = require("../models/collections");

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
      address: address || {
        street: "",
        area: "",
        city: "Dhaka",
        postalCode: ""
      },
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await userCollection.insertOne(newUser);
    res.status(201).send({
      message: "User created successfully",
      insertedId: result.insertedId,
      user: { _id: result.insertedId, ...newUser }
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
// Retrieves users with search, role filters, city filters, and pagination
const getAllUsers = async (req, res) => {
  try {
    const { search, role, city, page = 1, limit = 10, sort = "desc" } = req.query;

    const query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } }
      ];
    }

    if (role && role !== "all") {
      query.role = role;
    }

    if (city && city !== "all") {
      query["address.city"] = city;
    }

    const pageNum = Math.max(1, parseInt(page, 10));
    const limitNum = Math.max(1, parseInt(limit, 10));
    const skip = (pageNum - 1) * limitNum;
    const sortOrder = sort === "asc" ? 1 : -1;

    const totalCount = await userCollection.countDocuments(query);
    const users = await userCollection
      .find(query)
      .sort({ createdAt: sortOrder, _id: 1 })
      .skip(skip)
      .limit(limitNum)
      .toArray();

    res.send({
      users,
      totalCount,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.max(1, Math.ceil(totalCount / limitNum))
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
        street: address.street || "",
        area: address.area || "",
        city: address.city || "Dhaka",
        postalCode: address.postalCode || ""
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
        updatedAt: new Date()
      }
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
        street: address.street || "",
        area: address.area || "",
        city: address.city || "Dhaka",
        postalCode: address.postalCode || ""
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
// Returns total counts categorized by role
const getUserStats = async (req, res) => {
  try {
    const totalUsers = await userCollection.countDocuments();
    const adminCount = await userCollection.countDocuments({ role: "admin" });
    const decoratorCount = await userCollection.countDocuments({ role: "decorator" });
    const agentCount = await userCollection.countDocuments({ role: "agent" });
    const customerCount = await userCollection.countDocuments({ role: "customer" });

    res.send({
      totalUsers,
      roles: {
        admin: adminCount,
        decorator: decoratorCount,
        agent: agentCount,
        customer: customerCount
      }
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

// ========== Imports ==========
const { userCollection } = require("../models/collections");

// ========== Create User ==========
// Inserts a newly registered user, preventing duplicates
const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    newUser.role = "client"; // Default role
    const email = newUser.email;
    
    // Check if user already exists
    const userExists = await userCollection.findOne({ email });
    if (userExists) {
      return res.send({ message: "user exists" });
    }
    
    const result = await userCollection.insertOne(newUser);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error creating user", error });
  }
};

// ========== Get User By Email ==========
// Retrieves user details if the token matches the requested email
const getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    if (email !== req.decoded_email) {
      return res.status(403).send({ message: "forbidden access...!" });
    }
    const result = await userCollection.findOne({ email });
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error fetching user", error });
  }
};

// ========== Update User Role ==========
// Upgrades or changes a user's role (e.g., from client to admin or decorator)
const updateUserRole = async (req, res) => {
  try {
    const { email, role } = req.body;
    const result = await userCollection.updateOne(
      { email },
      { $set: { role } }
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error updating user role", error });
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  updateUserRole,
};

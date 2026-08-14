// ========== Imports ==========
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

// ========== Database Configuration ==========
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@module54.p4tcocf.mongodb.net/?appName=Module54`;

// ========== Initialize MongoClient ==========
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// ========== Connect to Database ==========
const connectDB = async () => {
  try {
    console.log("MongoDB configuration loaded");
  } catch (error) {
    console.error("MongoDB Connection Error: ", error);
  }
};

// ========== Helper to Get Database Instance ==========
const getDB = () => client.db("StyleDecorDB");

module.exports = { client, connectDB, getDB };

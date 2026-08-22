// ========== Load Environment Variables ==========
require("dotenv").config();

// ========== Imports ==========
const app = require("./app");
const { connectDB } = require("./config/db");

// ========== Connect to Database ==========
connectDB();

// ========== Export App for Vercel Serverless Function ==========
module.exports = app;

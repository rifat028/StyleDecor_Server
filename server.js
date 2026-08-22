// ========== Load Environment Variables ==========
require("dotenv").config();

// ========== Imports ==========
const app = require("./app");
const { connectDB } = require("./config/db");

// ========== Port Configuration ==========
const port = process.env.PORT || 3000;

// ========== Initialize Database connection ==========
connectDB();

// ========== Start Server ==========
app.listen(port, () => {
  console.log(`StyleDecor listening on port ${port}`);
});

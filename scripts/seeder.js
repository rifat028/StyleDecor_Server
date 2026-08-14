const dotenv = require("dotenv");
const { client } = require("../config/db");
const { categoryCollection } = require("../models/collections");
const { categoriesData } = require("../data/categoriesData");

// Load env vars
dotenv.config();

const importData = async () => {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas for Seeding");

    await categoryCollection.deleteMany();
    console.log("🗑️  Existing categories destroyed");

    await categoryCollection.insertMany(categoriesData);
    console.log("📥 Categories imported successfully!");

    await client.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error importing data:", error);
    await client.close();
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas for Seeding");

    await categoryCollection.deleteMany();
    console.log("🗑️  All categories destroyed successfully!");

    await client.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error destroying data:", error);
    await client.close();
    process.exit(1);
  }
};

if (process.argv[2] === "-d" || process.argv[2] === "--destroy") {
  destroyData();
} else {
  importData();
}

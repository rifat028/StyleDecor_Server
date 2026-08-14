const dotenv = require("dotenv");
const { client } = require("../config/db");
const { categoryCollection, userCollection, decoratorCollection } = require("../models/collections");
const { categoriesData } = require("../data/categoriesData");
const { usersData } = require("../data/usersData");
const { decoratorsData } = require("../data/decoratorsData");

// Load env vars
dotenv.config();

const importData = async () => {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas for Seeding");

    await categoryCollection.deleteMany();
    await userCollection.deleteMany();
    await decoratorCollection.deleteMany();
    console.log("🗑️  Existing categories, users, and decorators destroyed");

    await categoryCollection.insertMany(categoriesData);
    await userCollection.insertMany(usersData);
    await decoratorCollection.insertMany(decoratorsData);
    console.log("📥 Categories, Users, and Decorators imported successfully!");

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
    await userCollection.deleteMany();
    await decoratorCollection.deleteMany();
    console.log("🗑️  All categories, users, and decorators destroyed successfully!");

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

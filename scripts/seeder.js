const dotenv = require("dotenv");
const admin = require("../config/firebase");
const { client } = require("../config/db");
const {
  categoryCollection,
  userCollection,
  decoratorCollection,
  serviceCollection,
  agentCollection,
  bookingCollection,
  paymentsCollection,
  decoratorReviewCollection,
  agentReviewCollection,
} = require("../models/collections");
const { categoriesData } = require("../data/categoriesData");
const { usersData } = require("../data/usersData");
const { decoratorsData } = require("../data/decoratorsData");
const { servicesData } = require("../data/servicesData");
const { agentsData } = require("../data/agentsData");
const { bookingsData } = require("../data/bookingsData");
const { paymentsData } = require("../data/paymentsData");
const { decoratorReviewsData } = require("../data/decoratorReviewsData");
const { agentReviewsData } = require("../data/agentReviewsData");

// Load env vars
dotenv.config();

// Default password for all seeded Firebase accounts
const DEFAULT_PASSWORD = "Aa@1234";

// Fast batch-parallel sync for Firebase Auth accounts
const syncFirebaseAuthUsers = async (users) => {
  if (!admin.apps.length) {
    console.log("ℹ️  Firebase Admin not initialized. Using embedded UIDs from usersData.");
    return users;
  }

  console.log("🔄 Verifying & syncing Firebase Authentication accounts in fast parallel batches...");
  const BATCH_SIZE = 25;
  const updatedUsers = [...users];

  for (let i = 0; i < updatedUsers.length; i += BATCH_SIZE) {
    const chunk = updatedUsers.slice(i, i + BATCH_SIZE);
    await Promise.all(
      chunk.map(async (u, chunkIdx) => {
        if (!u.email) return;
        const globalIdx = i + chunkIdx;
        try {
          let fbUser;
          try {
            fbUser = await admin.auth().getUserByEmail(u.email);
            // Ensure universal password is set
            await admin.auth().updateUser(fbUser.uid, {
              password: DEFAULT_PASSWORD,
              displayName: u.name || undefined,
            });
          } catch (getErr) {
            if (getErr.code === "auth/user-not-found") {
              fbUser = await admin.auth().createUser({
                uid: u.firebaseUid || undefined,
                email: u.email,
                password: DEFAULT_PASSWORD,
                displayName: u.name || "User",
                photoURL: u.photoUrl || undefined,
              });
            } else {
              throw getErr;
            }
          }

          if (fbUser && fbUser.uid) {
            updatedUsers[globalIdx] = {
              ...updatedUsers[globalIdx],
              firebaseUid: fbUser.uid,
            };
          }
        } catch (err) {
          // Keep embedded UID if already present
        }
      })
    );
  }

  console.log("✅ Firebase Authentication accounts synchronized.");
  return updatedUsers;
};

const importData = async () => {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas for Seeding");

    // Clean existing collections
    await categoryCollection.deleteMany();
    await userCollection.deleteMany();
    await decoratorCollection.deleteMany();
    await serviceCollection.deleteMany();
    await agentCollection.deleteMany();
    await bookingCollection.deleteMany();
    await paymentsCollection.deleteMany();
    await decoratorReviewCollection.deleteMany();
    await agentReviewCollection.deleteMany();
    console.log("🗑️  Existing categories, users, decorators, services, agents, bookings, payments, and reviews destroyed");

    // Automatically ensure all Firebase UIDs are in sync
    const usersWithFirebaseUid = await syncFirebaseAuthUsers(usersData);

    // Insert all 9 collections
    await categoryCollection.insertMany(categoriesData);
    await userCollection.insertMany(usersWithFirebaseUid);
    await decoratorCollection.insertMany(decoratorsData);
    await serviceCollection.insertMany(servicesData);
    await agentCollection.insertMany(agentsData);
    await bookingCollection.insertMany(bookingsData);
    await paymentsCollection.insertMany(paymentsData);
    await decoratorReviewCollection.insertMany(decoratorReviewsData);
    await agentReviewCollection.insertMany(agentReviewsData);

    console.log("📥 All 9 Collections Imported Successfully with Firebase UIDs & Roles Linked!");
    console.log(`🔑 All users ready to log in with password: ${DEFAULT_PASSWORD}`);

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
    await serviceCollection.deleteMany();
    await agentCollection.deleteMany();
    await bookingCollection.deleteMany();
    await paymentsCollection.deleteMany();
    await decoratorReviewCollection.deleteMany();
    await agentReviewCollection.deleteMany();
    console.log("🗑️  All categories, users, decorators, services, agents, bookings, payments, and reviews destroyed successfully!");

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

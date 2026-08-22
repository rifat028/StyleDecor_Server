const dotenv = require("dotenv");
dotenv.config();

const admin = require("../config/firebase");
const { client, getDB } = require("../config/db");
const {
  categoryCollection,
  userCollection,
  decoratorCollection,
  serviceCollection,
  agentCollection,
  bookingCollection,
  paymentsCollection,
  reviewCollection,
} = require("../models/collections");
const { SEED_CONFIG } = require("../config/seedConfig");
const { refreshSeedData } = require("./seedEngine/cache");

// Universal password for seeded accounts
const DEFAULT_PASSWORD = SEED_CONFIG.auth?.defaultPassword || "Aa@1234";

// Synchronizes Firebase Auth users in parallel batches and attaches generated Firebase UIDs
const syncFirebaseAuthUsers = async (users) => {
  if (!admin.apps.length) {
    console.log("ℹ️  Firebase Admin not initialized. Using embedded UIDs from generated users.");
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

// Generates, cleans, and imports all 8 relational collections into MongoDB Atlas
const importData = async () => {
  try {
    console.log("\n=======================================================");
    console.log("       STYLEDECOR DYNAMIC SEED GENERATION ENGINE       ");
    console.log("=======================================================");
    console.log("Reading SEED_CONFIG and generating all relational data...");

    const seedData = refreshSeedData(SEED_CONFIG);

    console.log("\n📊 GENERATED DATASET SUMMARY:");
    console.log(`• Categories:   ${seedData.categories.length}`);
    console.log(`• Users:        ${seedData.users.length} (Admin: ${seedData.users.filter(u => u.role === 'admin').length}, Decorators: ${seedData.users.filter(u => u.role === 'decorator').length}, Agents: ${seedData.users.filter(u => u.role === 'agent').length}, Customers: ${seedData.users.filter(u => u.role === 'customer').length})`);
    console.log(`• Decorators:   ${seedData.decorators.length}`);
    console.log(`• Agents:       ${seedData.agents.length}`);
    console.log(`• Services:     ${seedData.services.length}`);
    console.log(`• Bookings:     ${seedData.bookings.length} (Upcoming: ${seedData.bookings.filter(b => b.status !== 'completed' && b.status !== 'cancelled').length}, Completed: ${seedData.bookings.filter(b => b.status === 'completed').length}, Cancelled: ${seedData.bookings.filter(b => b.status === 'cancelled').length})`);
    console.log(`• Payments:     ${seedData.payments.length}`);
    console.log(`• Reviews:      ${seedData.reviews.length}`);
    console.log("=======================================================\n");

    await client.connect();
    console.log("✅ Connected to MongoDB Atlas for Seeding");

    const db = getDB();

    // Clean existing collections
    await categoryCollection.deleteMany();
    await userCollection.deleteMany();
    await decoratorCollection.deleteMany();
    await serviceCollection.deleteMany();
    await agentCollection.deleteMany();
    await bookingCollection.deleteMany();
    await paymentsCollection.deleteMany();
    await reviewCollection.deleteMany();

    // Drop legacy review collections if they exist
    await db.collection("decorator_reviews").drop().catch(() => {});
    await db.collection("agent_reviews").drop().catch(() => {});

    console.log("🗑️  Cleaned existing collections in MongoDB Atlas");

    // Sync Firebase Authentication accounts
    const usersWithFirebaseUid = await syncFirebaseAuthUsers(seedData.users);

    // Insert all 8 collections
    await categoryCollection.insertMany(seedData.categories);
    await userCollection.insertMany(usersWithFirebaseUid);
    await decoratorCollection.insertMany(seedData.decorators);
    await serviceCollection.insertMany(seedData.services);
    await agentCollection.insertMany(seedData.agents);
    await bookingCollection.insertMany(seedData.bookings);
    await paymentsCollection.insertMany(seedData.payments);
    await reviewCollection.insertMany(seedData.reviews);

    console.log("\n✅ ALL 8 COLLECTIONS IMPORTED SUCCESSFULLY INTO MONGODB ATLAS!");
    console.log(`🔑 Universal login password for all accounts: ${DEFAULT_PASSWORD}`);
    console.log("=======================================================\n");

    await client.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error importing data:", error);
    await client.close();
    process.exit(1);
  }
};

// Purges all seed collections and documents from MongoDB Atlas
const destroyData = async () => {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    const db = getDB();
    await categoryCollection.deleteMany();
    await userCollection.deleteMany();
    await decoratorCollection.deleteMany();
    await serviceCollection.deleteMany();
    await agentCollection.deleteMany();
    await bookingCollection.deleteMany();
    await paymentsCollection.deleteMany();
    await reviewCollection.deleteMany();

    await db.collection("decorator_reviews").drop().catch(() => {});
    await db.collection("agent_reviews").drop().catch(() => {});

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

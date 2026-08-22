const dotenv = require("dotenv");
dotenv.config();

const admin = require("../config/firebase");
const { client } = require("../config/db");
const { userCollection } = require("../models/collections");

// Universal password assigned to all synchronized accounts
const DEFAULT_PASSWORD = "Aa@1234";

// Synchronizes MongoDB users with Firebase Authentication and updates document firebaseUids
async function syncUsers() {
  try {
    if (!admin.apps.length) {
      console.log("❌ Firebase Admin is not initialized. Please verify your .env / credentials.");
      process.exit(1);
    }

    await client.connect();
    const users = await userCollection.find({}).toArray();
    console.log(`\n🔄 Found ${users.length} users in MongoDB. Starting Firebase Auth synchronization...`);

    let createdCount = 0;
    let updatedCount = 0;
    let errorCount = 0;

    for (const u of users) {
      if (!u.email) continue;
      try {
        let fbUser;
        try {
          fbUser = await admin.auth().getUserByEmail(u.email);
          // Update universal password and display profile info
          await admin.auth().updateUser(fbUser.uid, {
            password: DEFAULT_PASSWORD,
            displayName: u.name || undefined,
            photoURL: u.photoUrl || undefined,
          });
          updatedCount++;
        } catch (getErr) {
          if (getErr.code === "auth/user-not-found") {
            fbUser = await admin.auth().createUser({
              email: u.email,
              password: DEFAULT_PASSWORD,
              displayName: u.name || "User",
              photoURL: u.photoUrl || undefined,
            });
            createdCount++;
          } else {
            throw getErr;
          }
        }

        // Sync firebaseUid into MongoDB document if missing or different
        if (fbUser && fbUser.uid && u.firebaseUid !== fbUser.uid) {
          await userCollection.updateOne(
            { _id: u._id },
            { $set: { firebaseUid: fbUser.uid, updatedAt: new Date() } }
          );
        }
      } catch (err) {
        console.error(`❌ Error syncing user (${u.email}):`, err.message);
        errorCount++;
      }
    }

    console.log("\n========================================");
    console.log("       FIREBASE AUTH SYNC COMPLETE      ");
    console.log("========================================");
    console.log(`Total Users Processed: ${users.length}`);
    console.log(`Newly Created in Firebase: ${createdCount}`);
    console.log(`Updated in Firebase: ${updatedCount}`);
    console.log(`Errors: ${errorCount}`);
    console.log(`Universal Password: ${DEFAULT_PASSWORD}`);
    console.log("========================================\n");
  } catch (err) {
    console.error("Sync failed:", err);
  } finally {
    await client.close();
    process.exit(0);
  }
}

syncUsers();

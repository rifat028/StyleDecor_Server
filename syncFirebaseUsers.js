const admin = require('./config/firebase');
const { client } = require('./config/db');
const { userCollection } = require('./models/collections');

async function syncUsers() {
  try {
    await client.connect();
    const users = await userCollection.find({}).toArray();
    console.log(`Found ${users.length} users in MongoDB. Starting Firebase Auth sync...`);

    let createdCount = 0;
    let updatedCount = 0;
    let errorCount = 0;

    for (const u of users) {
      if (!u.email) continue;
      try {
        let fbUser;
        try {
          fbUser = await admin.auth().getUserByEmail(u.email);
          // Set universal password and update profile info
          await admin.auth().updateUser(fbUser.uid, {
            password: 'Aa@1234',
            displayName: u.name || undefined,
          });
          updatedCount++;
        } catch (getErr) {
          if (getErr.code === 'auth/user-not-found') {
            fbUser = await admin.auth().createUser({
              email: u.email,
              password: 'Aa@1234',
              displayName: u.name || 'User',
              photoURL: u.photoUrl || undefined,
            });
            createdCount++;
          } else {
            throw getErr;
          }
        }

        // Sync firebaseUid into MongoDB document
        if (fbUser && fbUser.uid) {
          await userCollection.updateOne(
            { _id: u._id },
            { $set: { firebaseUid: fbUser.uid, updatedAt: new Date() } }
          );
        }
      } catch (err) {
        console.error(`Error syncing user (${u.email}):`, err.message);
        errorCount++;
      }
    }

    console.log('\n========================================');
    console.log('       FIREBASE AUTH SYNC COMPLETE      ');
    console.log('========================================');
    console.log(`Total Users Processed: ${users.length}`);
    console.log(`Newly Created in Firebase: ${createdCount}`);
    console.log(`Updated in Firebase: ${updatedCount}`);
    console.log(`Errors: ${errorCount}`);
    console.log(`Universal Password: Aa@1234`);
    console.log('========================================');
  } catch (err) {
    console.error('Sync failed:', err);
  } finally {
    await client.close();
    process.exit(0);
  }
}

syncUsers();

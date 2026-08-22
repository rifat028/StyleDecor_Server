const { client } = require('./config/db');
const { userCollection } = require('./models/collections');

async function check() {
  try {
    await client.connect();
    const withUid = await userCollection.countDocuments({ firebaseUid: { $exists: true, $ne: null } });
    const total = await userCollection.countDocuments({});
    console.log(`Users with Firebase UID in DB: ${withUid} / ${total}`);
  } finally {
    await client.close();
    process.exit(0);
  }
}
check();

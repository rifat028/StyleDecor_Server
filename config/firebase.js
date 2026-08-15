// ========== Imports ==========
const admin = require("firebase-admin");
require("dotenv").config();

let serviceAccount;

// ========== Parse Firebase Credentials ==========
try {
  if (process.env.FB_SERVICE_KEY) {
    const decoded = Buffer.from(process.env.FB_SERVICE_KEY, "base64").toString("utf8");
    serviceAccount = JSON.parse(decoded);
  } else {
    try {
      serviceAccount = require("../styledecor-firebase-adminsdk.json");
    } catch (localErr) {
      // Local file not found (normal in production if using env)
    }
  }
} catch (error) {
  console.error("Failed to parse Firebase service account key from environment.", error.message);
}

// ========== Initialize Firebase Admin SDK ==========
if (serviceAccount && !admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin;

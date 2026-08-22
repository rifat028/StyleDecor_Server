// ========== Imports ==========
const admin = require("../config/firebase");
const { userCollection } = require("../models/collections");

// ========== Verify Firebase Token Middleware ==========
const verifyFbToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ message: "Unauthorized Access..!" });
  }
  try {
    const idToken = token.split(" ")[1];
    const decoded = await admin.auth().verifyIdToken(idToken);
    req.decoded_email = decoded.email;
    next();
  } catch (err) {
    return res.status(401).send({ message: "unauthorized access...!" });
  }
};

// ========== Verify Admin Role Middleware ==========
const verifyAdmin = async (req, res, next) => {
  try {
    const email = req.decoded_email;
    const query = { email };
    const user = await userCollection.findOne(query);

    if (!user || user.role !== "admin") {
      return res.status(403).send({ message: "forbidden access" });
    }
    next();
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

// ========== Verify Decorator Role Middleware ==========
const verifyDecorator = async (req, res, next) => {
  try {
    const email = req.decoded_email;
    const query = { email };
    const user = await userCollection.findOne(query);

    if (!user || user.role !== "decorator") {
      return res.status(403).send({ message: "forbidden access" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

// ========== Verify Agent Role Middleware ==========
const verifyAgent = async (req, res, next) => {
  try {
    const email = req.decoded_email;
    const query = { email };
    const user = await userCollection.findOne(query);

    if (!user || user.role !== "agent") {
      return res.status(403).send({ message: "forbidden access" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  verifyFbToken,
  verifyAdmin,
  verifyDecorator,
  verifyAgent,
};

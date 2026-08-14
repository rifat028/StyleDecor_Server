// ========== Imports ==========
const { getDB } = require("../config/db");

// ========== Database Collections Mapping ==========
const collections = {
  get serviceCollection() { return getDB().collection("services"); },
  get bookingCollection() { return getDB().collection("bookings"); },
  get userCollection() { return getDB().collection("users"); },
  get decoratorCollection() { return getDB().collection("decorators"); },
  get paymentsCollection() { return getDB().collection("payments"); },
  get categoryCollection() { return getDB().collection("categories"); },
  get agentCollection() { return getDB().collection("agents"); },
  get decoratorReviewCollection() { return getDB().collection("decorator_reviews"); },
  get agentReviewCollection() { return getDB().collection("agent_reviews"); },
};

module.exports = collections;

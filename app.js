const express = require("express");
const cors = require("cors");

// ========== Route imports ==========
const serviceRoutes = require("./routes/serviceRoutes");
const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const decoratorRoutes = require("./routes/decoratorRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const agentRoutes = require("./routes/agentRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

// ========== Initialize Express App ==========
const app = express();

// ========== Global Middlewares ==========
app.use(cors());
app.use(express.json());

// ========== Root API Endpoint ==========
app.get("/", (req, res) => {
  res.send("StyleDecor Is Running..!");
});

// ========== Mount API Routes ==========
app.use("/services", serviceRoutes);
app.use("/users", userRoutes);
app.use("/bookings", bookingRoutes);
app.use("/decorators", decoratorRoutes);
app.use("/payments", paymentRoutes);
app.use("/categories", categoryRoutes);
app.use("/agents", agentRoutes);
app.use("/reviews", reviewRoutes);
app.use("/analytics", analyticsRoutes);

// Legacy root aliases for payment callbacks
app.patch("/payment-success", (req, res, next) => {
  req.url = "/payment-success";
  paymentRoutes(req, res, next);
});
app.post("/create-checkout-session", (req, res, next) => {
  req.url = "/create-checkout-session";
  paymentRoutes(req, res, next);
});
app.use("/transactions", paymentRoutes);

module.exports = app;

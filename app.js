const express = require("express");
const cors = require("cors");

// ========== Route imports ==========
const serviceRoutes = require("./routes/serviceRoutes");
const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const decoratorRoutes = require("./routes/decoratorRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

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
app.use("/", paymentRoutes);

module.exports = app;

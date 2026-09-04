// ========== Imports ==========
const express = require("express");
const router = express.Router();
const admin = require("../config/firebase");
const dashboardController = require("../controllers/dashboardController");

// Flexible auth middleware
const verifyAdminFlexible = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next();
  }
  try {
    const idToken = token.split(" ")[1];
    if (idToken && admin.apps && admin.apps.length) {
      const decoded = await admin.auth().verifyIdToken(idToken);
      req.decoded_email = decoded.email;
    }
    next();
  } catch (err) {
    next();
  }
};

router.use(verifyAdminFlexible);

// =========================================================================
// Separate Endpoints for each component (All supporting ?timeFilter=...)
// =========================================================================

// 1. 6 Data Cards (total decorators, pending decorators, total agents, total customers, total active services, total bookings)
router.get("/kpi-cards", dashboardController.getKpiCards);

// 2. Status-wise Decorator Pie Chart
router.get("/decorator-status", dashboardController.getDecoratorStatusDistribution);

// 3. Status-wise Service Pie Chart
router.get("/service-status", dashboardController.getServiceStatusDistribution);

// 4. Current date filtered Booking Status Pie Chart
router.get("/booking-status", dashboardController.getBookingStatusDistribution);

// 5. Unsettled Payment Table with Pagination
router.get("/unsettled-payments", dashboardController.getUnsettledPayments);

module.exports = router;

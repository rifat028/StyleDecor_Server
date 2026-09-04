// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin } = require("../middleware/authMiddleware");
const analyticsController = require("../controllers/analyticsController");

// Apply authentication & admin verification to all analytics routes
router.use(verifyFbToken, verifyAdmin);

// =========================================================================
// 1. KPI Stats (4 Stat Cards)
// =========================================================================
router.get("/kpi-stats", analyticsController.getKpiStats);
router.get("/overview-stats", analyticsController.getKpiStats);

// =========================================================================
// 2 & 3. Financial & Revenue Deep Dive
// =========================================================================
router.get("/financial-gmv", analyticsController.getGmvTrend);
router.get("/financial-commission", analyticsController.getNetCommissionTrend);

// =========================================================================
// 4-9. Market & Category Insights
// =========================================================================
router.get("/market-division-users", analyticsController.getMarketDivisionUsers);
router.get("/category-services", analyticsController.getCategoryServiceCount);
router.get("/category-bookings", analyticsController.getCategoryBookings);
router.get("/top-categories-revenue", analyticsController.getTopRevenueCategories);
router.get("/booking-curve-365", analyticsController.getBookingCurve365);
router.get("/division-bookings", analyticsController.getDivisionWiseBookings);

// =========================================================================
// 10 & 11. Vendor & Operational Performance
// =========================================================================
router.get("/top-decorators", analyticsController.getTopDecorators);
router.get("/top-agents", analyticsController.getTopAgents);

module.exports = router;

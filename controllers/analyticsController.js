// ========== Imports ==========
const { ObjectId } = require("mongodb");
const {
  bookingCollection,
  paymentCollection,
  userCollection,
  decoratorCollection,
  agentCollection,
  serviceCollection,
  categoryCollection,
  reviewCollection,
} = require("../models/collections");

const BANGLADESH_DIVISIONS = [
  "Dhaka",
  "Chattogram",
  "Khulna",
  "Rajshahi",
  "Rangpur",
  "Barishal",
  "Sylhet",
  "Mymensingh",
];

// =========================================================================
// 1. KPI Stats (Top 4 Stat Cards)
// =========================================================================
const getKpiStats = async (req, res) => {
  try {
    const [payments, bookings] = await Promise.all([
      paymentCollection.find({}).toArray(),
      bookingCollection.find({ status: "completed" }).toArray(),
    ]);

    // Total volume: customer payments (advance_payment and full_payment)
    const customerPayments = payments.filter(
      (p) => p.paymentType === "advance_payment" || p.paymentType === "full_payment"
    );
    const totalVolume = customerPayments.reduce((acc, p) => acc + (p.amount || 0), 0);

    // Platform commission: 10% of completed booking service fees
    const totalCompletedFee = bookings.reduce(
      (acc, b) => acc + (b.pricingBreakdown?.grandTotal || b.serviceSnapshot?.unitPrice || 0),
      0
    );
    const platformCommission = Math.round(totalCompletedFee * 0.1);

    // Collected commission: payments with paymentType === 'platform_fee'
    const platformFeePayments = payments.filter((p) => p.paymentType === "platform_fee");
    const collectedCommission = platformFeePayments.reduce((acc, p) => acc + (p.amount || 0), 0);

    // Pending commission
    const pendingCommission = Math.max(0, platformCommission - collectedCommission);

    res.send({
      success: true,
      data: {
        totalVolume,
        platformCommission,
        collectedCommission,
        pendingCommission,
        completedBookingsCount: bookings.length,
        totalCustomerTransactions: customerPayments.length,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching KPI statistics",
      error: error.message,
    });
  }
};

// =========================================================================
// 2. Financial & Revenue Deep Dive - Gross Merchandise Value (GMV)
// =========================================================================
const getGmvTrend = async (req, res) => {
  try {
    const bookings = await bookingCollection.find({}).toArray();

    const monthlyMap = {};
    bookings.forEach((b) => {
      const date = b.createdAt ? new Date(b.createdAt) : new Date();
      const sortKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      const monthLabel = date.toLocaleDateString("en-US", { month: "short", year: "numeric" });

      if (!monthlyMap[sortKey]) {
        monthlyMap[sortKey] = {
          sortKey,
          month: monthLabel,
          gmv: 0,
          completedGmv: 0,
          bookingsCount: 0,
        };
      }

      const amount = b.pricingBreakdown?.grandTotal || b.serviceSnapshot?.unitPrice || 0;
      monthlyMap[sortKey].gmv += amount;
      monthlyMap[sortKey].bookingsCount += 1;
      if (b.status === "completed") {
        monthlyMap[sortKey].completedGmv += amount;
      }
    });

    const trend = Object.keys(monthlyMap)
      .sort()
      .map((k) => monthlyMap[k]);

    res.send({
      success: true,
      data: trend,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching GMV trend data",
      error: error.message,
    });
  }
};

// =========================================================================
// 3. Financial & Revenue Deep Dive - Net Commission
// =========================================================================
const getNetCommissionTrend = async (req, res) => {
  try {
    const bookings = await bookingCollection.find({ status: "completed" }).toArray();
    const payments = await paymentCollection.find({ paymentType: "platform_fee" }).toArray();

    const monthlyMap = {};

    bookings.forEach((b) => {
      const date = b.eventDetails?.eventDate ? new Date(b.eventDetails.eventDate) : new Date(b.createdAt);
      const sortKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      const monthLabel = date.toLocaleDateString("en-US", { month: "short", year: "numeric" });

      if (!monthlyMap[sortKey]) {
        monthlyMap[sortKey] = {
          sortKey,
          month: monthLabel,
          netCommission: 0,
          collectedCommission: 0,
          pendingCommission: 0,
          completedCount: 0,
        };
      }

      const fee = b.pricingBreakdown?.grandTotal || b.serviceSnapshot?.unitPrice || 0;
      const commission = Math.round(fee * 0.1);
      monthlyMap[sortKey].netCommission += commission;
      monthlyMap[sortKey].completedCount += 1;
    });

    // Match collected platform fees by payment date
    payments.forEach((p) => {
      const date = p.paidAt || p.createdAt ? new Date(p.paidAt || p.createdAt) : new Date();
      const sortKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      if (monthlyMap[sortKey]) {
        monthlyMap[sortKey].collectedCommission += p.amount || 0;
      }
    });

    const trend = Object.keys(monthlyMap)
      .sort()
      .map((k) => {
        const item = monthlyMap[k];
        item.pendingCommission = Math.max(0, item.netCommission - item.collectedCommission);
        return item;
      });

    res.send({
      success: true,
      data: trend,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching net commission trend data",
      error: error.message,
    });
  }
};

// =========================================================================
// 4. Market & Category Insights - Division-Wise User, Decorator, Agent
// =========================================================================
const getMarketDivisionUsers = async (req, res) => {
  try {
    const users = await userCollection.find({}).toArray();

    const result = BANGLADESH_DIVISIONS.map((div) => {
      const divisionUsers = users.filter((u) => u.address?.division === div);
      const customers = divisionUsers.filter((u) => u.role === "customer" || u.role === "client").length;
      const decorators = divisionUsers.filter((u) => u.role === "decorator").length;
      const agents = divisionUsers.filter((u) => u.role === "agent").length;

      return {
        division: div,
        customers,
        decorators,
        agents,
        total: customers + decorators + agents,
      };
    });

    res.send({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching division user statistics",
      error: error.message,
    });
  }
};

// =========================================================================
// 5. Market & Category Insights - Category-Wise Service Count
// =========================================================================
const getCategoryServiceCount = async (req, res) => {
  try {
    const [categories, services] = await Promise.all([
      categoryCollection.find({}).toArray(),
      serviceCollection.find({}).toArray(),
    ]);

    const result = categories.map((cat) => {
      const catName = cat.name;
      const catServices = services.filter(
        (s) =>
          s.category === catName ||
          s.categoryName === catName ||
          (s.categoryId && s.categoryId.toString() === cat._id.toString())
      );

      const avgPrice =
        catServices.length > 0
          ? Math.round(
              catServices.reduce(
                (sum, s) => sum + (s.price || s.startingPrice || s.packages?.[0]?.price || 0),
                0
              ) / catServices.length
            )
          : 0;

      return {
        category: catName,
        servicesCount: catServices.length,
        avgPrice,
      };
    });

    res.send({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching category service count",
      error: error.message,
    });
  }
};

// =========================================================================
// 6. Market & Category Insights - Category-Wise Booking (With Division Filter)
// =========================================================================
const getCategoryBookings = async (req, res) => {
  try {
    const { division = "all" } = req.query;

    const [categories, bookings, users] = await Promise.all([
      categoryCollection.find({}).toArray(),
      bookingCollection.find({}).toArray(),
      userCollection.find({}).toArray(),
    ]);

    const customerMap = new Map(users.map((u) => [u._id.toString(), u]));

    // Filter bookings by division if specified
    const filteredBookings =
      division === "all"
        ? bookings
        : bookings.filter((b) => {
            const customer = customerMap.get(b.customerId?.toString());
            return customer?.address?.division === division;
          });

    const result = categories.map((cat) => {
      const catName = cat.name;
      const catBookings = filteredBookings.filter(
        (b) => b.serviceSnapshot?.category === catName || b.category === catName
      );

      const revenue = catBookings.reduce(
        (sum, b) => sum + (b.pricingBreakdown?.grandTotal || b.serviceSnapshot?.unitPrice || 0),
        0
      );

      return {
        category: catName,
        bookingsCount: catBookings.length,
        completedCount: catBookings.filter((b) => b.status === "completed").length,
        revenue,
      };
    });

    res.send({
      success: true,
      selectedDivision: division,
      divisions: ["all", ...BANGLADESH_DIVISIONS],
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching category booking analytics",
      error: error.message,
    });
  }
};

// =========================================================================
// 7. Market & Category Insights - Top Revenue-Generating Categories Pie Chart
// =========================================================================
const getTopRevenueCategories = async (req, res) => {
  try {
    const [categories, bookings] = await Promise.all([
      categoryCollection.find({}).toArray(),
      bookingCollection.find({}).toArray(),
    ]);

    const totalRevenueAll = bookings.reduce(
      (sum, b) => sum + (b.pricingBreakdown?.grandTotal || b.serviceSnapshot?.unitPrice || 0),
      0
    );

    const result = categories
      .map((cat) => {
        const catName = cat.name;
        const catBookings = bookings.filter(
          (b) => b.serviceSnapshot?.category === catName || b.category === catName
        );

        const revenue = catBookings.reduce(
          (sum, b) => sum + (b.pricingBreakdown?.grandTotal || b.serviceSnapshot?.unitPrice || 0),
          0
        );

        const percentage =
          totalRevenueAll > 0 ? Number(((revenue / totalRevenueAll) * 100).toFixed(1)) : 0;

        return {
          name: catName,
          value: revenue,
          percentage,
          bookingsCount: catBookings.length,
        };
      })
      .sort((a, b) => b.value - a.value);

    res.send({
      success: true,
      totalRevenue: totalRevenueAll,
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching top revenue categories",
      error: error.message,
    });
  }
};

// =========================================================================
// 8. Market & Category Insights - Booking Curve Last 365 Days
// =========================================================================
const getBookingCurve365 = async (req, res) => {
  try {
    const bookings = await bookingCollection.find({}).toArray();

    // Group by bi-weekly or monthly intervals across the timeline for a smooth curve
    const intervalMap = {};

    bookings.forEach((b) => {
      const date = b.createdAt ? new Date(b.createdAt) : new Date();
      // Group by year and calendar week or 10-day block for an organic smooth curve
      const week = Math.ceil(date.getDate() / 7);
      const sortKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-W${week}`;
      const label = `${date.toLocaleDateString("en-US", { month: "short" })} W${week}`;

      if (!intervalMap[sortKey]) {
        intervalMap[sortKey] = {
          sortKey,
          date: label,
          bookings: 0,
          completed: 0,
          volume: 0,
        };
      }

      const amount = b.pricingBreakdown?.grandTotal || b.serviceSnapshot?.unitPrice || 0;
      intervalMap[sortKey].bookings += 1;
      intervalMap[sortKey].volume += amount;
      if (b.status === "completed") {
        intervalMap[sortKey].completed += 1;
      }
    });

    const curve = Object.keys(intervalMap)
      .sort()
      .map((k) => intervalMap[k]);

    res.send({
      success: true,
      totalBookings: bookings.length,
      data: curve,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching 365-day booking curve",
      error: error.message,
    });
  }
};

// =========================================================================
// 9. Market & Category Insights - Division-Wise Booking Bar Graph
// =========================================================================
const getDivisionWiseBookings = async (req, res) => {
  try {
    const [bookings, users] = await Promise.all([
      bookingCollection.find({}).toArray(),
      userCollection.find({}).toArray(),
    ]);

    const customerMap = new Map(users.map((u) => [u._id.toString(), u]));

    const result = BANGLADESH_DIVISIONS.map((div) => {
      const divBookings = bookings.filter((b) => {
        const cust = customerMap.get(b.customerId?.toString());
        return cust?.address?.division === div;
      });

      const completed = divBookings.filter((b) => b.status === "completed");
      const revenue = divBookings.reduce(
        (sum, b) => sum + (b.pricingBreakdown?.grandTotal || b.serviceSnapshot?.unitPrice || 0),
        0
      );

      return {
        division: div,
        bookingsCount: divBookings.length,
        completedCount: completed.length,
        revenue,
      };
    }).sort((a, b) => b.bookingsCount - a.bookingsCount);

    res.send({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching division-wise booking data",
      error: error.message,
    });
  }
};

// =========================================================================
// 10. Vendor & Operational Performance - Top 10 Decorator Agencies Table
// =========================================================================
const getTopDecorators = async (req, res) => {
  try {
    const [decorators, bookings, reviews, users] = await Promise.all([
      decoratorCollection.find({}).toArray(),
      bookingCollection.find({}).toArray(),
      reviewCollection.find({}).toArray(),
      userCollection.find({ role: "decorator" }).toArray(),
    ]);

    const decoratorBookingsMap = {};
    bookings.forEach((b) => {
      const dId = b.decoratorId?.toString();
      if (!dId) return;
      if (!decoratorBookingsMap[dId]) {
        decoratorBookingsMap[dId] = { total: 0, completed: 0, revenue: 0 };
      }
      decoratorBookingsMap[dId].total += 1;
      if (b.status === "completed") {
        decoratorBookingsMap[dId].completed += 1;
        decoratorBookingsMap[dId].revenue += b.pricingBreakdown?.grandTotal || 0;
      }
    });

    const topDecorators = decorators
      .map((d) => {
        const dId = d._id.toString();
        const stats = decoratorBookingsMap[dId] || { total: 0, completed: 0, revenue: 0 };
        const dReviews = reviews.filter((r) => r.decoratorId?.toString() === dId);
        const avgRating =
          dReviews.length > 0
            ? Number(
                (
                  dReviews.reduce((sum, r) => sum + (r.rating || 5), 0) / dReviews.length
                ).toFixed(1)
              )
            : 4.8;

        const userDoc = users.find(
          (u) =>
            u.email === d.email ||
            u._id.toString() === d.userId?.toString() ||
            u.name === d.name
        );

        return {
          id: dId,
          businessName: d.businessName || d.name || "Decorator Agency",
          ownerName: d.name || "Vendor Partner",
          division: userDoc?.address?.division || "Dhaka",
          completedBookings: stats.completed,
          totalBookings: stats.total,
          totalRevenue: stats.revenue,
          rating: avgRating,
          reviewCount: dReviews.length,
        };
      })
      .sort((a, b) => b.totalRevenue - a.totalRevenue || b.completedBookings - a.completedBookings)
      .slice(0, 10)
      .map((d, index) => ({ rank: index + 1, ...d }));

    res.send({
      success: true,
      data: topDecorators,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching top decorator agencies",
      error: error.message,
    });
  }
};

// =========================================================================
// 11. Vendor & Operational Performance - Top 10 Agent Table
// =========================================================================
const getTopAgents = async (req, res) => {
  try {
    const [agents, bookings, reviews, users] = await Promise.all([
      agentCollection.find({}).toArray(),
      bookingCollection.find({}).toArray(),
      reviewCollection.find({}).toArray(),
      userCollection.find({ role: "agent" }).toArray(),
    ]);

    const agentBookingsMap = {};
    bookings.forEach((b) => {
      const aId = b.assignedAgentId?.toString();
      if (!aId) return;
      if (!agentBookingsMap[aId]) {
        agentBookingsMap[aId] = { total: 0, completed: 0 };
      }
      agentBookingsMap[aId].total += 1;
      if (b.status === "completed") {
        agentBookingsMap[aId].completed += 1;
      }
    });

    const topAgents = agents
      .map((a) => {
        const aId = a._id.toString();
        const stats = agentBookingsMap[aId] || { total: 0, completed: 0 };
        const aReviews = reviews.filter((r) => r.agentId?.toString() === aId);
        const avgRating =
          aReviews.length > 0
            ? Number(
                (
                  aReviews.reduce((sum, r) => sum + (r.rating || 5), 0) / aReviews.length
                ).toFixed(1)
              )
            : 4.8;

        const userDoc = users.find(
          (u) =>
            u.email === a.email ||
            u._id.toString() === a.userId?.toString() ||
            u.name === a.name
        );

        return {
          id: aId,
          name: a.name || "Field Agent",
          email: a.email || "agent@styledecor.com",
          photoUrl: a.photoUrl || userDoc?.photoUrl,
          division: userDoc?.address?.division || "Dhaka",
          completedExecutions: stats.completed,
          totalAssigned: stats.total,
          rating: avgRating,
          reviewCount: aReviews.length,
        };
      })
      .sort(
        (a, b) =>
          b.completedExecutions - a.completedExecutions || b.rating - a.rating
      )
      .slice(0, 10)
      .map((a, index) => ({ rank: index + 1, ...a }));

    res.send({
      success: true,
      data: topAgents,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching top agents",
      error: error.message,
    });
  }
};

module.exports = {
  getKpiStats,
  getGmvTrend,
  getNetCommissionTrend,
  getMarketDivisionUsers,
  getCategoryServiceCount,
  getCategoryBookings,
  getTopRevenueCategories,
  getBookingCurve365,
  getDivisionWiseBookings,
  getTopDecorators,
  getTopAgents,
};

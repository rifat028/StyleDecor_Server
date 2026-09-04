// ========== Imports ==========
const { ObjectId } = require("mongodb");
const {
  bookingCollection,
  paymentCollection,
  userCollection,
  decoratorCollection,
  agentCollection,
  serviceCollection,
} = require("../models/collections");

const {
  resolveDateRange,
  isInDateRange,
  formatStatusLabel,
} = require("../utils/dateFilter");

// 1. 6 Data Cards
const getKpiCards = async (req, res) => {
  try {
    const { timeFilter = "max", startDate, endDate } = req.query;
    const range = resolveDateRange(timeFilter, startDate, endDate);

    const [decorators, users, services, bookings] = await Promise.all([
      decoratorCollection.find({}).toArray(),
      userCollection.find({}).toArray(),
      serviceCollection.find({}).toArray(),
      bookingCollection.find({}).toArray(),
    ]);

    const filteredDecorators = decorators.filter((d) => isInDateRange(d, range));
    const filteredUsers = users.filter((u) => isInDateRange(u, range));
    const filteredServices = services.filter((s) => isInDateRange(s, range));
    const filteredBookings = bookings.filter((b) => isInDateRange(b, range));

    const totalDecorators = filteredDecorators.length;
    const pendingDecorators = filteredDecorators.filter((d) => {
      const st = (d.status || "").toLowerCase();
      const ver = (d.verification?.status || "").toLowerCase();
      return st === "pending" || ver === "pending" || d.isVerified === false;
    }).length;

    const totalAgents = filteredUsers.filter((u) => u.role === "agent").length;
    const totalCustomers = filteredUsers.filter(
      (u) => u.role === "customer" || u.role === "client" || !u.role
    ).length;

    const totalActiveServices = filteredServices.filter((s) => {
      const st = (s.status || "active").toLowerCase();
      return st === "active" || !s.status;
    }).length;

    const totalBookings = filteredBookings.length;

    res.send({
      success: true,
      timeFilter,
      data: {
        totalDecorators,
        pendingDecorators,
        totalAgents,
        totalCustomers,
        totalActiveServices,
        totalBookings,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching dashboard KPI cards",
      error: error.message,
    });
  }
};

// 2. Status-Wise Decorator Distribution (all-time catalog, independent of time filter)
const getDecoratorStatusDistribution = async (req, res) => {
  try {
    const decorators = await decoratorCollection.find({}).toArray();

    const statusCounts = {};
    decorators.forEach((d) => {
      const rawStatus = (d.status || "active").toLowerCase();
      statusCounts[rawStatus] = (statusCounts[rawStatus] || 0) + 1;
    });

    const total = decorators.length;
    const data = Object.entries(statusCounts).map(([statusKey, count]) => ({
      status: statusKey,
      name: formatStatusLabel(statusKey),
      value: count,
      count,
      percentage: total > 0 ? Number(((count / total) * 100).toFixed(1)) : 0,
    }));

    res.send({
      success: true,
      total,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching decorator status distribution",
      error: error.message,
    });
  }
};

// 3. Status-Wise Service Distribution (all-time catalog, independent of time filter)
const getServiceStatusDistribution = async (req, res) => {
  try {
    const services = await serviceCollection.find({}).toArray();

    const statusCounts = {};
    services.forEach((s) => {
      const rawStatus = (s.status || "active").toLowerCase();
      statusCounts[rawStatus] = (statusCounts[rawStatus] || 0) + 1;
    });

    const total = services.length;
    const data = Object.entries(statusCounts).map(([statusKey, count]) => ({
      status: statusKey,
      name: formatStatusLabel(statusKey),
      value: count,
      count,
      percentage: total > 0 ? Number(((count / total) * 100).toFixed(1)) : 0,
    }));

    res.send({
      success: true,
      total,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching service status distribution",
      error: error.message,
    });
  }
};

// 4. Booking Status Distribution (Current Date Filtered)
const getBookingStatusDistribution = async (req, res) => {
  try {
    const { timeFilter = "max", startDate, endDate } = req.query;
    const range = resolveDateRange(timeFilter, startDate, endDate);

    const bookings = await bookingCollection.find({}).toArray();
    const filtered = bookings.filter((b) => isInDateRange(b, range));

    const statusCounts = {};
    filtered.forEach((b) => {
      const rawStatus = (b.status || "pending").toLowerCase();
      statusCounts[rawStatus] = (statusCounts[rawStatus] || 0) + 1;
    });

    const total = filtered.length;
    const data = Object.entries(statusCounts)
      .map(([statusKey, count]) => ({
        status: statusKey,
        name: formatStatusLabel(statusKey),
        value: count,
        count,
        percentage: total > 0 ? Number(((count / total) * 100).toFixed(1)) : 0,
      }))
      .sort((a, b) => b.value - a.value);

    res.send({
      success: true,
      timeFilter,
      total,
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching booking status distribution",
      error: error.message,
    });
  }
};

// 5. Unsettled Payments Table
const getUnsettledPayments = async (req, res) => {
  try {
    const {
      timeFilter = "max",
      startDate,
      endDate,
      page = 1,
      limit = 10,
      search = "",
    } = req.query;

    const range = resolveDateRange(timeFilter, startDate, endDate);

    const [completedBookings, platformFeePayments, users, decorators, agents] =
      await Promise.all([
        bookingCollection.find({ status: "completed" }).toArray(),
        paymentCollection.find({ paymentType: "platform_fee" }).toArray(),
        userCollection.find({}).toArray(),
        decoratorCollection.find({}).toArray(),
        agentCollection.find({}).toArray(),
      ]);

    const paidBookingIds = new Set(
      platformFeePayments.map((p) => p.bookingId?.toString()).filter(Boolean)
    );

    const userMap = new Map(users.map((u) => [u._id.toString(), u]));
    const decoratorMap = new Map(decorators.map((d) => [d._id.toString(), d]));
    const agentMap = new Map(agents.map((a) => [a._id.toString(), a]));

    const unsettledList = completedBookings
      .filter((b) => {
        const isNotPaid = !paidBookingIds.has(b._id.toString());
        const inDate = isInDateRange(b, range);
        return isNotPaid && inDate;
      })
      .map((b) => {
        const cust = b.customerId ? userMap.get(b.customerId.toString()) : null;
        const dec = b.decoratorId ? decoratorMap.get(b.decoratorId.toString()) : null;
        const agent = b.assignedAgentId ? agentMap.get(b.assignedAgentId.toString()) : null;

        const grandTotal =
          b.pricingBreakdown?.grandTotal ||
          b.pricingBreakdown?.subtotal ||
          b.serviceSnapshot?.unitPrice ||
          0;

        const platformFee = Math.round(grandTotal * 0.1);

        const bookingCode =
          b.bookingCode ||
          b.bookingReference ||
          `BK-${b._id.toString().slice(-8).toUpperCase()}`;

        const serviceTitle =
          b.serviceSnapshot?.title ||
          b.serviceSnapshot?.serviceName ||
          b.title ||
          "Custom Event Decoration";

        const category =
          b.serviceSnapshot?.category || b.category || "General Decor";

        const eventDate =
          b.eventDetails?.eventDate ||
          b.date ||
          b.createdAt ||
          (typeof b._id.getTimestamp === "function" ? b._id.getTimestamp() : new Date());

        return {
          _id: b._id,
          bookingCode,
          serviceTitle,
          category,
          customer: {
            name: cust?.name || b.customerName || b.clientName || "Valued Customer",
            email: cust?.email || b.customerEmail || b.clientEmail || "N/A",
            phone: cust?.phone || b.contact || "N/A",
          },
          decorator: {
            _id: dec?._id || b.decoratorId,
            agencyName: dec?.businessName || dec?.agencyName || dec?.name || "Decor Agency",
            phone: dec?.contactInfo?.phone || "N/A",
            division: dec?.contactInfo?.division || "N/A",
          },
          agent: {
            _id: agent?._id || b.assignedAgentId,
            name: agent?.name || "Unassigned",
          },
          grandTotal,
          platformFee,
          settlementStatus: "unsettled",
          completionDate: b.updatedAt || b.createdAt || (typeof b._id.getTimestamp === "function" ? b._id.getTimestamp() : new Date()),
          eventDate,
        };
      });

    const searchQuery = search.toLowerCase().trim();
    const searchFiltered = searchQuery
      ? unsettledList.filter(
          (item) =>
            item.bookingCode.toLowerCase().includes(searchQuery) ||
            item.customer.name.toLowerCase().includes(searchQuery) ||
            item.customer.email.toLowerCase().includes(searchQuery) ||
            item.decorator.agencyName.toLowerCase().includes(searchQuery) ||
            item.serviceTitle.toLowerCase().includes(searchQuery)
        )
      : unsettledList;

    const totalUnsettled = searchFiltered.length;
    const totalUnsettledAmount = searchFiltered.reduce(
      (sum, item) => sum + item.platformFee,
      0
    );
    const totalOrderValue = searchFiltered.reduce(
      (sum, item) => sum + item.grandTotal,
      0
    );

    const isAll = limit === "all" || !limit || limit === "0";
    const currentPage = isAll ? 1 : Math.max(1, parseInt(page, 10) || 1);
    const pageSize = isAll ? totalUnsettled : Math.max(1, parseInt(limit, 10) || 10);

    searchFiltered.sort((a, b) => new Date(b.completionDate) - new Date(a.completionDate));

    const totalPages = isAll ? 1 : Math.ceil(totalUnsettled / pageSize) || 1;
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = isAll ? searchFiltered : searchFiltered.slice(startIndex, startIndex + pageSize);

    res.send({
      success: true,
      timeFilter,
      page: currentPage,
      limit: pageSize,
      totalPages,
      totalUnsettled,
      totalUnsettledAmount,
      totalOrderValue,
      data: paginatedData,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching unsettled payments",
      error: error.message,
    });
  }
};

module.exports = {
  getKpiCards,
  getDecoratorStatusDistribution,
  getServiceStatusDistribution,
  getBookingStatusDistribution,
  getUnsettledPayments,
};

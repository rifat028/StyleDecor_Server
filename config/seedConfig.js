// ========== Centralized Seed Configuration ==========
// Adjust any counts or parameters below and run 'npm run seed' to re-populate data.

const SEED_CONFIG = {
  counts: {
    admin: 1,

    // 1. Customers Distribution
    customerPerDistrict: 1,          // 1 customer per district (64 districts * 1 = 64 customers)
    minCustomerPerDivision: 8,       // Minimum 8 customers per division (8 divisions * 8 = 64)

    // 2. Decorators Distribution
    decoratorPerDivision: 3,         // 3 decorators per division (8 divisions * 3 = 24 decorators)
    maxDecoratorPerDistrict: 1,      // Ensures decorators within a division are in distinct districts
    serviceAreasPerDecorator: 3,     // 2 to 3 districts served per decorator

    // 3. Agents Distribution
    agentsPerDecorator: 10,          // 10 agents per decorator (24 decorators * 10 = 240 agents)
    agentsPerServiceDistrict: 4,     // 4 to 5 agents allocated per service district
    activeAgentPercentage: 90,       // 90% active, 10% inactive

    // 4. Bookings Distribution (Per Decorator)
    bookingsPerDecorator: 38,        // Total bookings per decorator (24 * 38 = 912 bookings)
    upcomingBookingsPerDecorator: 3, // Active/Upcoming bookings on current/future date (24 * 3 = 72)
    cancelledBookingsPerDecorator: 2,// Cancelled bookings with cancellation reasons (24 * 2 = 48)
    // Completed Bookings = 38 - 3 - 2 = 33 per decorator (24 * 33 = 792 completed bookings)
    
    // Per-Agent & Subcategory Booking Constraints
    minBookingsPerAgent: 3,          // Every agent assigned to >= 3-4 bookings
    minBookingsPerSubCategory: 5,    // Every subcategory has 5 to 10 bookings
  },

  // Decorator Offerings & Service Structure
  services: {
    categoriesPerDecorator: 2,       // Each decorator offers services from >= 2 categories
    subCategoriesPerDecorator: 3,    // Each decorator offers services from >= 3 subcategories
    servicesPerSubCategory: 1,       // 1 primary service per subcategory (24 * 3 = 72+ services)
  },

  // Financial & Billing Parameters
  financials: {
    defaultDepositPercent: 30,       // 30% advance deposit for bookings
    platformCommissionPercent: 10,  // 10% platform commission fee
    gatewayFeePercent: 1.5,          // 1.5% payment gateway fee
    agentFeePercent: 15,             // 15% agent compensation fee
  },

  // Chronological Date Horizon
  dates: {
    startYear: 2025,
    startMonth: 0,                   // 0 = January 2025
    currentDate: new Date("2026-09-05T14:00:00.000Z"),
    minUsersPerMonth: 3,             // >= 3-4 users created per month
    minDecoratorsPerMonth: 1,        // >= 1-2 decorators registered per month
    bookingAdvanceDaysMin: 3,        // Booking created 3-10 days before eventDate
    bookingAdvanceDaysMax: 10,
  },

  // System & Auth Defaults
  auth: {
    defaultPassword: "Aa@1234",      // Universal login password for all seeded accounts
    superAdminEmail: "admin.styledecor1@gmail.com",
  }
};

module.exports = { SEED_CONFIG };

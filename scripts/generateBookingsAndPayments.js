const fs = require('fs');
const path = require('path');
const { ObjectId } = require('mongodb');

const uMod = require('../data/usersData');
const dMod = require('../data/decoratorsData');
const sMod = require('../data/servicesData');
const aMod = require('../data/agentsData');

const users = uMod.usersData || uMod;
const decorators = dMod.decoratorsData || dMod;
const services = sMod.servicesData || sMod;
const agents = aMod.agentsData || aMod;
const customers = users.filter(u => u.role === 'customer');

// Group agents by decoratorId
const agentsByDec = {};
agents.forEach(a => {
  const dId = a.decoratorId.toString();
  if (!agentsByDec[dId]) agentsByDec[dId] = [];
  agentsByDec[dId].push(a);
});

// Group services by decoratorId
const servicesByDec = {};
services.forEach(s => {
  const dId = s.decoratorId.toString();
  if (!servicesByDec[dId]) servicesByDec[dId] = [];
  servicesByDec[dId].push(s);
});

// Select services: 4 to 5 per decorator
const selectedServices = [];
decorators.forEach((d) => {
  const dId = d._id.toString();
  const dServices = servicesByDec[dId] || [];
  const takeCount = Math.min(5, dServices.length);
  for (let i = 0; i < takeCount; i++) {
    selectedServices.push({ service: dServices[i], decorator: d });
  }
});

// Venue Pools by City
const VENUES_BY_CITY = {
  Dhaka: [
    { name: "Sena Kunja Banquet Hall", address: "Dhaka Cantonment, Dhaka" },
    { name: "International Convention City Bashundhara (ICCB) Hall 2", address: "Kuril Bishwa Road, Next to 300 Feet, Purbachal Express, Dhaka" },
    { name: "Radisson Blu Water Garden Grand Ballroom", address: "Airport Road, Dhaka Cantonment, Dhaka" },
    { name: "Golf Garden Army Golf Club", address: "Airport Road, Dhaka" },
    { name: "Pan Pacific Sonargaon Grand Ballroom", address: "107 Kazi Nazrul Islam Ave, Karwan Bazar, Dhaka" },
    { name: "Le Méridien Grand Ballroom", address: "79/A Commercial Area, Airport Road, Nikunja 2, Dhaka" },
    { name: "Dhaka Regency Celebration Hall", address: "Airport Road, Nikunja-2, Dhaka" },
    { name: "The Westin Grand Ballroom", address: "Main Gulshan Avenue, Plot-01, Road 45, Gulshan-2, Dhaka" },
    { name: "InterContinental Ruposhi Bangla Ballroom", address: "1 Minto Road, Shahbagh, Dhaka" },
    { name: "Raowa Convention Hall (Anchor Hall)", address: "VIP Road, Mohakhali, Dhaka" },
  ],
  Chattogram: [
    { name: "The Peninsula Chittagong Grand Hall", address: "Bulbul Center, 486/B CDA Avenue, GEC Circle, Chattogram" },
    { name: "Radisson Blu Chattogram Bay View Grand Ballroom", address: "SS Khaled Road, Lalkhan Bazar, Chattogram" },
    { name: "King of Chittagong Banquet Hall", address: "Oxygen R/A, Bayezid Bostami Road, Chattogram" },
    { name: "GEC Convention Center", address: "1 GEC Circle, CDA Avenue, Chattogram" },
  ],
  Sylhet: [
    { name: "Rose View Hotel Grand Ballroom", address: "Shahjalal Uposhahar, Block D, Sylhet" },
    { name: "Grand Palace Hotel & Resorts Banquet", address: "Jail Road, Sylhet" },
    { name: "Noorjahan Grand Convention Hall", address: "Waves 1, Dargah Gate, Sylhet" },
  ],
  Rajshahi: [
    { name: "Grand Riverview Hotel Crystal Ballroom", address: "Kazihata, Greater Road, Rajshahi" },
    { name: "Padma Convention Hall", address: "Shaheb Bazar, Rajshahi" },
  ],
  Khulna: [
    { name: "City Inn International Conference & Banquet Hall", address: "B-46, Majid Sarani, KDA C/A, Khulna" },
    { name: "Hotel Castle Salam Grand Ballroom", address: "G-8 Taltola Mor, KDA Avenue, Khulna" },
  ],
  Barishal: [
    { name: "Grand Park Hotel Kirtonkhola Ballroom", address: "Bell's Park, Band Road, Barishal" },
  ],
  Rangpur: [
    { name: "Grand Palace Rangpur Banquet Hall", address: "Jail Road, Dhap, Rangpur" },
  ],
  Mymensingh: [
    { name: "Brahmaputra Heritage Convention Center", address: "Station Road, Mymensingh" },
  ],
  Cumilla: [
    { name: "Moynamoti Royal Convention Center", address: "Kotbari Road, Cumilla" },
  ],
  Gazipur: [
    { name: "Ananda Park & Resort Grand Hall", address: "Taltoli, Gazipur" },
  ],
};

const DEFAULT_DHAKA_VENUES = VENUES_BY_CITY["Dhaka"];

// Special Instructions Pool
const SPECIAL_INSTRUCTIONS = [
  "Stage flower setup must be 100% completed by 3:00 PM.",
  "Please ensure warm ambient dimming for the couple grand entry.",
  "Cold pyros must be aligned with cake cutting music cue.",
  "Custom neon sign must be secured firmly to avoid wind shake.",
  "Keep spotlight color temperature at 3200K warm white.",
  "Provide 2 extra floral stands at the VIP entrance archway.",
  "Ensure dry ice low fog generator is ready 10 mins before entry.",
  "Teardown crew must arrive immediately after 11:30 PM.",
  "Floral grade should be premium Rajnigandha and Dutch Roses.",
  "Ensure photo booth lighting has zero glare on backdrop.",
];

// Status Lifecycle distributions
const STATUS_CONFIGS = [
  { status: "completed", paymentStatus: "paid", payPercent: 1.0, isCancelled: false },
  { status: "completed", paymentStatus: "paid", payPercent: 1.0, isCancelled: false },
  { status: "completed", paymentStatus: "paid", payPercent: 1.0, isCancelled: false },
  { status: "confirmed", paymentStatus: "partially_paid", payPercent: 0.4, isCancelled: false },
  { status: "confirmed", paymentStatus: "partially_paid", payPercent: 0.5, isCancelled: false },
  { status: "in_progress", paymentStatus: "partially_paid", payPercent: 0.5, isCancelled: false },
  { status: "pending", paymentStatus: "unpaid", payPercent: 0.0, isCancelled: false },
  { status: "cancelled", paymentStatus: "refunded", payPercent: 0.0, isCancelled: true, reason: "Client rescheduled family event due to travel conflict." },
];

const generatedBookings = [];
const generatedPayments = [];

let paymentCounter = 1;

selectedServices.forEach((item, index) => {
  const { service, decorator } = item;
  const bookingIndex = index + 1;
  const bookingIdHex = `66be18a5f2c4a91b88${bookingIndex.toString().padStart(6, '0')}`;
  const bookingId = new ObjectId(bookingIdHex);
  const bookingCode = `BK-2026-0814-${bookingIndex.toString().padStart(3, '0')}`;

  // Rotate through 21 customers
  const customer = customers[index % customers.length];

  // Pick an agent belonging to this decorator
  const decAgents = agentsByDec[decorator._id.toString()] || [];
  const assignedAgent = decAgents[index % Math.max(1, decAgents.length)] || null;

  // City & Venue
  const decCity = decorator.contactInfo?.city || "Dhaka";
  const cityVenues = VENUES_BY_CITY[decCity] || DEFAULT_DHAKA_VENUES;
  const venueObj = cityVenues[index % cityVenues.length];

  // Pricing
  const unitPrice = service.pricing?.discountedPrice || service.pricing?.basePrice || 35000;
  const discountAmount = index % 3 === 0 ? Math.round(unitPrice * 0.08) : 0;
  const taxable = unitPrice - discountAmount;
  const serviceTax = Math.round(taxable * 0.05);
  const grandTotal = taxable + serviceTax;

  // Status & Payment
  const statusCfg = STATUS_CONFIGS[index % STATUS_CONFIGS.length];
  const paidAmount = Math.round(grandTotal * statusCfg.payPercent);
  const dueAmount = grandTotal - paidAmount;

  // Event Date (distributed from Aug 2026 to Dec 2026)
  const dayOffset = (index * 2) % 110;
  const eventDate = new Date(Date.UTC(2026, 7, 20 + dayOffset, 10, 0, 0));

  const tierName = service.packages?.[0]?.tier || "Standard Setup";
  const subCategoryName = typeof service.subCategory === 'object' ? service.subCategory?.name : (service.subCategory || service.category);

  const booking = {
    _id: bookingId,
    bookingCode: bookingCode,
    customerId: customer._id,
    decoratorId: decorator._id,
    serviceId: service._id,
    assignedAgentId: assignedAgent ? assignedAgent._id : null,
    serviceSnapshot: {
      title: service.title,
      category: typeof service.category === 'string' ? service.category : service.category?.name,
      subCategory: subCategoryName,
      selectedPackage: tierName,
      unitPrice: unitPrice,
    },
    eventDetails: {
      eventDate: eventDate,
      startTime: index % 2 === 0 ? "16:00" : "17:30",
      endTime: index % 2 === 0 ? "22:00" : "23:30",
      venueName: venueObj.name,
      venueAddress: venueObj.address,
      guestCountEstimate: 80 + ((index * 17) % 250),
      specialInstructions: SPECIAL_INSTRUCTIONS[index % SPECIAL_INSTRUCTIONS.length],
    },
    pricingBreakdown: {
      subtotal: unitPrice,
      discountAmount: discountAmount,
      serviceTax: serviceTax,
      grandTotal: grandTotal,
      paidAmount: paidAmount,
      dueAmount: dueAmount,
    },
    status: statusCfg.status,
    paymentStatus: statusCfg.paymentStatus,
    cancellationReason: statusCfg.isCancelled ? statusCfg.reason : null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z"),
  };

  generatedBookings.push(booking);

  // Generate Payment Record if paid > 0 or refunded
  if (paidAmount > 0 || statusCfg.paymentStatus === 'refunded') {
    const paymentIdHex = `66be18a6f2c4a91b88${paymentCounter.toString().padStart(6, '0')}`;
    const paymentCode = `PAY-2026-0814-${paymentCounter.toString().padStart(3, '0')}`;
    const payMethod = ['bkash', 'nagad', 'sslcommerz', 'bank_transfer'][paymentCounter % 4];
    const payAmt = paidAmount > 0 ? paidAmount : grandTotal;

    const payment = {
      _id: new ObjectId(paymentIdHex),
      paymentCode: paymentCode,
      bookingId: bookingId,
      customerId: customer._id,
      decoratorId: decorator._id,
      amount: payAmt,
      currency: "BDT",
      paymentType: statusCfg.status === "completed" ? "full_payment" : "advance_deposit",
      paymentMethod: payMethod,
      gatewayDetails: {
        gateway: payMethod === 'bkash' ? 'bKash' : (payMethod === 'nagad' ? 'Nagad' : 'SSLCommerz'),
        transactionId: `TRX${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
        gatewayResponseCode: "0000",
        valId: `VAL_${payMethod.toUpperCase()}_${90000 + paymentCounter}`,
      },
      breakdown: {
        baseAmount: payAmt,
        gatewayFee: Math.round(payAmt * 0.015),
        platformCommission: Math.round(payAmt * 0.10),
        vendorReceivable: payAmt - Math.round(payAmt * 0.015) - Math.round(payAmt * 0.10),
      },
      status: statusCfg.status === "cancelled" ? "refunded" : "completed",
      paidAt: new Date("2026-08-14T10:30:00.000Z"),
      refundDetails: {
        isRefunded: statusCfg.status === "cancelled",
        refundAmount: statusCfg.status === "cancelled" ? payAmt : 0,
        refundReason: statusCfg.status === "cancelled" ? statusCfg.reason : null,
        refundedAt: statusCfg.status === "cancelled" ? new Date("2026-08-14T12:00:00.000Z") : null,
      },
      createdAt: new Date("2026-08-14T10:00:00.000Z"),
      updatedAt: new Date("2026-08-14T10:00:00.000Z"),
    };

    generatedPayments.push(payment);
    paymentCounter++;
  }
});

// Format and write bookingsData.js
const bookingsFileContent = `const { ObjectId } = require('mongodb');

const bookingsData = ${JSON.stringify(generatedBookings, null, 2)
  .replace(/"_id": "([a-f0-9]{24})"/g, '"_id": new ObjectId("$1")')
  .replace(/"customerId": "([a-f0-9]{24})"/g, '"customerId": new ObjectId("$1")')
  .replace(/"decoratorId": "([a-f0-9]{24})"/g, '"decoratorId": new ObjectId("$1")')
  .replace(/"serviceId": "([a-f0-9]{24})"/g, '"serviceId": new ObjectId("$1")')
  .replace(/"assignedAgentId": "([a-f0-9]{24})"/g, '"assignedAgentId": new ObjectId("$1")')
  .replace(/"eventDate": "([^"]+)"/g, '"eventDate": new Date("$1")')
  .replace(/"createdAt": "([^"]+)"/g, '"createdAt": new Date("$1")')
  .replace(/"updatedAt": "([^"]+)"/g, '"updatedAt": new Date("$1")')
};

module.exports = { bookingsData };
`;

fs.writeFileSync(path.join(__dirname, '../data/bookingsData.js'), bookingsFileContent, 'utf8');

// Format and write paymentsData.js
const paymentsFileContent = `const { ObjectId } = require('mongodb');

const paymentsData = ${JSON.stringify(generatedPayments, null, 2)
  .replace(/"_id": "([a-f0-9]{24})"/g, '"_id": new ObjectId("$1")')
  .replace(/"bookingId": "([a-f0-9]{24})"/g, '"bookingId": new ObjectId("$1")')
  .replace(/"customerId": "([a-f0-9]{24})"/g, '"customerId": new ObjectId("$1")')
  .replace(/"decoratorId": "([a-f0-9]{24})"/g, '"decoratorId": new ObjectId("$1")')
  .replace(/"paidAt": "([^"]+)"/g, '"paidAt": new Date("$1")')
  .replace(/"refundedAt": "([^"]+)"/g, '"refundedAt": new Date("$1")')
  .replace(/"createdAt": "([^"]+)"/g, '"createdAt": new Date("$1")')
  .replace(/"updatedAt": "([^"]+)"/g, '"updatedAt": new Date("$1")')
};

module.exports = { paymentsData };
`;

fs.writeFileSync(path.join(__dirname, '../data/paymentsData.js'), paymentsFileContent, 'utf8');

console.log('✅ Successfully wrote data/bookingsData.js with', generatedBookings.length, 'bookings.');
console.log('✅ Successfully wrote data/paymentsData.js with', generatedPayments.length, 'payments.');

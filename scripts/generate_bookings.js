const fs = require('fs');
const path = require('path');
const { usersData } = require('../data/usersData');
const { decoratorsData } = require('../data/decoratorsData');
const { servicesData } = require('../data/servicesData');
const { agentsData } = require('../data/agentsData');

const customerUsers = usersData.filter(u => u.role === 'customer');

const venuesByCity = {
  "Dhaka": [
    { name: "Sena Kunja Banquet Hall", address: "Dhaka Cantonment, Dhaka" },
    { name: "International Convention City Bashundhara (ICCB) Hall 2", address: "Kuril Bishwa Road, Next to 300 Feet, Purbachal Express, Dhaka" },
    { name: "Radisson Blu Water Garden Grand Ballroom", address: "Airport Road, Dhaka Cantonment, Dhaka" },
    { name: "Le Meridien Sky Ballroom", address: "79/A Commercial Area, Airport Road, Nikunja 2, Dhaka" },
    { name: "Krishibid Institution Bangladesh (KIB) Auditorium", address: "Krishi Khamar Sarak, Farmgate, Dhaka" },
    { name: "Police Convention Hall", address: "Eskaton Garden Road, Ramna, Dhaka" },
    { name: "Emmanuelle's Banquet Hall", address: "House 4, Road 134/135, Gulshan-1, Dhaka" },
    { name: "Celebration Point Banquet", address: "Plot 8, Road 113/A, Gulshan-2, Dhaka" },
    { name: "Officers Club Dhaka", address: "26 Baily Road, Ramna, Dhaka" },
    { name: "Dhaka Club Pavilion", address: "Ramna, Dhaka" }
  ],
  "Chattogram": [
    { name: "The Peninsula Chittagong Grand Ballroom", address: "GEC Circle, CDA Avenue, Chattogram" },
    { name: "Radisson Blu Chattogram Bay View", address: "SS Khaled Road, Lalkhan Bazar, Chattogram" },
    { name: "BMA Bhaban Convention Hall", address: "Chawkbazar Road, Chattogram" },
    { name: "Chattogram Club Banquet Hall", address: "Empress Road, Chattogram" }
  ],
  "Sylhet": [
    { name: "Rose View Hotel Grand Surma Hall", address: "Shahjalal Upashahar, Sylhet" },
    { name: "Grand Palace Hotel Ballroom", address: "Jail Road, Sylhet" },
    { name: "Amanullah Convention Center", address: "VIP Road, Subidbazar, Sylhet" }
  ],
  "Rajshahi": [
    { name: "Hotel Grand River View Ballroom", address: "Kazihata, Rajshahi" },
    { name: "Rajshahi University Kazi Nazrul Islam Auditorium", address: "Motihar, Rajshahi" }
  ],
  "Khulna": [
    { name: "Hotel City Inn Imperial Ballroom", address: "Majid Sarani, Sonadanga, Khulna" },
    { name: "Khulna Club Banquet Hall", address: "Old Jessore Road, Khulna" }
  ],
  "Barishal": [
    { name: "Grand Park Hotel Barishal Ballroom", address: "Band Road, Barishal" }
  ],
  "Rangpur": [
    { name: "RDRS Bangladesh Auditorium & Hall", address: "Jail Road, Dhap, Rangpur" }
  ],
  "Mymensingh": [
    { name: "Mymensingh Zilla Parishad Auditorium", address: "Town Hall Road, Mymensingh" }
  ],
  "Cumilla": [
    { name: "Cumilla Town Hall Convention Center", address: "Kandirpar, Cumilla" }
  ],
  "Gazipur": [
    { name: "Bhawal Resort & Spa Grand Hall", address: "Noljani, Mirzapur, Gazipur" }
  ]
};

const instructionsList = [
  "Stage flower setup must be 100% completed by 3:00 PM.",
  "Please ensure warm ambient dimming for the couple grand entry.",
  "Cold pyros must be aligned with cake cutting music cue.",
  "Guest photo booth attendant must assist elderly guests with prints.",
  "Extra fairy light canopy covering needed for the garden area.",
  "Stage backdrop name spelling must be verified before final mounting.",
  "All electrical cabling must be covered with cable ramps for safety.",
  "Clean teardown required by 1:00 AM as per venue policy.",
  "Keep 2 additional VIP sofas near stage side for parents.",
  "Coordinate dry ice fog release with the bridal party entry dance."
];

const statusFlows = [
  { status: "completed", paymentStatus: "paid", cancelReason: null },
  { status: "confirmed", paymentStatus: "partially_paid", cancelReason: null },
  { status: "confirmed", paymentStatus: "paid", cancelReason: null },
  { status: "in_progress", paymentStatus: "partially_paid", cancelReason: null },
  { status: "pending", paymentStatus: "unpaid", cancelReason: null },
  { status: "cancelled", paymentStatus: "refunded", cancelReason: "Client requested date change due to venue unavailability." }
];

const bookings = [];

// Generate exactly 100 bookings covering all 97 services + 3 popular duplicates
for (let i = 0; i < 100; i++) {
  const hex = (i + 1).toString(16).padStart(2, '0');
  const bookingId = `66be18a5f2c4a91b880000${hex}`;
  const bookingCode = `BK-2026-0814-${(i + 1).toString().padStart(3, '0')}`;

  // Customer from the 20 newly created customers (usersData index 100 to 119)
  const customer = customerUsers[i % customerUsers.length];

  // Service: 1 to 97 first, then index 0, 1, 2 for 98, 99, 100
  const serviceIndex = i < servicesData.length ? i : (i - servicesData.length);
  const service = servicesData[serviceIndex];
  const decoratorId = service.decoratorId.toString();

  // Find agent belonging to this decorator
  const decoratorAgents = agentsData.filter(a => a.decoratorId.toString() === decoratorId);
  const assignedAgent = decoratorAgents[i % decoratorAgents.length] || agentsData[i % agentsData.length];

  // Decorator info for city lookup
  const decorator = decoratorsData.find(d => d._id.toString() === decoratorId) || decoratorsData[0];
  const city = decorator.contactInfo.city || "Dhaka";
  const cityVenues = venuesByCity[city] || venuesByCity["Dhaka"];
  const venue = cityVenues[i % cityVenues.length];

  // Selected package
  const pkgIndex = i % service.packages.length;
  const selectedPkg = service.packages[pkgIndex];

  // Pricing calculations
  const subtotal = selectedPkg.price;
  const discountAmount = (i % 3 === 0) ? Math.round(subtotal * 0.08) : (i % 5 === 0 ? 3000 : 0);
  const serviceTax = Math.round((subtotal - discountAmount) * 0.05);
  const grandTotal = subtotal - discountAmount + serviceTax;

  const flow = statusFlows[i % statusFlows.length];
  let paidAmount = 0;
  if (flow.paymentStatus === 'paid') {
    paidAmount = grandTotal;
  } else if (flow.paymentStatus === 'partially_paid') {
    paidAmount = Math.round(grandTotal * 0.4);
  } else if (flow.paymentStatus === 'refunded') {
    paidAmount = 0;
  }
  const dueAmount = grandTotal - paidAmount;

  // Realistic dates
  const day = 1 + (i % 28);
  const month = (i % 2 === 0) ? "09" : "10";
  const eventDate = `2026-${month}-${day.toString().padStart(2, '0')}T10:00:00.000Z`;

  const instructions = instructionsList[i % instructionsList.length];
  const guestCount = 100 + (i * 17) % 650;

  bookings.push(`  {
    _id: new ObjectId("${bookingId}"),
    bookingCode: "${bookingCode}",
    customerId: new ObjectId("${customer._id}"),
    decoratorId: new ObjectId("${service.decoratorId}"),
    serviceId: new ObjectId("${service._id}"),
    assignedAgentId: new ObjectId("${assignedAgent._id}"),
    serviceSnapshot: {
      title: "${service.title.replace(/"/g, '\\"')}",
      category: "${service.category}",
      subCategory: "${service.subCategory.name}",
      selectedPackage: "${selectedPkg.tier}",
      unitPrice: ${selectedPkg.price}
    },
    eventDetails: {
      eventDate: new Date("${eventDate}"),
      startTime: "${16 + (i % 3)}:00",
      endTime: "${22 + (i % 2)}:00",
      venueName: "${venue.name}",
      venueAddress: "${venue.address}",
      guestCountEstimate: ${guestCount},
      specialInstructions: "${instructions}"
    },
    pricingBreakdown: {
      subtotal: ${subtotal},
      discountAmount: ${discountAmount},
      serviceTax: ${serviceTax},
      grandTotal: ${grandTotal},
      paidAmount: ${paidAmount},
      dueAmount: ${dueAmount}
    },
    status: "${flow.status}",
    paymentStatus: "${flow.paymentStatus}",
    cancellationReason: ${flow.cancelReason ? `"${flow.cancelReason}"` : 'null'},
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  }`);
}

const fileContent = `const { ObjectId } = require('mongodb');

const bookingsData = [
${bookings.join(',\n')}
];

module.exports = { bookingsData };
`;

fs.writeFileSync(path.join(__dirname, '../data/bookingsData.js'), fileContent);
console.log(`bookingsData.js generated successfully with exactly ${bookings.length} bookings covering all services!`);

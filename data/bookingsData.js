const { ObjectId } = require('mongodb');

const bookingsData = [
  {
    _id: new ObjectId("66be18a5f2c4a91b88000001"),
    bookingCode: "BK-2026-0814-001",
    customerId: new ObjectId("66be18a1f2c4a91b88000065"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000001"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000001"),
    serviceSnapshot: {
      title: "Royal Wedding Reception Stage Setup - DreamCraft",
      category: "Wedding & Pre-Wedding",
      subCategory: "Wedding & Reception Stage",
      selectedPackage: "Standard Floral",
      unitPrice: 40000
    },
    eventDetails: {
      eventDate: new Date("2026-09-01T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "Sena Kunja Banquet Hall",
      venueAddress: "Dhaka Cantonment, Dhaka",
      guestCountEstimate: 100,
      specialInstructions: "Stage flower setup must be 100% completed by 3:00 PM."
    },
    pricingBreakdown: {
      subtotal: 40000,
      discountAmount: 3200,
      serviceTax: 1840,
      grandTotal: 38640,
      paidAmount: 38640,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000002"),
    bookingCode: "BK-2026-0814-002",
    customerId: new ObjectId("66be18a1f2c4a91b88000066"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000002"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000002"),
    serviceSnapshot: {
      title: "Vibrant Gaye Holud & Mehendi Canopy - DreamCraft",
      category: "Wedding & Pre-Wedding",
      subCategory: "Haldi & Mehendi Setup",
      selectedPackage: "Grand Holud Extravaganza",
      unitPrice: 45000
    },
    eventDetails: {
      eventDate: new Date("2026-10-02T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "International Convention City Bashundhara (ICCB) Hall 2",
      venueAddress: "Kuril Bishwa Road, Next to 300 Feet, Purbachal Express, Dhaka",
      guestCountEstimate: 117,
      specialInstructions: "Please ensure warm ambient dimming for the couple grand entry."
    },
    pricingBreakdown: {
      subtotal: 45000,
      discountAmount: 0,
      serviceTax: 2250,
      grandTotal: 47250,
      paidAmount: 18900,
      dueAmount: 28350
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000003"),
    bookingCode: "BK-2026-0814-003",
    customerId: new ObjectId("66be18a1f2c4a91b88000067"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000003"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000003"),
    serviceSnapshot: {
      title: "Bride & Groom Grand Entry Pathway - DreamCraft",
      category: "Wedding & Pre-Wedding",
      subCategory: "Bride & Groom Grand Entry",
      selectedPackage: "Classic Aisle",
      unitPrice: 22000
    },
    eventDetails: {
      eventDate: new Date("2026-09-03T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "Radisson Blu Water Garden Grand Ballroom",
      venueAddress: "Airport Road, Dhaka Cantonment, Dhaka",
      guestCountEstimate: 134,
      specialInstructions: "Cold pyros must be aligned with cake cutting music cue."
    },
    pricingBreakdown: {
      subtotal: 22000,
      discountAmount: 0,
      serviceTax: 1100,
      grandTotal: 23100,
      paidAmount: 23100,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000004"),
    bookingCode: "BK-2026-0814-004",
    customerId: new ObjectId("66be18a1f2c4a91b88000068"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000004"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000004"),
    serviceSnapshot: {
      title: "Custom Neon Signs & Marquee Letter Rental - DreamCraft",
      category: "Lighting, FX & Rentals",
      subCategory: "Custom Neon Signs & Marquee Letters",
      selectedPackage: "Giant Marquee + Neon Combo",
      unitPrice: 18000
    },
    eventDetails: {
      eventDate: new Date("2026-10-04T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "Le Meridien Sky Ballroom",
      venueAddress: "79/A Commercial Area, Airport Road, Nikunja 2, Dhaka",
      guestCountEstimate: 151,
      specialInstructions: "Guest photo booth attendant must assist elderly guests with prints."
    },
    pricingBreakdown: {
      subtotal: 18000,
      discountAmount: 1440,
      serviceTax: 828,
      grandTotal: 17388,
      paidAmount: 6955,
      dueAmount: 10433
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000005"),
    bookingCode: "BK-2026-0814-005",
    customerId: new ObjectId("66be18a1f2c4a91b88000069"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000005"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000001"),
    serviceSnapshot: {
      title: "Special Effects - Cold Pyro & Dry Ice Low Fog - DreamCraft",
      category: "Lighting, FX & Rentals",
      subCategory: "Special Effects (Fog, Smoke & Pyro)",
      selectedPackage: "Entry FX Pack",
      unitPrice: 15000
    },
    eventDetails: {
      eventDate: new Date("2026-09-05T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "Krishibid Institution Bangladesh (KIB) Auditorium",
      venueAddress: "Krishi Khamar Sarak, Farmgate, Dhaka",
      guestCountEstimate: 168,
      specialInstructions: "Extra fairy light canopy covering needed for the garden area."
    },
    pricingBreakdown: {
      subtotal: 15000,
      discountAmount: 0,
      serviceTax: 750,
      grandTotal: 15750,
      paidAmount: 0,
      dueAmount: 15750
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000006"),
    bookingCode: "BK-2026-0814-006",
    customerId: new ObjectId("66be18a1f2c4a91b8800006a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000006"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000006"),
    serviceSnapshot: {
      title: "Royal Wedding Reception Stage Setup - Royal",
      category: "Wedding & Pre-Wedding",
      subCategory: "Wedding & Reception Stage",
      selectedPackage: "Premium Royal",
      unitPrice: 65000
    },
    eventDetails: {
      eventDate: new Date("2026-10-06T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "Police Convention Hall",
      venueAddress: "Eskaton Garden Road, Ramna, Dhaka",
      guestCountEstimate: 185,
      specialInstructions: "Stage backdrop name spelling must be verified before final mounting."
    },
    pricingBreakdown: {
      subtotal: 65000,
      discountAmount: 3000,
      serviceTax: 3100,
      grandTotal: 65100,
      paidAmount: 0,
      dueAmount: 65100
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000007"),
    bookingCode: "BK-2026-0814-007",
    customerId: new ObjectId("66be18a1f2c4a91b8800006b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000007"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000007"),
    serviceSnapshot: {
      title: "Bride & Groom Grand Entry Pathway - Royal",
      category: "Wedding & Pre-Wedding",
      subCategory: "Bride & Groom Grand Entry",
      selectedPackage: "Classic Aisle",
      unitPrice: 22000
    },
    eventDetails: {
      eventDate: new Date("2026-09-07T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "Emmanuelle's Banquet Hall",
      venueAddress: "House 4, Road 134/135, Gulshan-1, Dhaka",
      guestCountEstimate: 202,
      specialInstructions: "All electrical cabling must be covered with cable ramps for safety."
    },
    pricingBreakdown: {
      subtotal: 22000,
      discountAmount: 1760,
      serviceTax: 1012,
      grandTotal: 21252,
      paidAmount: 21252,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000008"),
    bookingCode: "BK-2026-0814-008",
    customerId: new ObjectId("66be18a1f2c4a91b8800006c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000008"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000008"),
    serviceSnapshot: {
      title: "Romantic Engagement & Ring Ceremony Decor - Royal",
      category: "Wedding & Pre-Wedding",
      subCategory: "Engagement & Ring Ceremony",
      selectedPackage: "Luxe Botanical Ring",
      unitPrice: 38000
    },
    eventDetails: {
      eventDate: new Date("2026-10-08T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "Celebration Point Banquet",
      venueAddress: "Plot 8, Road 113/A, Gulshan-2, Dhaka",
      guestCountEstimate: 219,
      specialInstructions: "Clean teardown required by 1:00 AM as per venue policy."
    },
    pricingBreakdown: {
      subtotal: 38000,
      discountAmount: 0,
      serviceTax: 1900,
      grandTotal: 39900,
      paidAmount: 15960,
      dueAmount: 23940
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000009"),
    bookingCode: "BK-2026-0814-009",
    customerId: new ObjectId("66be18a1f2c4a91b8800006d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000009"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000005"),
    serviceSnapshot: {
      title: "Gala & Annual Award Night Stage Setup - Royal",
      category: "Corporate & Official Events",
      subCategory: "Gala & Annual Award Nights",
      selectedPackage: "Red Carpet Gala",
      unitPrice: 37000
    },
    eventDetails: {
      eventDate: new Date("2026-09-09T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "Officers Club Dhaka",
      venueAddress: "26 Baily Road, Ramna, Dhaka",
      guestCountEstimate: 236,
      specialInstructions: "Keep 2 additional VIP sofas near stage side for parents."
    },
    pricingBreakdown: {
      subtotal: 37000,
      discountAmount: 0,
      serviceTax: 1850,
      grandTotal: 38850,
      paidAmount: 38850,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800000a"),
    bookingCode: "BK-2026-0814-010",
    customerId: new ObjectId("66be18a1f2c4a91b8800006e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800000a"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000006"),
    serviceSnapshot: {
      title: "Corporate Dinner & Executive Meetup Decor - Royal",
      category: "Corporate & Official Events",
      subCategory: "Corporate Dinners & Meetups",
      selectedPackage: "Executive President Gala",
      unitPrice: 45000
    },
    eventDetails: {
      eventDate: new Date("2026-10-10T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "Dhaka Club Pavilion",
      venueAddress: "Ramna, Dhaka",
      guestCountEstimate: 253,
      specialInstructions: "Coordinate dry ice fog release with the bridal party entry dance."
    },
    pricingBreakdown: {
      subtotal: 45000,
      discountAmount: 3600,
      serviceTax: 2070,
      grandTotal: 43470,
      paidAmount: 17388,
      dueAmount: 26082
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800000b"),
    bookingCode: "BK-2026-0814-011",
    customerId: new ObjectId("66be18a1f2c4a91b8800006f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800000b"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800000b"),
    serviceSnapshot: {
      title: "Royal Wedding Reception Stage Setup - Bloom",
      category: "Wedding & Pre-Wedding",
      subCategory: "Wedding & Reception Stage",
      selectedPackage: "Standard Floral",
      unitPrice: 40000
    },
    eventDetails: {
      eventDate: new Date("2026-09-11T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "BMA Bhaban Convention Hall",
      venueAddress: "Chawkbazar Road, Chattogram",
      guestCountEstimate: 270,
      specialInstructions: "Stage flower setup must be 100% completed by 3:00 PM."
    },
    pricingBreakdown: {
      subtotal: 40000,
      discountAmount: 3000,
      serviceTax: 1850,
      grandTotal: 38850,
      paidAmount: 0,
      dueAmount: 38850
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800000c"),
    bookingCode: "BK-2026-0814-012",
    customerId: new ObjectId("66be18a1f2c4a91b88000070"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800000c"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800000c"),
    serviceSnapshot: {
      title: "Vibrant Gaye Holud & Mehendi Canopy - Bloom",
      category: "Wedding & Pre-Wedding",
      subCategory: "Haldi & Mehendi Setup",
      selectedPackage: "Grand Holud Extravaganza",
      unitPrice: 45000
    },
    eventDetails: {
      eventDate: new Date("2026-10-12T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "Chattogram Club Banquet Hall",
      venueAddress: "Empress Road, Chattogram",
      guestCountEstimate: 287,
      specialInstructions: "Please ensure warm ambient dimming for the couple grand entry."
    },
    pricingBreakdown: {
      subtotal: 45000,
      discountAmount: 0,
      serviceTax: 2250,
      grandTotal: 47250,
      paidAmount: 0,
      dueAmount: 47250
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800000d"),
    bookingCode: "BK-2026-0814-013",
    customerId: new ObjectId("66be18a1f2c4a91b88000071"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800000d"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000009"),
    serviceSnapshot: {
      title: "Pastel Baby Shower & Gender Reveal Setup - Bloom",
      category: "Baby Shower & Family Gatherings",
      subCategory: "Baby Shower & Gender Reveal",
      selectedPackage: "Pastel Joy",
      unitPrice: 17000
    },
    eventDetails: {
      eventDate: new Date("2026-09-13T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "The Peninsula Chittagong Grand Ballroom",
      venueAddress: "GEC Circle, CDA Avenue, Chattogram",
      guestCountEstimate: 304,
      specialInstructions: "Cold pyros must be aligned with cake cutting music cue."
    },
    pricingBreakdown: {
      subtotal: 17000,
      discountAmount: 1360,
      serviceTax: 782,
      grandTotal: 16422,
      paidAmount: 16422,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800000e"),
    bookingCode: "BK-2026-0814-014",
    customerId: new ObjectId("66be18a1f2c4a91b88000072"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800000e"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800000a"),
    serviceSnapshot: {
      title: "Housewarming & Family Get-Together Decor - Bloom",
      category: "Baby Shower & Family Gatherings",
      subCategory: "Housewarming & Get-Togethers",
      selectedPackage: "New Home Celebration",
      unitPrice: 22000
    },
    eventDetails: {
      eventDate: new Date("2026-10-14T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "Radisson Blu Chattogram Bay View",
      venueAddress: "SS Khaled Road, Lalkhan Bazar, Chattogram",
      guestCountEstimate: 321,
      specialInstructions: "Guest photo booth attendant must assist elderly guests with prints."
    },
    pricingBreakdown: {
      subtotal: 22000,
      discountAmount: 0,
      serviceTax: 1100,
      grandTotal: 23100,
      paidAmount: 9240,
      dueAmount: 13860
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800000f"),
    bookingCode: "BK-2026-0814-015",
    customerId: new ObjectId("66be18a1f2c4a91b88000073"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800000f"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800000f"),
    serviceSnapshot: {
      title: "Kids Themed Fantasy Birthday Setup - Kiddos",
      category: "Birthday & Anniversary",
      subCategory: "Kids Themed Birthday",
      selectedPackage: "Themed Standard",
      unitPrice: 15000
    },
    eventDetails: {
      eventDate: new Date("2026-09-15T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "Krishibid Institution Bangladesh (KIB) Auditorium",
      venueAddress: "Krishi Khamar Sarak, Farmgate, Dhaka",
      guestCountEstimate: 338,
      specialInstructions: "Extra fairy light canopy covering needed for the garden area."
    },
    pricingBreakdown: {
      subtotal: 15000,
      discountAmount: 0,
      serviceTax: 750,
      grandTotal: 15750,
      paidAmount: 15750,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000010"),
    bookingCode: "BK-2026-0814-016",
    customerId: new ObjectId("66be18a1f2c4a91b88000074"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000010"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000010"),
    serviceSnapshot: {
      title: "1st Birthday Little Prince / Princess Setup - Kiddos",
      category: "Birthday & Anniversary",
      subCategory: "1st Birthday Special",
      selectedPackage: "Royal First Birthday",
      unitPrice: 29000
    },
    eventDetails: {
      eventDate: new Date("2026-10-16T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "Police Convention Hall",
      venueAddress: "Eskaton Garden Road, Ramna, Dhaka",
      guestCountEstimate: 355,
      specialInstructions: "Stage backdrop name spelling must be verified before final mounting."
    },
    pricingBreakdown: {
      subtotal: 29000,
      discountAmount: 2320,
      serviceTax: 1334,
      grandTotal: 28014,
      paidAmount: 11206,
      dueAmount: 16808
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000011"),
    bookingCode: "BK-2026-0814-017",
    customerId: new ObjectId("66be18a1f2c4a91b88000075"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000011"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800000d"),
    serviceSnapshot: {
      title: "Pastel Baby Shower & Gender Reveal Setup - Kiddos",
      category: "Baby Shower & Family Gatherings",
      subCategory: "Baby Shower & Gender Reveal",
      selectedPackage: "Pastel Joy",
      unitPrice: 17000
    },
    eventDetails: {
      eventDate: new Date("2026-09-17T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "Emmanuelle's Banquet Hall",
      venueAddress: "House 4, Road 134/135, Gulshan-1, Dhaka",
      guestCountEstimate: 372,
      specialInstructions: "All electrical cabling must be covered with cable ramps for safety."
    },
    pricingBreakdown: {
      subtotal: 17000,
      discountAmount: 0,
      serviceTax: 850,
      grandTotal: 17850,
      paidAmount: 0,
      dueAmount: 17850
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000012"),
    bookingCode: "BK-2026-0814-018",
    customerId: new ObjectId("66be18a1f2c4a91b88000076"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000012"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800000e"),
    serviceSnapshot: {
      title: "Akika & Naming Ceremony Stage - Kiddos",
      category: "Baby Shower & Family Gatherings",
      subCategory: "Akika & Naming Ceremony",
      selectedPackage: "Royal Noor Setup",
      unitPrice: 33000
    },
    eventDetails: {
      eventDate: new Date("2026-10-18T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "Celebration Point Banquet",
      venueAddress: "Plot 8, Road 113/A, Gulshan-2, Dhaka",
      guestCountEstimate: 389,
      specialInstructions: "Clean teardown required by 1:00 AM as per venue policy."
    },
    pricingBreakdown: {
      subtotal: 33000,
      discountAmount: 0,
      serviceTax: 1650,
      grandTotal: 34650,
      paidAmount: 0,
      dueAmount: 34650
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000013"),
    bookingCode: "BK-2026-0814-019",
    customerId: new ObjectId("66be18a1f2c4a91b88000077"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000013"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000013"),
    serviceSnapshot: {
      title: "Executive Conference & Seminar Staging - Elite",
      category: "Corporate & Official Events",
      subCategory: "Conferences & Seminars",
      selectedPackage: "Corporate Standard",
      unitPrice: 33000
    },
    eventDetails: {
      eventDate: new Date("2026-09-19T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "Officers Club Dhaka",
      venueAddress: "26 Baily Road, Ramna, Dhaka",
      guestCountEstimate: 406,
      specialInstructions: "Keep 2 additional VIP sofas near stage side for parents."
    },
    pricingBreakdown: {
      subtotal: 33000,
      discountAmount: 2640,
      serviceTax: 1518,
      grandTotal: 31878,
      paidAmount: 31878,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000014"),
    bookingCode: "BK-2026-0814-020",
    customerId: new ObjectId("66be18a1f2c4a91b88000078"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000014"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000014"),
    serviceSnapshot: {
      title: "Gala & Annual Award Night Stage Setup - Elite",
      category: "Corporate & Official Events",
      subCategory: "Gala & Annual Award Nights",
      selectedPackage: "VIP Star Night",
      unitPrice: 68000
    },
    eventDetails: {
      eventDate: new Date("2026-10-20T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "Dhaka Club Pavilion",
      venueAddress: "Ramna, Dhaka",
      guestCountEstimate: 423,
      specialInstructions: "Coordinate dry ice fog release with the bridal party entry dance."
    },
    pricingBreakdown: {
      subtotal: 68000,
      discountAmount: 0,
      serviceTax: 3400,
      grandTotal: 71400,
      paidAmount: 28560,
      dueAmount: 42840
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000015"),
    bookingCode: "BK-2026-0814-021",
    customerId: new ObjectId("66be18a1f2c4a91b88000065"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000015"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000011"),
    serviceSnapshot: {
      title: "Product Launch & Trade Expo Pavilion - Elite",
      category: "Corporate & Official Events",
      subCategory: "Product Launch & Expo Stalls",
      selectedPackage: "Launch Essential",
      unitPrice: 42000
    },
    eventDetails: {
      eventDate: new Date("2026-09-21T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "Sena Kunja Banquet Hall",
      venueAddress: "Dhaka Cantonment, Dhaka",
      guestCountEstimate: 440,
      specialInstructions: "Stage flower setup must be 100% completed by 3:00 PM."
    },
    pricingBreakdown: {
      subtotal: 42000,
      discountAmount: 3000,
      serviceTax: 1950,
      grandTotal: 40950,
      paidAmount: 40950,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000016"),
    bookingCode: "BK-2026-0814-022",
    customerId: new ObjectId("66be18a1f2c4a91b88000066"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000016"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000012"),
    serviceSnapshot: {
      title: "Custom Neon Signs & Marquee Letter Rental - Elite",
      category: "Lighting, FX & Rentals",
      subCategory: "Custom Neon Signs & Marquee Letters",
      selectedPackage: "Giant Marquee + Neon Combo",
      unitPrice: 18000
    },
    eventDetails: {
      eventDate: new Date("2026-10-22T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "International Convention City Bashundhara (ICCB) Hall 2",
      venueAddress: "Kuril Bishwa Road, Next to 300 Feet, Purbachal Express, Dhaka",
      guestCountEstimate: 457,
      specialInstructions: "Please ensure warm ambient dimming for the couple grand entry."
    },
    pricingBreakdown: {
      subtotal: 18000,
      discountAmount: 1440,
      serviceTax: 828,
      grandTotal: 17388,
      paidAmount: 6955,
      dueAmount: 10433
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000017"),
    bookingCode: "BK-2026-0814-023",
    customerId: new ObjectId("66be18a1f2c4a91b88000067"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000017"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000013"),
    serviceSnapshot: {
      title: "Spotlights & Ambient Event Lighting Setup - Elite",
      category: "Lighting, FX & Rentals",
      subCategory: "Spotlights & Ambient Lighting",
      selectedPackage: "Ambience Essential",
      unitPrice: 14000
    },
    eventDetails: {
      eventDate: new Date("2026-09-23T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "Radisson Blu Water Garden Grand Ballroom",
      venueAddress: "Airport Road, Dhaka Cantonment, Dhaka",
      guestCountEstimate: 474,
      specialInstructions: "Cold pyros must be aligned with cake cutting music cue."
    },
    pricingBreakdown: {
      subtotal: 14000,
      discountAmount: 0,
      serviceTax: 700,
      grandTotal: 14700,
      paidAmount: 0,
      dueAmount: 14700
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000018"),
    bookingCode: "BK-2026-0814-024",
    customerId: new ObjectId("66be18a1f2c4a91b88000068"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000018"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000018"),
    serviceSnapshot: {
      title: "Rooftop Party Canopy & Fairy Light Sky - Cozy",
      category: "Home & Rooftop Intimate Setups",
      subCategory: "Rooftop Party Canopy",
      selectedPackage: "Luxe Starlit Rooftop",
      unitPrice: 34000
    },
    eventDetails: {
      eventDate: new Date("2026-10-24T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "Le Meridien Sky Ballroom",
      venueAddress: "79/A Commercial Area, Airport Road, Nikunja 2, Dhaka",
      guestCountEstimate: 491,
      specialInstructions: "Guest photo booth attendant must assist elderly guests with prints."
    },
    pricingBreakdown: {
      subtotal: 34000,
      discountAmount: 0,
      serviceTax: 1700,
      grandTotal: 35700,
      paidAmount: 0,
      dueAmount: 35700
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000019"),
    bookingCode: "BK-2026-0814-025",
    customerId: new ObjectId("66be18a1f2c4a91b88000069"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000019"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000015"),
    serviceSnapshot: {
      title: "Drawing Room & Balcony Aesthetic Makeover - Cozy",
      category: "Home & Rooftop Intimate Setups",
      subCategory: "Drawing Room & Balcony Decor",
      selectedPackage: "Cozy Corner",
      unitPrice: 10000
    },
    eventDetails: {
      eventDate: new Date("2026-09-25T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "Krishibid Institution Bangladesh (KIB) Auditorium",
      venueAddress: "Krishi Khamar Sarak, Farmgate, Dhaka",
      guestCountEstimate: 508,
      specialInstructions: "Extra fairy light canopy covering needed for the garden area."
    },
    pricingBreakdown: {
      subtotal: 10000,
      discountAmount: 800,
      serviceTax: 460,
      grandTotal: 9660,
      paidAmount: 9660,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800001a"),
    bookingCode: "BK-2026-0814-026",
    customerId: new ObjectId("66be18a1f2c4a91b8800006a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800001a"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000016"),
    serviceSnapshot: {
      title: "Surprise Room Makeover with Balloons & Candles - Cozy",
      category: "Home & Rooftop Intimate Setups",
      subCategory: "Surprise Room Makeover",
      selectedPackage: "Grand Romantic Ambush",
      unitPrice: 20000
    },
    eventDetails: {
      eventDate: new Date("2026-10-26T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "Police Convention Hall",
      venueAddress: "Eskaton Garden Road, Ramna, Dhaka",
      guestCountEstimate: 525,
      specialInstructions: "Stage backdrop name spelling must be verified before final mounting."
    },
    pricingBreakdown: {
      subtotal: 20000,
      discountAmount: 3000,
      serviceTax: 850,
      grandTotal: 17850,
      paidAmount: 7140,
      dueAmount: 10710
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800001b"),
    bookingCode: "BK-2026-0814-027",
    customerId: new ObjectId("66be18a1f2c4a91b8800006b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800001b"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000017"),
    serviceSnapshot: {
      title: "Adult Milestone Birthday & Glam Gala - Cozy",
      category: "Birthday & Anniversary",
      subCategory: "Adult Milestone Birthday",
      selectedPackage: "Glam Shimmer",
      unitPrice: 19000
    },
    eventDetails: {
      eventDate: new Date("2026-09-27T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "Emmanuelle's Banquet Hall",
      venueAddress: "House 4, Road 134/135, Gulshan-1, Dhaka",
      guestCountEstimate: 542,
      specialInstructions: "All electrical cabling must be covered with cable ramps for safety."
    },
    pricingBreakdown: {
      subtotal: 19000,
      discountAmount: 0,
      serviceTax: 950,
      grandTotal: 19950,
      paidAmount: 19950,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800001c"),
    bookingCode: "BK-2026-0814-028",
    customerId: new ObjectId("66be18a1f2c4a91b8800006c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800001c"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000018"),
    serviceSnapshot: {
      title: "Romantic Anniversary & Candlelight Dining - Cozy",
      category: "Birthday & Anniversary",
      subCategory: "Romantic Anniversary & Candlelight",
      selectedPackage: "Grand Luxury Romance",
      unitPrice: 25000
    },
    eventDetails: {
      eventDate: new Date("2026-10-28T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "Celebration Point Banquet",
      venueAddress: "Plot 8, Road 113/A, Gulshan-2, Dhaka",
      guestCountEstimate: 559,
      specialInstructions: "Clean teardown required by 1:00 AM as per venue policy."
    },
    pricingBreakdown: {
      subtotal: 25000,
      discountAmount: 2000,
      serviceTax: 1150,
      grandTotal: 24150,
      paidAmount: 9660,
      dueAmount: 14490
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800001d"),
    bookingCode: "BK-2026-0814-029",
    customerId: new ObjectId("66be18a1f2c4a91b8800006d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800001d"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000019"),
    serviceSnapshot: {
      title: "Custom Neon Signs & Marquee Letter Rental - Lumina",
      category: "Lighting, FX & Rentals",
      subCategory: "Custom Neon Signs & Marquee Letters",
      selectedPackage: "Neon Sign Rental",
      unitPrice: 8500
    },
    eventDetails: {
      eventDate: new Date("2026-09-01T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "The Peninsula Chittagong Grand Ballroom",
      venueAddress: "GEC Circle, CDA Avenue, Chattogram",
      guestCountEstimate: 576,
      specialInstructions: "Keep 2 additional VIP sofas near stage side for parents."
    },
    pricingBreakdown: {
      subtotal: 8500,
      discountAmount: 0,
      serviceTax: 425,
      grandTotal: 8925,
      paidAmount: 0,
      dueAmount: 8925
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800001e"),
    bookingCode: "BK-2026-0814-030",
    customerId: new ObjectId("66be18a1f2c4a91b8800006e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800001e"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800001a"),
    serviceSnapshot: {
      title: "Spotlights & Ambient Event Lighting Setup - Lumina",
      category: "Lighting, FX & Rentals",
      subCategory: "Spotlights & Ambient Lighting",
      selectedPackage: "Full Venue Illumination",
      unitPrice: 26000
    },
    eventDetails: {
      eventDate: new Date("2026-10-02T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "Radisson Blu Chattogram Bay View",
      venueAddress: "SS Khaled Road, Lalkhan Bazar, Chattogram",
      guestCountEstimate: 593,
      specialInstructions: "Coordinate dry ice fog release with the bridal party entry dance."
    },
    pricingBreakdown: {
      subtotal: 26000,
      discountAmount: 0,
      serviceTax: 1300,
      grandTotal: 27300,
      paidAmount: 0,
      dueAmount: 27300
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800001f"),
    bookingCode: "BK-2026-0814-031",
    customerId: new ObjectId("66be18a1f2c4a91b8800006f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800001f"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800001b"),
    serviceSnapshot: {
      title: "Special Effects - Cold Pyro & Dry Ice Low Fog - Lumina",
      category: "Lighting, FX & Rentals",
      subCategory: "Special Effects (Fog, Smoke & Pyro)",
      selectedPackage: "Entry FX Pack",
      unitPrice: 15000
    },
    eventDetails: {
      eventDate: new Date("2026-09-03T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "BMA Bhaban Convention Hall",
      venueAddress: "Chawkbazar Road, Chattogram",
      guestCountEstimate: 610,
      specialInstructions: "Stage flower setup must be 100% completed by 3:00 PM."
    },
    pricingBreakdown: {
      subtotal: 15000,
      discountAmount: 1200,
      serviceTax: 690,
      grandTotal: 14490,
      paidAmount: 14490,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000020"),
    bookingCode: "BK-2026-0814-032",
    customerId: new ObjectId("66be18a1f2c4a91b88000070"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000020"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800001c"),
    serviceSnapshot: {
      title: "360 Video Booth & Instant Photo Booth - Lumina",
      category: "Lighting, FX & Rentals",
      subCategory: "Photo Booth & 360 Video Booth",
      selectedPackage: "360 VIP Deluxe 5 Hours",
      unitPrice: 34000
    },
    eventDetails: {
      eventDate: new Date("2026-10-04T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "Chattogram Club Banquet Hall",
      venueAddress: "Empress Road, Chattogram",
      guestCountEstimate: 627,
      specialInstructions: "Please ensure warm ambient dimming for the couple grand entry."
    },
    pricingBreakdown: {
      subtotal: 34000,
      discountAmount: 0,
      serviceTax: 1700,
      grandTotal: 35700,
      paidAmount: 14280,
      dueAmount: 21420
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000021"),
    bookingCode: "BK-2026-0814-033",
    customerId: new ObjectId("66be18a1f2c4a91b88000071"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000021"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000019"),
    serviceSnapshot: {
      title: "Executive Conference & Seminar Staging - Lumina",
      category: "Corporate & Official Events",
      subCategory: "Conferences & Seminars",
      selectedPackage: "Corporate Standard",
      unitPrice: 33000
    },
    eventDetails: {
      eventDate: new Date("2026-09-05T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "The Peninsula Chittagong Grand Ballroom",
      venueAddress: "GEC Circle, CDA Avenue, Chattogram",
      guestCountEstimate: 644,
      specialInstructions: "Cold pyros must be aligned with cake cutting music cue."
    },
    pricingBreakdown: {
      subtotal: 33000,
      discountAmount: 0,
      serviceTax: 1650,
      grandTotal: 34650,
      paidAmount: 34650,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000022"),
    bookingCode: "BK-2026-0814-034",
    customerId: new ObjectId("66be18a1f2c4a91b88000072"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000022"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800001a"),
    serviceSnapshot: {
      title: "Gala & Annual Award Night Stage Setup - Lumina",
      category: "Corporate & Official Events",
      subCategory: "Gala & Annual Award Nights",
      selectedPackage: "VIP Star Night",
      unitPrice: 68000
    },
    eventDetails: {
      eventDate: new Date("2026-10-06T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "Radisson Blu Chattogram Bay View",
      venueAddress: "SS Khaled Road, Lalkhan Bazar, Chattogram",
      guestCountEstimate: 661,
      specialInstructions: "Guest photo booth attendant must assist elderly guests with prints."
    },
    pricingBreakdown: {
      subtotal: 68000,
      discountAmount: 5440,
      serviceTax: 3128,
      grandTotal: 65688,
      paidAmount: 26275,
      dueAmount: 39413
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000023"),
    bookingCode: "BK-2026-0814-035",
    customerId: new ObjectId("66be18a1f2c4a91b88000073"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000023"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800001f"),
    serviceSnapshot: {
      title: "Royal Wedding Reception Stage Setup - Utsab",
      category: "Wedding & Pre-Wedding",
      subCategory: "Wedding & Reception Stage",
      selectedPackage: "Standard Floral",
      unitPrice: 40000
    },
    eventDetails: {
      eventDate: new Date("2026-09-07T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "Grand Palace Hotel Ballroom",
      venueAddress: "Jail Road, Sylhet",
      guestCountEstimate: 678,
      specialInstructions: "Extra fairy light canopy covering needed for the garden area."
    },
    pricingBreakdown: {
      subtotal: 40000,
      discountAmount: 0,
      serviceTax: 2000,
      grandTotal: 42000,
      paidAmount: 0,
      dueAmount: 42000
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000024"),
    bookingCode: "BK-2026-0814-036",
    customerId: new ObjectId("66be18a1f2c4a91b88000074"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000024"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000020"),
    serviceSnapshot: {
      title: "Vibrant Gaye Holud & Mehendi Canopy - Utsab",
      category: "Wedding & Pre-Wedding",
      subCategory: "Haldi & Mehendi Setup",
      selectedPackage: "Grand Holud Extravaganza",
      unitPrice: 45000
    },
    eventDetails: {
      eventDate: new Date("2026-10-08T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "Amanullah Convention Center",
      venueAddress: "VIP Road, Subidbazar, Sylhet",
      guestCountEstimate: 695,
      specialInstructions: "Stage backdrop name spelling must be verified before final mounting."
    },
    pricingBreakdown: {
      subtotal: 45000,
      discountAmount: 3000,
      serviceTax: 2100,
      grandTotal: 44100,
      paidAmount: 0,
      dueAmount: 44100
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000025"),
    bookingCode: "BK-2026-0814-037",
    customerId: new ObjectId("66be18a1f2c4a91b88000075"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000025"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800001d"),
    serviceSnapshot: {
      title: "Romantic Engagement & Ring Ceremony Decor - Utsab",
      category: "Wedding & Pre-Wedding",
      subCategory: "Engagement & Ring Ceremony",
      selectedPackage: "Chic Minimal",
      unitPrice: 24000
    },
    eventDetails: {
      eventDate: new Date("2026-09-09T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "Rose View Hotel Grand Surma Hall",
      venueAddress: "Shahjalal Upashahar, Sylhet",
      guestCountEstimate: 712,
      specialInstructions: "All electrical cabling must be covered with cable ramps for safety."
    },
    pricingBreakdown: {
      subtotal: 24000,
      discountAmount: 1920,
      serviceTax: 1104,
      grandTotal: 23184,
      paidAmount: 23184,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000026"),
    bookingCode: "BK-2026-0814-038",
    customerId: new ObjectId("66be18a1f2c4a91b88000076"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000026"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800001e"),
    serviceSnapshot: {
      title: "Akika & Naming Ceremony Stage - Utsab",
      category: "Baby Shower & Family Gatherings",
      subCategory: "Akika & Naming Ceremony",
      selectedPackage: "Royal Noor Setup",
      unitPrice: 33000
    },
    eventDetails: {
      eventDate: new Date("2026-10-10T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "Grand Palace Hotel Ballroom",
      venueAddress: "Jail Road, Sylhet",
      guestCountEstimate: 729,
      specialInstructions: "Clean teardown required by 1:00 AM as per venue policy."
    },
    pricingBreakdown: {
      subtotal: 33000,
      discountAmount: 0,
      serviceTax: 1650,
      grandTotal: 34650,
      paidAmount: 13860,
      dueAmount: 20790
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000027"),
    bookingCode: "BK-2026-0814-039",
    customerId: new ObjectId("66be18a1f2c4a91b88000077"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000027"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800001f"),
    serviceSnapshot: {
      title: "Religious & Cultural Festival Pavilion - Utsab",
      category: "Baby Shower & Family Gatherings",
      subCategory: "Religious & Cultural Festivals",
      selectedPackage: "Festive Pavilion",
      unitPrice: 30000
    },
    eventDetails: {
      eventDate: new Date("2026-09-11T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "Amanullah Convention Center",
      venueAddress: "VIP Road, Subidbazar, Sylhet",
      guestCountEstimate: 746,
      specialInstructions: "Keep 2 additional VIP sofas near stage side for parents."
    },
    pricingBreakdown: {
      subtotal: 30000,
      discountAmount: 0,
      serviceTax: 1500,
      grandTotal: 31500,
      paidAmount: 31500,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000028"),
    bookingCode: "BK-2026-0814-040",
    customerId: new ObjectId("66be18a1f2c4a91b88000078"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000028"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000024"),
    serviceSnapshot: {
      title: "Kids Themed Fantasy Birthday Setup - Pastel",
      category: "Birthday & Anniversary",
      subCategory: "Kids Themed Birthday",
      selectedPackage: "3D Fantasy Mega",
      unitPrice: 26000
    },
    eventDetails: {
      eventDate: new Date("2026-10-12T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "Dhaka Club Pavilion",
      venueAddress: "Ramna, Dhaka",
      guestCountEstimate: 113,
      specialInstructions: "Coordinate dry ice fog release with the bridal party entry dance."
    },
    pricingBreakdown: {
      subtotal: 26000,
      discountAmount: 2080,
      serviceTax: 1196,
      grandTotal: 25116,
      paidAmount: 10046,
      dueAmount: 15070
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000029"),
    bookingCode: "BK-2026-0814-041",
    customerId: new ObjectId("66be18a1f2c4a91b88000065"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000029"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000021"),
    serviceSnapshot: {
      title: "Romantic Anniversary & Candlelight Dining - Pastel",
      category: "Birthday & Anniversary",
      subCategory: "Romantic Anniversary & Candlelight",
      selectedPackage: "Sweet Romance",
      unitPrice: 14000
    },
    eventDetails: {
      eventDate: new Date("2026-09-13T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "Sena Kunja Banquet Hall",
      venueAddress: "Dhaka Cantonment, Dhaka",
      guestCountEstimate: 130,
      specialInstructions: "Stage flower setup must be 100% completed by 3:00 PM."
    },
    pricingBreakdown: {
      subtotal: 14000,
      discountAmount: 3000,
      serviceTax: 550,
      grandTotal: 11550,
      paidAmount: 0,
      dueAmount: 11550
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800002a"),
    bookingCode: "BK-2026-0814-042",
    customerId: new ObjectId("66be18a1f2c4a91b88000066"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800002a"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000022"),
    serviceSnapshot: {
      title: "Pastel Baby Shower & Gender Reveal Setup - Pastel",
      category: "Baby Shower & Family Gatherings",
      subCategory: "Baby Shower & Gender Reveal",
      selectedPackage: "Grand Gender Reveal",
      unitPrice: 30000
    },
    eventDetails: {
      eventDate: new Date("2026-10-14T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "International Convention City Bashundhara (ICCB) Hall 2",
      venueAddress: "Kuril Bishwa Road, Next to 300 Feet, Purbachal Express, Dhaka",
      guestCountEstimate: 147,
      specialInstructions: "Please ensure warm ambient dimming for the couple grand entry."
    },
    pricingBreakdown: {
      subtotal: 30000,
      discountAmount: 0,
      serviceTax: 1500,
      grandTotal: 31500,
      paidAmount: 0,
      dueAmount: 31500
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800002b"),
    bookingCode: "BK-2026-0814-043",
    customerId: new ObjectId("66be18a1f2c4a91b88000067"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800002b"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000023"),
    serviceSnapshot: {
      title: "Akika & Naming Ceremony Stage - Pastel",
      category: "Baby Shower & Family Gatherings",
      subCategory: "Akika & Naming Ceremony",
      selectedPackage: "Blessed Classic",
      unitPrice: 19000
    },
    eventDetails: {
      eventDate: new Date("2026-09-15T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "Radisson Blu Water Garden Grand Ballroom",
      venueAddress: "Airport Road, Dhaka Cantonment, Dhaka",
      guestCountEstimate: 164,
      specialInstructions: "Cold pyros must be aligned with cake cutting music cue."
    },
    pricingBreakdown: {
      subtotal: 19000,
      discountAmount: 1520,
      serviceTax: 874,
      grandTotal: 18354,
      paidAmount: 18354,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800002c"),
    bookingCode: "BK-2026-0814-044",
    customerId: new ObjectId("66be18a1f2c4a91b88000068"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800002c"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000024"),
    serviceSnapshot: {
      title: "Rooftop Party Canopy & Fairy Light Sky - Pastel",
      category: "Home & Rooftop Intimate Setups",
      subCategory: "Rooftop Party Canopy",
      selectedPackage: "Luxe Starlit Rooftop",
      unitPrice: 34000
    },
    eventDetails: {
      eventDate: new Date("2026-10-16T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "Le Meridien Sky Ballroom",
      venueAddress: "79/A Commercial Area, Airport Road, Nikunja 2, Dhaka",
      guestCountEstimate: 181,
      specialInstructions: "Guest photo booth attendant must assist elderly guests with prints."
    },
    pricingBreakdown: {
      subtotal: 34000,
      discountAmount: 0,
      serviceTax: 1700,
      grandTotal: 35700,
      paidAmount: 14280,
      dueAmount: 21420
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800002d"),
    bookingCode: "BK-2026-0814-045",
    customerId: new ObjectId("66be18a1f2c4a91b88000069"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800002d"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000025"),
    serviceSnapshot: {
      title: "Royal Wedding Reception Stage Setup - Padma",
      category: "Wedding & Pre-Wedding",
      subCategory: "Wedding & Reception Stage",
      selectedPackage: "Standard Floral",
      unitPrice: 40000
    },
    eventDetails: {
      eventDate: new Date("2026-09-17T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "Hotel Grand River View Ballroom",
      venueAddress: "Kazihata, Rajshahi",
      guestCountEstimate: 198,
      specialInstructions: "Extra fairy light canopy covering needed for the garden area."
    },
    pricingBreakdown: {
      subtotal: 40000,
      discountAmount: 0,
      serviceTax: 2000,
      grandTotal: 42000,
      paidAmount: 42000,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800002e"),
    bookingCode: "BK-2026-0814-046",
    customerId: new ObjectId("66be18a1f2c4a91b8800006a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800002e"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000026"),
    serviceSnapshot: {
      title: "Vibrant Gaye Holud & Mehendi Canopy - Padma",
      category: "Wedding & Pre-Wedding",
      subCategory: "Haldi & Mehendi Setup",
      selectedPackage: "Grand Holud Extravaganza",
      unitPrice: 45000
    },
    eventDetails: {
      eventDate: new Date("2026-10-18T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "Rajshahi University Kazi Nazrul Islam Auditorium",
      venueAddress: "Motihar, Rajshahi",
      guestCountEstimate: 215,
      specialInstructions: "Stage backdrop name spelling must be verified before final mounting."
    },
    pricingBreakdown: {
      subtotal: 45000,
      discountAmount: 3600,
      serviceTax: 2070,
      grandTotal: 43470,
      paidAmount: 17388,
      dueAmount: 26082
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800002f"),
    bookingCode: "BK-2026-0814-047",
    customerId: new ObjectId("66be18a1f2c4a91b8800006b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800002f"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000027"),
    serviceSnapshot: {
      title: "Executive Conference & Seminar Staging - Padma",
      category: "Corporate & Official Events",
      subCategory: "Conferences & Seminars",
      selectedPackage: "Corporate Standard",
      unitPrice: 33000
    },
    eventDetails: {
      eventDate: new Date("2026-09-19T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "Hotel Grand River View Ballroom",
      venueAddress: "Kazihata, Rajshahi",
      guestCountEstimate: 232,
      specialInstructions: "All electrical cabling must be covered with cable ramps for safety."
    },
    pricingBreakdown: {
      subtotal: 33000,
      discountAmount: 0,
      serviceTax: 1650,
      grandTotal: 34650,
      paidAmount: 0,
      dueAmount: 34650
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000030"),
    bookingCode: "BK-2026-0814-048",
    customerId: new ObjectId("66be18a1f2c4a91b8800006c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000030"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000028"),
    serviceSnapshot: {
      title: "Corporate Dinner & Executive Meetup Decor - Padma",
      category: "Corporate & Official Events",
      subCategory: "Corporate Dinners & Meetups",
      selectedPackage: "Executive President Gala",
      unitPrice: 45000
    },
    eventDetails: {
      eventDate: new Date("2026-10-20T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "Rajshahi University Kazi Nazrul Islam Auditorium",
      venueAddress: "Motihar, Rajshahi",
      guestCountEstimate: 249,
      specialInstructions: "Clean teardown required by 1:00 AM as per venue policy."
    },
    pricingBreakdown: {
      subtotal: 45000,
      discountAmount: 0,
      serviceTax: 2250,
      grandTotal: 47250,
      paidAmount: 0,
      dueAmount: 47250
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000031"),
    bookingCode: "BK-2026-0814-049",
    customerId: new ObjectId("66be18a1f2c4a91b8800006d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000031"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000029"),
    serviceSnapshot: {
      title: "Royal Wedding Reception Stage Setup - Sundarban",
      category: "Wedding & Pre-Wedding",
      subCategory: "Wedding & Reception Stage",
      selectedPackage: "Standard Floral",
      unitPrice: 40000
    },
    eventDetails: {
      eventDate: new Date("2026-09-21T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "Hotel City Inn Imperial Ballroom",
      venueAddress: "Majid Sarani, Sonadanga, Khulna",
      guestCountEstimate: 266,
      specialInstructions: "Keep 2 additional VIP sofas near stage side for parents."
    },
    pricingBreakdown: {
      subtotal: 40000,
      discountAmount: 3200,
      serviceTax: 1840,
      grandTotal: 38640,
      paidAmount: 38640,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000032"),
    bookingCode: "BK-2026-0814-050",
    customerId: new ObjectId("66be18a1f2c4a91b8800006e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000032"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800002a"),
    serviceSnapshot: {
      title: "Bride & Groom Grand Entry Pathway - Sundarban",
      category: "Wedding & Pre-Wedding",
      subCategory: "Bride & Groom Grand Entry",
      selectedPackage: "Cinematic Fireworks Entry",
      unitPrice: 38000
    },
    eventDetails: {
      eventDate: new Date("2026-10-22T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "Khulna Club Banquet Hall",
      venueAddress: "Old Jessore Road, Khulna",
      guestCountEstimate: 283,
      specialInstructions: "Coordinate dry ice fog release with the bridal party entry dance."
    },
    pricingBreakdown: {
      subtotal: 38000,
      discountAmount: 0,
      serviceTax: 1900,
      grandTotal: 39900,
      paidAmount: 15960,
      dueAmount: 23940
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000033"),
    bookingCode: "BK-2026-0814-051",
    customerId: new ObjectId("66be18a1f2c4a91b8800006f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000033"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800002b"),
    serviceSnapshot: {
      title: "Adult Milestone Birthday & Glam Gala - Sundarban",
      category: "Birthday & Anniversary",
      subCategory: "Adult Milestone Birthday",
      selectedPackage: "Glam Shimmer",
      unitPrice: 19000
    },
    eventDetails: {
      eventDate: new Date("2026-09-23T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "Hotel City Inn Imperial Ballroom",
      venueAddress: "Majid Sarani, Sonadanga, Khulna",
      guestCountEstimate: 300,
      specialInstructions: "Stage flower setup must be 100% completed by 3:00 PM."
    },
    pricingBreakdown: {
      subtotal: 19000,
      discountAmount: 3000,
      serviceTax: 800,
      grandTotal: 16800,
      paidAmount: 16800,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000034"),
    bookingCode: "BK-2026-0814-052",
    customerId: new ObjectId("66be18a1f2c4a91b88000070"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000034"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800002c"),
    serviceSnapshot: {
      title: "Romantic Anniversary & Candlelight Dining - Sundarban",
      category: "Birthday & Anniversary",
      subCategory: "Romantic Anniversary & Candlelight",
      selectedPackage: "Grand Luxury Romance",
      unitPrice: 25000
    },
    eventDetails: {
      eventDate: new Date("2026-10-24T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "Khulna Club Banquet Hall",
      venueAddress: "Old Jessore Road, Khulna",
      guestCountEstimate: 317,
      specialInstructions: "Please ensure warm ambient dimming for the couple grand entry."
    },
    pricingBreakdown: {
      subtotal: 25000,
      discountAmount: 2000,
      serviceTax: 1150,
      grandTotal: 24150,
      paidAmount: 9660,
      dueAmount: 14490
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000035"),
    bookingCode: "BK-2026-0814-053",
    customerId: new ObjectId("66be18a1f2c4a91b88000071"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000035"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800002d"),
    serviceSnapshot: {
      title: "Royal Wedding Reception Stage Setup - Kirtankhola",
      category: "Wedding & Pre-Wedding",
      subCategory: "Wedding & Reception Stage",
      selectedPackage: "Standard Floral",
      unitPrice: 40000
    },
    eventDetails: {
      eventDate: new Date("2026-09-25T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "Grand Park Hotel Barishal Ballroom",
      venueAddress: "Band Road, Barishal",
      guestCountEstimate: 334,
      specialInstructions: "Cold pyros must be aligned with cake cutting music cue."
    },
    pricingBreakdown: {
      subtotal: 40000,
      discountAmount: 0,
      serviceTax: 2000,
      grandTotal: 42000,
      paidAmount: 0,
      dueAmount: 42000
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000036"),
    bookingCode: "BK-2026-0814-054",
    customerId: new ObjectId("66be18a1f2c4a91b88000072"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000036"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800002e"),
    serviceSnapshot: {
      title: "Vibrant Gaye Holud & Mehendi Canopy - Kirtankhola",
      category: "Wedding & Pre-Wedding",
      subCategory: "Haldi & Mehendi Setup",
      selectedPackage: "Grand Holud Extravaganza",
      unitPrice: 45000
    },
    eventDetails: {
      eventDate: new Date("2026-10-26T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "Grand Park Hotel Barishal Ballroom",
      venueAddress: "Band Road, Barishal",
      guestCountEstimate: 351,
      specialInstructions: "Guest photo booth attendant must assist elderly guests with prints."
    },
    pricingBreakdown: {
      subtotal: 45000,
      discountAmount: 0,
      serviceTax: 2250,
      grandTotal: 47250,
      paidAmount: 0,
      dueAmount: 47250
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000037"),
    bookingCode: "BK-2026-0814-055",
    customerId: new ObjectId("66be18a1f2c4a91b88000073"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000037"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800002f"),
    serviceSnapshot: {
      title: "Akika & Naming Ceremony Stage - Kirtankhola",
      category: "Baby Shower & Family Gatherings",
      subCategory: "Akika & Naming Ceremony",
      selectedPackage: "Blessed Classic",
      unitPrice: 19000
    },
    eventDetails: {
      eventDate: new Date("2026-09-27T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "Grand Park Hotel Barishal Ballroom",
      venueAddress: "Band Road, Barishal",
      guestCountEstimate: 368,
      specialInstructions: "Extra fairy light canopy covering needed for the garden area."
    },
    pricingBreakdown: {
      subtotal: 19000,
      discountAmount: 1520,
      serviceTax: 874,
      grandTotal: 18354,
      paidAmount: 18354,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000038"),
    bookingCode: "BK-2026-0814-056",
    customerId: new ObjectId("66be18a1f2c4a91b88000074"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000038"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000030"),
    serviceSnapshot: {
      title: "Housewarming & Family Get-Together Decor - Kirtankhola",
      category: "Baby Shower & Family Gatherings",
      subCategory: "Housewarming & Get-Togethers",
      selectedPackage: "New Home Celebration",
      unitPrice: 22000
    },
    eventDetails: {
      eventDate: new Date("2026-10-28T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "Grand Park Hotel Barishal Ballroom",
      venueAddress: "Band Road, Barishal",
      guestCountEstimate: 385,
      specialInstructions: "Stage backdrop name spelling must be verified before final mounting."
    },
    pricingBreakdown: {
      subtotal: 22000,
      discountAmount: 3000,
      serviceTax: 950,
      grandTotal: 19950,
      paidAmount: 7980,
      dueAmount: 11970
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000039"),
    bookingCode: "BK-2026-0814-057",
    customerId: new ObjectId("66be18a1f2c4a91b88000075"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000039"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000031"),
    serviceSnapshot: {
      title: "Vibrant Gaye Holud & Mehendi Canopy - Rangpur",
      category: "Wedding & Pre-Wedding",
      subCategory: "Haldi & Mehendi Setup",
      selectedPackage: "Festive Basic",
      unitPrice: 28000
    },
    eventDetails: {
      eventDate: new Date("2026-09-01T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "RDRS Bangladesh Auditorium & Hall",
      venueAddress: "Jail Road, Dhap, Rangpur",
      guestCountEstimate: 402,
      specialInstructions: "All electrical cabling must be covered with cable ramps for safety."
    },
    pricingBreakdown: {
      subtotal: 28000,
      discountAmount: 0,
      serviceTax: 1400,
      grandTotal: 29400,
      paidAmount: 29400,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800003a"),
    bookingCode: "BK-2026-0814-058",
    customerId: new ObjectId("66be18a1f2c4a91b88000076"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800003a"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000032"),
    serviceSnapshot: {
      title: "Bride & Groom Grand Entry Pathway - Rangpur",
      category: "Wedding & Pre-Wedding",
      subCategory: "Bride & Groom Grand Entry",
      selectedPackage: "Cinematic Fireworks Entry",
      unitPrice: 38000
    },
    eventDetails: {
      eventDate: new Date("2026-10-02T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "RDRS Bangladesh Auditorium & Hall",
      venueAddress: "Jail Road, Dhap, Rangpur",
      guestCountEstimate: 419,
      specialInstructions: "Clean teardown required by 1:00 AM as per venue policy."
    },
    pricingBreakdown: {
      subtotal: 38000,
      discountAmount: 3040,
      serviceTax: 1748,
      grandTotal: 36708,
      paidAmount: 14683,
      dueAmount: 22025
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800003b"),
    bookingCode: "BK-2026-0814-059",
    customerId: new ObjectId("66be18a1f2c4a91b88000077"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800003b"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000033"),
    serviceSnapshot: {
      title: "Product Launch & Trade Expo Pavilion - Rangpur",
      category: "Corporate & Official Events",
      subCategory: "Product Launch & Expo Stalls",
      selectedPackage: "Launch Essential",
      unitPrice: 42000
    },
    eventDetails: {
      eventDate: new Date("2026-09-03T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "RDRS Bangladesh Auditorium & Hall",
      venueAddress: "Jail Road, Dhap, Rangpur",
      guestCountEstimate: 436,
      specialInstructions: "Keep 2 additional VIP sofas near stage side for parents."
    },
    pricingBreakdown: {
      subtotal: 42000,
      discountAmount: 0,
      serviceTax: 2100,
      grandTotal: 44100,
      paidAmount: 0,
      dueAmount: 44100
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800003c"),
    bookingCode: "BK-2026-0814-060",
    customerId: new ObjectId("66be18a1f2c4a91b88000078"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800003c"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000034"),
    serviceSnapshot: {
      title: "Corporate Dinner & Executive Meetup Decor - Rangpur",
      category: "Corporate & Official Events",
      subCategory: "Corporate Dinners & Meetups",
      selectedPackage: "Executive President Gala",
      unitPrice: 45000
    },
    eventDetails: {
      eventDate: new Date("2026-10-04T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "RDRS Bangladesh Auditorium & Hall",
      venueAddress: "Jail Road, Dhap, Rangpur",
      guestCountEstimate: 453,
      specialInstructions: "Coordinate dry ice fog release with the bridal party entry dance."
    },
    pricingBreakdown: {
      subtotal: 45000,
      discountAmount: 0,
      serviceTax: 2250,
      grandTotal: 47250,
      paidAmount: 0,
      dueAmount: 47250
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800003d"),
    bookingCode: "BK-2026-0814-061",
    customerId: new ObjectId("66be18a1f2c4a91b88000065"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800003d"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000035"),
    serviceSnapshot: {
      title: "Pastel Baby Shower & Gender Reveal Setup - Brahmaputra",
      category: "Baby Shower & Family Gatherings",
      subCategory: "Baby Shower & Gender Reveal",
      selectedPackage: "Pastel Joy",
      unitPrice: 17000
    },
    eventDetails: {
      eventDate: new Date("2026-09-05T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "Mymensingh Zilla Parishad Auditorium",
      venueAddress: "Town Hall Road, Mymensingh",
      guestCountEstimate: 470,
      specialInstructions: "Stage flower setup must be 100% completed by 3:00 PM."
    },
    pricingBreakdown: {
      subtotal: 17000,
      discountAmount: 1360,
      serviceTax: 782,
      grandTotal: 16422,
      paidAmount: 16422,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800003e"),
    bookingCode: "BK-2026-0814-062",
    customerId: new ObjectId("66be18a1f2c4a91b88000066"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800003e"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000036"),
    serviceSnapshot: {
      title: "Akika & Naming Ceremony Stage - Brahmaputra",
      category: "Baby Shower & Family Gatherings",
      subCategory: "Akika & Naming Ceremony",
      selectedPackage: "Royal Noor Setup",
      unitPrice: 33000
    },
    eventDetails: {
      eventDate: new Date("2026-10-06T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "Mymensingh Zilla Parishad Auditorium",
      venueAddress: "Town Hall Road, Mymensingh",
      guestCountEstimate: 487,
      specialInstructions: "Please ensure warm ambient dimming for the couple grand entry."
    },
    pricingBreakdown: {
      subtotal: 33000,
      discountAmount: 0,
      serviceTax: 1650,
      grandTotal: 34650,
      paidAmount: 13860,
      dueAmount: 20790
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800003f"),
    bookingCode: "BK-2026-0814-063",
    customerId: new ObjectId("66be18a1f2c4a91b88000067"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800003f"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000037"),
    serviceSnapshot: {
      title: "Religious & Cultural Festival Pavilion - Brahmaputra",
      category: "Baby Shower & Family Gatherings",
      subCategory: "Religious & Cultural Festivals",
      selectedPackage: "Festive Pavilion",
      unitPrice: 30000
    },
    eventDetails: {
      eventDate: new Date("2026-09-07T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "Mymensingh Zilla Parishad Auditorium",
      venueAddress: "Town Hall Road, Mymensingh",
      guestCountEstimate: 504,
      specialInstructions: "Cold pyros must be aligned with cake cutting music cue."
    },
    pricingBreakdown: {
      subtotal: 30000,
      discountAmount: 0,
      serviceTax: 1500,
      grandTotal: 31500,
      paidAmount: 31500,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000040"),
    bookingCode: "BK-2026-0814-064",
    customerId: new ObjectId("66be18a1f2c4a91b88000068"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000040"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000038"),
    serviceSnapshot: {
      title: "Rooftop Party Canopy & Fairy Light Sky - Brahmaputra",
      category: "Home & Rooftop Intimate Setups",
      subCategory: "Rooftop Party Canopy",
      selectedPackage: "Luxe Starlit Rooftop",
      unitPrice: 34000
    },
    eventDetails: {
      eventDate: new Date("2026-10-08T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "Mymensingh Zilla Parishad Auditorium",
      venueAddress: "Town Hall Road, Mymensingh",
      guestCountEstimate: 521,
      specialInstructions: "Guest photo booth attendant must assist elderly guests with prints."
    },
    pricingBreakdown: {
      subtotal: 34000,
      discountAmount: 2720,
      serviceTax: 1564,
      grandTotal: 32844,
      paidAmount: 13138,
      dueAmount: 19706
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000041"),
    bookingCode: "BK-2026-0814-065",
    customerId: new ObjectId("66be18a1f2c4a91b88000069"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000041"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000035"),
    serviceSnapshot: {
      title: "Drawing Room & Balcony Aesthetic Makeover - Brahmaputra",
      category: "Home & Rooftop Intimate Setups",
      subCategory: "Drawing Room & Balcony Decor",
      selectedPackage: "Cozy Corner",
      unitPrice: 10000
    },
    eventDetails: {
      eventDate: new Date("2026-09-09T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "Mymensingh Zilla Parishad Auditorium",
      venueAddress: "Town Hall Road, Mymensingh",
      guestCountEstimate: 538,
      specialInstructions: "Extra fairy light canopy covering needed for the garden area."
    },
    pricingBreakdown: {
      subtotal: 10000,
      discountAmount: 0,
      serviceTax: 500,
      grandTotal: 10500,
      paidAmount: 0,
      dueAmount: 10500
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000042"),
    bookingCode: "BK-2026-0814-066",
    customerId: new ObjectId("66be18a1f2c4a91b8800006a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000042"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800003a"),
    serviceSnapshot: {
      title: "Royal Wedding Reception Stage Setup - Moynamoti",
      category: "Wedding & Pre-Wedding",
      subCategory: "Wedding & Reception Stage",
      selectedPackage: "Premium Royal",
      unitPrice: 65000
    },
    eventDetails: {
      eventDate: new Date("2026-10-10T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "Cumilla Town Hall Convention Center",
      venueAddress: "Kandirpar, Cumilla",
      guestCountEstimate: 555,
      specialInstructions: "Stage backdrop name spelling must be verified before final mounting."
    },
    pricingBreakdown: {
      subtotal: 65000,
      discountAmount: 3000,
      serviceTax: 3100,
      grandTotal: 65100,
      paidAmount: 0,
      dueAmount: 65100
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000043"),
    bookingCode: "BK-2026-0814-067",
    customerId: new ObjectId("66be18a1f2c4a91b8800006b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000043"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800003b"),
    serviceSnapshot: {
      title: "Bride & Groom Grand Entry Pathway - Moynamoti",
      category: "Wedding & Pre-Wedding",
      subCategory: "Bride & Groom Grand Entry",
      selectedPackage: "Classic Aisle",
      unitPrice: 22000
    },
    eventDetails: {
      eventDate: new Date("2026-09-11T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "Cumilla Town Hall Convention Center",
      venueAddress: "Kandirpar, Cumilla",
      guestCountEstimate: 572,
      specialInstructions: "All electrical cabling must be covered with cable ramps for safety."
    },
    pricingBreakdown: {
      subtotal: 22000,
      discountAmount: 1760,
      serviceTax: 1012,
      grandTotal: 21252,
      paidAmount: 21252,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000044"),
    bookingCode: "BK-2026-0814-068",
    customerId: new ObjectId("66be18a1f2c4a91b8800006c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000044"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800003c"),
    serviceSnapshot: {
      title: "Romantic Engagement & Ring Ceremony Decor - Moynamoti",
      category: "Wedding & Pre-Wedding",
      subCategory: "Engagement & Ring Ceremony",
      selectedPackage: "Luxe Botanical Ring",
      unitPrice: 38000
    },
    eventDetails: {
      eventDate: new Date("2026-10-12T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "Cumilla Town Hall Convention Center",
      venueAddress: "Kandirpar, Cumilla",
      guestCountEstimate: 589,
      specialInstructions: "Clean teardown required by 1:00 AM as per venue policy."
    },
    pricingBreakdown: {
      subtotal: 38000,
      discountAmount: 0,
      serviceTax: 1900,
      grandTotal: 39900,
      paidAmount: 15960,
      dueAmount: 23940
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000045"),
    bookingCode: "BK-2026-0814-069",
    customerId: new ObjectId("66be18a1f2c4a91b8800006d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000045"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000039"),
    serviceSnapshot: {
      title: "Custom Neon Signs & Marquee Letter Rental - Moynamoti",
      category: "Lighting, FX & Rentals",
      subCategory: "Custom Neon Signs & Marquee Letters",
      selectedPackage: "Neon Sign Rental",
      unitPrice: 8500
    },
    eventDetails: {
      eventDate: new Date("2026-09-13T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "Cumilla Town Hall Convention Center",
      venueAddress: "Kandirpar, Cumilla",
      guestCountEstimate: 606,
      specialInstructions: "Keep 2 additional VIP sofas near stage side for parents."
    },
    pricingBreakdown: {
      subtotal: 8500,
      discountAmount: 0,
      serviceTax: 425,
      grandTotal: 8925,
      paidAmount: 8925,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000046"),
    bookingCode: "BK-2026-0814-070",
    customerId: new ObjectId("66be18a1f2c4a91b8800006e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000046"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800003a"),
    serviceSnapshot: {
      title: "Special Effects - Cold Pyro & Dry Ice Low Fog - Moynamoti",
      category: "Lighting, FX & Rentals",
      subCategory: "Special Effects (Fog, Smoke & Pyro)",
      selectedPackage: "Grand Stage FX Spectacular",
      unitPrice: 28000
    },
    eventDetails: {
      eventDate: new Date("2026-10-14T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "Cumilla Town Hall Convention Center",
      venueAddress: "Kandirpar, Cumilla",
      guestCountEstimate: 623,
      specialInstructions: "Coordinate dry ice fog release with the bridal party entry dance."
    },
    pricingBreakdown: {
      subtotal: 28000,
      discountAmount: 2240,
      serviceTax: 1288,
      grandTotal: 27048,
      paidAmount: 10819,
      dueAmount: 16229
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000047"),
    bookingCode: "BK-2026-0814-071",
    customerId: new ObjectId("66be18a1f2c4a91b8800006f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000047"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800003f"),
    serviceSnapshot: {
      title: "Executive Conference & Seminar Staging - Urban",
      category: "Corporate & Official Events",
      subCategory: "Conferences & Seminars",
      selectedPackage: "Corporate Standard",
      unitPrice: 33000
    },
    eventDetails: {
      eventDate: new Date("2026-09-15T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "Bhawal Resort & Spa Grand Hall",
      venueAddress: "Noljani, Mirzapur, Gazipur",
      guestCountEstimate: 640,
      specialInstructions: "Stage flower setup must be 100% completed by 3:00 PM."
    },
    pricingBreakdown: {
      subtotal: 33000,
      discountAmount: 3000,
      serviceTax: 1500,
      grandTotal: 31500,
      paidAmount: 0,
      dueAmount: 31500
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000048"),
    bookingCode: "BK-2026-0814-072",
    customerId: new ObjectId("66be18a1f2c4a91b88000070"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000048"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000040"),
    serviceSnapshot: {
      title: "Gala & Annual Award Night Stage Setup - Urban",
      category: "Corporate & Official Events",
      subCategory: "Gala & Annual Award Nights",
      selectedPackage: "VIP Star Night",
      unitPrice: 68000
    },
    eventDetails: {
      eventDate: new Date("2026-10-16T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "Bhawal Resort & Spa Grand Hall",
      venueAddress: "Noljani, Mirzapur, Gazipur",
      guestCountEstimate: 657,
      specialInstructions: "Please ensure warm ambient dimming for the couple grand entry."
    },
    pricingBreakdown: {
      subtotal: 68000,
      discountAmount: 0,
      serviceTax: 3400,
      grandTotal: 71400,
      paidAmount: 0,
      dueAmount: 71400
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000049"),
    bookingCode: "BK-2026-0814-073",
    customerId: new ObjectId("66be18a1f2c4a91b88000071"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000049"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800003d"),
    serviceSnapshot: {
      title: "Product Launch & Trade Expo Pavilion - Urban",
      category: "Corporate & Official Events",
      subCategory: "Product Launch & Expo Stalls",
      selectedPackage: "Launch Essential",
      unitPrice: 42000
    },
    eventDetails: {
      eventDate: new Date("2026-09-17T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "Bhawal Resort & Spa Grand Hall",
      venueAddress: "Noljani, Mirzapur, Gazipur",
      guestCountEstimate: 674,
      specialInstructions: "Cold pyros must be aligned with cake cutting music cue."
    },
    pricingBreakdown: {
      subtotal: 42000,
      discountAmount: 3360,
      serviceTax: 1932,
      grandTotal: 40572,
      paidAmount: 40572,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800004a"),
    bookingCode: "BK-2026-0814-074",
    customerId: new ObjectId("66be18a1f2c4a91b88000072"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800004a"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800003e"),
    serviceSnapshot: {
      title: "Kids Themed Fantasy Birthday Setup - Urban",
      category: "Birthday & Anniversary",
      subCategory: "Kids Themed Birthday",
      selectedPackage: "3D Fantasy Mega",
      unitPrice: 26000
    },
    eventDetails: {
      eventDate: new Date("2026-10-18T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "Bhawal Resort & Spa Grand Hall",
      venueAddress: "Noljani, Mirzapur, Gazipur",
      guestCountEstimate: 691,
      specialInstructions: "Guest photo booth attendant must assist elderly guests with prints."
    },
    pricingBreakdown: {
      subtotal: 26000,
      discountAmount: 0,
      serviceTax: 1300,
      grandTotal: 27300,
      paidAmount: 10920,
      dueAmount: 16380
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800004b"),
    bookingCode: "BK-2026-0814-075",
    customerId: new ObjectId("66be18a1f2c4a91b88000073"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800004b"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800003f"),
    serviceSnapshot: {
      title: "Adult Milestone Birthday & Glam Gala - Urban",
      category: "Birthday & Anniversary",
      subCategory: "Adult Milestone Birthday",
      selectedPackage: "Glam Shimmer",
      unitPrice: 19000
    },
    eventDetails: {
      eventDate: new Date("2026-09-19T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "Bhawal Resort & Spa Grand Hall",
      venueAddress: "Noljani, Mirzapur, Gazipur",
      guestCountEstimate: 708,
      specialInstructions: "Extra fairy light canopy covering needed for the garden area."
    },
    pricingBreakdown: {
      subtotal: 19000,
      discountAmount: 0,
      serviceTax: 950,
      grandTotal: 19950,
      paidAmount: 19950,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800004c"),
    bookingCode: "BK-2026-0814-076",
    customerId: new ObjectId("66be18a1f2c4a91b88000074"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800004c"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000044"),
    serviceSnapshot: {
      title: "Royal Wedding Reception Stage Setup - Velvet",
      category: "Wedding & Pre-Wedding",
      subCategory: "Wedding & Reception Stage",
      selectedPackage: "Premium Royal",
      unitPrice: 65000
    },
    eventDetails: {
      eventDate: new Date("2026-10-20T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "Police Convention Hall",
      venueAddress: "Eskaton Garden Road, Ramna, Dhaka",
      guestCountEstimate: 725,
      specialInstructions: "Stage backdrop name spelling must be verified before final mounting."
    },
    pricingBreakdown: {
      subtotal: 65000,
      discountAmount: 5200,
      serviceTax: 2990,
      grandTotal: 62790,
      paidAmount: 25116,
      dueAmount: 37674
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800004d"),
    bookingCode: "BK-2026-0814-077",
    customerId: new ObjectId("66be18a1f2c4a91b88000075"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800004d"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000041"),
    serviceSnapshot: {
      title: "Vibrant Gaye Holud & Mehendi Canopy - Velvet",
      category: "Wedding & Pre-Wedding",
      subCategory: "Haldi & Mehendi Setup",
      selectedPackage: "Festive Basic",
      unitPrice: 28000
    },
    eventDetails: {
      eventDate: new Date("2026-09-21T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "Emmanuelle's Banquet Hall",
      venueAddress: "House 4, Road 134/135, Gulshan-1, Dhaka",
      guestCountEstimate: 742,
      specialInstructions: "All electrical cabling must be covered with cable ramps for safety."
    },
    pricingBreakdown: {
      subtotal: 28000,
      discountAmount: 0,
      serviceTax: 1400,
      grandTotal: 29400,
      paidAmount: 0,
      dueAmount: 29400
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800004e"),
    bookingCode: "BK-2026-0814-078",
    customerId: new ObjectId("66be18a1f2c4a91b88000076"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800004e"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000042"),
    serviceSnapshot: {
      title: "Bride & Groom Grand Entry Pathway - Velvet",
      category: "Wedding & Pre-Wedding",
      subCategory: "Bride & Groom Grand Entry",
      selectedPackage: "Cinematic Fireworks Entry",
      unitPrice: 38000
    },
    eventDetails: {
      eventDate: new Date("2026-10-22T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "Celebration Point Banquet",
      venueAddress: "Plot 8, Road 113/A, Gulshan-2, Dhaka",
      guestCountEstimate: 109,
      specialInstructions: "Clean teardown required by 1:00 AM as per venue policy."
    },
    pricingBreakdown: {
      subtotal: 38000,
      discountAmount: 0,
      serviceTax: 1900,
      grandTotal: 39900,
      paidAmount: 0,
      dueAmount: 39900
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800004f"),
    bookingCode: "BK-2026-0814-079",
    customerId: new ObjectId("66be18a1f2c4a91b88000077"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800004f"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000043"),
    serviceSnapshot: {
      title: "Custom Neon Signs & Marquee Letter Rental - Velvet",
      category: "Lighting, FX & Rentals",
      subCategory: "Custom Neon Signs & Marquee Letters",
      selectedPackage: "Neon Sign Rental",
      unitPrice: 8500
    },
    eventDetails: {
      eventDate: new Date("2026-09-23T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "Officers Club Dhaka",
      venueAddress: "26 Baily Road, Ramna, Dhaka",
      guestCountEstimate: 126,
      specialInstructions: "Keep 2 additional VIP sofas near stage side for parents."
    },
    pricingBreakdown: {
      subtotal: 8500,
      discountAmount: 680,
      serviceTax: 391,
      grandTotal: 8211,
      paidAmount: 8211,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000050"),
    bookingCode: "BK-2026-0814-080",
    customerId: new ObjectId("66be18a1f2c4a91b88000078"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000050"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000044"),
    serviceSnapshot: {
      title: "Spotlights & Ambient Event Lighting Setup - Velvet",
      category: "Lighting, FX & Rentals",
      subCategory: "Spotlights & Ambient Lighting",
      selectedPackage: "Full Venue Illumination",
      unitPrice: 26000
    },
    eventDetails: {
      eventDate: new Date("2026-10-24T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "Dhaka Club Pavilion",
      venueAddress: "Ramna, Dhaka",
      guestCountEstimate: 143,
      specialInstructions: "Coordinate dry ice fog release with the bridal party entry dance."
    },
    pricingBreakdown: {
      subtotal: 26000,
      discountAmount: 0,
      serviceTax: 1300,
      grandTotal: 27300,
      paidAmount: 10920,
      dueAmount: 16380
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000051"),
    bookingCode: "BK-2026-0814-081",
    customerId: new ObjectId("66be18a1f2c4a91b88000065"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000051"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000041"),
    serviceSnapshot: {
      title: "Gala & Annual Award Night Stage Setup - Velvet",
      category: "Corporate & Official Events",
      subCategory: "Gala & Annual Award Nights",
      selectedPackage: "Red Carpet Gala",
      unitPrice: 37000
    },
    eventDetails: {
      eventDate: new Date("2026-09-25T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "Sena Kunja Banquet Hall",
      venueAddress: "Dhaka Cantonment, Dhaka",
      guestCountEstimate: 160,
      specialInstructions: "Stage flower setup must be 100% completed by 3:00 PM."
    },
    pricingBreakdown: {
      subtotal: 37000,
      discountAmount: 3000,
      serviceTax: 1700,
      grandTotal: 35700,
      paidAmount: 35700,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000052"),
    bookingCode: "BK-2026-0814-082",
    customerId: new ObjectId("66be18a1f2c4a91b88000066"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000052"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000046"),
    serviceSnapshot: {
      title: "Kids Themed Fantasy Birthday Setup - Balloon",
      category: "Birthday & Anniversary",
      subCategory: "Kids Themed Birthday",
      selectedPackage: "3D Fantasy Mega",
      unitPrice: 26000
    },
    eventDetails: {
      eventDate: new Date("2026-10-26T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "International Convention City Bashundhara (ICCB) Hall 2",
      venueAddress: "Kuril Bishwa Road, Next to 300 Feet, Purbachal Express, Dhaka",
      guestCountEstimate: 177,
      specialInstructions: "Please ensure warm ambient dimming for the couple grand entry."
    },
    pricingBreakdown: {
      subtotal: 26000,
      discountAmount: 2080,
      serviceTax: 1196,
      grandTotal: 25116,
      paidAmount: 10046,
      dueAmount: 15070
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000053"),
    bookingCode: "BK-2026-0814-083",
    customerId: new ObjectId("66be18a1f2c4a91b88000067"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000053"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000047"),
    serviceSnapshot: {
      title: "Adult Milestone Birthday & Glam Gala - Balloon",
      category: "Birthday & Anniversary",
      subCategory: "Adult Milestone Birthday",
      selectedPackage: "Glam Shimmer",
      unitPrice: 19000
    },
    eventDetails: {
      eventDate: new Date("2026-09-27T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "Radisson Blu Water Garden Grand Ballroom",
      venueAddress: "Airport Road, Dhaka Cantonment, Dhaka",
      guestCountEstimate: 194,
      specialInstructions: "Cold pyros must be aligned with cake cutting music cue."
    },
    pricingBreakdown: {
      subtotal: 19000,
      discountAmount: 0,
      serviceTax: 950,
      grandTotal: 19950,
      paidAmount: 0,
      dueAmount: 19950
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000054"),
    bookingCode: "BK-2026-0814-084",
    customerId: new ObjectId("66be18a1f2c4a91b88000068"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000054"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000048"),
    serviceSnapshot: {
      title: "1st Birthday Little Prince / Princess Setup - Balloon",
      category: "Birthday & Anniversary",
      subCategory: "1st Birthday Special",
      selectedPackage: "Royal First Birthday",
      unitPrice: 29000
    },
    eventDetails: {
      eventDate: new Date("2026-10-28T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "Le Meridien Sky Ballroom",
      venueAddress: "79/A Commercial Area, Airport Road, Nikunja 2, Dhaka",
      guestCountEstimate: 211,
      specialInstructions: "Guest photo booth attendant must assist elderly guests with prints."
    },
    pricingBreakdown: {
      subtotal: 29000,
      discountAmount: 0,
      serviceTax: 1450,
      grandTotal: 30450,
      paidAmount: 0,
      dueAmount: 30450
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000055"),
    bookingCode: "BK-2026-0814-085",
    customerId: new ObjectId("66be18a1f2c4a91b88000069"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000055"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000045"),
    serviceSnapshot: {
      title: "Drawing Room & Balcony Aesthetic Makeover - Balloon",
      category: "Home & Rooftop Intimate Setups",
      subCategory: "Drawing Room & Balcony Decor",
      selectedPackage: "Cozy Corner",
      unitPrice: 10000
    },
    eventDetails: {
      eventDate: new Date("2026-09-01T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "Krishibid Institution Bangladesh (KIB) Auditorium",
      venueAddress: "Krishi Khamar Sarak, Farmgate, Dhaka",
      guestCountEstimate: 228,
      specialInstructions: "Extra fairy light canopy covering needed for the garden area."
    },
    pricingBreakdown: {
      subtotal: 10000,
      discountAmount: 800,
      serviceTax: 460,
      grandTotal: 9660,
      paidAmount: 9660,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000056"),
    bookingCode: "BK-2026-0814-086",
    customerId: new ObjectId("66be18a1f2c4a91b8800006a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000056"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000046"),
    serviceSnapshot: {
      title: "Surprise Room Makeover with Balloons & Candles - Balloon",
      category: "Home & Rooftop Intimate Setups",
      subCategory: "Surprise Room Makeover",
      selectedPackage: "Grand Romantic Ambush",
      unitPrice: 20000
    },
    eventDetails: {
      eventDate: new Date("2026-10-02T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "Police Convention Hall",
      venueAddress: "Eskaton Garden Road, Ramna, Dhaka",
      guestCountEstimate: 245,
      specialInstructions: "Stage backdrop name spelling must be verified before final mounting."
    },
    pricingBreakdown: {
      subtotal: 20000,
      discountAmount: 3000,
      serviceTax: 850,
      grandTotal: 17850,
      paidAmount: 7140,
      dueAmount: 10710
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000057"),
    bookingCode: "BK-2026-0814-087",
    customerId: new ObjectId("66be18a1f2c4a91b8800006b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000057"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800004b"),
    serviceSnapshot: {
      title: "Custom Neon Signs & Marquee Letter Rental - Nocturne",
      category: "Lighting, FX & Rentals",
      subCategory: "Custom Neon Signs & Marquee Letters",
      selectedPackage: "Neon Sign Rental",
      unitPrice: 8500
    },
    eventDetails: {
      eventDate: new Date("2026-09-03T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "Emmanuelle's Banquet Hall",
      venueAddress: "House 4, Road 134/135, Gulshan-1, Dhaka",
      guestCountEstimate: 262,
      specialInstructions: "All electrical cabling must be covered with cable ramps for safety."
    },
    pricingBreakdown: {
      subtotal: 8500,
      discountAmount: 0,
      serviceTax: 425,
      grandTotal: 8925,
      paidAmount: 8925,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000058"),
    bookingCode: "BK-2026-0814-088",
    customerId: new ObjectId("66be18a1f2c4a91b8800006c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000058"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800004c"),
    serviceSnapshot: {
      title: "Spotlights & Ambient Event Lighting Setup - Nocturne",
      category: "Lighting, FX & Rentals",
      subCategory: "Spotlights & Ambient Lighting",
      selectedPackage: "Full Venue Illumination",
      unitPrice: 26000
    },
    eventDetails: {
      eventDate: new Date("2026-10-04T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "Celebration Point Banquet",
      venueAddress: "Plot 8, Road 113/A, Gulshan-2, Dhaka",
      guestCountEstimate: 279,
      specialInstructions: "Clean teardown required by 1:00 AM as per venue policy."
    },
    pricingBreakdown: {
      subtotal: 26000,
      discountAmount: 2080,
      serviceTax: 1196,
      grandTotal: 25116,
      paidAmount: 10046,
      dueAmount: 15070
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000059"),
    bookingCode: "BK-2026-0814-089",
    customerId: new ObjectId("66be18a1f2c4a91b8800006d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000059"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000049"),
    serviceSnapshot: {
      title: "Special Effects - Cold Pyro & Dry Ice Low Fog - Nocturne",
      category: "Lighting, FX & Rentals",
      subCategory: "Special Effects (Fog, Smoke & Pyro)",
      selectedPackage: "Entry FX Pack",
      unitPrice: 15000
    },
    eventDetails: {
      eventDate: new Date("2026-09-05T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "Officers Club Dhaka",
      venueAddress: "26 Baily Road, Ramna, Dhaka",
      guestCountEstimate: 296,
      specialInstructions: "Keep 2 additional VIP sofas near stage side for parents."
    },
    pricingBreakdown: {
      subtotal: 15000,
      discountAmount: 0,
      serviceTax: 750,
      grandTotal: 15750,
      paidAmount: 0,
      dueAmount: 15750
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800005a"),
    bookingCode: "BK-2026-0814-090",
    customerId: new ObjectId("66be18a1f2c4a91b8800006e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800005a"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800004a"),
    serviceSnapshot: {
      title: "360 Video Booth & Instant Photo Booth - Nocturne",
      category: "Lighting, FX & Rentals",
      subCategory: "Photo Booth & 360 Video Booth",
      selectedPackage: "360 VIP Deluxe 5 Hours",
      unitPrice: 34000
    },
    eventDetails: {
      eventDate: new Date("2026-10-06T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "Dhaka Club Pavilion",
      venueAddress: "Ramna, Dhaka",
      guestCountEstimate: 313,
      specialInstructions: "Coordinate dry ice fog release with the bridal party entry dance."
    },
    pricingBreakdown: {
      subtotal: 34000,
      discountAmount: 0,
      serviceTax: 1700,
      grandTotal: 35700,
      paidAmount: 0,
      dueAmount: 35700
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800005b"),
    bookingCode: "BK-2026-0814-091",
    customerId: new ObjectId("66be18a1f2c4a91b8800006f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800005b"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800004b"),
    serviceSnapshot: {
      title: "Executive Conference & Seminar Staging - Nocturne",
      category: "Corporate & Official Events",
      subCategory: "Conferences & Seminars",
      selectedPackage: "Corporate Standard",
      unitPrice: 33000
    },
    eventDetails: {
      eventDate: new Date("2026-09-07T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "Sena Kunja Banquet Hall",
      venueAddress: "Dhaka Cantonment, Dhaka",
      guestCountEstimate: 330,
      specialInstructions: "Stage flower setup must be 100% completed by 3:00 PM."
    },
    pricingBreakdown: {
      subtotal: 33000,
      discountAmount: 2640,
      serviceTax: 1518,
      grandTotal: 31878,
      paidAmount: 31878,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800005c"),
    bookingCode: "BK-2026-0814-092",
    customerId: new ObjectId("66be18a1f2c4a91b88000070"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800005c"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800004c"),
    serviceSnapshot: {
      title: "Gala & Annual Award Night Stage Setup - Nocturne",
      category: "Corporate & Official Events",
      subCategory: "Gala & Annual Award Nights",
      selectedPackage: "VIP Star Night",
      unitPrice: 68000
    },
    eventDetails: {
      eventDate: new Date("2026-10-08T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "International Convention City Bashundhara (ICCB) Hall 2",
      venueAddress: "Kuril Bishwa Road, Next to 300 Feet, Purbachal Express, Dhaka",
      guestCountEstimate: 347,
      specialInstructions: "Please ensure warm ambient dimming for the couple grand entry."
    },
    pricingBreakdown: {
      subtotal: 68000,
      discountAmount: 0,
      serviceTax: 3400,
      grandTotal: 71400,
      paidAmount: 28560,
      dueAmount: 42840
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800005d"),
    bookingCode: "BK-2026-0814-093",
    customerId: new ObjectId("66be18a1f2c4a91b88000071"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800005d"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800004f"),
    serviceSnapshot: {
      title: "Vibrant Gaye Holud & Mehendi Canopy - Heritage",
      category: "Wedding & Pre-Wedding",
      subCategory: "Haldi & Mehendi Setup",
      selectedPackage: "Festive Basic",
      unitPrice: 28000
    },
    eventDetails: {
      eventDate: new Date("2026-09-09T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "Radisson Blu Water Garden Grand Ballroom",
      venueAddress: "Airport Road, Dhaka Cantonment, Dhaka",
      guestCountEstimate: 364,
      specialInstructions: "Cold pyros must be aligned with cake cutting music cue."
    },
    pricingBreakdown: {
      subtotal: 28000,
      discountAmount: 0,
      serviceTax: 1400,
      grandTotal: 29400,
      paidAmount: 29400,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800005e"),
    bookingCode: "BK-2026-0814-094",
    customerId: new ObjectId("66be18a1f2c4a91b88000072"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800005e"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800004d"),
    serviceSnapshot: {
      title: "Bride & Groom Grand Entry Pathway - Heritage",
      category: "Wedding & Pre-Wedding",
      subCategory: "Bride & Groom Grand Entry",
      selectedPackage: "Cinematic Fireworks Entry",
      unitPrice: 38000
    },
    eventDetails: {
      eventDate: new Date("2026-10-10T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "Le Meridien Sky Ballroom",
      venueAddress: "79/A Commercial Area, Airport Road, Nikunja 2, Dhaka",
      guestCountEstimate: 381,
      specialInstructions: "Guest photo booth attendant must assist elderly guests with prints."
    },
    pricingBreakdown: {
      subtotal: 38000,
      discountAmount: 3040,
      serviceTax: 1748,
      grandTotal: 36708,
      paidAmount: 14683,
      dueAmount: 22025
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b8800005f"),
    bookingCode: "BK-2026-0814-095",
    customerId: new ObjectId("66be18a1f2c4a91b88000073"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    serviceId: new ObjectId("66be18a3f2c4a91b8800005f"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800004e"),
    serviceSnapshot: {
      title: "Romantic Engagement & Ring Ceremony Decor - Heritage",
      category: "Wedding & Pre-Wedding",
      subCategory: "Engagement & Ring Ceremony",
      selectedPackage: "Chic Minimal",
      unitPrice: 24000
    },
    eventDetails: {
      eventDate: new Date("2026-09-11T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "22:00",
      venueName: "Krishibid Institution Bangladesh (KIB) Auditorium",
      venueAddress: "Krishi Khamar Sarak, Farmgate, Dhaka",
      guestCountEstimate: 398,
      specialInstructions: "Extra fairy light canopy covering needed for the garden area."
    },
    pricingBreakdown: {
      subtotal: 24000,
      discountAmount: 0,
      serviceTax: 1200,
      grandTotal: 25200,
      paidAmount: 0,
      dueAmount: 25200
    },
    status: "pending",
    paymentStatus: "unpaid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000060"),
    bookingCode: "BK-2026-0814-096",
    customerId: new ObjectId("66be18a1f2c4a91b88000074"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000060"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800004f"),
    serviceSnapshot: {
      title: "Akika & Naming Ceremony Stage - Heritage",
      category: "Baby Shower & Family Gatherings",
      subCategory: "Akika & Naming Ceremony",
      selectedPackage: "Royal Noor Setup",
      unitPrice: 33000
    },
    eventDetails: {
      eventDate: new Date("2026-10-12T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "23:00",
      venueName: "Police Convention Hall",
      venueAddress: "Eskaton Garden Road, Ramna, Dhaka",
      guestCountEstimate: 415,
      specialInstructions: "Stage backdrop name spelling must be verified before final mounting."
    },
    pricingBreakdown: {
      subtotal: 33000,
      discountAmount: 3000,
      serviceTax: 1500,
      grandTotal: 31500,
      paidAmount: 0,
      dueAmount: 31500
    },
    status: "cancelled",
    paymentStatus: "refunded",
    cancellationReason: "Client requested date change due to venue unavailability.",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000061"),
    bookingCode: "BK-2026-0814-097",
    customerId: new ObjectId("66be18a1f2c4a91b88000075"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000061"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b8800004d"),
    serviceSnapshot: {
      title: "Religious & Cultural Festival Pavilion - Heritage",
      category: "Baby Shower & Family Gatherings",
      subCategory: "Religious & Cultural Festivals",
      selectedPackage: "Festive Pavilion",
      unitPrice: 30000
    },
    eventDetails: {
      eventDate: new Date("2026-09-13T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "22:00",
      venueName: "Emmanuelle's Banquet Hall",
      venueAddress: "House 4, Road 134/135, Gulshan-1, Dhaka",
      guestCountEstimate: 432,
      specialInstructions: "All electrical cabling must be covered with cable ramps for safety."
    },
    pricingBreakdown: {
      subtotal: 30000,
      discountAmount: 2400,
      serviceTax: 1380,
      grandTotal: 28980,
      paidAmount: 28980,
      dueAmount: 0
    },
    status: "completed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000062"),
    bookingCode: "BK-2026-0814-098",
    customerId: new ObjectId("66be18a1f2c4a91b88000076"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000001"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000002"),
    serviceSnapshot: {
      title: "Royal Wedding Reception Stage Setup - DreamCraft",
      category: "Wedding & Pre-Wedding",
      subCategory: "Wedding & Reception Stage",
      selectedPackage: "Premium Royal",
      unitPrice: 65000
    },
    eventDetails: {
      eventDate: new Date("2026-10-14T10:00:00.000Z"),
      startTime: "17:00",
      endTime: "23:00",
      venueName: "Celebration Point Banquet",
      venueAddress: "Plot 8, Road 113/A, Gulshan-2, Dhaka",
      guestCountEstimate: 449,
      specialInstructions: "Clean teardown required by 1:00 AM as per venue policy."
    },
    pricingBreakdown: {
      subtotal: 65000,
      discountAmount: 0,
      serviceTax: 3250,
      grandTotal: 68250,
      paidAmount: 27300,
      dueAmount: 40950
    },
    status: "confirmed",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000063"),
    bookingCode: "BK-2026-0814-099",
    customerId: new ObjectId("66be18a1f2c4a91b88000077"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000002"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000003"),
    serviceSnapshot: {
      title: "Vibrant Gaye Holud & Mehendi Canopy - DreamCraft",
      category: "Wedding & Pre-Wedding",
      subCategory: "Haldi & Mehendi Setup",
      selectedPackage: "Festive Basic",
      unitPrice: 28000
    },
    eventDetails: {
      eventDate: new Date("2026-09-15T10:00:00.000Z"),
      startTime: "18:00",
      endTime: "22:00",
      venueName: "Officers Club Dhaka",
      venueAddress: "26 Baily Road, Ramna, Dhaka",
      guestCountEstimate: 466,
      specialInstructions: "Keep 2 additional VIP sofas near stage side for parents."
    },
    pricingBreakdown: {
      subtotal: 28000,
      discountAmount: 0,
      serviceTax: 1400,
      grandTotal: 29400,
      paidAmount: 29400,
      dueAmount: 0
    },
    status: "confirmed",
    paymentStatus: "paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a5f2c4a91b88000064"),
    bookingCode: "BK-2026-0814-100",
    customerId: new ObjectId("66be18a1f2c4a91b88000078"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    serviceId: new ObjectId("66be18a3f2c4a91b88000003"),
    assignedAgentId: new ObjectId("66be18a4f2c4a91b88000004"),
    serviceSnapshot: {
      title: "Bride & Groom Grand Entry Pathway - DreamCraft",
      category: "Wedding & Pre-Wedding",
      subCategory: "Bride & Groom Grand Entry",
      selectedPackage: "Cinematic Fireworks Entry",
      unitPrice: 38000
    },
    eventDetails: {
      eventDate: new Date("2026-10-16T10:00:00.000Z"),
      startTime: "16:00",
      endTime: "23:00",
      venueName: "Dhaka Club Pavilion",
      venueAddress: "Ramna, Dhaka",
      guestCountEstimate: 483,
      specialInstructions: "Coordinate dry ice fog release with the bridal party entry dance."
    },
    pricingBreakdown: {
      subtotal: 38000,
      discountAmount: 3040,
      serviceTax: 1748,
      grandTotal: 36708,
      paidAmount: 14683,
      dueAmount: 22025
    },
    status: "in_progress",
    paymentStatus: "partially_paid",
    cancellationReason: null,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  }
];

module.exports = { bookingsData };

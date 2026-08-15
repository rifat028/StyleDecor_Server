const { ObjectId } = require('mongodb');

const bookingsData = [
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000001"),
    "bookingCode": "BK-2026-0814-001",
    "customerId": new ObjectId("66be18a1f2c4a91b88000065"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000001"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000001"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000001"),
    "serviceSnapshot": {
      "title": "Royal Wedding Reception Stage Setup - DreamCraft",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Wedding & Reception Stage",
      "selectedPackage": "Standard Floral",
      "unitPrice": 40000
    },
    "eventDetails": {
      "eventDate": new Date("2026-08-20T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Sena Kunja Banquet Hall",
      "venueAddress": "Dhaka Cantonment, Dhaka",
      "guestCountEstimate": 80,
      "specialInstructions": "Stage flower setup must be 100% completed by 3:00 PM."
    },
    "pricingBreakdown": {
      "subtotal": 40000,
      "discountAmount": 3200,
      "serviceTax": 1840,
      "grandTotal": 38640,
      "paidAmount": 38640,
      "dueAmount": 0
    },
    "status": "fully_paid",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000002"),
    "bookingCode": "BK-2026-0814-002",
    "customerId": new ObjectId("66be18a1f2c4a91b88000066"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000001"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000002"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000002"),
    "serviceSnapshot": {
      "title": "Vibrant Gaye Holud & Mehendi Canopy - DreamCraft",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Haldi & Mehendi Setup",
      "selectedPackage": "Festive Basic",
      "unitPrice": 28000
    },
    "eventDetails": {
      "eventDate": new Date("2026-08-22T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "International Convention City Bashundhara (ICCB) Hall 2",
      "venueAddress": "Kuril Bishwa Road, Next to 300 Feet, Purbachal Express, Dhaka",
      "guestCountEstimate": 97,
      "specialInstructions": "Please ensure warm ambient dimming for the couple grand entry."
    },
    "pricingBreakdown": {
      "subtotal": 28000,
      "discountAmount": 0,
      "serviceTax": 1400,
      "grandTotal": 29400,
      "paidAmount": 29400,
      "dueAmount": 0
    },
    "status": "completed",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000003"),
    "bookingCode": "BK-2026-0814-003",
    "customerId": new ObjectId("66be18a1f2c4a91b88000067"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000001"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000003"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000003"),
    "serviceSnapshot": {
      "title": "Bride & Groom Grand Entry Pathway - DreamCraft",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Bride & Groom Grand Entry",
      "selectedPackage": "Classic Aisle",
      "unitPrice": 22000
    },
    "eventDetails": {
      "eventDate": new Date("2026-08-24T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Radisson Blu Water Garden Grand Ballroom",
      "venueAddress": "Airport Road, Dhaka Cantonment, Dhaka",
      "guestCountEstimate": 114,
      "specialInstructions": "Cold pyros must be aligned with cake cutting music cue."
    },
    "pricingBreakdown": {
      "subtotal": 22000,
      "discountAmount": 0,
      "serviceTax": 1100,
      "grandTotal": 23100,
      "paidAmount": 9240,
      "dueAmount": 13860
    },
    "status": "advance_paid",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000004"),
    "bookingCode": "BK-2026-0814-004",
    "customerId": new ObjectId("66be18a1f2c4a91b88000068"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000001"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000004"),
    "assignedAgentId": null,
    "serviceSnapshot": {
      "title": "Custom Neon Signs & Marquee Letter Rental - DreamCraft",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Custom Neon Signs & Marquee Letters",
      "selectedPackage": "Neon Sign Rental",
      "unitPrice": 8500
    },
    "eventDetails": {
      "eventDate": new Date("2026-08-26T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Golf Garden Army Golf Club",
      "venueAddress": "Airport Road, Dhaka",
      "guestCountEstimate": 131,
      "specialInstructions": "Custom neon sign must be secured firmly to avoid wind shake."
    },
    "pricingBreakdown": {
      "subtotal": 8500,
      "discountAmount": 680,
      "serviceTax": 391,
      "grandTotal": 8211,
      "paidAmount": 0,
      "dueAmount": 8211
    },
    "status": "pending",
    "paymentStatus": "unpaid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000005"),
    "bookingCode": "BK-2026-0814-005",
    "customerId": new ObjectId("66be18a1f2c4a91b88000069"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000001"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000005"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000001"),
    "serviceSnapshot": {
      "title": "Special Effects - Cold Pyro & Dry Ice Low Fog - DreamCraft",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Special Effects (Fog, Smoke & Pyro)",
      "selectedPackage": "Entry FX Pack",
      "unitPrice": 15000
    },
    "eventDetails": {
      "eventDate": new Date("2026-08-28T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Pan Pacific Sonargaon Grand Ballroom",
      "venueAddress": "107 Kazi Nazrul Islam Ave, Karwan Bazar, Dhaka",
      "guestCountEstimate": 148,
      "specialInstructions": "Keep spotlight color temperature at 3200K warm white."
    },
    "pricingBreakdown": {
      "subtotal": 15000,
      "discountAmount": 0,
      "serviceTax": 750,
      "grandTotal": 15750,
      "paidAmount": 7875,
      "dueAmount": 7875
    },
    "status": "preparing",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000006"),
    "bookingCode": "BK-2026-0814-006",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006a"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000002"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000006"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000006"),
    "serviceSnapshot": {
      "title": "Royal Wedding Reception Stage Setup - Royal",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Wedding & Reception Stage",
      "selectedPackage": "Standard Floral",
      "unitPrice": 40000
    },
    "eventDetails": {
      "eventDate": new Date("2026-08-30T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Le Méridien Grand Ballroom",
      "venueAddress": "79/A Commercial Area, Airport Road, Nikunja 2, Dhaka",
      "guestCountEstimate": 165,
      "specialInstructions": "Provide 2 extra floral stands at the VIP entrance archway."
    },
    "pricingBreakdown": {
      "subtotal": 40000,
      "discountAmount": 0,
      "serviceTax": 2000,
      "grandTotal": 42000,
      "paidAmount": 21000,
      "dueAmount": 21000
    },
    "status": "on_the_way",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000007"),
    "bookingCode": "BK-2026-0814-007",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000002"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000007"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000007"),
    "serviceSnapshot": {
      "title": "Bride & Groom Grand Entry Pathway - Royal",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Bride & Groom Grand Entry",
      "selectedPackage": "Classic Aisle",
      "unitPrice": 22000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-01T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Dhaka Regency Celebration Hall",
      "venueAddress": "Airport Road, Nikunja-2, Dhaka",
      "guestCountEstimate": 182,
      "specialInstructions": "Ensure dry ice low fog generator is ready 10 mins before entry."
    },
    "pricingBreakdown": {
      "subtotal": 22000,
      "discountAmount": 1760,
      "serviceTax": 1012,
      "grandTotal": 21252,
      "paidAmount": 10626,
      "dueAmount": 10626
    },
    "status": "in_progress",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000008"),
    "bookingCode": "BK-2026-0814-008",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006c"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000002"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000008"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000008"),
    "serviceSnapshot": {
      "title": "Romantic Engagement & Ring Ceremony Decor - Royal",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Engagement & Ring Ceremony",
      "selectedPackage": "Chic Minimal",
      "unitPrice": 24000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-03T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "The Westin Grand Ballroom",
      "venueAddress": "Main Gulshan Avenue, Plot-01, Road 45, Gulshan-2, Dhaka",
      "guestCountEstimate": 199,
      "specialInstructions": "Teardown crew must arrive immediately after 11:30 PM."
    },
    "pricingBreakdown": {
      "subtotal": 24000,
      "discountAmount": 0,
      "serviceTax": 1200,
      "grandTotal": 25200,
      "paidAmount": 7560,
      "dueAmount": 17640
    },
    "status": "accepted",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000009"),
    "bookingCode": "BK-2026-0814-009",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006d"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000002"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000009"),
    "assignedAgentId": null,
    "serviceSnapshot": {
      "title": "Gala & Annual Award Night Stage Setup - Royal",
      "category": "Corporate & Official Events",
      "subCategory": "Gala & Annual Award Nights",
      "selectedPackage": "Red Carpet Gala",
      "unitPrice": 37000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-05T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "InterContinental Ruposhi Bangla Ballroom",
      "venueAddress": "1 Minto Road, Shahbagh, Dhaka",
      "guestCountEstimate": 216,
      "specialInstructions": "Floral grade should be premium Rajnigandha and Dutch Roses."
    },
    "pricingBreakdown": {
      "subtotal": 37000,
      "discountAmount": 0,
      "serviceTax": 1850,
      "grandTotal": 38850,
      "paidAmount": 0,
      "dueAmount": 38850
    },
    "status": "in_draft",
    "paymentStatus": "unpaid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000010"),
    "bookingCode": "BK-2026-0814-010",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006e"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000002"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800000a"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000006"),
    "serviceSnapshot": {
      "title": "Corporate Dinner & Executive Meetup Decor - Royal",
      "category": "Corporate & Official Events",
      "subCategory": "Corporate Dinners & Meetups",
      "selectedPackage": "Banquet Elegant",
      "unitPrice": 26000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-07T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Raowa Convention Hall (Anchor Hall)",
      "venueAddress": "VIP Road, Mohakhali, Dhaka",
      "guestCountEstimate": 233,
      "specialInstructions": "Ensure photo booth lighting has zero glare on backdrop."
    },
    "pricingBreakdown": {
      "subtotal": 26000,
      "discountAmount": 2080,
      "serviceTax": 1196,
      "grandTotal": 25116,
      "paidAmount": 25116,
      "dueAmount": 0
    },
    "status": "rejected",
    "paymentStatus": "refunded",
    "cancellationReason": "Client requested cancellation due to venue schedule change.",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000011"),
    "bookingCode": "BK-2026-0814-011",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006f"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000003"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800000b"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800000b"),
    "serviceSnapshot": {
      "title": "Royal Wedding Reception Stage Setup - Bloom",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Wedding & Reception Stage",
      "selectedPackage": "Standard Floral",
      "unitPrice": 40000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-09T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "King of Chittagong Banquet Hall",
      "venueAddress": "Oxygen R/A, Bayezid Bostami Road, Chattogram",
      "guestCountEstimate": 250,
      "specialInstructions": "Stage flower setup must be 100% completed by 3:00 PM."
    },
    "pricingBreakdown": {
      "subtotal": 40000,
      "discountAmount": 0,
      "serviceTax": 2000,
      "grandTotal": 42000,
      "paidAmount": 42000,
      "dueAmount": 0
    },
    "status": "fully_paid",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000012"),
    "bookingCode": "BK-2026-0814-012",
    "customerId": new ObjectId("66be18a1f2c4a91b88000070"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000003"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800000c"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800000c"),
    "serviceSnapshot": {
      "title": "Vibrant Gaye Holud & Mehendi Canopy - Bloom",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Haldi & Mehendi Setup",
      "selectedPackage": "Festive Basic",
      "unitPrice": 28000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-11T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "GEC Convention Center",
      "venueAddress": "1 GEC Circle, CDA Avenue, Chattogram",
      "guestCountEstimate": 267,
      "specialInstructions": "Please ensure warm ambient dimming for the couple grand entry."
    },
    "pricingBreakdown": {
      "subtotal": 28000,
      "discountAmount": 0,
      "serviceTax": 1400,
      "grandTotal": 29400,
      "paidAmount": 29400,
      "dueAmount": 0
    },
    "status": "completed",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000013"),
    "bookingCode": "BK-2026-0814-013",
    "customerId": new ObjectId("66be18a1f2c4a91b88000071"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000003"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800000d"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000009"),
    "serviceSnapshot": {
      "title": "Pastel Baby Shower & Gender Reveal Setup - Bloom",
      "category": "Baby Shower & Family Gatherings",
      "subCategory": "Baby Shower & Gender Reveal",
      "selectedPackage": "Pastel Joy",
      "unitPrice": 17000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-13T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "The Peninsula Chittagong Grand Hall",
      "venueAddress": "Bulbul Center, 486/B CDA Avenue, GEC Circle, Chattogram",
      "guestCountEstimate": 284,
      "specialInstructions": "Cold pyros must be aligned with cake cutting music cue."
    },
    "pricingBreakdown": {
      "subtotal": 17000,
      "discountAmount": 1360,
      "serviceTax": 782,
      "grandTotal": 16422,
      "paidAmount": 6569,
      "dueAmount": 9853
    },
    "status": "advance_paid",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000014"),
    "bookingCode": "BK-2026-0814-014",
    "customerId": new ObjectId("66be18a1f2c4a91b88000072"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000003"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800000e"),
    "assignedAgentId": null,
    "serviceSnapshot": {
      "title": "Housewarming & Family Get-Together Decor - Bloom",
      "category": "Baby Shower & Family Gatherings",
      "subCategory": "Housewarming & Get-Togethers",
      "selectedPackage": "Cozy Welcome",
      "unitPrice": 13000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-15T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Radisson Blu Chattogram Bay View Grand Ballroom",
      "venueAddress": "SS Khaled Road, Lalkhan Bazar, Chattogram",
      "guestCountEstimate": 301,
      "specialInstructions": "Custom neon sign must be secured firmly to avoid wind shake."
    },
    "pricingBreakdown": {
      "subtotal": 13000,
      "discountAmount": 0,
      "serviceTax": 650,
      "grandTotal": 13650,
      "paidAmount": 0,
      "dueAmount": 13650
    },
    "status": "pending",
    "paymentStatus": "unpaid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000015"),
    "bookingCode": "BK-2026-0814-015",
    "customerId": new ObjectId("66be18a1f2c4a91b88000073"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000004"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800000f"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800000f"),
    "serviceSnapshot": {
      "title": "Kids Themed Fantasy Birthday Setup - Kiddos",
      "category": "Birthday & Anniversary",
      "subCategory": "Kids Themed Birthday",
      "selectedPackage": "Themed Standard",
      "unitPrice": 15000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-17T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Pan Pacific Sonargaon Grand Ballroom",
      "venueAddress": "107 Kazi Nazrul Islam Ave, Karwan Bazar, Dhaka",
      "guestCountEstimate": 318,
      "specialInstructions": "Keep spotlight color temperature at 3200K warm white."
    },
    "pricingBreakdown": {
      "subtotal": 15000,
      "discountAmount": 0,
      "serviceTax": 750,
      "grandTotal": 15750,
      "paidAmount": 7875,
      "dueAmount": 7875
    },
    "status": "preparing",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000016"),
    "bookingCode": "BK-2026-0814-016",
    "customerId": new ObjectId("66be18a1f2c4a91b88000074"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000004"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000010"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000010"),
    "serviceSnapshot": {
      "title": "1st Birthday Little Prince / Princess Setup - Kiddos",
      "category": "Birthday & Anniversary",
      "subCategory": "1st Birthday Special",
      "selectedPackage": "Pastel Dream",
      "unitPrice": 17000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-19T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Le Méridien Grand Ballroom",
      "venueAddress": "79/A Commercial Area, Airport Road, Nikunja 2, Dhaka",
      "guestCountEstimate": 85,
      "specialInstructions": "Provide 2 extra floral stands at the VIP entrance archway."
    },
    "pricingBreakdown": {
      "subtotal": 17000,
      "discountAmount": 1360,
      "serviceTax": 782,
      "grandTotal": 16422,
      "paidAmount": 8211,
      "dueAmount": 8211
    },
    "status": "on_the_way",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000017"),
    "bookingCode": "BK-2026-0814-017",
    "customerId": new ObjectId("66be18a1f2c4a91b88000075"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000004"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000011"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800000d"),
    "serviceSnapshot": {
      "title": "Pastel Baby Shower & Gender Reveal Setup - Kiddos",
      "category": "Baby Shower & Family Gatherings",
      "subCategory": "Baby Shower & Gender Reveal",
      "selectedPackage": "Pastel Joy",
      "unitPrice": 17000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-21T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Dhaka Regency Celebration Hall",
      "venueAddress": "Airport Road, Nikunja-2, Dhaka",
      "guestCountEstimate": 102,
      "specialInstructions": "Ensure dry ice low fog generator is ready 10 mins before entry."
    },
    "pricingBreakdown": {
      "subtotal": 17000,
      "discountAmount": 0,
      "serviceTax": 850,
      "grandTotal": 17850,
      "paidAmount": 8925,
      "dueAmount": 8925
    },
    "status": "in_progress",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000018"),
    "bookingCode": "BK-2026-0814-018",
    "customerId": new ObjectId("66be18a1f2c4a91b88000076"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000004"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000012"),
    "assignedAgentId": null,
    "serviceSnapshot": {
      "title": "Akika & Naming Ceremony Stage - Kiddos",
      "category": "Baby Shower & Family Gatherings",
      "subCategory": "Akika & Naming Ceremony",
      "selectedPackage": "Blessed Classic",
      "unitPrice": 19000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-23T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "The Westin Grand Ballroom",
      "venueAddress": "Main Gulshan Avenue, Plot-01, Road 45, Gulshan-2, Dhaka",
      "guestCountEstimate": 119,
      "specialInstructions": "Teardown crew must arrive immediately after 11:30 PM."
    },
    "pricingBreakdown": {
      "subtotal": 19000,
      "discountAmount": 0,
      "serviceTax": 950,
      "grandTotal": 19950,
      "paidAmount": 0,
      "dueAmount": 19950
    },
    "status": "in_draft",
    "paymentStatus": "unpaid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000019"),
    "bookingCode": "BK-2026-0814-019",
    "customerId": new ObjectId("66be18a1f2c4a91b88000077"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000005"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000013"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000013"),
    "serviceSnapshot": {
      "title": "Executive Conference & Seminar Staging - Elite",
      "category": "Corporate & Official Events",
      "subCategory": "Conferences & Seminars",
      "selectedPackage": "Corporate Standard",
      "unitPrice": 33000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-25T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "InterContinental Ruposhi Bangla Ballroom",
      "venueAddress": "1 Minto Road, Shahbagh, Dhaka",
      "guestCountEstimate": 136,
      "specialInstructions": "Floral grade should be premium Rajnigandha and Dutch Roses."
    },
    "pricingBreakdown": {
      "subtotal": 33000,
      "discountAmount": 2640,
      "serviceTax": 1518,
      "grandTotal": 31878,
      "paidAmount": 9563,
      "dueAmount": 22315
    },
    "status": "accepted",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000020"),
    "bookingCode": "BK-2026-0814-020",
    "customerId": new ObjectId("66be18a1f2c4a91b88000078"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000005"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000014"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000014"),
    "serviceSnapshot": {
      "title": "Gala & Annual Award Night Stage Setup - Elite",
      "category": "Corporate & Official Events",
      "subCategory": "Gala & Annual Award Nights",
      "selectedPackage": "Red Carpet Gala",
      "unitPrice": 37000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-27T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Raowa Convention Hall (Anchor Hall)",
      "venueAddress": "VIP Road, Mohakhali, Dhaka",
      "guestCountEstimate": 153,
      "specialInstructions": "Ensure photo booth lighting has zero glare on backdrop."
    },
    "pricingBreakdown": {
      "subtotal": 37000,
      "discountAmount": 0,
      "serviceTax": 1850,
      "grandTotal": 38850,
      "paidAmount": 38850,
      "dueAmount": 0
    },
    "status": "rejected",
    "paymentStatus": "refunded",
    "cancellationReason": "Client requested cancellation due to venue schedule change.",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000021"),
    "bookingCode": "BK-2026-0814-021",
    "customerId": new ObjectId("6a7f2e0aaefae1aa7d90185b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000005"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000015"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000011"),
    "serviceSnapshot": {
      "title": "Product Launch & Trade Expo Pavilion - Elite",
      "category": "Corporate & Official Events",
      "subCategory": "Product Launch & Expo Stalls",
      "selectedPackage": "Launch Essential",
      "unitPrice": 42000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-29T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Sena Kunja Banquet Hall",
      "venueAddress": "Dhaka Cantonment, Dhaka",
      "guestCountEstimate": 170,
      "specialInstructions": "Stage flower setup must be 100% completed by 3:00 PM."
    },
    "pricingBreakdown": {
      "subtotal": 42000,
      "discountAmount": 0,
      "serviceTax": 2100,
      "grandTotal": 44100,
      "paidAmount": 44100,
      "dueAmount": 0
    },
    "status": "fully_paid",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000022"),
    "bookingCode": "BK-2026-0814-022",
    "customerId": new ObjectId("66be18a1f2c4a91b88000065"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000005"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000016"),
    "assignedAgentId": null,
    "serviceSnapshot": {
      "title": "Custom Neon Signs & Marquee Letter Rental - Elite",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Custom Neon Signs & Marquee Letters",
      "selectedPackage": "Neon Sign Rental",
      "unitPrice": 8500
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-01T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "International Convention City Bashundhara (ICCB) Hall 2",
      "venueAddress": "Kuril Bishwa Road, Next to 300 Feet, Purbachal Express, Dhaka",
      "guestCountEstimate": 187,
      "specialInstructions": "Please ensure warm ambient dimming for the couple grand entry."
    },
    "pricingBreakdown": {
      "subtotal": 8500,
      "discountAmount": 680,
      "serviceTax": 391,
      "grandTotal": 8211,
      "paidAmount": 0,
      "dueAmount": 8211
    },
    "status": "pending",
    "paymentStatus": "unpaid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000023"),
    "bookingCode": "BK-2026-0814-023",
    "customerId": new ObjectId("66be18a1f2c4a91b88000066"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000005"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000017"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000013"),
    "serviceSnapshot": {
      "title": "Spotlights & Ambient Event Lighting Setup - Elite",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Spotlights & Ambient Lighting",
      "selectedPackage": "Ambience Essential",
      "unitPrice": 14000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-03T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Radisson Blu Water Garden Grand Ballroom",
      "venueAddress": "Airport Road, Dhaka Cantonment, Dhaka",
      "guestCountEstimate": 204,
      "specialInstructions": "Cold pyros must be aligned with cake cutting music cue."
    },
    "pricingBreakdown": {
      "subtotal": 14000,
      "discountAmount": 0,
      "serviceTax": 700,
      "grandTotal": 14700,
      "paidAmount": 14700,
      "dueAmount": 0
    },
    "status": "completed",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000024"),
    "bookingCode": "BK-2026-0814-024",
    "customerId": new ObjectId("66be18a1f2c4a91b88000067"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000006"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000018"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000018"),
    "serviceSnapshot": {
      "title": "Rooftop Party Canopy & Fairy Light Sky - Cozy",
      "category": "Home & Rooftop Intimate Setups",
      "subCategory": "Rooftop Party Canopy",
      "selectedPackage": "Boho Rooftop Standard",
      "unitPrice": 19000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-05T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Golf Garden Army Golf Club",
      "venueAddress": "Airport Road, Dhaka",
      "guestCountEstimate": 221,
      "specialInstructions": "Custom neon sign must be secured firmly to avoid wind shake."
    },
    "pricingBreakdown": {
      "subtotal": 19000,
      "discountAmount": 0,
      "serviceTax": 950,
      "grandTotal": 19950,
      "paidAmount": 7980,
      "dueAmount": 11970
    },
    "status": "advance_paid",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000025"),
    "bookingCode": "BK-2026-0814-025",
    "customerId": new ObjectId("66be18a1f2c4a91b88000068"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000006"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000019"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000015"),
    "serviceSnapshot": {
      "title": "Drawing Room & Balcony Aesthetic Makeover - Cozy",
      "category": "Home & Rooftop Intimate Setups",
      "subCategory": "Drawing Room & Balcony Decor",
      "selectedPackage": "Cozy Corner",
      "unitPrice": 10000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-07T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Pan Pacific Sonargaon Grand Ballroom",
      "venueAddress": "107 Kazi Nazrul Islam Ave, Karwan Bazar, Dhaka",
      "guestCountEstimate": 238,
      "specialInstructions": "Keep spotlight color temperature at 3200K warm white."
    },
    "pricingBreakdown": {
      "subtotal": 10000,
      "discountAmount": 800,
      "serviceTax": 460,
      "grandTotal": 9660,
      "paidAmount": 4830,
      "dueAmount": 4830
    },
    "status": "preparing",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000026"),
    "bookingCode": "BK-2026-0814-026",
    "customerId": new ObjectId("66be18a1f2c4a91b88000069"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000006"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800001a"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000016"),
    "serviceSnapshot": {
      "title": "Surprise Room Makeover with Balloons & Candles - Cozy",
      "category": "Home & Rooftop Intimate Setups",
      "subCategory": "Surprise Room Makeover",
      "selectedPackage": "Sweet Surprise",
      "unitPrice": 12000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-09T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Le Méridien Grand Ballroom",
      "venueAddress": "79/A Commercial Area, Airport Road, Nikunja 2, Dhaka",
      "guestCountEstimate": 255,
      "specialInstructions": "Provide 2 extra floral stands at the VIP entrance archway."
    },
    "pricingBreakdown": {
      "subtotal": 12000,
      "discountAmount": 0,
      "serviceTax": 600,
      "grandTotal": 12600,
      "paidAmount": 6300,
      "dueAmount": 6300
    },
    "status": "on_the_way",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000027"),
    "bookingCode": "BK-2026-0814-027",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006a"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000006"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800001b"),
    "assignedAgentId": null,
    "serviceSnapshot": {
      "title": "Adult Milestone Birthday & Glam Gala - Cozy",
      "category": "Birthday & Anniversary",
      "subCategory": "Adult Milestone Birthday",
      "selectedPackage": "Glam Shimmer",
      "unitPrice": 19000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-11T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Dhaka Regency Celebration Hall",
      "venueAddress": "Airport Road, Nikunja-2, Dhaka",
      "guestCountEstimate": 272,
      "specialInstructions": "Ensure dry ice low fog generator is ready 10 mins before entry."
    },
    "pricingBreakdown": {
      "subtotal": 19000,
      "discountAmount": 0,
      "serviceTax": 950,
      "grandTotal": 19950,
      "paidAmount": 0,
      "dueAmount": 19950
    },
    "status": "in_draft",
    "paymentStatus": "unpaid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000028"),
    "bookingCode": "BK-2026-0814-028",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000006"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800001c"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000018"),
    "serviceSnapshot": {
      "title": "Romantic Anniversary & Candlelight Dining - Cozy",
      "category": "Birthday & Anniversary",
      "subCategory": "Romantic Anniversary & Candlelight",
      "selectedPackage": "Sweet Romance",
      "unitPrice": 14000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-13T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "The Westin Grand Ballroom",
      "venueAddress": "Main Gulshan Avenue, Plot-01, Road 45, Gulshan-2, Dhaka",
      "guestCountEstimate": 289,
      "specialInstructions": "Teardown crew must arrive immediately after 11:30 PM."
    },
    "pricingBreakdown": {
      "subtotal": 14000,
      "discountAmount": 1120,
      "serviceTax": 644,
      "grandTotal": 13524,
      "paidAmount": 6762,
      "dueAmount": 6762
    },
    "status": "in_progress",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000029"),
    "bookingCode": "BK-2026-0814-029",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006c"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000007"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800001d"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000019"),
    "serviceSnapshot": {
      "title": "Custom Neon Signs & Marquee Letter Rental - Lumina",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Custom Neon Signs & Marquee Letters",
      "selectedPackage": "Neon Sign Rental",
      "unitPrice": 8500
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-15T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "The Peninsula Chittagong Grand Hall",
      "venueAddress": "Bulbul Center, 486/B CDA Avenue, GEC Circle, Chattogram",
      "guestCountEstimate": 306,
      "specialInstructions": "Floral grade should be premium Rajnigandha and Dutch Roses."
    },
    "pricingBreakdown": {
      "subtotal": 8500,
      "discountAmount": 0,
      "serviceTax": 425,
      "grandTotal": 8925,
      "paidAmount": 2678,
      "dueAmount": 6247
    },
    "status": "accepted",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000030"),
    "bookingCode": "BK-2026-0814-030",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006d"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000007"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800001e"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800001a"),
    "serviceSnapshot": {
      "title": "Spotlights & Ambient Event Lighting Setup - Lumina",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Spotlights & Ambient Lighting",
      "selectedPackage": "Ambience Essential",
      "unitPrice": 14000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-17T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Radisson Blu Chattogram Bay View Grand Ballroom",
      "venueAddress": "SS Khaled Road, Lalkhan Bazar, Chattogram",
      "guestCountEstimate": 323,
      "specialInstructions": "Ensure photo booth lighting has zero glare on backdrop."
    },
    "pricingBreakdown": {
      "subtotal": 14000,
      "discountAmount": 0,
      "serviceTax": 700,
      "grandTotal": 14700,
      "paidAmount": 14700,
      "dueAmount": 0
    },
    "status": "rejected",
    "paymentStatus": "refunded",
    "cancellationReason": "Client requested cancellation due to venue schedule change.",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000031"),
    "bookingCode": "BK-2026-0814-031",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006e"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000007"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800001f"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800001b"),
    "serviceSnapshot": {
      "title": "Special Effects - Cold Pyro & Dry Ice Low Fog - Lumina",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Special Effects (Fog, Smoke & Pyro)",
      "selectedPackage": "Entry FX Pack",
      "unitPrice": 15000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-19T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "King of Chittagong Banquet Hall",
      "venueAddress": "Oxygen R/A, Bayezid Bostami Road, Chattogram",
      "guestCountEstimate": 90,
      "specialInstructions": "Stage flower setup must be 100% completed by 3:00 PM."
    },
    "pricingBreakdown": {
      "subtotal": 15000,
      "discountAmount": 1200,
      "serviceTax": 690,
      "grandTotal": 14490,
      "paidAmount": 14490,
      "dueAmount": 0
    },
    "status": "fully_paid",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000032"),
    "bookingCode": "BK-2026-0814-032",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006f"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000007"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000020"),
    "assignedAgentId": null,
    "serviceSnapshot": {
      "title": "360 Video Booth & Instant Photo Booth - Lumina",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Photo Booth & 360 Video Booth",
      "selectedPackage": "360 Video Booth 3 Hours",
      "unitPrice": 20000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-21T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "GEC Convention Center",
      "venueAddress": "1 GEC Circle, CDA Avenue, Chattogram",
      "guestCountEstimate": 107,
      "specialInstructions": "Please ensure warm ambient dimming for the couple grand entry."
    },
    "pricingBreakdown": {
      "subtotal": 20000,
      "discountAmount": 0,
      "serviceTax": 1000,
      "grandTotal": 21000,
      "paidAmount": 0,
      "dueAmount": 21000
    },
    "status": "pending",
    "paymentStatus": "unpaid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000033"),
    "bookingCode": "BK-2026-0814-033",
    "customerId": new ObjectId("66be18a1f2c4a91b88000070"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000007"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000021"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000019"),
    "serviceSnapshot": {
      "title": "Executive Conference & Seminar Staging - Lumina",
      "category": "Corporate & Official Events",
      "subCategory": "Conferences & Seminars",
      "selectedPackage": "Corporate Standard",
      "unitPrice": 33000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-23T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "The Peninsula Chittagong Grand Hall",
      "venueAddress": "Bulbul Center, 486/B CDA Avenue, GEC Circle, Chattogram",
      "guestCountEstimate": 124,
      "specialInstructions": "Cold pyros must be aligned with cake cutting music cue."
    },
    "pricingBreakdown": {
      "subtotal": 33000,
      "discountAmount": 0,
      "serviceTax": 1650,
      "grandTotal": 34650,
      "paidAmount": 34650,
      "dueAmount": 0
    },
    "status": "completed",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000034"),
    "bookingCode": "BK-2026-0814-034",
    "customerId": new ObjectId("66be18a1f2c4a91b88000071"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000008"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000023"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800001e"),
    "serviceSnapshot": {
      "title": "Royal Wedding Reception Stage Setup - Utsab",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Wedding & Reception Stage",
      "selectedPackage": "Standard Floral",
      "unitPrice": 40000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-25T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Rose View Hotel Grand Ballroom",
      "venueAddress": "Shahjalal Uposhahar, Block D, Sylhet",
      "guestCountEstimate": 141,
      "specialInstructions": "Custom neon sign must be secured firmly to avoid wind shake."
    },
    "pricingBreakdown": {
      "subtotal": 40000,
      "discountAmount": 3200,
      "serviceTax": 1840,
      "grandTotal": 38640,
      "paidAmount": 15456,
      "dueAmount": 23184
    },
    "status": "advance_paid",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000035"),
    "bookingCode": "BK-2026-0814-035",
    "customerId": new ObjectId("66be18a1f2c4a91b88000072"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000008"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000024"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800001f"),
    "serviceSnapshot": {
      "title": "Vibrant Gaye Holud & Mehendi Canopy - Utsab",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Haldi & Mehendi Setup",
      "selectedPackage": "Festive Basic",
      "unitPrice": 28000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-27T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Grand Palace Hotel & Resorts Banquet",
      "venueAddress": "Jail Road, Sylhet",
      "guestCountEstimate": 158,
      "specialInstructions": "Keep spotlight color temperature at 3200K warm white."
    },
    "pricingBreakdown": {
      "subtotal": 28000,
      "discountAmount": 0,
      "serviceTax": 1400,
      "grandTotal": 29400,
      "paidAmount": 14700,
      "dueAmount": 14700
    },
    "status": "preparing",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000036"),
    "bookingCode": "BK-2026-0814-036",
    "customerId": new ObjectId("66be18a1f2c4a91b88000073"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000008"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000025"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000020"),
    "serviceSnapshot": {
      "title": "Romantic Engagement & Ring Ceremony Decor - Utsab",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Engagement & Ring Ceremony",
      "selectedPackage": "Chic Minimal",
      "unitPrice": 24000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-29T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Noorjahan Grand Convention Hall",
      "venueAddress": "Waves 1, Dargah Gate, Sylhet",
      "guestCountEstimate": 175,
      "specialInstructions": "Provide 2 extra floral stands at the VIP entrance archway."
    },
    "pricingBreakdown": {
      "subtotal": 24000,
      "discountAmount": 0,
      "serviceTax": 1200,
      "grandTotal": 25200,
      "paidAmount": 12600,
      "dueAmount": 12600
    },
    "status": "on_the_way",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000037"),
    "bookingCode": "BK-2026-0814-037",
    "customerId": new ObjectId("66be18a1f2c4a91b88000074"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000008"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000026"),
    "assignedAgentId": null,
    "serviceSnapshot": {
      "title": "Akika & Naming Ceremony Stage - Utsab",
      "category": "Baby Shower & Family Gatherings",
      "subCategory": "Akika & Naming Ceremony",
      "selectedPackage": "Blessed Classic",
      "unitPrice": 19000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-31T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Rose View Hotel Grand Ballroom",
      "venueAddress": "Shahjalal Uposhahar, Block D, Sylhet",
      "guestCountEstimate": 192,
      "specialInstructions": "Ensure dry ice low fog generator is ready 10 mins before entry."
    },
    "pricingBreakdown": {
      "subtotal": 19000,
      "discountAmount": 1520,
      "serviceTax": 874,
      "grandTotal": 18354,
      "paidAmount": 0,
      "dueAmount": 18354
    },
    "status": "in_draft",
    "paymentStatus": "unpaid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000038"),
    "bookingCode": "BK-2026-0814-038",
    "customerId": new ObjectId("66be18a1f2c4a91b88000075"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000008"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000027"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800001e"),
    "serviceSnapshot": {
      "title": "Religious & Cultural Festival Pavilion - Utsab",
      "category": "Baby Shower & Family Gatherings",
      "subCategory": "Religious & Cultural Festivals",
      "selectedPackage": "Festive Pavilion",
      "unitPrice": 30000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-02T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Grand Palace Hotel & Resorts Banquet",
      "venueAddress": "Jail Road, Sylhet",
      "guestCountEstimate": 209,
      "specialInstructions": "Teardown crew must arrive immediately after 11:30 PM."
    },
    "pricingBreakdown": {
      "subtotal": 30000,
      "discountAmount": 0,
      "serviceTax": 1500,
      "grandTotal": 31500,
      "paidAmount": 15750,
      "dueAmount": 15750
    },
    "status": "in_progress",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000039"),
    "bookingCode": "BK-2026-0814-039",
    "customerId": new ObjectId("66be18a1f2c4a91b88000076"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000009"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000028"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000023"),
    "serviceSnapshot": {
      "title": "Kids Themed Fantasy Birthday Setup - Pastel",
      "category": "Birthday & Anniversary",
      "subCategory": "Kids Themed Birthday",
      "selectedPackage": "Themed Standard",
      "unitPrice": 15000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-04T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "InterContinental Ruposhi Bangla Ballroom",
      "venueAddress": "1 Minto Road, Shahbagh, Dhaka",
      "guestCountEstimate": 226,
      "specialInstructions": "Floral grade should be premium Rajnigandha and Dutch Roses."
    },
    "pricingBreakdown": {
      "subtotal": 15000,
      "discountAmount": 0,
      "serviceTax": 750,
      "grandTotal": 15750,
      "paidAmount": 4725,
      "dueAmount": 11025
    },
    "status": "accepted",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000040"),
    "bookingCode": "BK-2026-0814-040",
    "customerId": new ObjectId("66be18a1f2c4a91b88000077"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000009"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000029"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000024"),
    "serviceSnapshot": {
      "title": "Romantic Anniversary & Candlelight Dining - Pastel",
      "category": "Birthday & Anniversary",
      "subCategory": "Romantic Anniversary & Candlelight",
      "selectedPackage": "Sweet Romance",
      "unitPrice": 14000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-06T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Raowa Convention Hall (Anchor Hall)",
      "venueAddress": "VIP Road, Mohakhali, Dhaka",
      "guestCountEstimate": 243,
      "specialInstructions": "Ensure photo booth lighting has zero glare on backdrop."
    },
    "pricingBreakdown": {
      "subtotal": 14000,
      "discountAmount": 1120,
      "serviceTax": 644,
      "grandTotal": 13524,
      "paidAmount": 13524,
      "dueAmount": 0
    },
    "status": "rejected",
    "paymentStatus": "refunded",
    "cancellationReason": "Client requested cancellation due to venue schedule change.",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000041"),
    "bookingCode": "BK-2026-0814-041",
    "customerId": new ObjectId("66be18a1f2c4a91b88000078"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000009"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800002a"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000021"),
    "serviceSnapshot": {
      "title": "Pastel Baby Shower & Gender Reveal Setup - Pastel",
      "category": "Baby Shower & Family Gatherings",
      "subCategory": "Baby Shower & Gender Reveal",
      "selectedPackage": "Pastel Joy",
      "unitPrice": 17000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-08T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Sena Kunja Banquet Hall",
      "venueAddress": "Dhaka Cantonment, Dhaka",
      "guestCountEstimate": 260,
      "specialInstructions": "Stage flower setup must be 100% completed by 3:00 PM."
    },
    "pricingBreakdown": {
      "subtotal": 17000,
      "discountAmount": 0,
      "serviceTax": 850,
      "grandTotal": 17850,
      "paidAmount": 17850,
      "dueAmount": 0
    },
    "status": "fully_paid",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000042"),
    "bookingCode": "BK-2026-0814-042",
    "customerId": new ObjectId("6a7f2e0aaefae1aa7d90185b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000009"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800002b"),
    "assignedAgentId": null,
    "serviceSnapshot": {
      "title": "Akika & Naming Ceremony Stage - Pastel",
      "category": "Baby Shower & Family Gatherings",
      "subCategory": "Akika & Naming Ceremony",
      "selectedPackage": "Blessed Classic",
      "unitPrice": 19000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-10T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "International Convention City Bashundhara (ICCB) Hall 2",
      "venueAddress": "Kuril Bishwa Road, Next to 300 Feet, Purbachal Express, Dhaka",
      "guestCountEstimate": 277,
      "specialInstructions": "Please ensure warm ambient dimming for the couple grand entry."
    },
    "pricingBreakdown": {
      "subtotal": 19000,
      "discountAmount": 0,
      "serviceTax": 950,
      "grandTotal": 19950,
      "paidAmount": 0,
      "dueAmount": 19950
    },
    "status": "pending",
    "paymentStatus": "unpaid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000043"),
    "bookingCode": "BK-2026-0814-043",
    "customerId": new ObjectId("66be18a1f2c4a91b88000065"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000009"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800002c"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000023"),
    "serviceSnapshot": {
      "title": "Rooftop Party Canopy & Fairy Light Sky - Pastel",
      "category": "Home & Rooftop Intimate Setups",
      "subCategory": "Rooftop Party Canopy",
      "selectedPackage": "Boho Rooftop Standard",
      "unitPrice": 19000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-12T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Radisson Blu Water Garden Grand Ballroom",
      "venueAddress": "Airport Road, Dhaka Cantonment, Dhaka",
      "guestCountEstimate": 294,
      "specialInstructions": "Cold pyros must be aligned with cake cutting music cue."
    },
    "pricingBreakdown": {
      "subtotal": 19000,
      "discountAmount": 1520,
      "serviceTax": 874,
      "grandTotal": 18354,
      "paidAmount": 18354,
      "dueAmount": 0
    },
    "status": "completed",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000044"),
    "bookingCode": "BK-2026-0814-044",
    "customerId": new ObjectId("66be18a1f2c4a91b88000066"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000a"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800002d"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000028"),
    "serviceSnapshot": {
      "title": "Royal Wedding Reception Stage Setup - Padma",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Wedding & Reception Stage",
      "selectedPackage": "Standard Floral",
      "unitPrice": 40000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-14T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Padma Convention Hall",
      "venueAddress": "Shaheb Bazar, Rajshahi",
      "guestCountEstimate": 311,
      "specialInstructions": "Custom neon sign must be secured firmly to avoid wind shake."
    },
    "pricingBreakdown": {
      "subtotal": 40000,
      "discountAmount": 0,
      "serviceTax": 2000,
      "grandTotal": 42000,
      "paidAmount": 16800,
      "dueAmount": 25200
    },
    "status": "advance_paid",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000045"),
    "bookingCode": "BK-2026-0814-045",
    "customerId": new ObjectId("66be18a1f2c4a91b88000067"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000a"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800002e"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000025"),
    "serviceSnapshot": {
      "title": "Vibrant Gaye Holud & Mehendi Canopy - Padma",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Haldi & Mehendi Setup",
      "selectedPackage": "Festive Basic",
      "unitPrice": 28000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-16T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Grand Riverview Hotel Crystal Ballroom",
      "venueAddress": "Kazihata, Greater Road, Rajshahi",
      "guestCountEstimate": 328,
      "specialInstructions": "Keep spotlight color temperature at 3200K warm white."
    },
    "pricingBreakdown": {
      "subtotal": 28000,
      "discountAmount": 0,
      "serviceTax": 1400,
      "grandTotal": 29400,
      "paidAmount": 14700,
      "dueAmount": 14700
    },
    "status": "preparing",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000046"),
    "bookingCode": "BK-2026-0814-046",
    "customerId": new ObjectId("66be18a1f2c4a91b88000068"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000a"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800002f"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000026"),
    "serviceSnapshot": {
      "title": "Executive Conference & Seminar Staging - Padma",
      "category": "Corporate & Official Events",
      "subCategory": "Conferences & Seminars",
      "selectedPackage": "Corporate Standard",
      "unitPrice": 33000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-18T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Padma Convention Hall",
      "venueAddress": "Shaheb Bazar, Rajshahi",
      "guestCountEstimate": 95,
      "specialInstructions": "Provide 2 extra floral stands at the VIP entrance archway."
    },
    "pricingBreakdown": {
      "subtotal": 33000,
      "discountAmount": 2640,
      "serviceTax": 1518,
      "grandTotal": 31878,
      "paidAmount": 15939,
      "dueAmount": 15939
    },
    "status": "on_the_way",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000047"),
    "bookingCode": "BK-2026-0814-047",
    "customerId": new ObjectId("66be18a1f2c4a91b88000069"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000a"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000030"),
    "assignedAgentId": null,
    "serviceSnapshot": {
      "title": "Corporate Dinner & Executive Meetup Decor - Padma",
      "category": "Corporate & Official Events",
      "subCategory": "Corporate Dinners & Meetups",
      "selectedPackage": "Banquet Elegant",
      "unitPrice": 26000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-20T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Grand Riverview Hotel Crystal Ballroom",
      "venueAddress": "Kazihata, Greater Road, Rajshahi",
      "guestCountEstimate": 112,
      "specialInstructions": "Ensure dry ice low fog generator is ready 10 mins before entry."
    },
    "pricingBreakdown": {
      "subtotal": 26000,
      "discountAmount": 0,
      "serviceTax": 1300,
      "grandTotal": 27300,
      "paidAmount": 0,
      "dueAmount": 27300
    },
    "status": "in_draft",
    "paymentStatus": "unpaid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000048"),
    "bookingCode": "BK-2026-0814-048",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006a"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000b"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000031"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800002c"),
    "serviceSnapshot": {
      "title": "Royal Wedding Reception Stage Setup - Sundarban",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Wedding & Reception Stage",
      "selectedPackage": "Standard Floral",
      "unitPrice": 40000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-22T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Hotel Castle Salam Grand Ballroom",
      "venueAddress": "G-8 Taltola Mor, KDA Avenue, Khulna",
      "guestCountEstimate": 129,
      "specialInstructions": "Teardown crew must arrive immediately after 11:30 PM."
    },
    "pricingBreakdown": {
      "subtotal": 40000,
      "discountAmount": 0,
      "serviceTax": 2000,
      "grandTotal": 42000,
      "paidAmount": 21000,
      "dueAmount": 21000
    },
    "status": "in_progress",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000049"),
    "bookingCode": "BK-2026-0814-049",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000b"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000032"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000029"),
    "serviceSnapshot": {
      "title": "Bride & Groom Grand Entry Pathway - Sundarban",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Bride & Groom Grand Entry",
      "selectedPackage": "Classic Aisle",
      "unitPrice": 22000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-24T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "City Inn International Conference & Banquet Hall",
      "venueAddress": "B-46, Majid Sarani, KDA C/A, Khulna",
      "guestCountEstimate": 146,
      "specialInstructions": "Floral grade should be premium Rajnigandha and Dutch Roses."
    },
    "pricingBreakdown": {
      "subtotal": 22000,
      "discountAmount": 1760,
      "serviceTax": 1012,
      "grandTotal": 21252,
      "paidAmount": 6376,
      "dueAmount": 14876
    },
    "status": "accepted",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000050"),
    "bookingCode": "BK-2026-0814-050",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006c"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000b"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000033"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800002a"),
    "serviceSnapshot": {
      "title": "Adult Milestone Birthday & Glam Gala - Sundarban",
      "category": "Birthday & Anniversary",
      "subCategory": "Adult Milestone Birthday",
      "selectedPackage": "Glam Shimmer",
      "unitPrice": 19000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-26T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Hotel Castle Salam Grand Ballroom",
      "venueAddress": "G-8 Taltola Mor, KDA Avenue, Khulna",
      "guestCountEstimate": 163,
      "specialInstructions": "Ensure photo booth lighting has zero glare on backdrop."
    },
    "pricingBreakdown": {
      "subtotal": 19000,
      "discountAmount": 0,
      "serviceTax": 950,
      "grandTotal": 19950,
      "paidAmount": 19950,
      "dueAmount": 0
    },
    "status": "rejected",
    "paymentStatus": "refunded",
    "cancellationReason": "Client requested cancellation due to venue schedule change.",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000051"),
    "bookingCode": "BK-2026-0814-051",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006d"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000b"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000034"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800002b"),
    "serviceSnapshot": {
      "title": "Romantic Anniversary & Candlelight Dining - Sundarban",
      "category": "Birthday & Anniversary",
      "subCategory": "Romantic Anniversary & Candlelight",
      "selectedPackage": "Sweet Romance",
      "unitPrice": 14000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-28T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "City Inn International Conference & Banquet Hall",
      "venueAddress": "B-46, Majid Sarani, KDA C/A, Khulna",
      "guestCountEstimate": 180,
      "specialInstructions": "Stage flower setup must be 100% completed by 3:00 PM."
    },
    "pricingBreakdown": {
      "subtotal": 14000,
      "discountAmount": 0,
      "serviceTax": 700,
      "grandTotal": 14700,
      "paidAmount": 14700,
      "dueAmount": 0
    },
    "status": "fully_paid",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000052"),
    "bookingCode": "BK-2026-0814-052",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006e"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000c"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000035"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000030"),
    "serviceSnapshot": {
      "title": "Royal Wedding Reception Stage Setup - Kirtankhola",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Wedding & Reception Stage",
      "selectedPackage": "Standard Floral",
      "unitPrice": 40000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-30T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Grand Park Hotel Kirtonkhola Ballroom",
      "venueAddress": "Bell's Park, Band Road, Barishal",
      "guestCountEstimate": 197,
      "specialInstructions": "Please ensure warm ambient dimming for the couple grand entry."
    },
    "pricingBreakdown": {
      "subtotal": 40000,
      "discountAmount": 3200,
      "serviceTax": 1840,
      "grandTotal": 38640,
      "paidAmount": 38640,
      "dueAmount": 0
    },
    "status": "completed",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000053"),
    "bookingCode": "BK-2026-0814-053",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006f"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000c"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000036"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800002d"),
    "serviceSnapshot": {
      "title": "Vibrant Gaye Holud & Mehendi Canopy - Kirtankhola",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Haldi & Mehendi Setup",
      "selectedPackage": "Festive Basic",
      "unitPrice": 28000
    },
    "eventDetails": {
      "eventDate": new Date("2026-12-02T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Grand Park Hotel Kirtonkhola Ballroom",
      "venueAddress": "Bell's Park, Band Road, Barishal",
      "guestCountEstimate": 214,
      "specialInstructions": "Cold pyros must be aligned with cake cutting music cue."
    },
    "pricingBreakdown": {
      "subtotal": 28000,
      "discountAmount": 0,
      "serviceTax": 1400,
      "grandTotal": 29400,
      "paidAmount": 11760,
      "dueAmount": 17640
    },
    "status": "advance_paid",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000054"),
    "bookingCode": "BK-2026-0814-054",
    "customerId": new ObjectId("66be18a1f2c4a91b88000070"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000c"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000037"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800002e"),
    "serviceSnapshot": {
      "title": "Akika & Naming Ceremony Stage - Kirtankhola",
      "category": "Baby Shower & Family Gatherings",
      "subCategory": "Akika & Naming Ceremony",
      "selectedPackage": "Blessed Classic",
      "unitPrice": 19000
    },
    "eventDetails": {
      "eventDate": new Date("2026-12-04T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Grand Park Hotel Kirtonkhola Ballroom",
      "venueAddress": "Bell's Park, Band Road, Barishal",
      "guestCountEstimate": 231,
      "specialInstructions": "Custom neon sign must be secured firmly to avoid wind shake."
    },
    "pricingBreakdown": {
      "subtotal": 19000,
      "discountAmount": 0,
      "serviceTax": 950,
      "grandTotal": 19950,
      "paidAmount": 9975,
      "dueAmount": 9975
    },
    "status": "preparing",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000055"),
    "bookingCode": "BK-2026-0814-055",
    "customerId": new ObjectId("66be18a1f2c4a91b88000071"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000c"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000038"),
    "assignedAgentId": null,
    "serviceSnapshot": {
      "title": "Housewarming & Family Get-Together Decor - Kirtankhola",
      "category": "Baby Shower & Family Gatherings",
      "subCategory": "Housewarming & Get-Togethers",
      "selectedPackage": "Cozy Welcome",
      "unitPrice": 13000
    },
    "eventDetails": {
      "eventDate": new Date("2026-12-06T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Grand Park Hotel Kirtonkhola Ballroom",
      "venueAddress": "Bell's Park, Band Road, Barishal",
      "guestCountEstimate": 248,
      "specialInstructions": "Keep spotlight color temperature at 3200K warm white."
    },
    "pricingBreakdown": {
      "subtotal": 13000,
      "discountAmount": 1040,
      "serviceTax": 598,
      "grandTotal": 12558,
      "paidAmount": 0,
      "dueAmount": 12558
    },
    "status": "pending",
    "paymentStatus": "unpaid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000056"),
    "bookingCode": "BK-2026-0814-056",
    "customerId": new ObjectId("66be18a1f2c4a91b88000072"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000d"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000039"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000034"),
    "serviceSnapshot": {
      "title": "Vibrant Gaye Holud & Mehendi Canopy - Rangpur",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Haldi & Mehendi Setup",
      "selectedPackage": "Festive Basic",
      "unitPrice": 28000
    },
    "eventDetails": {
      "eventDate": new Date("2026-08-20T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Grand Palace Rangpur Banquet Hall",
      "venueAddress": "Jail Road, Dhap, Rangpur",
      "guestCountEstimate": 265,
      "specialInstructions": "Provide 2 extra floral stands at the VIP entrance archway."
    },
    "pricingBreakdown": {
      "subtotal": 28000,
      "discountAmount": 0,
      "serviceTax": 1400,
      "grandTotal": 29400,
      "paidAmount": 14700,
      "dueAmount": 14700
    },
    "status": "on_the_way",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000057"),
    "bookingCode": "BK-2026-0814-057",
    "customerId": new ObjectId("66be18a1f2c4a91b88000073"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000d"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800003a"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000031"),
    "serviceSnapshot": {
      "title": "Bride & Groom Grand Entry Pathway - Rangpur",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Bride & Groom Grand Entry",
      "selectedPackage": "Classic Aisle",
      "unitPrice": 22000
    },
    "eventDetails": {
      "eventDate": new Date("2026-08-22T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Grand Palace Rangpur Banquet Hall",
      "venueAddress": "Jail Road, Dhap, Rangpur",
      "guestCountEstimate": 282,
      "specialInstructions": "Ensure dry ice low fog generator is ready 10 mins before entry."
    },
    "pricingBreakdown": {
      "subtotal": 22000,
      "discountAmount": 0,
      "serviceTax": 1100,
      "grandTotal": 23100,
      "paidAmount": 11550,
      "dueAmount": 11550
    },
    "status": "in_progress",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000058"),
    "bookingCode": "BK-2026-0814-058",
    "customerId": new ObjectId("66be18a1f2c4a91b88000074"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000d"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800003b"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000032"),
    "serviceSnapshot": {
      "title": "Product Launch & Trade Expo Pavilion - Rangpur",
      "category": "Corporate & Official Events",
      "subCategory": "Product Launch & Expo Stalls",
      "selectedPackage": "Launch Essential",
      "unitPrice": 42000
    },
    "eventDetails": {
      "eventDate": new Date("2026-08-24T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Grand Palace Rangpur Banquet Hall",
      "venueAddress": "Jail Road, Dhap, Rangpur",
      "guestCountEstimate": 299,
      "specialInstructions": "Teardown crew must arrive immediately after 11:30 PM."
    },
    "pricingBreakdown": {
      "subtotal": 42000,
      "discountAmount": 3360,
      "serviceTax": 1932,
      "grandTotal": 40572,
      "paidAmount": 12172,
      "dueAmount": 28400
    },
    "status": "accepted",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000059"),
    "bookingCode": "BK-2026-0814-059",
    "customerId": new ObjectId("66be18a1f2c4a91b88000075"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000d"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800003c"),
    "assignedAgentId": null,
    "serviceSnapshot": {
      "title": "Corporate Dinner & Executive Meetup Decor - Rangpur",
      "category": "Corporate & Official Events",
      "subCategory": "Corporate Dinners & Meetups",
      "selectedPackage": "Banquet Elegant",
      "unitPrice": 26000
    },
    "eventDetails": {
      "eventDate": new Date("2026-08-26T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Grand Palace Rangpur Banquet Hall",
      "venueAddress": "Jail Road, Dhap, Rangpur",
      "guestCountEstimate": 316,
      "specialInstructions": "Floral grade should be premium Rajnigandha and Dutch Roses."
    },
    "pricingBreakdown": {
      "subtotal": 26000,
      "discountAmount": 0,
      "serviceTax": 1300,
      "grandTotal": 27300,
      "paidAmount": 0,
      "dueAmount": 27300
    },
    "status": "in_draft",
    "paymentStatus": "unpaid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000060"),
    "bookingCode": "BK-2026-0814-060",
    "customerId": new ObjectId("66be18a1f2c4a91b88000076"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000e"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800003d"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000038"),
    "serviceSnapshot": {
      "title": "Pastel Baby Shower & Gender Reveal Setup - Brahmaputra",
      "category": "Baby Shower & Family Gatherings",
      "subCategory": "Baby Shower & Gender Reveal",
      "selectedPackage": "Pastel Joy",
      "unitPrice": 17000
    },
    "eventDetails": {
      "eventDate": new Date("2026-08-28T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Brahmaputra Heritage Convention Center",
      "venueAddress": "Station Road, Mymensingh",
      "guestCountEstimate": 83,
      "specialInstructions": "Ensure photo booth lighting has zero glare on backdrop."
    },
    "pricingBreakdown": {
      "subtotal": 17000,
      "discountAmount": 0,
      "serviceTax": 850,
      "grandTotal": 17850,
      "paidAmount": 17850,
      "dueAmount": 0
    },
    "status": "rejected",
    "paymentStatus": "refunded",
    "cancellationReason": "Client requested cancellation due to venue schedule change.",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000061"),
    "bookingCode": "BK-2026-0814-061",
    "customerId": new ObjectId("66be18a1f2c4a91b88000077"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000e"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800003e"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000035"),
    "serviceSnapshot": {
      "title": "Akika & Naming Ceremony Stage - Brahmaputra",
      "category": "Baby Shower & Family Gatherings",
      "subCategory": "Akika & Naming Ceremony",
      "selectedPackage": "Blessed Classic",
      "unitPrice": 19000
    },
    "eventDetails": {
      "eventDate": new Date("2026-08-30T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Brahmaputra Heritage Convention Center",
      "venueAddress": "Station Road, Mymensingh",
      "guestCountEstimate": 100,
      "specialInstructions": "Stage flower setup must be 100% completed by 3:00 PM."
    },
    "pricingBreakdown": {
      "subtotal": 19000,
      "discountAmount": 1520,
      "serviceTax": 874,
      "grandTotal": 18354,
      "paidAmount": 18354,
      "dueAmount": 0
    },
    "status": "fully_paid",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000062"),
    "bookingCode": "BK-2026-0814-062",
    "customerId": new ObjectId("66be18a1f2c4a91b88000078"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000e"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800003f"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000036"),
    "serviceSnapshot": {
      "title": "Religious & Cultural Festival Pavilion - Brahmaputra",
      "category": "Baby Shower & Family Gatherings",
      "subCategory": "Religious & Cultural Festivals",
      "selectedPackage": "Festive Pavilion",
      "unitPrice": 30000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-01T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Brahmaputra Heritage Convention Center",
      "venueAddress": "Station Road, Mymensingh",
      "guestCountEstimate": 117,
      "specialInstructions": "Please ensure warm ambient dimming for the couple grand entry."
    },
    "pricingBreakdown": {
      "subtotal": 30000,
      "discountAmount": 0,
      "serviceTax": 1500,
      "grandTotal": 31500,
      "paidAmount": 31500,
      "dueAmount": 0
    },
    "status": "completed",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000063"),
    "bookingCode": "BK-2026-0814-063",
    "customerId": new ObjectId("6a7f2e0aaefae1aa7d90185b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000e"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000040"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000037"),
    "serviceSnapshot": {
      "title": "Rooftop Party Canopy & Fairy Light Sky - Brahmaputra",
      "category": "Home & Rooftop Intimate Setups",
      "subCategory": "Rooftop Party Canopy",
      "selectedPackage": "Boho Rooftop Standard",
      "unitPrice": 19000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-03T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Brahmaputra Heritage Convention Center",
      "venueAddress": "Station Road, Mymensingh",
      "guestCountEstimate": 134,
      "specialInstructions": "Cold pyros must be aligned with cake cutting music cue."
    },
    "pricingBreakdown": {
      "subtotal": 19000,
      "discountAmount": 0,
      "serviceTax": 950,
      "grandTotal": 19950,
      "paidAmount": 7980,
      "dueAmount": 11970
    },
    "status": "advance_paid",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000064"),
    "bookingCode": "BK-2026-0814-064",
    "customerId": new ObjectId("66be18a1f2c4a91b88000065"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000e"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000041"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000038"),
    "serviceSnapshot": {
      "title": "Drawing Room & Balcony Aesthetic Makeover - Brahmaputra",
      "category": "Home & Rooftop Intimate Setups",
      "subCategory": "Drawing Room & Balcony Decor",
      "selectedPackage": "Cozy Corner",
      "unitPrice": 10000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-05T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Brahmaputra Heritage Convention Center",
      "venueAddress": "Station Road, Mymensingh",
      "guestCountEstimate": 151,
      "specialInstructions": "Custom neon sign must be secured firmly to avoid wind shake."
    },
    "pricingBreakdown": {
      "subtotal": 10000,
      "discountAmount": 800,
      "serviceTax": 460,
      "grandTotal": 9660,
      "paidAmount": 4830,
      "dueAmount": 4830
    },
    "status": "preparing",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000065"),
    "bookingCode": "BK-2026-0814-065",
    "customerId": new ObjectId("66be18a1f2c4a91b88000066"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000f"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000042"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000039"),
    "serviceSnapshot": {
      "title": "Royal Wedding Reception Stage Setup - Moynamoti",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Wedding & Reception Stage",
      "selectedPackage": "Standard Floral",
      "unitPrice": 40000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-07T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Moynamoti Royal Convention Center",
      "venueAddress": "Kotbari Road, Cumilla",
      "guestCountEstimate": 168,
      "specialInstructions": "Keep spotlight color temperature at 3200K warm white."
    },
    "pricingBreakdown": {
      "subtotal": 40000,
      "discountAmount": 0,
      "serviceTax": 2000,
      "grandTotal": 42000,
      "paidAmount": 21000,
      "dueAmount": 21000
    },
    "status": "on_the_way",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000066"),
    "bookingCode": "BK-2026-0814-066",
    "customerId": new ObjectId("66be18a1f2c4a91b88000067"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000f"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000043"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800003a"),
    "serviceSnapshot": {
      "title": "Bride & Groom Grand Entry Pathway - Moynamoti",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Bride & Groom Grand Entry",
      "selectedPackage": "Classic Aisle",
      "unitPrice": 22000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-09T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Moynamoti Royal Convention Center",
      "venueAddress": "Kotbari Road, Cumilla",
      "guestCountEstimate": 185,
      "specialInstructions": "Provide 2 extra floral stands at the VIP entrance archway."
    },
    "pricingBreakdown": {
      "subtotal": 22000,
      "discountAmount": 0,
      "serviceTax": 1100,
      "grandTotal": 23100,
      "paidAmount": 11550,
      "dueAmount": 11550
    },
    "status": "in_progress",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000067"),
    "bookingCode": "BK-2026-0814-067",
    "customerId": new ObjectId("66be18a1f2c4a91b88000068"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000f"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000044"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800003b"),
    "serviceSnapshot": {
      "title": "Romantic Engagement & Ring Ceremony Decor - Moynamoti",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Engagement & Ring Ceremony",
      "selectedPackage": "Chic Minimal",
      "unitPrice": 24000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-11T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Moynamoti Royal Convention Center",
      "venueAddress": "Kotbari Road, Cumilla",
      "guestCountEstimate": 202,
      "specialInstructions": "Ensure dry ice low fog generator is ready 10 mins before entry."
    },
    "pricingBreakdown": {
      "subtotal": 24000,
      "discountAmount": 1920,
      "serviceTax": 1104,
      "grandTotal": 23184,
      "paidAmount": 6955,
      "dueAmount": 16229
    },
    "status": "accepted",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000068"),
    "bookingCode": "BK-2026-0814-068",
    "customerId": new ObjectId("66be18a1f2c4a91b88000069"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000f"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000045"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800003c"),
    "serviceSnapshot": {
      "title": "Custom Neon Signs & Marquee Letter Rental - Moynamoti",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Custom Neon Signs & Marquee Letters",
      "selectedPackage": "Neon Sign Rental",
      "unitPrice": 8500
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-13T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Moynamoti Royal Convention Center",
      "venueAddress": "Kotbari Road, Cumilla",
      "guestCountEstimate": 219,
      "specialInstructions": "Teardown crew must arrive immediately after 11:30 PM."
    },
    "pricingBreakdown": {
      "subtotal": 8500,
      "discountAmount": 0,
      "serviceTax": 425,
      "grandTotal": 8925,
      "paidAmount": 8925,
      "dueAmount": 0
    },
    "status": "rejected",
    "paymentStatus": "refunded",
    "cancellationReason": "Client requested cancellation due to venue schedule change.",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000069"),
    "bookingCode": "BK-2026-0814-069",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006a"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000f"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000046"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000039"),
    "serviceSnapshot": {
      "title": "Special Effects - Cold Pyro & Dry Ice Low Fog - Moynamoti",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Special Effects (Fog, Smoke & Pyro)",
      "selectedPackage": "Entry FX Pack",
      "unitPrice": 15000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-15T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Moynamoti Royal Convention Center",
      "venueAddress": "Kotbari Road, Cumilla",
      "guestCountEstimate": 236,
      "specialInstructions": "Floral grade should be premium Rajnigandha and Dutch Roses."
    },
    "pricingBreakdown": {
      "subtotal": 15000,
      "discountAmount": 0,
      "serviceTax": 750,
      "grandTotal": 15750,
      "paidAmount": 15750,
      "dueAmount": 0
    },
    "status": "fully_paid",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000070"),
    "bookingCode": "BK-2026-0814-070",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000010"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000047"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800003e"),
    "serviceSnapshot": {
      "title": "Executive Conference & Seminar Staging - Urban",
      "category": "Corporate & Official Events",
      "subCategory": "Conferences & Seminars",
      "selectedPackage": "Corporate Standard",
      "unitPrice": 33000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-17T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Ananda Park & Resort Grand Hall",
      "venueAddress": "Taltoli, Gazipur",
      "guestCountEstimate": 253,
      "specialInstructions": "Ensure photo booth lighting has zero glare on backdrop."
    },
    "pricingBreakdown": {
      "subtotal": 33000,
      "discountAmount": 2640,
      "serviceTax": 1518,
      "grandTotal": 31878,
      "paidAmount": 31878,
      "dueAmount": 0
    },
    "status": "completed",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000071"),
    "bookingCode": "BK-2026-0814-071",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006c"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000010"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000048"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800003f"),
    "serviceSnapshot": {
      "title": "Gala & Annual Award Night Stage Setup - Urban",
      "category": "Corporate & Official Events",
      "subCategory": "Gala & Annual Award Nights",
      "selectedPackage": "Red Carpet Gala",
      "unitPrice": 37000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-19T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Ananda Park & Resort Grand Hall",
      "venueAddress": "Taltoli, Gazipur",
      "guestCountEstimate": 270,
      "specialInstructions": "Stage flower setup must be 100% completed by 3:00 PM."
    },
    "pricingBreakdown": {
      "subtotal": 37000,
      "discountAmount": 0,
      "serviceTax": 1850,
      "grandTotal": 38850,
      "paidAmount": 15540,
      "dueAmount": 23310
    },
    "status": "advance_paid",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000072"),
    "bookingCode": "BK-2026-0814-072",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006d"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000010"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000049"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000040"),
    "serviceSnapshot": {
      "title": "Product Launch & Trade Expo Pavilion - Urban",
      "category": "Corporate & Official Events",
      "subCategory": "Product Launch & Expo Stalls",
      "selectedPackage": "Launch Essential",
      "unitPrice": 42000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-21T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Ananda Park & Resort Grand Hall",
      "venueAddress": "Taltoli, Gazipur",
      "guestCountEstimate": 287,
      "specialInstructions": "Please ensure warm ambient dimming for the couple grand entry."
    },
    "pricingBreakdown": {
      "subtotal": 42000,
      "discountAmount": 0,
      "serviceTax": 2100,
      "grandTotal": 44100,
      "paidAmount": 22050,
      "dueAmount": 22050
    },
    "status": "preparing",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000073"),
    "bookingCode": "BK-2026-0814-073",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006e"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000010"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800004a"),
    "assignedAgentId": null,
    "serviceSnapshot": {
      "title": "Kids Themed Fantasy Birthday Setup - Urban",
      "category": "Birthday & Anniversary",
      "subCategory": "Kids Themed Birthday",
      "selectedPackage": "Themed Standard",
      "unitPrice": 15000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-23T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Ananda Park & Resort Grand Hall",
      "venueAddress": "Taltoli, Gazipur",
      "guestCountEstimate": 304,
      "specialInstructions": "Cold pyros must be aligned with cake cutting music cue."
    },
    "pricingBreakdown": {
      "subtotal": 15000,
      "discountAmount": 1200,
      "serviceTax": 690,
      "grandTotal": 14490,
      "paidAmount": 0,
      "dueAmount": 14490
    },
    "status": "pending",
    "paymentStatus": "unpaid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000074"),
    "bookingCode": "BK-2026-0814-074",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006f"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000010"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800004b"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800003e"),
    "serviceSnapshot": {
      "title": "Adult Milestone Birthday & Glam Gala - Urban",
      "category": "Birthday & Anniversary",
      "subCategory": "Adult Milestone Birthday",
      "selectedPackage": "Glam Shimmer",
      "unitPrice": 19000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-25T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Ananda Park & Resort Grand Hall",
      "venueAddress": "Taltoli, Gazipur",
      "guestCountEstimate": 321,
      "specialInstructions": "Custom neon sign must be secured firmly to avoid wind shake."
    },
    "pricingBreakdown": {
      "subtotal": 19000,
      "discountAmount": 0,
      "serviceTax": 950,
      "grandTotal": 19950,
      "paidAmount": 9975,
      "dueAmount": 9975
    },
    "status": "on_the_way",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000075"),
    "bookingCode": "BK-2026-0814-075",
    "customerId": new ObjectId("66be18a1f2c4a91b88000070"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000011"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800004c"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000043"),
    "serviceSnapshot": {
      "title": "Royal Wedding Reception Stage Setup - Velvet",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Wedding & Reception Stage",
      "selectedPackage": "Standard Floral",
      "unitPrice": 40000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-27T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Pan Pacific Sonargaon Grand Ballroom",
      "venueAddress": "107 Kazi Nazrul Islam Ave, Karwan Bazar, Dhaka",
      "guestCountEstimate": 88,
      "specialInstructions": "Keep spotlight color temperature at 3200K warm white."
    },
    "pricingBreakdown": {
      "subtotal": 40000,
      "discountAmount": 0,
      "serviceTax": 2000,
      "grandTotal": 42000,
      "paidAmount": 21000,
      "dueAmount": 21000
    },
    "status": "in_progress",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000076"),
    "bookingCode": "BK-2026-0814-076",
    "customerId": new ObjectId("66be18a1f2c4a91b88000071"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000011"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800004d"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000044"),
    "serviceSnapshot": {
      "title": "Vibrant Gaye Holud & Mehendi Canopy - Velvet",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Haldi & Mehendi Setup",
      "selectedPackage": "Festive Basic",
      "unitPrice": 28000
    },
    "eventDetails": {
      "eventDate": new Date("2026-09-29T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Le Méridien Grand Ballroom",
      "venueAddress": "79/A Commercial Area, Airport Road, Nikunja 2, Dhaka",
      "guestCountEstimate": 105,
      "specialInstructions": "Provide 2 extra floral stands at the VIP entrance archway."
    },
    "pricingBreakdown": {
      "subtotal": 28000,
      "discountAmount": 2240,
      "serviceTax": 1288,
      "grandTotal": 27048,
      "paidAmount": 8114,
      "dueAmount": 18934
    },
    "status": "accepted",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000077"),
    "bookingCode": "BK-2026-0814-077",
    "customerId": new ObjectId("66be18a1f2c4a91b88000072"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000011"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800004e"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000041"),
    "serviceSnapshot": {
      "title": "Bride & Groom Grand Entry Pathway - Velvet",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Bride & Groom Grand Entry",
      "selectedPackage": "Classic Aisle",
      "unitPrice": 22000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-01T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Dhaka Regency Celebration Hall",
      "venueAddress": "Airport Road, Nikunja-2, Dhaka",
      "guestCountEstimate": 122,
      "specialInstructions": "Ensure dry ice low fog generator is ready 10 mins before entry."
    },
    "pricingBreakdown": {
      "subtotal": 22000,
      "discountAmount": 0,
      "serviceTax": 1100,
      "grandTotal": 23100,
      "paidAmount": 23100,
      "dueAmount": 0
    },
    "status": "rejected",
    "paymentStatus": "refunded",
    "cancellationReason": "Client requested cancellation due to venue schedule change.",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000078"),
    "bookingCode": "BK-2026-0814-078",
    "customerId": new ObjectId("66be18a1f2c4a91b88000073"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000011"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800004f"),
    "assignedAgentId": null,
    "serviceSnapshot": {
      "title": "Custom Neon Signs & Marquee Letter Rental - Velvet",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Custom Neon Signs & Marquee Letters",
      "selectedPackage": "Neon Sign Rental",
      "unitPrice": 8500
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-03T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "The Westin Grand Ballroom",
      "venueAddress": "Main Gulshan Avenue, Plot-01, Road 45, Gulshan-2, Dhaka",
      "guestCountEstimate": 139,
      "specialInstructions": "Teardown crew must arrive immediately after 11:30 PM."
    },
    "pricingBreakdown": {
      "subtotal": 8500,
      "discountAmount": 0,
      "serviceTax": 425,
      "grandTotal": 8925,
      "paidAmount": 0,
      "dueAmount": 8925
    },
    "status": "in_draft",
    "paymentStatus": "unpaid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000079"),
    "bookingCode": "BK-2026-0814-079",
    "customerId": new ObjectId("66be18a1f2c4a91b88000074"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000011"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000050"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000043"),
    "serviceSnapshot": {
      "title": "Spotlights & Ambient Event Lighting Setup - Velvet",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Spotlights & Ambient Lighting",
      "selectedPackage": "Ambience Essential",
      "unitPrice": 14000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-05T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "InterContinental Ruposhi Bangla Ballroom",
      "venueAddress": "1 Minto Road, Shahbagh, Dhaka",
      "guestCountEstimate": 156,
      "specialInstructions": "Floral grade should be premium Rajnigandha and Dutch Roses."
    },
    "pricingBreakdown": {
      "subtotal": 14000,
      "discountAmount": 1120,
      "serviceTax": 644,
      "grandTotal": 13524,
      "paidAmount": 13524,
      "dueAmount": 0
    },
    "status": "fully_paid",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000080"),
    "bookingCode": "BK-2026-0814-080",
    "customerId": new ObjectId("66be18a1f2c4a91b88000075"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000012"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000052"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000048"),
    "serviceSnapshot": {
      "title": "Kids Themed Fantasy Birthday Setup - Balloon",
      "category": "Birthday & Anniversary",
      "subCategory": "Kids Themed Birthday",
      "selectedPackage": "Themed Standard",
      "unitPrice": 15000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-07T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Raowa Convention Hall (Anchor Hall)",
      "venueAddress": "VIP Road, Mohakhali, Dhaka",
      "guestCountEstimate": 173,
      "specialInstructions": "Ensure photo booth lighting has zero glare on backdrop."
    },
    "pricingBreakdown": {
      "subtotal": 15000,
      "discountAmount": 0,
      "serviceTax": 750,
      "grandTotal": 15750,
      "paidAmount": 15750,
      "dueAmount": 0
    },
    "status": "completed",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000081"),
    "bookingCode": "BK-2026-0814-081",
    "customerId": new ObjectId("66be18a1f2c4a91b88000076"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000012"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000053"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000045"),
    "serviceSnapshot": {
      "title": "Adult Milestone Birthday & Glam Gala - Balloon",
      "category": "Birthday & Anniversary",
      "subCategory": "Adult Milestone Birthday",
      "selectedPackage": "Glam Shimmer",
      "unitPrice": 19000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-09T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Sena Kunja Banquet Hall",
      "venueAddress": "Dhaka Cantonment, Dhaka",
      "guestCountEstimate": 190,
      "specialInstructions": "Stage flower setup must be 100% completed by 3:00 PM."
    },
    "pricingBreakdown": {
      "subtotal": 19000,
      "discountAmount": 0,
      "serviceTax": 950,
      "grandTotal": 19950,
      "paidAmount": 7980,
      "dueAmount": 11970
    },
    "status": "advance_paid",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000082"),
    "bookingCode": "BK-2026-0814-082",
    "customerId": new ObjectId("66be18a1f2c4a91b88000077"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000012"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000054"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000046"),
    "serviceSnapshot": {
      "title": "1st Birthday Little Prince / Princess Setup - Balloon",
      "category": "Birthday & Anniversary",
      "subCategory": "1st Birthday Special",
      "selectedPackage": "Pastel Dream",
      "unitPrice": 17000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-11T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "International Convention City Bashundhara (ICCB) Hall 2",
      "venueAddress": "Kuril Bishwa Road, Next to 300 Feet, Purbachal Express, Dhaka",
      "guestCountEstimate": 207,
      "specialInstructions": "Please ensure warm ambient dimming for the couple grand entry."
    },
    "pricingBreakdown": {
      "subtotal": 17000,
      "discountAmount": 1360,
      "serviceTax": 782,
      "grandTotal": 16422,
      "paidAmount": 8211,
      "dueAmount": 8211
    },
    "status": "preparing",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000083"),
    "bookingCode": "BK-2026-0814-083",
    "customerId": new ObjectId("66be18a1f2c4a91b88000078"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000012"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000055"),
    "assignedAgentId": null,
    "serviceSnapshot": {
      "title": "Drawing Room & Balcony Aesthetic Makeover - Balloon",
      "category": "Home & Rooftop Intimate Setups",
      "subCategory": "Drawing Room & Balcony Decor",
      "selectedPackage": "Cozy Corner",
      "unitPrice": 10000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-13T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Radisson Blu Water Garden Grand Ballroom",
      "venueAddress": "Airport Road, Dhaka Cantonment, Dhaka",
      "guestCountEstimate": 224,
      "specialInstructions": "Cold pyros must be aligned with cake cutting music cue."
    },
    "pricingBreakdown": {
      "subtotal": 10000,
      "discountAmount": 0,
      "serviceTax": 500,
      "grandTotal": 10500,
      "paidAmount": 0,
      "dueAmount": 10500
    },
    "status": "pending",
    "paymentStatus": "unpaid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000084"),
    "bookingCode": "BK-2026-0814-084",
    "customerId": new ObjectId("6a7f2e0aaefae1aa7d90185b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000012"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000056"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000048"),
    "serviceSnapshot": {
      "title": "Surprise Room Makeover with Balloons & Candles - Balloon",
      "category": "Home & Rooftop Intimate Setups",
      "subCategory": "Surprise Room Makeover",
      "selectedPackage": "Sweet Surprise",
      "unitPrice": 12000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-15T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Golf Garden Army Golf Club",
      "venueAddress": "Airport Road, Dhaka",
      "guestCountEstimate": 241,
      "specialInstructions": "Custom neon sign must be secured firmly to avoid wind shake."
    },
    "pricingBreakdown": {
      "subtotal": 12000,
      "discountAmount": 0,
      "serviceTax": 600,
      "grandTotal": 12600,
      "paidAmount": 6300,
      "dueAmount": 6300
    },
    "status": "on_the_way",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000085"),
    "bookingCode": "BK-2026-0814-085",
    "customerId": new ObjectId("66be18a1f2c4a91b88000065"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000013"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000057"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000049"),
    "serviceSnapshot": {
      "title": "Custom Neon Signs & Marquee Letter Rental - Nocturne",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Custom Neon Signs & Marquee Letters",
      "selectedPackage": "Neon Sign Rental",
      "unitPrice": 8500
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-17T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Pan Pacific Sonargaon Grand Ballroom",
      "venueAddress": "107 Kazi Nazrul Islam Ave, Karwan Bazar, Dhaka",
      "guestCountEstimate": 258,
      "specialInstructions": "Keep spotlight color temperature at 3200K warm white."
    },
    "pricingBreakdown": {
      "subtotal": 8500,
      "discountAmount": 680,
      "serviceTax": 391,
      "grandTotal": 8211,
      "paidAmount": 4106,
      "dueAmount": 4105
    },
    "status": "in_progress",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000086"),
    "bookingCode": "BK-2026-0814-086",
    "customerId": new ObjectId("66be18a1f2c4a91b88000066"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000013"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000058"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800004a"),
    "serviceSnapshot": {
      "title": "Spotlights & Ambient Event Lighting Setup - Nocturne",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Spotlights & Ambient Lighting",
      "selectedPackage": "Ambience Essential",
      "unitPrice": 14000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-19T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Le Méridien Grand Ballroom",
      "venueAddress": "79/A Commercial Area, Airport Road, Nikunja 2, Dhaka",
      "guestCountEstimate": 275,
      "specialInstructions": "Provide 2 extra floral stands at the VIP entrance archway."
    },
    "pricingBreakdown": {
      "subtotal": 14000,
      "discountAmount": 0,
      "serviceTax": 700,
      "grandTotal": 14700,
      "paidAmount": 4410,
      "dueAmount": 10290
    },
    "status": "accepted",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000087"),
    "bookingCode": "BK-2026-0814-087",
    "customerId": new ObjectId("66be18a1f2c4a91b88000067"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000013"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000059"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800004b"),
    "serviceSnapshot": {
      "title": "Special Effects - Cold Pyro & Dry Ice Low Fog - Nocturne",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Special Effects (Fog, Smoke & Pyro)",
      "selectedPackage": "Entry FX Pack",
      "unitPrice": 15000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-21T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Dhaka Regency Celebration Hall",
      "venueAddress": "Airport Road, Nikunja-2, Dhaka",
      "guestCountEstimate": 292,
      "specialInstructions": "Ensure dry ice low fog generator is ready 10 mins before entry."
    },
    "pricingBreakdown": {
      "subtotal": 15000,
      "discountAmount": 0,
      "serviceTax": 750,
      "grandTotal": 15750,
      "paidAmount": 15750,
      "dueAmount": 0
    },
    "status": "rejected",
    "paymentStatus": "refunded",
    "cancellationReason": "Client requested cancellation due to venue schedule change.",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000088"),
    "bookingCode": "BK-2026-0814-088",
    "customerId": new ObjectId("66be18a1f2c4a91b88000068"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000013"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800005a"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800004c"),
    "serviceSnapshot": {
      "title": "360 Video Booth & Instant Photo Booth - Nocturne",
      "category": "Lighting, FX & Rentals",
      "subCategory": "Photo Booth & 360 Video Booth",
      "selectedPackage": "360 Video Booth 3 Hours",
      "unitPrice": 20000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-23T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "The Westin Grand Ballroom",
      "venueAddress": "Main Gulshan Avenue, Plot-01, Road 45, Gulshan-2, Dhaka",
      "guestCountEstimate": 309,
      "specialInstructions": "Teardown crew must arrive immediately after 11:30 PM."
    },
    "pricingBreakdown": {
      "subtotal": 20000,
      "discountAmount": 1600,
      "serviceTax": 920,
      "grandTotal": 19320,
      "paidAmount": 19320,
      "dueAmount": 0
    },
    "status": "fully_paid",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000089"),
    "bookingCode": "BK-2026-0814-089",
    "customerId": new ObjectId("66be18a1f2c4a91b88000069"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000013"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800005b"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b88000049"),
    "serviceSnapshot": {
      "title": "Executive Conference & Seminar Staging - Nocturne",
      "category": "Corporate & Official Events",
      "subCategory": "Conferences & Seminars",
      "selectedPackage": "Corporate Standard",
      "unitPrice": 33000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-25T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "InterContinental Ruposhi Bangla Ballroom",
      "venueAddress": "1 Minto Road, Shahbagh, Dhaka",
      "guestCountEstimate": 326,
      "specialInstructions": "Floral grade should be premium Rajnigandha and Dutch Roses."
    },
    "pricingBreakdown": {
      "subtotal": 33000,
      "discountAmount": 0,
      "serviceTax": 1650,
      "grandTotal": 34650,
      "paidAmount": 34650,
      "dueAmount": 0
    },
    "status": "completed",
    "paymentStatus": "paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000090"),
    "bookingCode": "BK-2026-0814-090",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006a"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000014"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800005d"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800004f"),
    "serviceSnapshot": {
      "title": "Vibrant Gaye Holud & Mehendi Canopy - Heritage",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Haldi & Mehendi Setup",
      "selectedPackage": "Festive Basic",
      "unitPrice": 28000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-27T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Raowa Convention Hall (Anchor Hall)",
      "venueAddress": "VIP Road, Mohakhali, Dhaka",
      "guestCountEstimate": 93,
      "specialInstructions": "Ensure photo booth lighting has zero glare on backdrop."
    },
    "pricingBreakdown": {
      "subtotal": 28000,
      "discountAmount": 0,
      "serviceTax": 1400,
      "grandTotal": 29400,
      "paidAmount": 11760,
      "dueAmount": 17640
    },
    "status": "advance_paid",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000091"),
    "bookingCode": "BK-2026-0814-091",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000014"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800005e"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800004d"),
    "serviceSnapshot": {
      "title": "Bride & Groom Grand Entry Pathway - Heritage",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Bride & Groom Grand Entry",
      "selectedPackage": "Classic Aisle",
      "unitPrice": 22000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-29T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Sena Kunja Banquet Hall",
      "venueAddress": "Dhaka Cantonment, Dhaka",
      "guestCountEstimate": 110,
      "specialInstructions": "Stage flower setup must be 100% completed by 3:00 PM."
    },
    "pricingBreakdown": {
      "subtotal": 22000,
      "discountAmount": 1760,
      "serviceTax": 1012,
      "grandTotal": 21252,
      "paidAmount": 10626,
      "dueAmount": 10626
    },
    "status": "preparing",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000092"),
    "bookingCode": "BK-2026-0814-092",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006c"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000014"),
    "serviceId": new ObjectId("66be18a3f2c4a91b8800005f"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800004e"),
    "serviceSnapshot": {
      "title": "Romantic Engagement & Ring Ceremony Decor - Heritage",
      "category": "Wedding & Pre-Wedding",
      "subCategory": "Engagement & Ring Ceremony",
      "selectedPackage": "Chic Minimal",
      "unitPrice": 24000
    },
    "eventDetails": {
      "eventDate": new Date("2026-10-31T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "International Convention City Bashundhara (ICCB) Hall 2",
      "venueAddress": "Kuril Bishwa Road, Next to 300 Feet, Purbachal Express, Dhaka",
      "guestCountEstimate": 127,
      "specialInstructions": "Please ensure warm ambient dimming for the couple grand entry."
    },
    "pricingBreakdown": {
      "subtotal": 24000,
      "discountAmount": 0,
      "serviceTax": 1200,
      "grandTotal": 25200,
      "paidAmount": 12600,
      "dueAmount": 12600
    },
    "status": "on_the_way",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000093"),
    "bookingCode": "BK-2026-0814-093",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006d"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000014"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000060"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800004f"),
    "serviceSnapshot": {
      "title": "Akika & Naming Ceremony Stage - Heritage",
      "category": "Baby Shower & Family Gatherings",
      "subCategory": "Akika & Naming Ceremony",
      "selectedPackage": "Blessed Classic",
      "unitPrice": 19000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-02T10:00:00.000Z"),
      "startTime": "16:00",
      "endTime": "22:00",
      "venueName": "Radisson Blu Water Garden Grand Ballroom",
      "venueAddress": "Airport Road, Dhaka Cantonment, Dhaka",
      "guestCountEstimate": 144,
      "specialInstructions": "Cold pyros must be aligned with cake cutting music cue."
    },
    "pricingBreakdown": {
      "subtotal": 19000,
      "discountAmount": 0,
      "serviceTax": 950,
      "grandTotal": 19950,
      "paidAmount": 9975,
      "dueAmount": 9975
    },
    "status": "in_progress",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a5f2c4a91b88000094"),
    "bookingCode": "BK-2026-0814-094",
    "customerId": new ObjectId("66be18a1f2c4a91b8800006e"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000014"),
    "serviceId": new ObjectId("66be18a3f2c4a91b88000061"),
    "assignedAgentId": new ObjectId("66be18a4f2c4a91b8800004d"),
    "serviceSnapshot": {
      "title": "Religious & Cultural Festival Pavilion - Heritage",
      "category": "Baby Shower & Family Gatherings",
      "subCategory": "Religious & Cultural Festivals",
      "selectedPackage": "Festive Pavilion",
      "unitPrice": 30000
    },
    "eventDetails": {
      "eventDate": new Date("2026-11-04T10:00:00.000Z"),
      "startTime": "17:30",
      "endTime": "23:30",
      "venueName": "Golf Garden Army Golf Club",
      "venueAddress": "Airport Road, Dhaka",
      "guestCountEstimate": 161,
      "specialInstructions": "Custom neon sign must be secured firmly to avoid wind shake."
    },
    "pricingBreakdown": {
      "subtotal": 30000,
      "discountAmount": 2400,
      "serviceTax": 1380,
      "grandTotal": 28980,
      "paidAmount": 8694,
      "dueAmount": 20286
    },
    "status": "accepted",
    "paymentStatus": "partially_paid",
    "cancellationReason": null,
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  }
];

module.exports = { bookingsData };

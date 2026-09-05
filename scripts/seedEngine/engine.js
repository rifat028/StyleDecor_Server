const { ObjectId } = require("mongodb");
const {
  DIVISIONS_DISTRICTS,
  ALL_DISTRICTS_FLAT,
  FIRST_NAMES_MALE,
  FIRST_NAMES_FEMALE,
  LAST_NAMES_MALE,
  LAST_NAMES_FEMALE,
  AVATARS_MALE,
  AVATARS_FEMALE,
  PROFILE_AVATARS,
  DECORATOR_BRANDS,
  CATEGORIES_DATA,
  SUBCATEGORY_MEDIA,
  SERVICE_IMAGES,
  REVIEW_COMMENTS,
} = require("./poolData");

// Generates a deterministic 24-character MongoDB ObjectId from a prefix and numeric sequence
const createObjectId = (prefixHex, index) => {
  const indexHex = index.toString(16).padStart(6, "0");
  return new ObjectId(`${prefixHex}${indexHex}`);
};

// Calculates a chronological date positioned between a start and end timestamp by a fractional ratio
const interpolateDate = (startDate, endDate, ratio) => {
  const startMs = startDate.getTime();
  const endMs = endDate.getTime();
  const currentMs = startMs + ratio * (endMs - startMs);
  return new Date(currentMs);
};

// Generates event categories and integer-indexed subcategories with standard timestamps
function generateCategories() {
  return CATEGORIES_DATA.map((cat) => ({
    ...cat,
    createdAt: new Date("2025-01-01T08:00:00.000Z"),
    updatedAt: new Date("2025-01-01T08:00:00.000Z"),
  }));
}

// Allocates decorators across divisions into distinct districts with 2-3 service area districts each
function assignDecoratorGeos(counts, categories) {
  const divisions = Object.keys(DIVISIONS_DISTRICTS);
  const decoratorGeos = [];
  let decoratorBrandIdx = 0;

  divisions.forEach((divName) => {
    const districtsInDiv = DIVISIONS_DISTRICTS[divName];
    const countInDiv = counts.decoratorPerDivision;

    for (let i = 0; i < countInDiv; i++) {
      const primaryDistrictObj = districtsInDiv[i % districtsInDiv.length];
      
      const serviceAreas = [primaryDistrictObj.district];
      for (let j = 1; j < counts.serviceAreasPerDecorator; j++) {
        const nextDist = districtsInDiv[(i + j) % districtsInDiv.length].district;
        if (!serviceAreas.includes(nextDist)) {
          serviceAreas.push(nextDist);
        }
      }

      const cat1 = categories[decoratorBrandIdx % categories.length];
      const cat2 = categories[(decoratorBrandIdx + 1) % categories.length];

      const assignedCategories = [
        {
          name: cat1.name,
          status: "active",
          order: 1,
          description: cat1.description,
          subCategories: cat1.subCategories.slice(0, 2),
        },
        {
          name: cat2.name,
          status: "active",
          order: 2,
          description: cat2.description,
          subCategories: cat2.subCategories.slice(0, 2),
        },
      ];

      const brand = DECORATOR_BRANDS[decoratorBrandIdx % DECORATOR_BRANDS.length];

      decoratorGeos.push({
        index: decoratorBrandIdx,
        division: divName,
        district: primaryDistrictObj.district,
        postalCode: primaryDistrictObj.postalCode,
        street: primaryDistrictObj.streets[0],
        serviceAreas,
        assignedCategories,
        brand,
      });

      decoratorBrandIdx++;
    }
  });

  return decoratorGeos;
}

// Generates all user entities (Admin, Decorators, Agents, Customers) across all 64 districts and months
function generateUsers(counts, auth, dates, decoratorGeos, startDate, currentDate) {
  const users = [];
  let userGlobalIdx = 1;

  // Admin user
  const adminId = createObjectId("66be18a1f2c4a91b88", userGlobalIdx++);
  users.push({
    _id: adminId,
    firebaseUid: null,
    name: "System Super Admin",
    email: auth.superAdminEmail,
    phone: "+8801700000001",
    photoUrl: AVATARS_MALE[0],
    role: "admin",
    address: {
      home: "House 1, Road 1, Dhanmondi",
      district: "Dhaka",
      division: "Dhaka",
      postalCode: "1209",
    },
    createdAt: startDate,
    updatedAt: startDate,
  });

  // Decorator users
  const decoratorUserMap = [];
  decoratorGeos.forEach((decGeo, idx) => {
    const userId = createObjectId("66be18a1f2c4a91b88", userGlobalIdx++);
    const isMale = idx % 4 !== 0; // 75% male, 25% female decorator owners
    const firstName = isMale
      ? FIRST_NAMES_MALE[idx % FIRST_NAMES_MALE.length]
      : FIRST_NAMES_FEMALE[idx % FIRST_NAMES_FEMALE.length];
    const lastName = isMale
      ? LAST_NAMES_MALE[idx % LAST_NAMES_MALE.length]
      : LAST_NAMES_FEMALE[idx % LAST_NAMES_FEMALE.length];
    const fullName = `${firstName} ${lastName}`;
    const slug = fullName.toLowerCase().replace(/\s+/g, ".");
    const email = `${slug}.dec${idx + 1}@styledecor.com`;
    const phone = `+88017${String(10000000 + idx).padStart(8, "0")}`;
    const photoUrl = isMale
      ? AVATARS_MALE[(idx + 1) % AVATARS_MALE.length]
      : AVATARS_FEMALE[(idx + 1) % AVATARS_FEMALE.length];

    const joinDate = interpolateDate(startDate, new Date(Date.UTC(2025, 11, 25)), idx / Math.max(1, decoratorGeos.length - 1));

    const userDoc = {
      _id: userId,
      firebaseUid: null,
      name: fullName,
      email,
      phone,
      photoUrl,
      role: "decorator",
      address: {
        home: decGeo.street,
        district: decGeo.district,
        division: decGeo.division,
        postalCode: decGeo.postalCode,
      },
      createdAt: joinDate,
      updatedAt: joinDate,
    };

    users.push(userDoc);
    decoratorUserMap.push({ decGeo, userDoc, joinDate });
  });

  // Agent users
  const agentUserMap = [];
  let agentCounter = 1;
  decoratorUserMap.forEach(({ decGeo, joinDate }, decIdx) => {
    for (let a = 0; a < counts.agentsPerDecorator; a++) {
      const userId = createObjectId("66be18a1f2c4a91b88", userGlobalIdx++);
      const isMale = a % 2 === 0;
      const firstName = isMale
        ? FIRST_NAMES_MALE[(agentCounter * 3) % FIRST_NAMES_MALE.length]
        : FIRST_NAMES_FEMALE[(agentCounter * 3) % FIRST_NAMES_FEMALE.length];
      let lastName = isMale
        ? LAST_NAMES_MALE[(agentCounter * 2) % LAST_NAMES_MALE.length]
        : LAST_NAMES_FEMALE[(agentCounter * 2) % LAST_NAMES_FEMALE.length];
      if (firstName.toLowerCase() === lastName.toLowerCase()) {
        lastName = isMale
          ? LAST_NAMES_MALE[(agentCounter * 2 + 1) % LAST_NAMES_MALE.length]
          : LAST_NAMES_FEMALE[(agentCounter * 2 + 1) % LAST_NAMES_FEMALE.length];
      }
      const fullName = `${firstName} ${lastName}`;
      const slug = fullName.toLowerCase().replace(/[^a-z]/g, ".");
      const email = `${slug}.agent${agentCounter}@styledecor.com`;
      const phone = `+88016${String(10000000 + agentCounter).padStart(8, "0")}`;
      const photoUrl = isMale
        ? AVATARS_MALE[(agentCounter + 2) % AVATARS_MALE.length]
        : AVATARS_FEMALE[(agentCounter + 2) % AVATARS_FEMALE.length];

      const assignedDistrict = decGeo.serviceAreas[a % decGeo.serviceAreas.length];
      const distInfo = ALL_DISTRICTS_FLAT.find((d) => d.district === assignedDistrict) || ALL_DISTRICTS_FLAT[0];

      const agentJoinDate = interpolateDate(joinDate, currentDate, (a + 1) / (counts.agentsPerDecorator + 2));

      const userDoc = {
        _id: userId,
        firebaseUid: null,
        name: fullName,
        email,
        phone,
        photoUrl,
        role: "agent",
        address: {
          home: distInfo.streets[a % distInfo.streets.length],
          district: distInfo.district,
          division: distInfo.division,
          postalCode: distInfo.postalCode,
        },
        createdAt: agentJoinDate,
        updatedAt: agentJoinDate,
      };

      users.push(userDoc);
      agentUserMap.push({
        decoratorIndex: decIdx,
        decGeo,
        userDoc,
        agentJoinDate,
        assignedDistrict,
        assignedDivision: distInfo.division,
      });

      agentCounter++;
    }
  });

  // Canonical customer profiles to preserve known credentials and accounts (e.g. user 15: Imtiaz Hossain)
  const CANONICAL_CUSTOMERS = [
    { name: "Tanvir Ahmed", email: "tanvir.ahmed.user1@gmail.com", phone: "+8801710093688" },
    { name: "Rumana Parvin", email: "rumana.parvin.user2@gmail.com", phone: "+8801810094625" },
    { name: "Kamrul Talukder", email: "kamrul.talukder.user3@gmail.com", phone: "+8801910095562" },
    { name: "Tamanna Bhuiyan", email: "tamanna.bhuiyan.user4@gmail.com", phone: "+8801310096499" },
    { name: "Kawsar Munshi", email: "kawsar.munshi.user5@gmail.com", phone: "+8801410097436" },
    { name: "Chaity Karim", email: "chaity.karim.user6@gmail.com", phone: "+8801510098373" },
    { name: "Golam Rabbani", email: "golam.rabbani.user7@gmail.com", phone: "+8801610099322" },
    { name: "Farzana Yasmin", email: "farzana.yasmin.user8@gmail.com", phone: "+8801510100259" },
    { name: "Mahmudur Rahman", email: "mahmudur.rahman.user9@gmail.com", phone: "+8801710101196" },
    { name: "Sabrina Mostafa", email: "sabrina.mostafa.user10@gmail.com", phone: "+8801810102133" },
    { name: "Towhidul Alam", email: "towhidul.alam.user11@gmail.com", phone: "+8801910103070" },
    { name: "Humaira Khatun", email: "humaira.khatun.user12@gmail.com", phone: "+8801310104007" },
    { name: "Rashedul Islam", email: "rashedul.islam.user13@gmail.com", phone: "+8801610104944" },
    { name: "Nusrat Sharmin", email: "nusrat.sharmin.user14@gmail.com", phone: "+8801510105881" },
    { name: "Imtiaz Hossain", email: "imtiaz.hossain.user15@gmail.com", phone: "+8801710106818" },
    { name: "Jannatul Ferdous", email: "jannatul.ferdous.user16@gmail.com", phone: "+8801810107755" },
    { name: "Zahidul Karim", email: "zahidul.karim.user17@gmail.com", phone: "+8801910108692" },
    { name: "Afsana Mimi", email: "afsana.mimi.user18@gmail.com", phone: "+8801310109629" },
    { name: "Kazi Nazrul", email: "kazi.nazrul.user19@gmail.com", phone: "+8801610110566" },
    { name: "Sumaiya Akter", email: "sumaiya.akter.user20@gmail.com", phone: "+8801510111503" },
  ];

  // Customer users (1 in every single one of the 64 districts)
  const customerUserList = [];
  let custIdx = 1;
  ALL_DISTRICTS_FLAT.forEach((distObj, idx) => {
    const userId = createObjectId("66be18a1f2c4a91b88", userGlobalIdx++);
    const isMale = idx % 2 === 0;

    let fullName, email, phone;
    if (custIdx <= CANONICAL_CUSTOMERS.length) {
      const canonical = CANONICAL_CUSTOMERS[custIdx - 1];
      fullName = canonical.name;
      email = canonical.email;
      phone = canonical.phone;
    } else {
      const firstName = isMale
        ? FIRST_NAMES_MALE[(idx * 7) % FIRST_NAMES_MALE.length]
        : FIRST_NAMES_FEMALE[(idx * 7) % FIRST_NAMES_FEMALE.length];
      let lastName = isMale
        ? LAST_NAMES_MALE[(idx * 5) % LAST_NAMES_MALE.length]
        : LAST_NAMES_FEMALE[(idx * 5) % LAST_NAMES_FEMALE.length];
      if (firstName.toLowerCase() === lastName.toLowerCase()) {
        lastName = isMale
          ? LAST_NAMES_MALE[(idx * 5 + 1) % LAST_NAMES_MALE.length]
          : LAST_NAMES_FEMALE[(idx * 5 + 1) % LAST_NAMES_FEMALE.length];
      }
      fullName = `${firstName} ${lastName}`;
      const slug = fullName.toLowerCase().replace(/[^a-z]/g, ".");
      email = `${slug}.user${custIdx}@gmail.com`;
      phone = `+88018${String(10000000 + custIdx).padStart(8, "0")}`;
    }

    const photoUrl = isMale
      ? AVATARS_MALE[(idx + 4) % AVATARS_MALE.length]
      : AVATARS_FEMALE[(idx + 4) % AVATARS_FEMALE.length];

    const custJoinDate = interpolateDate(startDate, currentDate, idx / Math.max(1, ALL_DISTRICTS_FLAT.length - 1));

    const userDoc = {
      _id: userId,
      firebaseUid: null,
      name: fullName,
      email,
      phone,
      photoUrl,
      role: "customer",
      address: {
        home: distObj.streets[0],
        district: distObj.district,
        division: distObj.division,
        postalCode: distObj.postalCode,
      },
      createdAt: custJoinDate,
      updatedAt: custJoinDate,
    };

    users.push(userDoc);
    customerUserList.push(userDoc);
    custIdx++;
  });

  return { users, decoratorUserMap, agentUserMap, customerUserList };
}

// Builds decorator business profiles and contact information linked to decorator user accounts
function generateDecorators(decoratorUserMap) {
  return decoratorUserMap.map(({ decGeo, userDoc, joinDate }, idx) => {
    const decoratorId = createObjectId("66be18a2f2c4a91b88", idx + 1);
    const slug = decGeo.brand.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    const email = `contact@${slug.replace(/-/g, "")}.com`;

    return {
      _id: decoratorId,
      userId: userDoc._id,
      businessName: decGeo.brand.name,
      tagline: decGeo.brand.tagline,
      about: decGeo.brand.about,
      logo: `https://placehold.co/400x400/4F46E5/FFFFFF?text=${encodeURIComponent(decGeo.brand.name.slice(0, 10))}`,
      coverImage: `https://placehold.co/1200x600/1E293B/FFFFFF?text=${encodeURIComponent(decGeo.brand.name)}`,
      contactInfo: {
        phone: userDoc.phone,
        email,
        website: `https://${slug}.com`,
        address: decGeo.street,
        district: decGeo.district,
        division: decGeo.division,
      },
      serviceAreas: decGeo.serviceAreas,
      categories: decGeo.assignedCategories,
      metrics: {
        rating: Number((4.6 + ((idx * 7) % 5) * 0.1).toFixed(1)),
        reviewCount: 15 + ((idx * 11) % 85),
        completedEvents: 20 + ((idx * 13) % 120),
        responseRate: 98,
        responseTimeHours: 1.2,
      },
      verification: {
        isVerified: true,
        tradeLicenseNo: `TRD-${decGeo.district.toUpperCase().slice(0, 3)}-${1000 + idx}`,
        nidVerified: true,
        verifiedAt: joinDate,
      },
      socialLinks: {
        facebook: `https://facebook.com/${slug}`,
        instagram: `https://instagram.com/${slug}`,
      },
      status: "active",
      featured: idx < 8,
      createdAt: joinDate,
      updatedAt: joinDate,
    };
  });
}

// Constructs field agents assigned to decorator service districts with ratings and operational status
function generateAgents(agentUserMap, decorators, activePercentage) {
  const specializations = [
    "Stage Architecture & Floral Setup",
    "Lighting FX & Audio Engineering",
    "Balloon Sculpting & Milestone Themes",
    "Traditional Folk & Earthen Decor",
    "VIP Hospitality & Floor Logistics",
    "Bridal Entryway & Photobooth Styling",
  ];

  return agentUserMap.map(({ decoratorIndex, userDoc, agentJoinDate, assignedDistrict, assignedDivision }, idx) => {
    const agentId = createObjectId("66be18a4f2c4a91b88", idx + 1);
    const parentDecorator = decorators[decoratorIndex];

    // Status: available (60%), assigned (30%), suspended (10%)
    let status;
    const mod = idx % 10;
    if (mod === 0) {
      status = "suspended";
    } else if (mod <= 3) {
      status = "assigned";
    } else {
      status = "available";
    }

    return {
      _id: agentId,
      userId: userDoc._id,
      decoratorId: parentDecorator._id,
      name: userDoc.name,
      email: userDoc.email,
      phone: userDoc.phone,
      photoUrl: userDoc.photoUrl,
      specialization: specializations[idx % specializations.length],
      experienceYears: 1 + (idx % 8),
      assignedArea: {
        division: assignedDivision || "Dhaka",
        district: assignedDistrict,
        zones: ["Sector 1", "Main Town", "Commercial Zone"],
      },
      metrics: {
        rating: +(4.2 + (idx % 8) * 0.1).toFixed(1),
        completedEvents: 15 + (idx % 40),
        activeAssignedBookings: status === "assigned" ? 1 : 0,
      },
      status,
      createdAt: agentJoinDate,
      updatedAt: agentJoinDate,
    };
  });
}

// Generates service listings and package pricing for every subcategory under each decorator
function generateServices(decorators, defaultDepositPercent) {
  const services = [];
  let serviceCounter = 1;

  decorators.forEach((decorator) => {
    decorator.categories.forEach((cat) => {
      cat.subCategories.forEach((subCat) => {
        const serviceId = createObjectId("66be18a3f2c4a91b88", serviceCounter);
        const title = `${subCat.name} Setup - ${decorator.businessName.split(" ")[0]}`;

        const basePrice = 25000 + (serviceCounter % 10) * 4000;
        const discountPrice = basePrice - 3000;

        const media = SUBCATEGORY_MEDIA[subCat.name] || {
            primary: SERVICE_IMAGES[serviceCounter % SERVICE_IMAGES.length],
            gallery: [
              SERVICE_IMAGES[(serviceCounter + 1) % SERVICE_IMAGES.length],
              SERVICE_IMAGES[(serviceCounter + 2) % SERVICE_IMAGES.length],
            ],
          };

        const serviceDoc = {
          _id: serviceId,
          decoratorId: decorator._id,
          title,
          category: cat.name,
          subCategory: {
            id: subCat.id,
            name: subCat.name,
          },
          shortDescription: `Customized high-quality ${subCat.name.toLowerCase()} tailored for premier venues.`,
          fullDescription: `Transform your event with our premium ${subCat.name.toLowerCase()} design. Includes complete structural backdrop framing, signature lighting, elegant furniture, and complete on-site execution.`,
          pricing: {
            basePrice,
            discountedPrice: discountPrice,
            unit: "per_event",
            depositRequiredPercent: defaultDepositPercent,
          },
          packages: [
            {
              tier: "Standard",
              price: discountPrice,
              features: ["Standard Backdrop Framing", "Ambient LED Spotlights", "Floral Accents", "Setup & Teardown"],
            },
            {
              tier: "Premium Luxe",
              price: discountPrice + 18000,
              features: ["Extended Structural Framing", "Imported Fresh Flower Cascades", "Intelligent Stage Lighting", "VIP Seating Arrangements"],
            },
          ],
          primaryImage: media.primary,
          images: media.gallery,
          coverImage: media.primary,
          specifications: {
            setupDurationHours: 6,
            teardownDurationHours: 2,
            minimumNoticeDays: 4,
            spaceRequirement: "Minimum 18ft width, 10ft depth",
            isOutdoorSuitable: true,
          },
          inclusions: [
            "Complete structural framing & custom design installation",
            "Stage lighting, wiring, and ambient fixtures",
            "Delivery, on-site setup, and post-event teardown",
          ],
          exclusions: [
            "Venue generator power fuel (if required)",
            "Additional sound system (available as add-on)",
          ],
          metrics: {
            rating: +(4.4 + (serviceCounter % 6) * 0.1).toFixed(1),
            reviewCount: 15 + (serviceCounter % 25),
            bookingCount: 30 + (serviceCounter % 30),
          },
          status: "active",
          featured: serviceCounter % 4 === 0,
          createdAt: decorator.createdAt,
          updatedAt: decorator.createdAt,
        };

        services.push(serviceDoc);
        serviceCounter++;
      });
    });
  });

  return services;
}

// Generates chronological bookings, matching payments, and verified customer reviews
function generateBookingsPaymentsAndReviews(decorators, services, agents, customerUserList, counts, financials, currentDate, adminId) {
  const bookings = [];
  const payments = [];
  const reviews = [];

  const paymentMethods = ["bkash", "nagad", "sslcommerz", "stripe", "bank_transfer"];

  let bookingCounter = 1;
  let paymentCounter = 1;
  let reviewCounter = 1;

  decorators.forEach((decorator) => {
    const decoratorServices = services.filter((s) => s.decoratorId.equals(decorator._id));
    const decoratorAgents = agents.filter((a) => a.decoratorId.equals(decorator._id));

    const totalBookings = counts.bookingsPerDecorator;
    const upcomingCount = counts.upcomingBookingsPerDecorator;
    const cancelledCount = counts.cancelledBookingsPerDecorator;
    const completedCount = totalBookings - upcomingCount - cancelledCount;

    let decoratorPlatformFeeCount = 0;
    const decoratorAgentFeeCounts = {};

    for (let b = 0; b < totalBookings; b++) {
      const bookingId = createObjectId("66be18a5f2c4a91b88", bookingCounter);
      const service = decoratorServices[b % decoratorServices.length];
      const customer = customerUserList[(bookingCounter - 1) % customerUserList.length];
      const assignedAgent = decoratorAgents.length > 0 ? decoratorAgents[b % decoratorAgents.length] : null;

      let status = "completed";
      let paymentStatus = "full_paid";
      let eventDate;
      let isCancelled = false;

      if (b < upcomingCount) {
        const dayOffset = 2 + b * 5;
        eventDate = new Date(currentDate.getTime() + dayOffset * 24 * 60 * 60 * 1000);
        const activeStatuses = ["preparing", "out_for_destination", "in_progress"];
        status = activeStatuses[b % activeStatuses.length];
        paymentStatus = b === 0 ? "advance_paid" : "partially_paid";
      } else if (b < upcomingCount + cancelledCount) {
        const dayOffset = 15 + b * 20;
        eventDate = new Date(currentDate.getTime() - dayOffset * 24 * 60 * 60 * 1000);
        status = "cancelled";
        paymentStatus = "cancelled";
        isCancelled = true;
      } else {
        const pastRatio = (b - upcomingCount - cancelledCount) / Math.max(1, completedCount);
        eventDate = interpolateDate(decorator.createdAt, new Date(currentDate.getTime() - 3 * 24 * 60 * 60 * 1000), pastRatio);
        status = "completed";
        paymentStatus = "full_paid";
      }

      const advanceDays = 3 + (b % 7);
      const bookingCreatedAt = new Date(eventDate.getTime() - advanceDays * 24 * 60 * 60 * 1000);

      const unitPrice = service.pricing.discountedPrice || service.pricing.basePrice;
      const discountAmount = Math.round(unitPrice * 0.05);
      const serviceTax = Math.round(unitPrice * 0.046);
      const grandTotal = unitPrice - discountAmount + serviceTax;
      const depositAmount = Math.round((grandTotal * financials.defaultDepositPercent) / 100);

      const isAdvanceOnly = status === "advance_paid" || status === "draft";
      const actualAssignedAgentId = isAdvanceOnly ? null : (assignedAgent ? assignedAgent._id : null);

      const paidAmount = paymentStatus === "full_paid" ? grandTotal : (paymentStatus === "advance_paid" || paymentStatus === "partially_paid" ? depositAmount : 0);
      const dueAmount = grandTotal - paidAmount;

      const dateStr = bookingCreatedAt.toISOString().slice(0, 10).replace(/-/g, "");
      const bookingCode = `BK-${dateStr}-${String(bookingCounter).padStart(4, "0")}`;

      const statusTimeline = [
        {
          status: "draft",
          achievedAt: bookingCreatedAt,
          note: "Booking initiated by customer",
        },
        {
          status: "advance_paid",
          achievedAt: new Date(bookingCreatedAt.getTime() + 15 * 60 * 1000),
          note: `Advance payment of ${depositAmount.toLocaleString()} BDT received successfully`,
        },
      ];

      if (status === "preparing" || status === "out_for_destination" || status === "in_progress" || status === "completed") {
        statusTimeline.push({
          status: "preparing",
          achievedAt: new Date(eventDate.getTime() - 24 * 60 * 60 * 1000),
          note: "Decor materials packed and assigned to field agent",
        });
      }
      if (status === "out_for_destination" || status === "in_progress" || status === "completed") {
        statusTimeline.push({
          status: "out_for_destination",
          achievedAt: new Date(eventDate.getTime() - 4 * 60 * 60 * 1000),
          note: "Team dispatched towards venue destination",
        });
      }
      if (status === "in_progress" || status === "completed") {
        statusTimeline.push({
          status: "in_progress",
          achievedAt: new Date(eventDate.getTime() - 2 * 60 * 60 * 1000),
          note: "On-site setup and installation started at venue",
        });
      }
      if (status === "completed") {
        statusTimeline.push({
          status: "completed",
          achievedAt: new Date(eventDate.getTime() + 6 * 60 * 60 * 1000),
          note: "Event concluded, inspection approved and full payment settled",
        });
      }
      if (isCancelled) {
        statusTimeline.push({
          status: "cancelled",
          achievedAt: new Date(bookingCreatedAt.getTime() + 24 * 60 * 60 * 1000),
          note: "Booking cancelled as requested by customer",
        });
      }

      // Settlement tracking field
      const platformFeeAmount = Math.round(grandTotal * 0.10);
      const agentFeeAmount = 2000;
      const settlementStatus = {
        platformFee: {
          isPaid: false,
          amount: platformFeeAmount,
          paymentId: null,
          paidAt: null,
        },
        agentFee: {
          isPaid: false,
          amount: agentFeeAmount,
          paymentId: null,
          paidAt: null,
        },
      };

      const bookingDoc = {
        _id: bookingId,
        bookingCode,
        customerId: customer._id,
        clientName: customer.name,
        customerName: customer.name,
        clientEmail: customer.email,
        customerEmail: customer.email,
        userEmail: customer.email,
        contact: customer.phone,
        phone: customer.phone,
        decoratorId: decorator._id,
        serviceId: service._id,
        assignedAgentId: actualAssignedAgentId,
        serviceSnapshot: {
          title: service.title,
          category: service.category,
          subCategory: service.subCategory.name,
          selectedPackage: service.packages[0].tier,
          unitPrice,
        },
        eventDetails: {
          eventDate,
          startTime: "16:00",
          endTime: "23:00",
          venueName: `${decorator.contactInfo.district} Grand Convention Centre`,
          venueAddress: `${customer.address.home}, ${customer.address.district}`,
          guestCountEstimate: 120 + (b % 150),
          specialInstructions: "Ensure stage spotlighting matches floral palette.",
        },
        pricingBreakdown: {
          subtotal: unitPrice,
          discountAmount,
          serviceTax,
          grandTotal,
          paidAmount,
          dueAmount,
        },
        totalCost: grandTotal,
        bookingDate: eventDate,
        settlementStatus,
        statusTimeline,
        status,
        paymentStatus,
        cancellationReason: isCancelled ? "Client rescheduled personal event dates" : null,
        createdAt: bookingCreatedAt,
        updatedAt: bookingCreatedAt,
      };

      bookings.push(bookingDoc);

      // 1. Customer Payment (advance_payment or full_payment)
      if (paidAmount > 0) {
        const paymentId = createObjectId("66be18a6f2c4a91b88", paymentCounter++);
        const paymentType = paymentStatus === "full_paid" ? "full_payment" : "advance_payment";
        const paidAt = new Date(bookingCreatedAt.getTime() + 15 * 60 * 1000);
        const createdAt = new Date(bookingCreatedAt.getTime() + 10 * 60 * 1000);

        payments.push({
          _id: paymentId,
          paymentCode: `PAY-${dateStr}-${String(paymentCounter).padStart(4, "0")}`,
          bookingId: bookingDoc._id,
          bookingCode: bookingDoc.bookingCode,
          customerId: customer._id,
          decoratorId: decorator._id,
          clientEmail: customer.email,
          customerEmail: customer.email,
          serviceName: service.title,
          status: "completed",
          paymentType,
          sender: {
            role: "customer",
            userId: customer._id,
            name: customer.name,
            email: customer.email,
          },
          receiver: {
            role: "decorator",
            decoratorId: decorator._id,
            agencyName: decorator.businessName,
          },
          amount: paidAmount,
          currency: "BDT",
          paymentMethod: paymentMethods[paymentCounter % paymentMethods.length],
          breakdown: {
            baseAmount: paidAmount,
            gatewayFee: Math.round(paidAmount * 0.015),
            platformCommission: Math.round(paidAmount * 0.10),
            vendorReceivable: Math.round(paidAmount * 0.885),
          },
          gatewayDetails: {
            gateway: paymentMethods[paymentCounter % paymentMethods.length].toUpperCase(),
            transactionId: `TRX-${dateStr}-${String(paymentCounter).padStart(4, "0")}`,
            gatewayResponseCode: "0000",
            valId: `VAL-${dateStr}-${String(paymentCounter).padStart(4, "0")}`,
          },
          paidAt,
          createdAt,
        });
      }

      // 2. Platform Fee Settlement (Decorator -> Admin)
      // At least 3 platform_fee data per decorator (we settle 5 per decorator)
      if (status === "completed" && decoratorPlatformFeeCount < 5) {
        decoratorPlatformFeeCount++;
        const platformPaymentId = createObjectId("66be18a6f2c4a91b88", paymentCounter++);
        const platformPaidAt = new Date(eventDate.getTime() + 24 * 60 * 60 * 1000);
        const platformCreatedAt = new Date(eventDate.getTime() + 23 * 60 * 60 * 1000);

        bookingDoc.settlementStatus.platformFee = {
          isPaid: true,
          amount: platformFeeAmount,
          paymentId: platformPaymentId,
          paidAt: platformPaidAt,
        };

        payments.push({
          _id: platformPaymentId,
          paymentCode: `PAY-${dateStr}-${String(paymentCounter).padStart(4, "0")}`,
          bookingId: bookingDoc._id,
          bookingCode: bookingDoc.bookingCode,
          decoratorId: decorator._id,
          status: "completed",
          paymentType: "platform_fee",
          sender: {
            role: "decorator",
            decoratorId: decorator._id,
            agencyName: decorator.businessName,
          },
          receiver: {
            role: "admin",
            userId: adminId,
          },
          amount: platformFeeAmount,
          currency: "BDT",
          paymentMethod: paymentMethods[paymentCounter % paymentMethods.length],
          breakdown: {
            baseAmount: platformFeeAmount,
            gatewayFee: 0,
            platformCommission: platformFeeAmount,
            vendorReceivable: 0,
          },
          gatewayDetails: {
            gateway: "BANK_TRANSFER",
            transactionId: `TRX-${dateStr}-${String(paymentCounter).padStart(4, "0")}`,
            gatewayResponseCode: "0000",
            valId: `VAL-${dateStr}-${String(paymentCounter).padStart(4, "0")}`,
          },
          paidAt: platformPaidAt,
          createdAt: platformCreatedAt,
        });
      }

      // 3. Agent Fee Settlement (Decorator -> Agent)
      // Each agent is associated with at least 2 payment data with type agent_fee
      if (status === "completed" && actualAssignedAgentId) {
        const agentIdStr = actualAssignedAgentId.toString();
        const currentCount = decoratorAgentFeeCounts[agentIdStr] || 0;
        if (currentCount < 2) {
          decoratorAgentFeeCounts[agentIdStr] = currentCount + 1;
          const agentPaymentId = createObjectId("66be18a6f2c4a91b88", paymentCounter++);
          const agentPaidAt = new Date(eventDate.getTime() + 36 * 60 * 60 * 1000);
          const agentCreatedAt = new Date(eventDate.getTime() + 35 * 60 * 60 * 1000);

          bookingDoc.settlementStatus.agentFee = {
            isPaid: true,
            amount: agentFeeAmount,
            paymentId: agentPaymentId,
            paidAt: agentPaidAt,
          };

          payments.push({
            _id: agentPaymentId,
            paymentCode: `PAY-${dateStr}-${String(paymentCounter).padStart(4, "0")}`,
            bookingId: bookingDoc._id,
            bookingCode: bookingDoc.bookingCode,
            decoratorId: decorator._id,
            agentId: actualAssignedAgentId,
            status: "completed",
            paymentType: "agent_fee",
            sender: {
              role: "decorator",
              decoratorId: decorator._id,
              agencyName: decorator.businessName,
            },
            receiver: {
              role: "agent",
              agentId: actualAssignedAgentId,
            },
            amount: agentFeeAmount,
            currency: "BDT",
            paymentMethod: paymentMethods[paymentCounter % paymentMethods.length],
            breakdown: {
              baseAmount: agentFeeAmount,
              gatewayFee: 0,
              platformCommission: 0,
              vendorReceivable: agentFeeAmount,
            },
            gatewayDetails: {
              gateway: "BANK_TRANSFER",
              transactionId: `TRX-${dateStr}-${String(paymentCounter).padStart(4, "0")}`,
              gatewayResponseCode: "0000",
              valId: `VAL-${dateStr}-${String(paymentCounter).padStart(4, "0")}`,
            },
            paidAt: agentPaidAt,
            createdAt: agentCreatedAt,
          });
        }
      }

      if (status === "completed" && actualAssignedAgentId) {
        const reviewId = createObjectId("66be18a7f2c4a91b88", reviewCounter++);
        const comment = REVIEW_COMMENTS[reviewCounter % REVIEW_COMMENTS.length];
        const reviewDate = new Date(eventDate.getTime() + 12 * 60 * 60 * 1000);

        const reviewStatus = reviewCounter % 15 === 0 ? "hidden" : "published";
        const isFeatured = reviewCounter % 6 === 0;

        reviews.push({
          _id: reviewId,
          bookingId: bookingDoc._id,
          customerId: customer._id,
          customerName: customer.name,
          customerEmail: customer.email,
          customerPhotoUrl: customer.photoUrl,
          decoratorId: decorator._id,
          decoratorName: decorator.businessName || decorator.name || "StyleDecor Agency",
          serviceId: service._id,
          serviceTitle: service.title || "Event Decoration",
          agentId: assignedAgent._id,
          agentName: assignedAgent.name,
          rating: 4 + (reviewCounter % 2),
          comment,
          images: [],
          vendorReply: reviewCounter % 3 === 0 ? {
            reply: "Thank you for trusting StyleDecor! It was an absolute pleasure creating this stage for you.",
            repliedAt: new Date(reviewDate.getTime() + 4 * 60 * 60 * 1000),
          } : null,
          isVerifiedBooking: true,
          status: reviewStatus,
          featured: isFeatured,
          createdAt: reviewDate,
          updatedAt: reviewDate,
        });
      }

      bookingCounter++;
    }
  });

  return { bookings, payments, reviews };
}

// Coordinates the master seed generation pipeline and returns all 8 relational collections
function generateAllSeedData(config) {
  const { counts, financials, dates, auth } = config;

  const startDate = new Date(Date.UTC(dates.startYear, dates.startMonth, 1, 8, 0, 0));
  const currentDate = new Date(dates.currentDate);

  const categories = generateCategories();
  const decoratorGeos = assignDecoratorGeos(counts, categories);
  const { users, decoratorUserMap, agentUserMap, customerUserList } = generateUsers(counts, auth, dates, decoratorGeos, startDate, currentDate);
  const adminUser = users.find((u) => u.role === "admin");
  const adminId = adminUser ? adminUser._id : createObjectId("66be18a1f2c4a91b88", 1);
  const decorators = generateDecorators(decoratorUserMap);
  const agents = generateAgents(agentUserMap, decorators, counts.activeAgentPercentage);
  const services = generateServices(decorators, financials.defaultDepositPercent);
  const { bookings, payments, reviews } = generateBookingsPaymentsAndReviews(
    decorators,
    services,
    agents,
    customerUserList,
    counts,
    financials,
    currentDate,
    adminId
  );

  return {
    categories,
    users,
    decorators,
    agents,
    services,
    bookings,
    payments,
    reviews,
  };
}

module.exports = { generateAllSeedData };

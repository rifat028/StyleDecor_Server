const { ObjectId } = require('mongodb');

const servicesData = [
  {
    _id: new ObjectId("66be18a3f2c4a91b88000001"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    title: "Royal Wedding Reception Stage Setup - DreamCraft",
    slug: "royal-wedding-reception-stage-setup-dreamcraft-1",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_01",
      name: "Wedding & Reception Stage",
      slug: "wedding-reception-stage"
    },
    shortDescription: "Luxurious fresh floral stage setup with ambient warm spotlighting and customized couple seating.",
    fullDescription: "Transform your wedding reception into a fairytale with our signature floral stage. Includes complete structural backdrop framing, premium real orchid & rose combinations, fairy canopy lighting, and royal seating arrangement.",
    pricing: {
      basePrice: 45000,
      discountedPrice: 40000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Standard Floral",
        price: 40000,
        features: ["16ft x 10ft Stage Backdrop","Artificial & Seasonal Flower Mix","Warm Ambience LED Spotlights","Classic Couple Sofa"]
      },
      {
        tier: "Premium Royal",
        price: 65000,
        features: ["24ft x 12ft Grand Stage Backdrop","100% Fresh Imported Floral Cascades","Intelligent Moving Head Stage Lights","Royal Velvet Throne Chairs","Bride & Groom Entry Pathway Runner"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 6,
      teardownDurationHours: 2,
      minimumNoticeDays: 4,
      spaceRequirement: "Minimum 20ft width, 12ft depth",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 18,
      bookingCount: 30
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000002"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    title: "Vibrant Gaye Holud & Mehendi Canopy - DreamCraft",
    slug: "vibrant-gaye-holud-mehendi-canopy-dreamcraft-2",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_02",
      name: "Haldi & Mehendi Setup",
      slug: "haldi-mehendi-setup"
    },
    shortDescription: "Traditional Bengali marigold decor with wooden swings, rickshaw art accents, and vibrant drapes.",
    fullDescription: "An authentic festive atmosphere for your Gaye Holud and Mehendi night. Features vibrant yellow & orange drape cascades, clay pottery props, traditional kulo decor, and cozy floor seating cushions.",
    pricing: {
      basePrice: 32000,
      discountedPrice: 28000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Festive Basic",
        price: 28000,
        features: ["14ft Backdrop with Fresh Genda Flowers","Traditional Decorated Wooden Swing","4 Side Floor Seating Mattresses","Warm Fairy Lights"]
      },
      {
        tier: "Grand Holud Extravaganza",
        price: 45000,
        features: ["20ft 3D Floral Canopy","Authentic Hand-Painted Rickshaw Props","Custom Neon 'Gaye Holud' Sign","Mehendi Lounge Setup with Low Tables"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Minimum 15ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 21,
      bookingCount: 35
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000003"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    title: "Bride & Groom Grand Entry Pathway - DreamCraft",
    slug: "bride-groom-grand-entry-pathway-dreamcraft-3",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_03",
      name: "Bride & Groom Grand Entry",
      slug: "bride-groom-grand-entry"
    },
    shortDescription: "Magical entry aisle with floral arches, cold pyro fireworks, and romantic fog walkway.",
    fullDescription: "Make a show-stopping entrance on your special day. Includes continuous floral arches, red or white aisle carpet, automated cold spark machines for entry moments, and dense dry ice smoke clouds.",
    pricing: {
      basePrice: 25000,
      discountedPrice: 22000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Classic Aisle",
        price: 22000,
        features: ["40ft Velvet Red Carpet","6 Floral Pillar Stands","Warm Ambient Spotlights"]
      },
      {
        tier: "Cinematic Fireworks Entry",
        price: 38000,
        features: ["60ft Premium White Carpet","10 Floral Archways with Crystal Hangings","4x Cold Pyro Firework Firing","Heavy Dry Ice Cloud Machine"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Aisle length at least 30ft",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 24,
      bookingCount: 40
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000004"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    title: "Custom Neon Signs & Marquee Letter Rental - DreamCraft",
    slug: "custom-neon-signs-marquee-letter-rental-dreamcraft-4",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_20",
      name: "Custom Neon Signs & Marquee Letters",
      slug: "custom-neon-signs-marquee-letters"
    },
    shortDescription: "Vibrant neon flex signage on acrylic backing and 4ft illuminated vintage marquee letters.",
    fullDescription: "Make your event Instagrammable with bespoke glowing text. Choose from our popular catalog ('Better Together', 'Happily Ever After', 'Crazy In Love') or order custom text with giant lightbulb marquee letters.",
    pricing: {
      basePrice: 10000,
      discountedPrice: 8500,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Neon Sign Rental",
        price: 8500,
        features: ["Choice of 1 Stock Neon Sign (up to 3ft)","Clear Acrylic Hanging Chain & Stand","Dimmer Controller & Long Power Cable"]
      },
      {
        tier: "Giant Marquee + Neon Combo",
        price: 18000,
        features: ["4ft Light-Up Marquee Letters (up to 4 chars e.g. LOVE)","1 Custom or Stock Neon Flex Sign","Faux Greenery Backdrop Wall (8ft x 8ft)"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 1.5,
      teardownDurationHours: 0.5,
      minimumNoticeDays: 1,
      spaceRequirement: "Wall or stand space 8ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 27,
      bookingCount: 45
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000005"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    title: "Special Effects - Cold Pyro & Dry Ice Low Fog - DreamCraft",
    slug: "special-effects-cold-pyro-dry-ice-low-fog-dreamcraft-5",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_22",
      name: "Special Effects (Fog, Smoke & Pyro)",
      slug: "special-effects-fog-smoke-pyro"
    },
    shortDescription: "Non-hazardous indoor cold spark fountains and cloud-like heavy dry ice smoke for stage entries.",
    fullDescription: "Create breathless cinematic moments during bridal entries, first dances, or cake cutting. Our special effects use safe, non-smoky cold pyros (safe for indoor ballroom carpets) and heavy floor-hugging dry ice fog.",
    pricing: {
      basePrice: 18000,
      discountedPrice: 15000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Entry FX Pack",
        price: 15000,
        features: ["4x Cold Pyro Sparkular Machines (2 Firings)","1x Heavy Dry Ice Low Fog Machine","Certified Special FX Operator"]
      },
      {
        tier: "Grand Stage FX Spectacular",
        price: 28000,
        features: ["8x Cold Spark Machines (4 Continuous Blasts)","2x High-Output Dry Ice Machines for Dance Floor","CO2 Jet Blaster Guns (2 Units)","Full Event Coordination with DJ/Band"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 2,
      teardownDurationHours: 1,
      minimumNoticeDays: 1,
      spaceRequirement: "Stage front & aisle",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 30,
      bookingCount: 50
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000006"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    title: "Royal Wedding Reception Stage Setup - Royal",
    slug: "royal-wedding-reception-stage-setup-royal-6",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_01",
      name: "Wedding & Reception Stage",
      slug: "wedding-reception-stage"
    },
    shortDescription: "Luxurious fresh floral stage setup with ambient warm spotlighting and customized couple seating.",
    fullDescription: "Transform your wedding reception into a fairytale with our signature floral stage. Includes complete structural backdrop framing, premium real orchid & rose combinations, fairy canopy lighting, and royal seating arrangement.",
    pricing: {
      basePrice: 45000,
      discountedPrice: 40000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Standard Floral",
        price: 40000,
        features: ["16ft x 10ft Stage Backdrop","Artificial & Seasonal Flower Mix","Warm Ambience LED Spotlights","Classic Couple Sofa"]
      },
      {
        tier: "Premium Royal",
        price: 65000,
        features: ["24ft x 12ft Grand Stage Backdrop","100% Fresh Imported Floral Cascades","Intelligent Moving Head Stage Lights","Royal Velvet Throne Chairs","Bride & Groom Entry Pathway Runner"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 6,
      teardownDurationHours: 2,
      minimumNoticeDays: 4,
      spaceRequirement: "Minimum 20ft width, 12ft depth",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 33,
      bookingCount: 55
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000007"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    title: "Bride & Groom Grand Entry Pathway - Royal",
    slug: "bride-groom-grand-entry-pathway-royal-7",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_03",
      name: "Bride & Groom Grand Entry",
      slug: "bride-groom-grand-entry"
    },
    shortDescription: "Magical entry aisle with floral arches, cold pyro fireworks, and romantic fog walkway.",
    fullDescription: "Make a show-stopping entrance on your special day. Includes continuous floral arches, red or white aisle carpet, automated cold spark machines for entry moments, and dense dry ice smoke clouds.",
    pricing: {
      basePrice: 25000,
      discountedPrice: 22000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Classic Aisle",
        price: 22000,
        features: ["40ft Velvet Red Carpet","6 Floral Pillar Stands","Warm Ambient Spotlights"]
      },
      {
        tier: "Cinematic Fireworks Entry",
        price: 38000,
        features: ["60ft Premium White Carpet","10 Floral Archways with Crystal Hangings","4x Cold Pyro Firework Firing","Heavy Dry Ice Cloud Machine"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Aisle length at least 30ft",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 36,
      bookingCount: 60
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000008"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    title: "Romantic Engagement & Ring Ceremony Decor - Royal",
    slug: "romantic-engagement-ring-ceremony-decor-royal-8",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_04",
      name: "Engagement & Ring Ceremony",
      slug: "engagement-ring-ceremony"
    },
    shortDescription: "Elegant geometric floral ring backdrop with romantic neon signage and acrylic pedestals.",
    fullDescription: "Celebrate the beginning of forever with an intimate, chic engagement setup. Featuring customized metallic circular arches, delicate pastel florals, mirror pedestals for ring exchange, and candle stands.",
    pricing: {
      basePrice: 28000,
      discountedPrice: 24000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Chic Minimal",
        price: 24000,
        features: ["7ft Circular Metallic Ring Arch","Pastel Artificial Florals","Custom 'Better Together' Neon Sign","Dual Acrylic Ring Pedestals"]
      },
      {
        tier: "Luxe Botanical Ring",
        price: 38000,
        features: ["8ft Double Ring Geometric Arch","100% Fresh Hydrangea & Rose Wrap","Warm Edison Bulb Chandelier","Velvet Couple Seating with Rug"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 12ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 39,
      bookingCount: 65
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000009"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    title: "Gala & Annual Award Night Stage Setup - Royal",
    slug: "gala-annual-award-night-stage-setup-royal-9",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_10",
      name: "Gala & Annual Award Nights",
      slug: "gala-annual-award-nights"
    },
    shortDescription: "Glamorous red carpet step-and-repeat media wall with golden stanchions, spotlighting, and trophy display.",
    fullDescription: "Create an unforgettable celebratory awards evening. High-impact black and gold stage aesthetics, branded media photo wall with velvet rope stanchions, custom trophy display plinths, and dynamic spotlighting.",
    pricing: {
      basePrice: 42000,
      discountedPrice: 37000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Red Carpet Gala",
        price: 37000,
        features: ["24ft Award Stage Backdrop","10ft Step-and-Repeat Media Wall","30ft Red Carpet with Golden Stanchions","Trophy Plinth Display"]
      },
      {
        tier: "VIP Star Night",
        price: 68000,
        features: ["36ft Multi-Tier Stage Backdrop with LED Trim","Intelligent Moving Head Lighting FX","Custom Neon Brand Logo & Trophy Stage","Full Hall Red Carpet Walkway & Photo Booth"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 6,
      teardownDurationHours: 2.5,
      minimumNoticeDays: 4,
      spaceRequirement: "Grand Ballroom or Hall",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 42,
      bookingCount: 70
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800000a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    title: "Corporate Dinner & Executive Meetup Decor - Royal",
    slug: "corporate-dinner-executive-meetup-decor-royal-10",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_12",
      name: "Corporate Dinners & Meetups",
      slug: "corporate-dinners-meetups"
    },
    shortDescription: "Refined banquet table decor with branded floral centerpieces, warm uplighting, and acoustic stage.",
    fullDescription: "Elevate your corporate dinner and networking night with tasteful luxury. Sophisticated table runners, modern metallic floral arrangements, branded place settings, and subtle perimeter LED uplighting.",
    pricing: {
      basePrice: 30000,
      discountedPrice: 26000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Banquet Elegant",
        price: 26000,
        features: ["10 Decorated Round Dinner Tables","Fresh Floral Low Centerpieces","Perimeter Warm Wall Uplighting (8 Units)","Welcome Entry Signboard"]
      },
      {
        tier: "Executive President Gala",
        price: 45000,
        features: ["20 Banquet Tables with Crystal Centerpieces","Acoustic Small Stage for Live Band/Speeches","16 Wireless DMX Mood Uplights","Branded Photo Lounge Corner"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Banquet hall with 10+ tables",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 45,
      bookingCount: 75
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800000b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    title: "Royal Wedding Reception Stage Setup - Bloom",
    slug: "royal-wedding-reception-stage-setup-bloom-11",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_01",
      name: "Wedding & Reception Stage",
      slug: "wedding-reception-stage"
    },
    shortDescription: "Luxurious fresh floral stage setup with ambient warm spotlighting and customized couple seating.",
    fullDescription: "Transform your wedding reception into a fairytale with our signature floral stage. Includes complete structural backdrop framing, premium real orchid & rose combinations, fairy canopy lighting, and royal seating arrangement.",
    pricing: {
      basePrice: 45000,
      discountedPrice: 40000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Standard Floral",
        price: 40000,
        features: ["16ft x 10ft Stage Backdrop","Artificial & Seasonal Flower Mix","Warm Ambience LED Spotlights","Classic Couple Sofa"]
      },
      {
        tier: "Premium Royal",
        price: 65000,
        features: ["24ft x 12ft Grand Stage Backdrop","100% Fresh Imported Floral Cascades","Intelligent Moving Head Stage Lights","Royal Velvet Throne Chairs","Bride & Groom Entry Pathway Runner"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 6,
      teardownDurationHours: 2,
      minimumNoticeDays: 4,
      spaceRequirement: "Minimum 20ft width, 12ft depth",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 48,
      bookingCount: 80
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800000c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    title: "Vibrant Gaye Holud & Mehendi Canopy - Bloom",
    slug: "vibrant-gaye-holud-mehendi-canopy-bloom-12",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_02",
      name: "Haldi & Mehendi Setup",
      slug: "haldi-mehendi-setup"
    },
    shortDescription: "Traditional Bengali marigold decor with wooden swings, rickshaw art accents, and vibrant drapes.",
    fullDescription: "An authentic festive atmosphere for your Gaye Holud and Mehendi night. Features vibrant yellow & orange drape cascades, clay pottery props, traditional kulo decor, and cozy floor seating cushions.",
    pricing: {
      basePrice: 32000,
      discountedPrice: 28000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Festive Basic",
        price: 28000,
        features: ["14ft Backdrop with Fresh Genda Flowers","Traditional Decorated Wooden Swing","4 Side Floor Seating Mattresses","Warm Fairy Lights"]
      },
      {
        tier: "Grand Holud Extravaganza",
        price: 45000,
        features: ["20ft 3D Floral Canopy","Authentic Hand-Painted Rickshaw Props","Custom Neon 'Gaye Holud' Sign","Mehendi Lounge Setup with Low Tables"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Minimum 15ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 51,
      bookingCount: 85
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800000d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    title: "Pastel Baby Shower & Gender Reveal Setup - Bloom",
    slug: "pastel-baby-shower-gender-reveal-setup-bloom-13",
    category: "Baby Shower & Family Gatherings",
    subCategory: {
      id: "sub_13",
      name: "Baby Shower & Gender Reveal",
      slug: "baby-shower-gender-reveal"
    },
    shortDescription: "Whimsical pastel pink and baby blue balloon arches with giant teddy bears and balloon pop box.",
    fullDescription: "Celebrate the arrival of your little one with a heartwarming baby shower. Custom balloon clouds, teddy bear nursery props, candy table styling, and our signature giant gender reveal mystery box.",
    pricing: {
      basePrice: 20000,
      discountedPrice: 17000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Pastel Joy",
        price: 17000,
        features: ["10ft Dual-Tone Balloon Arch","'Oh Baby' Neon Sign on Grass Wall","Mother-to-be Throne Chair","Dessert Table Props"]
      },
      {
        tier: "Grand Gender Reveal",
        price: 30000,
        features: ["14ft Organic Pastel Balloon Wall","Mystery Balloon Drop Box or Smoke Cannon","Giant Plush Teddy Bears & Plinths","Personalized Photo Backdrop & Favors Table"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3.5,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "Living room, rooftop, or party hall",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 54,
      bookingCount: 90
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800000e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    title: "Housewarming & Family Get-Together Decor - Bloom",
    slug: "housewarming-family-get-together-decor-bloom-14",
    category: "Baby Shower & Family Gatherings",
    subCategory: {
      id: "sub_16",
      name: "Housewarming & Get-Togethers",
      slug: "housewarming-get-togethers"
    },
    shortDescription: "Welcoming entrance floral toran, cozy drawing room fairy lights, and elegant dining table styling.",
    fullDescription: "Make your new home feel warm and celebratory for housewarming guests. Includes auspicious front door flower torans, soft fairy light ceilings, scented candle centerpieces, and welcoming hallway decor.",
    pricing: {
      basePrice: 15000,
      discountedPrice: 13000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Cozy Welcome",
        price: 13000,
        features: ["Front Door Floral Toran & Rangoli","Living Room Fairy Light Curtains","Dining Table Floral Runner","Welcome Standee"]
      },
      {
        tier: "New Home Celebration",
        price: 22000,
        features: ["Grand Entrance Arch with Fresh Flowers","Full Apartment Ambient Fairy Lighting","Balcony & Living Room Floral Accents","Custom Acrylic 'Home Sweet Home' Sign"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3,
      teardownDurationHours: 1,
      minimumNoticeDays: 1,
      spaceRequirement: "Residential apartment / house",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 57,
      bookingCount: 95
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800000f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    title: "Kids Themed Fantasy Birthday Setup - Kiddos",
    slug: "kids-themed-fantasy-birthday-setup-kiddos-15",
    category: "Birthday & Anniversary",
    subCategory: {
      id: "sub_05",
      name: "Kids Themed Birthday",
      slug: "kids-themed-birthday"
    },
    shortDescription: "Custom cartoon and fantasy 3D backdrop with organic balloon garlands and character props.",
    fullDescription: "Bring your child's favorite characters to life with custom 3D cutouts, vibrant layered balloon arches, matching cake table styling, and customized name light board.",
    pricing: {
      basePrice: 18000,
      discountedPrice: 15000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Themed Standard",
        price: 15000,
        features: ["8ft x 8ft Printed Backdrop","Double Balloon Garland Arch","2 Custom Character Standees","Themed Cake Table & Props"]
      },
      {
        tier: "3D Fantasy Mega",
        price: 26000,
        features: ["12ft Layered 3D Cutout Backdrop","Full Organic Balloon Tunnel","4 Character Standees + LED Name Board","Kids Tableware & Themed Party Bags"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 10ft width",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 15,
      bookingCount: 100
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000010"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    title: "1st Birthday Little Prince / Princess Setup - Kiddos",
    slug: "1st-birthday-little-prince-princess-setup-kiddos-16",
    category: "Birthday & Anniversary",
    subCategory: {
      id: "sub_08",
      name: "1st Birthday Special",
      slug: "1st-birthday-special"
    },
    shortDescription: "Pastel dreamscape setup with giant teddy bears, soft pastel balloon arches, and light-up ONE letters.",
    fullDescription: "Celebrate baby's momentous first year with an enchanting pastel theme. Includes soft gradient balloon walls, illuminated giant 'ONE' marquee letters, high chair decor, and themed milestone photo board.",
    pricing: {
      basePrice: 20000,
      discountedPrice: 17000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Pastel Dream",
        price: 17000,
        features: ["8ft Circle Arch with Pastel Balloon Cloud","3ft Lighted 'ONE' Letters","Baby Milestone Poster Frame","Decorated High Chair"]
      },
      {
        tier: "Royal First Birthday",
        price: 29000,
        features: ["14ft 3D Castle or Cloud Backdrop","Giant 5ft Plush Teddy Bear Prop","Organic Chrome & Pastel Balloon Cascade","Custom Cake Table Cylinder Trio with LED"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3.5,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 12ft width",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 18,
      bookingCount: 25
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000011"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    title: "Pastel Baby Shower & Gender Reveal Setup - Kiddos",
    slug: "pastel-baby-shower-gender-reveal-setup-kiddos-17",
    category: "Baby Shower & Family Gatherings",
    subCategory: {
      id: "sub_13",
      name: "Baby Shower & Gender Reveal",
      slug: "baby-shower-gender-reveal"
    },
    shortDescription: "Whimsical pastel pink and baby blue balloon arches with giant teddy bears and balloon pop box.",
    fullDescription: "Celebrate the arrival of your little one with a heartwarming baby shower. Custom balloon clouds, teddy bear nursery props, candy table styling, and our signature giant gender reveal mystery box.",
    pricing: {
      basePrice: 20000,
      discountedPrice: 17000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Pastel Joy",
        price: 17000,
        features: ["10ft Dual-Tone Balloon Arch","'Oh Baby' Neon Sign on Grass Wall","Mother-to-be Throne Chair","Dessert Table Props"]
      },
      {
        tier: "Grand Gender Reveal",
        price: 30000,
        features: ["14ft Organic Pastel Balloon Wall","Mystery Balloon Drop Box or Smoke Cannon","Giant Plush Teddy Bears & Plinths","Personalized Photo Backdrop & Favors Table"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3.5,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "Living room, rooftop, or party hall",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 21,
      bookingCount: 30
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000012"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    title: "Akika & Naming Ceremony Stage - Kiddos",
    slug: "akika-naming-ceremony-stage-kiddos-18",
    category: "Baby Shower & Family Gatherings",
    subCategory: {
      id: "sub_14",
      name: "Akika & Naming Ceremony",
      slug: "akika-naming-ceremony"
    },
    shortDescription: "Traditional Islamic & cultural aesthetic stage with fresh jasmine, golden lanterns, and cradle decor.",
    fullDescription: "Honor this blessed milestone with pure, elegant decoration. White and gold drapes, real white rose & jasmine flower ropes, Moroccan brass lanterns, and a beautifully adorned baby cradle.",
    pricing: {
      basePrice: 22000,
      discountedPrice: 19000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Blessed Classic",
        price: 19000,
        features: ["12ft White & Gold Draped Backdrop","Decorated Traditional Baby Cradle","Fresh Flower Garlands","Moroccan Lantern Accents"]
      },
      {
        tier: "Royal Noor Setup",
        price: 33000,
        features: ["16ft Grand Arch with Fresh Floral Ceiling Droop","Ornate Brass Cradle with Velvet Cushions","Custom Arabic Calligraphy Name Board","Family Seating Diwan with Bolsters"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 14ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 24,
      bookingCount: 35
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000013"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    title: "Executive Conference & Seminar Staging - Elite",
    slug: "executive-conference-seminar-staging-elite-19",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_09",
      name: "Conferences & Seminars",
      slug: "conferences-seminars"
    },
    shortDescription: "Sleek matte stage backdrop with acrylic branded podium, LED wash lights, and crisp projection framing.",
    fullDescription: "Professional corporate stage setups engineered for board meetings, tech conferences, and annual seminars. Clean lines, wrinkle-free tension fabric prints, branded speaker podiums, and professional lighting wash.",
    pricing: {
      basePrice: 38000,
      discountedPrice: 33000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Corporate Standard",
        price: 33000,
        features: ["20ft x 10ft Branded Backdrop Wall","Clear Acrylic Branded Podium","4 Warm LED Stage Wash Lights","Stage Carpet Runner"]
      },
      {
        tier: "High-Tech Executive",
        price: 55000,
        features: ["30ft x 12ft Seamless Matte Backdrop","Dual LED Screen Framing & Truss Structure","VIP Speaker Couch Seating Setup","Wireless Microphones & Stage Ambient Lighting"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Auditorium or hall stage",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 27,
      bookingCount: 40
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000014"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    title: "Gala & Annual Award Night Stage Setup - Elite",
    slug: "gala-annual-award-night-stage-setup-elite-20",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_10",
      name: "Gala & Annual Award Nights",
      slug: "gala-annual-award-nights"
    },
    shortDescription: "Glamorous red carpet step-and-repeat media wall with golden stanchions, spotlighting, and trophy display.",
    fullDescription: "Create an unforgettable celebratory awards evening. High-impact black and gold stage aesthetics, branded media photo wall with velvet rope stanchions, custom trophy display plinths, and dynamic spotlighting.",
    pricing: {
      basePrice: 42000,
      discountedPrice: 37000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Red Carpet Gala",
        price: 37000,
        features: ["24ft Award Stage Backdrop","10ft Step-and-Repeat Media Wall","30ft Red Carpet with Golden Stanchions","Trophy Plinth Display"]
      },
      {
        tier: "VIP Star Night",
        price: 68000,
        features: ["36ft Multi-Tier Stage Backdrop with LED Trim","Intelligent Moving Head Lighting FX","Custom Neon Brand Logo & Trophy Stage","Full Hall Red Carpet Walkway & Photo Booth"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 6,
      teardownDurationHours: 2.5,
      minimumNoticeDays: 4,
      spaceRequirement: "Grand Ballroom or Hall",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 30,
      bookingCount: 45
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000015"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    title: "Product Launch & Trade Expo Pavilion - Elite",
    slug: "product-launch-trade-expo-pavilion-elite-21",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_11",
      name: "Product Launch & Expo Stalls",
      slug: "product-launch-expo-stalls"
    },
    shortDescription: "Futuristic reveal stage with motorized curtain drop, branded display pedestals, and dynamic laser neon.",
    fullDescription: "Deliver maximum hype for your new product release. Includes concealed curtain drop mechanisms for dramatic reveals, custom illuminated product pedestals, high-contrast brand backdrops, and promotional stall framing.",
    pricing: {
      basePrice: 48000,
      discountedPrice: 42000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Launch Essential",
        price: 42000,
        features: ["16ft Product Reveal Backdrop","Illuminated Center Product Pedestal","Spotlight Pin Spot Focus Lighting","Branded Media Backdrop"]
      },
      {
        tier: "Grand Reveal Mega",
        price: 75000,
        features: ["28ft Custom Built Exhibition Booth","Automatic Kabuki Curtain Drop System","Cold Pyro Sparkular Blast on Reveal","RGB LED Strip Product Counters & Neon Wall"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 7,
      teardownDurationHours: 3,
      minimumNoticeDays: 5,
      spaceRequirement: "Exhibition center or convention hall",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 33,
      bookingCount: 50
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000016"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    title: "Custom Neon Signs & Marquee Letter Rental - Elite",
    slug: "custom-neon-signs-marquee-letter-rental-elite-22",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_20",
      name: "Custom Neon Signs & Marquee Letters",
      slug: "custom-neon-signs-marquee-letters"
    },
    shortDescription: "Vibrant neon flex signage on acrylic backing and 4ft illuminated vintage marquee letters.",
    fullDescription: "Make your event Instagrammable with bespoke glowing text. Choose from our popular catalog ('Better Together', 'Happily Ever After', 'Crazy In Love') or order custom text with giant lightbulb marquee letters.",
    pricing: {
      basePrice: 10000,
      discountedPrice: 8500,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Neon Sign Rental",
        price: 8500,
        features: ["Choice of 1 Stock Neon Sign (up to 3ft)","Clear Acrylic Hanging Chain & Stand","Dimmer Controller & Long Power Cable"]
      },
      {
        tier: "Giant Marquee + Neon Combo",
        price: 18000,
        features: ["4ft Light-Up Marquee Letters (up to 4 chars e.g. LOVE)","1 Custom or Stock Neon Flex Sign","Faux Greenery Backdrop Wall (8ft x 8ft)"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 1.5,
      teardownDurationHours: 0.5,
      minimumNoticeDays: 1,
      spaceRequirement: "Wall or stand space 8ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 36,
      bookingCount: 55
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000017"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    title: "Spotlights & Ambient Event Lighting Setup - Elite",
    slug: "spotlights-ambient-event-lighting-setup-elite-23",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_21",
      name: "Spotlights & Ambient Lighting",
      slug: "spotlights-ambient-lighting"
    },
    shortDescription: "Intelligent LED par cans, warm stage profiles, and wireless DMX architectural wall washers.",
    fullDescription: "Complete venue mood lighting to transform any plain hall into a warm, dramatic event setting. Includes 12 to 24 high-powered RGBW LED pars, stage spotlighting, and programmable color mixing.",
    pricing: {
      basePrice: 16000,
      discountedPrice: 14000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Ambience Essential",
        price: 14000,
        features: ["10x High-Power RGBW LED Uplights","2x Stage Profile Focus Spotlights","DMX Lighting Controller & Cabling","On-site Light Technician"]
      },
      {
        tier: "Full Venue Illumination",
        price: 26000,
        features: ["20x Wireless DMX Uplights","4x Moving Head Beam Lights","Stage Warm Light Truss Bar","Live Lighting Operator Throughout Event"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Venue perimeter",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 39,
      bookingCount: 60
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000018"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    title: "Rooftop Party Canopy & Fairy Light Sky - Cozy",
    slug: "rooftop-party-canopy-fairy-light-sky-cozy-24",
    category: "Home & Rooftop Intimate Setups",
    subCategory: {
      id: "sub_17",
      name: "Rooftop Party Canopy",
      slug: "rooftop-party-canopy"
    },
    shortDescription: "Romantic overhead fairy light tunnel with bohemian wooden pallets, cushions, and faux fire pit.",
    fullDescription: "Turn your rooftop into an enchanting stargazing lounge. Hundreds of meters of twinkling fairy lights forming an overhead sky canopy, low wooden table seating, cozy boho floor cushions, and rustic lanterns.",
    pricing: {
      basePrice: 22000,
      discountedPrice: 19000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Boho Rooftop Standard",
        price: 19000,
        features: ["Overhead Fairy Light Canopy (20ft x 20ft)","Low Wooden Pallet Seating for 12","Bohemian Rugs & 15 Cushions","Mason Jar Lanterns"]
      },
      {
        tier: "Luxe Starlit Rooftop",
        price: 34000,
        features: ["Full Rooftop Fairy Light Web with Bulbs","Cabana Tent Structure with White Sheer Drapes","Acoustic Speaker & Mic Setup","Custom Neon Sign & BBQ Corner Decor"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Rooftop minimum 400 sq ft",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 42,
      bookingCount: 65
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000019"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    title: "Drawing Room & Balcony Aesthetic Makeover - Cozy",
    slug: "drawing-room-balcony-aesthetic-makeover-cozy-25",
    category: "Home & Rooftop Intimate Setups",
    subCategory: {
      id: "sub_18",
      name: "Drawing Room & Balcony Decor",
      slug: "drawing-room-balcony-decor"
    },
    shortDescription: "Intimate corner drape canopy with artificial ivy creepers, floor mats, and warm Edison glow.",
    fullDescription: "Upgrade your living space for compact indoor celebrations. Aesthetic drapery, faux botanical greenery walls, warm filament lighting, and stylish velvet accent cushions for small cozy gatherings.",
    pricing: {
      basePrice: 12000,
      discountedPrice: 10000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Cozy Corner",
        price: 10000,
        features: ["8ft Corner Backdrop Drapes","Warm Edison Light Chandelier","Balcony Railing Fairy Lights","Floor Rug & 6 Cushions"]
      },
      {
        tier: "Full Room Ambiance",
        price: 18000,
        features: ["Drawing Room Accent Wall Backdrop","Balcony Greenery Vines with Fairy Drops","Ceiling Warm Glow String Lights","Mini Photo Frame Memory Grid"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 2.5,
      teardownDurationHours: 1,
      minimumNoticeDays: 1,
      spaceRequirement: "Standard apartment room or balcony",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 45,
      bookingCount: 70
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800001a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    title: "Surprise Room Makeover with Balloons & Candles - Cozy",
    slug: "surprise-room-makeover-with-balloons-candles-cozy-26",
    category: "Home & Rooftop Intimate Setups",
    subCategory: {
      id: "sub_19",
      name: "Surprise Room Makeover",
      slug: "surprise-room-makeover"
    },
    shortDescription: "Secret room transformation with ceiling helium balloons, floor candle path, and photo strings.",
    fullDescription: "The ultimate birthday or anniversary surprise executed while your loved one is away. 50+ floating balloons with ribbon tails, LED battery-operated candle trails on the floor, bed decor, and hanging photo polaroids.",
    pricing: {
      basePrice: 14000,
      discountedPrice: 12000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Sweet Surprise",
        price: 12000,
        features: ["40 Helium Ceiling Balloons with Ribbons","Floor Rose Petal Heart Pathway","30 LED Tea Lights","Happy Birthday / Anniversary Banner"]
      },
      {
        tier: "Grand Romantic Ambush",
        price: 20000,
        features: ["80 Metallic Balloons (Ceiling + Floor)","Bed Canopy Styling with Fairy Lights","20 Hanging Polaroid Photo Memories","Custom Neon Light Sign on Wall"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 2,
      teardownDurationHours: 0.5,
      minimumNoticeDays: 1,
      spaceRequirement: "Bedroom or hotel suite",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 48,
      bookingCount: 75
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800001b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    title: "Adult Milestone Birthday & Glam Gala - Cozy",
    slug: "adult-milestone-birthday-glam-gala-cozy-27",
    category: "Birthday & Anniversary",
    subCategory: {
      id: "sub_06",
      name: "Adult Milestone Birthday",
      slug: "adult-milestone-birthday"
    },
    shortDescription: "Sophisticated black, gold, and champagne balloon styling with shimmer wall and marquee numbers.",
    fullDescription: "Turn 21, 30, 40, or 50 in glamorous style! Includes dazzling gold/silver shimmer sequin walls, light-up 4ft marquee LED numbers, organic matte balloon garlands, and cocktail lounge styling.",
    pricing: {
      basePrice: 22000,
      discountedPrice: 19000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Glam Shimmer",
        price: 19000,
        features: ["8ft x 8ft Gold Shimmer Backdrop","Black & Chrome Gold Balloon Arch","3ft Lighted Marquee Age Numbers","Cake Plinth Stand"]
      },
      {
        tier: "VIP Champagne Gala",
        price: 34000,
        features: ["12ft Shimmer Wall with Custom Neon","4ft Giant Marquee Numbers","Champagne Tower Stand & Neon Sign","Cocktail High-Top Table Linens (4 Units)"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3.5,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 12ft width",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 51,
      bookingCount: 80
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800001c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    title: "Romantic Anniversary & Candlelight Dining - Cozy",
    slug: "romantic-anniversary-candlelight-dining-cozy-28",
    category: "Birthday & Anniversary",
    subCategory: {
      id: "sub_07",
      name: "Romantic Anniversary & Candlelight",
      slug: "romantic-anniversary-candlelight"
    },
    shortDescription: "Intimate cabana canopy with hundreds of glass tea-light candles, rose petals, and fairy lights.",
    fullDescription: "Surprise your partner with an unforgettable romantic anniversary evening. Includes private sheer draped cabana, aromatic fresh rose petal pathways, warm ambient tea-lights, and custom couple photo frame wall.",
    pricing: {
      basePrice: 16000,
      discountedPrice: 14000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Sweet Romance",
        price: 14000,
        features: ["Private Draped Canopy Cabana","50 Glass Candle Holders & Fairy Lights","Rose Petal Heart Pathway","Dinner Table Styling"]
      },
      {
        tier: "Grand Luxury Romance",
        price: 25000,
        features: ["Rooftop or Garden Luxe Cabana","150+ Ambient Tea Lights & Lanterns","Custom Memory Photo Gallery on Fairy Strings","Fresh Red Rose Floral Centerpiece","Champagne Bucket & Customized Neon Sign"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3,
      teardownDurationHours: 1,
      minimumNoticeDays: 1,
      spaceRequirement: "Minimum 10ft x 10ft area",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 54,
      bookingCount: 85
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800001d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    title: "Custom Neon Signs & Marquee Letter Rental - Lumina",
    slug: "custom-neon-signs-marquee-letter-rental-lumina-29",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_20",
      name: "Custom Neon Signs & Marquee Letters",
      slug: "custom-neon-signs-marquee-letters"
    },
    shortDescription: "Vibrant neon flex signage on acrylic backing and 4ft illuminated vintage marquee letters.",
    fullDescription: "Make your event Instagrammable with bespoke glowing text. Choose from our popular catalog ('Better Together', 'Happily Ever After', 'Crazy In Love') or order custom text with giant lightbulb marquee letters.",
    pricing: {
      basePrice: 10000,
      discountedPrice: 8500,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Neon Sign Rental",
        price: 8500,
        features: ["Choice of 1 Stock Neon Sign (up to 3ft)","Clear Acrylic Hanging Chain & Stand","Dimmer Controller & Long Power Cable"]
      },
      {
        tier: "Giant Marquee + Neon Combo",
        price: 18000,
        features: ["4ft Light-Up Marquee Letters (up to 4 chars e.g. LOVE)","1 Custom or Stock Neon Flex Sign","Faux Greenery Backdrop Wall (8ft x 8ft)"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 1.5,
      teardownDurationHours: 0.5,
      minimumNoticeDays: 1,
      spaceRequirement: "Wall or stand space 8ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 57,
      bookingCount: 90
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800001e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    title: "Spotlights & Ambient Event Lighting Setup - Lumina",
    slug: "spotlights-ambient-event-lighting-setup-lumina-30",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_21",
      name: "Spotlights & Ambient Lighting",
      slug: "spotlights-ambient-lighting"
    },
    shortDescription: "Intelligent LED par cans, warm stage profiles, and wireless DMX architectural wall washers.",
    fullDescription: "Complete venue mood lighting to transform any plain hall into a warm, dramatic event setting. Includes 12 to 24 high-powered RGBW LED pars, stage spotlighting, and programmable color mixing.",
    pricing: {
      basePrice: 16000,
      discountedPrice: 14000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Ambience Essential",
        price: 14000,
        features: ["10x High-Power RGBW LED Uplights","2x Stage Profile Focus Spotlights","DMX Lighting Controller & Cabling","On-site Light Technician"]
      },
      {
        tier: "Full Venue Illumination",
        price: 26000,
        features: ["20x Wireless DMX Uplights","4x Moving Head Beam Lights","Stage Warm Light Truss Bar","Live Lighting Operator Throughout Event"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Venue perimeter",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 15,
      bookingCount: 95
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800001f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    title: "Special Effects - Cold Pyro & Dry Ice Low Fog - Lumina",
    slug: "special-effects-cold-pyro-dry-ice-low-fog-lumina-31",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_22",
      name: "Special Effects (Fog, Smoke & Pyro)",
      slug: "special-effects-fog-smoke-pyro"
    },
    shortDescription: "Non-hazardous indoor cold spark fountains and cloud-like heavy dry ice smoke for stage entries.",
    fullDescription: "Create breathless cinematic moments during bridal entries, first dances, or cake cutting. Our special effects use safe, non-smoky cold pyros (safe for indoor ballroom carpets) and heavy floor-hugging dry ice fog.",
    pricing: {
      basePrice: 18000,
      discountedPrice: 15000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Entry FX Pack",
        price: 15000,
        features: ["4x Cold Pyro Sparkular Machines (2 Firings)","1x Heavy Dry Ice Low Fog Machine","Certified Special FX Operator"]
      },
      {
        tier: "Grand Stage FX Spectacular",
        price: 28000,
        features: ["8x Cold Spark Machines (4 Continuous Blasts)","2x High-Output Dry Ice Machines for Dance Floor","CO2 Jet Blaster Guns (2 Units)","Full Event Coordination with DJ/Band"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 2,
      teardownDurationHours: 1,
      minimumNoticeDays: 1,
      spaceRequirement: "Stage front & aisle",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 18,
      bookingCount: 100
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000020"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    title: "360 Video Booth & Instant Photo Booth - Lumina",
    slug: "360-video-booth-instant-photo-booth-lumina-32",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_23",
      name: "Photo Booth & 360 Video Booth",
      slug: "photo-booth-360-video-booth"
    },
    shortDescription: "Motorized 360 rotating video platform with slow-motion effects, ring light, and instant QR sharing.",
    fullDescription: "The ultimate guest entertainment activation. Guests stand on a platform while a camera rotates around them capturing HD 360 slow-motion videos with custom event branding overlays and instant mobile download.",
    pricing: {
      basePrice: 24000,
      discountedPrice: 20000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "360 Video Booth 3 Hours",
        price: 20000,
        features: ["360 Motorized Platform (holds 4 guests)","Studio Ring Light & RGB Tube Lighting","Custom Video Overlay & Music","Instant AirDrop / QR Code Sharing","2 Friendly Attendants"]
      },
      {
        tier: "360 VIP Deluxe 5 Hours",
        price: 34000,
        features: ["Full Event Duration (up to 5 hours)","Red Carpet & Golden Stanchion Enclosure","Fun Props & Money Gun","Custom Branded Backdrop Enclosure","Online Live Gallery Access"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 2,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "10ft x 10ft open floor area",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 21,
      bookingCount: 25
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000021"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    title: "Executive Conference & Seminar Staging - Lumina",
    slug: "executive-conference-seminar-staging-lumina-33",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_09",
      name: "Conferences & Seminars",
      slug: "conferences-seminars"
    },
    shortDescription: "Sleek matte stage backdrop with acrylic branded podium, LED wash lights, and crisp projection framing.",
    fullDescription: "Professional corporate stage setups engineered for board meetings, tech conferences, and annual seminars. Clean lines, wrinkle-free tension fabric prints, branded speaker podiums, and professional lighting wash.",
    pricing: {
      basePrice: 38000,
      discountedPrice: 33000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Corporate Standard",
        price: 33000,
        features: ["20ft x 10ft Branded Backdrop Wall","Clear Acrylic Branded Podium","4 Warm LED Stage Wash Lights","Stage Carpet Runner"]
      },
      {
        tier: "High-Tech Executive",
        price: 55000,
        features: ["30ft x 12ft Seamless Matte Backdrop","Dual LED Screen Framing & Truss Structure","VIP Speaker Couch Seating Setup","Wireless Microphones & Stage Ambient Lighting"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Auditorium or hall stage",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 24,
      bookingCount: 30
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000022"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    title: "Gala & Annual Award Night Stage Setup - Lumina",
    slug: "gala-annual-award-night-stage-setup-lumina-34",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_10",
      name: "Gala & Annual Award Nights",
      slug: "gala-annual-award-nights"
    },
    shortDescription: "Glamorous red carpet step-and-repeat media wall with golden stanchions, spotlighting, and trophy display.",
    fullDescription: "Create an unforgettable celebratory awards evening. High-impact black and gold stage aesthetics, branded media photo wall with velvet rope stanchions, custom trophy display plinths, and dynamic spotlighting.",
    pricing: {
      basePrice: 42000,
      discountedPrice: 37000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Red Carpet Gala",
        price: 37000,
        features: ["24ft Award Stage Backdrop","10ft Step-and-Repeat Media Wall","30ft Red Carpet with Golden Stanchions","Trophy Plinth Display"]
      },
      {
        tier: "VIP Star Night",
        price: 68000,
        features: ["36ft Multi-Tier Stage Backdrop with LED Trim","Intelligent Moving Head Lighting FX","Custom Neon Brand Logo & Trophy Stage","Full Hall Red Carpet Walkway & Photo Booth"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 6,
      teardownDurationHours: 2.5,
      minimumNoticeDays: 4,
      spaceRequirement: "Grand Ballroom or Hall",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 27,
      bookingCount: 35
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000023"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    title: "Royal Wedding Reception Stage Setup - Utsab",
    slug: "royal-wedding-reception-stage-setup-utsab-35",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_01",
      name: "Wedding & Reception Stage",
      slug: "wedding-reception-stage"
    },
    shortDescription: "Luxurious fresh floral stage setup with ambient warm spotlighting and customized couple seating.",
    fullDescription: "Transform your wedding reception into a fairytale with our signature floral stage. Includes complete structural backdrop framing, premium real orchid & rose combinations, fairy canopy lighting, and royal seating arrangement.",
    pricing: {
      basePrice: 45000,
      discountedPrice: 40000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Standard Floral",
        price: 40000,
        features: ["16ft x 10ft Stage Backdrop","Artificial & Seasonal Flower Mix","Warm Ambience LED Spotlights","Classic Couple Sofa"]
      },
      {
        tier: "Premium Royal",
        price: 65000,
        features: ["24ft x 12ft Grand Stage Backdrop","100% Fresh Imported Floral Cascades","Intelligent Moving Head Stage Lights","Royal Velvet Throne Chairs","Bride & Groom Entry Pathway Runner"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 6,
      teardownDurationHours: 2,
      minimumNoticeDays: 4,
      spaceRequirement: "Minimum 20ft width, 12ft depth",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 30,
      bookingCount: 40
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000024"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    title: "Vibrant Gaye Holud & Mehendi Canopy - Utsab",
    slug: "vibrant-gaye-holud-mehendi-canopy-utsab-36",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_02",
      name: "Haldi & Mehendi Setup",
      slug: "haldi-mehendi-setup"
    },
    shortDescription: "Traditional Bengali marigold decor with wooden swings, rickshaw art accents, and vibrant drapes.",
    fullDescription: "An authentic festive atmosphere for your Gaye Holud and Mehendi night. Features vibrant yellow & orange drape cascades, clay pottery props, traditional kulo decor, and cozy floor seating cushions.",
    pricing: {
      basePrice: 32000,
      discountedPrice: 28000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Festive Basic",
        price: 28000,
        features: ["14ft Backdrop with Fresh Genda Flowers","Traditional Decorated Wooden Swing","4 Side Floor Seating Mattresses","Warm Fairy Lights"]
      },
      {
        tier: "Grand Holud Extravaganza",
        price: 45000,
        features: ["20ft 3D Floral Canopy","Authentic Hand-Painted Rickshaw Props","Custom Neon 'Gaye Holud' Sign","Mehendi Lounge Setup with Low Tables"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Minimum 15ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 33,
      bookingCount: 45
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000025"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    title: "Romantic Engagement & Ring Ceremony Decor - Utsab",
    slug: "romantic-engagement-ring-ceremony-decor-utsab-37",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_04",
      name: "Engagement & Ring Ceremony",
      slug: "engagement-ring-ceremony"
    },
    shortDescription: "Elegant geometric floral ring backdrop with romantic neon signage and acrylic pedestals.",
    fullDescription: "Celebrate the beginning of forever with an intimate, chic engagement setup. Featuring customized metallic circular arches, delicate pastel florals, mirror pedestals for ring exchange, and candle stands.",
    pricing: {
      basePrice: 28000,
      discountedPrice: 24000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Chic Minimal",
        price: 24000,
        features: ["7ft Circular Metallic Ring Arch","Pastel Artificial Florals","Custom 'Better Together' Neon Sign","Dual Acrylic Ring Pedestals"]
      },
      {
        tier: "Luxe Botanical Ring",
        price: 38000,
        features: ["8ft Double Ring Geometric Arch","100% Fresh Hydrangea & Rose Wrap","Warm Edison Bulb Chandelier","Velvet Couple Seating with Rug"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 12ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 36,
      bookingCount: 50
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000026"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    title: "Akika & Naming Ceremony Stage - Utsab",
    slug: "akika-naming-ceremony-stage-utsab-38",
    category: "Baby Shower & Family Gatherings",
    subCategory: {
      id: "sub_14",
      name: "Akika & Naming Ceremony",
      slug: "akika-naming-ceremony"
    },
    shortDescription: "Traditional Islamic & cultural aesthetic stage with fresh jasmine, golden lanterns, and cradle decor.",
    fullDescription: "Honor this blessed milestone with pure, elegant decoration. White and gold drapes, real white rose & jasmine flower ropes, Moroccan brass lanterns, and a beautifully adorned baby cradle.",
    pricing: {
      basePrice: 22000,
      discountedPrice: 19000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Blessed Classic",
        price: 19000,
        features: ["12ft White & Gold Draped Backdrop","Decorated Traditional Baby Cradle","Fresh Flower Garlands","Moroccan Lantern Accents"]
      },
      {
        tier: "Royal Noor Setup",
        price: 33000,
        features: ["16ft Grand Arch with Fresh Floral Ceiling Droop","Ornate Brass Cradle with Velvet Cushions","Custom Arabic Calligraphy Name Board","Family Seating Diwan with Bolsters"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 14ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 39,
      bookingCount: 55
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000027"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    title: "Religious & Cultural Festival Pavilion - Utsab",
    slug: "religious-cultural-festival-pavilion-utsab-39",
    category: "Baby Shower & Family Gatherings",
    subCategory: {
      id: "sub_15",
      name: "Religious & Cultural Festivals",
      slug: "religious-cultural-festivals"
    },
    shortDescription: "Vibrant traditional fair decor for Eid, Puja, or cultural carnivals with lanterns and clay art.",
    fullDescription: "Capturing the festive spirit of Eid, Durga Puja, or Pahela Baishakh with folk-inspired decor. Hand-painted motifs, decorative colorful umbrella ceilings, ambient brass lanterns, and festive photo booths.",
    pricing: {
      basePrice: 35000,
      discountedPrice: 30000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Festive Pavilion",
        price: 30000,
        features: ["18ft Themed Cultural Backdrop","Ceiling Hanging Lanterns / Umbrellas","Folk Art Entrance Gate","Warm Spotlights"]
      },
      {
        tier: "Grand Mela Extravaganza",
        price: 55000,
        features: ["30ft Festival Main Stage & Altar Setup","Full Overhead Colorful Canopy Drapery","Clay Pottery & Rickshaw Art Installation","Festive Photo Spot with Props"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Community center or outdoor open area",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 42,
      bookingCount: 60
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000028"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    title: "Kids Themed Fantasy Birthday Setup - Pastel",
    slug: "kids-themed-fantasy-birthday-setup-pastel-40",
    category: "Birthday & Anniversary",
    subCategory: {
      id: "sub_05",
      name: "Kids Themed Birthday",
      slug: "kids-themed-birthday"
    },
    shortDescription: "Custom cartoon and fantasy 3D backdrop with organic balloon garlands and character props.",
    fullDescription: "Bring your child's favorite characters to life with custom 3D cutouts, vibrant layered balloon arches, matching cake table styling, and customized name light board.",
    pricing: {
      basePrice: 18000,
      discountedPrice: 15000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Themed Standard",
        price: 15000,
        features: ["8ft x 8ft Printed Backdrop","Double Balloon Garland Arch","2 Custom Character Standees","Themed Cake Table & Props"]
      },
      {
        tier: "3D Fantasy Mega",
        price: 26000,
        features: ["12ft Layered 3D Cutout Backdrop","Full Organic Balloon Tunnel","4 Character Standees + LED Name Board","Kids Tableware & Themed Party Bags"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 10ft width",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 45,
      bookingCount: 65
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000029"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    title: "Romantic Anniversary & Candlelight Dining - Pastel",
    slug: "romantic-anniversary-candlelight-dining-pastel-41",
    category: "Birthday & Anniversary",
    subCategory: {
      id: "sub_07",
      name: "Romantic Anniversary & Candlelight",
      slug: "romantic-anniversary-candlelight"
    },
    shortDescription: "Intimate cabana canopy with hundreds of glass tea-light candles, rose petals, and fairy lights.",
    fullDescription: "Surprise your partner with an unforgettable romantic anniversary evening. Includes private sheer draped cabana, aromatic fresh rose petal pathways, warm ambient tea-lights, and custom couple photo frame wall.",
    pricing: {
      basePrice: 16000,
      discountedPrice: 14000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Sweet Romance",
        price: 14000,
        features: ["Private Draped Canopy Cabana","50 Glass Candle Holders & Fairy Lights","Rose Petal Heart Pathway","Dinner Table Styling"]
      },
      {
        tier: "Grand Luxury Romance",
        price: 25000,
        features: ["Rooftop or Garden Luxe Cabana","150+ Ambient Tea Lights & Lanterns","Custom Memory Photo Gallery on Fairy Strings","Fresh Red Rose Floral Centerpiece","Champagne Bucket & Customized Neon Sign"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3,
      teardownDurationHours: 1,
      minimumNoticeDays: 1,
      spaceRequirement: "Minimum 10ft x 10ft area",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 48,
      bookingCount: 70
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800002a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    title: "Pastel Baby Shower & Gender Reveal Setup - Pastel",
    slug: "pastel-baby-shower-gender-reveal-setup-pastel-42",
    category: "Baby Shower & Family Gatherings",
    subCategory: {
      id: "sub_13",
      name: "Baby Shower & Gender Reveal",
      slug: "baby-shower-gender-reveal"
    },
    shortDescription: "Whimsical pastel pink and baby blue balloon arches with giant teddy bears and balloon pop box.",
    fullDescription: "Celebrate the arrival of your little one with a heartwarming baby shower. Custom balloon clouds, teddy bear nursery props, candy table styling, and our signature giant gender reveal mystery box.",
    pricing: {
      basePrice: 20000,
      discountedPrice: 17000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Pastel Joy",
        price: 17000,
        features: ["10ft Dual-Tone Balloon Arch","'Oh Baby' Neon Sign on Grass Wall","Mother-to-be Throne Chair","Dessert Table Props"]
      },
      {
        tier: "Grand Gender Reveal",
        price: 30000,
        features: ["14ft Organic Pastel Balloon Wall","Mystery Balloon Drop Box or Smoke Cannon","Giant Plush Teddy Bears & Plinths","Personalized Photo Backdrop & Favors Table"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3.5,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "Living room, rooftop, or party hall",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 51,
      bookingCount: 75
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800002b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    title: "Akika & Naming Ceremony Stage - Pastel",
    slug: "akika-naming-ceremony-stage-pastel-43",
    category: "Baby Shower & Family Gatherings",
    subCategory: {
      id: "sub_14",
      name: "Akika & Naming Ceremony",
      slug: "akika-naming-ceremony"
    },
    shortDescription: "Traditional Islamic & cultural aesthetic stage with fresh jasmine, golden lanterns, and cradle decor.",
    fullDescription: "Honor this blessed milestone with pure, elegant decoration. White and gold drapes, real white rose & jasmine flower ropes, Moroccan brass lanterns, and a beautifully adorned baby cradle.",
    pricing: {
      basePrice: 22000,
      discountedPrice: 19000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Blessed Classic",
        price: 19000,
        features: ["12ft White & Gold Draped Backdrop","Decorated Traditional Baby Cradle","Fresh Flower Garlands","Moroccan Lantern Accents"]
      },
      {
        tier: "Royal Noor Setup",
        price: 33000,
        features: ["16ft Grand Arch with Fresh Floral Ceiling Droop","Ornate Brass Cradle with Velvet Cushions","Custom Arabic Calligraphy Name Board","Family Seating Diwan with Bolsters"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 14ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 54,
      bookingCount: 80
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800002c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    title: "Rooftop Party Canopy & Fairy Light Sky - Pastel",
    slug: "rooftop-party-canopy-fairy-light-sky-pastel-44",
    category: "Home & Rooftop Intimate Setups",
    subCategory: {
      id: "sub_17",
      name: "Rooftop Party Canopy",
      slug: "rooftop-party-canopy"
    },
    shortDescription: "Romantic overhead fairy light tunnel with bohemian wooden pallets, cushions, and faux fire pit.",
    fullDescription: "Turn your rooftop into an enchanting stargazing lounge. Hundreds of meters of twinkling fairy lights forming an overhead sky canopy, low wooden table seating, cozy boho floor cushions, and rustic lanterns.",
    pricing: {
      basePrice: 22000,
      discountedPrice: 19000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Boho Rooftop Standard",
        price: 19000,
        features: ["Overhead Fairy Light Canopy (20ft x 20ft)","Low Wooden Pallet Seating for 12","Bohemian Rugs & 15 Cushions","Mason Jar Lanterns"]
      },
      {
        tier: "Luxe Starlit Rooftop",
        price: 34000,
        features: ["Full Rooftop Fairy Light Web with Bulbs","Cabana Tent Structure with White Sheer Drapes","Acoustic Speaker & Mic Setup","Custom Neon Sign & BBQ Corner Decor"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Rooftop minimum 400 sq ft",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 57,
      bookingCount: 85
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800002d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    title: "Royal Wedding Reception Stage Setup - Padma",
    slug: "royal-wedding-reception-stage-setup-padma-45",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_01",
      name: "Wedding & Reception Stage",
      slug: "wedding-reception-stage"
    },
    shortDescription: "Luxurious fresh floral stage setup with ambient warm spotlighting and customized couple seating.",
    fullDescription: "Transform your wedding reception into a fairytale with our signature floral stage. Includes complete structural backdrop framing, premium real orchid & rose combinations, fairy canopy lighting, and royal seating arrangement.",
    pricing: {
      basePrice: 45000,
      discountedPrice: 40000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Standard Floral",
        price: 40000,
        features: ["16ft x 10ft Stage Backdrop","Artificial & Seasonal Flower Mix","Warm Ambience LED Spotlights","Classic Couple Sofa"]
      },
      {
        tier: "Premium Royal",
        price: 65000,
        features: ["24ft x 12ft Grand Stage Backdrop","100% Fresh Imported Floral Cascades","Intelligent Moving Head Stage Lights","Royal Velvet Throne Chairs","Bride & Groom Entry Pathway Runner"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 6,
      teardownDurationHours: 2,
      minimumNoticeDays: 4,
      spaceRequirement: "Minimum 20ft width, 12ft depth",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 15,
      bookingCount: 90
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800002e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    title: "Vibrant Gaye Holud & Mehendi Canopy - Padma",
    slug: "vibrant-gaye-holud-mehendi-canopy-padma-46",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_02",
      name: "Haldi & Mehendi Setup",
      slug: "haldi-mehendi-setup"
    },
    shortDescription: "Traditional Bengali marigold decor with wooden swings, rickshaw art accents, and vibrant drapes.",
    fullDescription: "An authentic festive atmosphere for your Gaye Holud and Mehendi night. Features vibrant yellow & orange drape cascades, clay pottery props, traditional kulo decor, and cozy floor seating cushions.",
    pricing: {
      basePrice: 32000,
      discountedPrice: 28000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Festive Basic",
        price: 28000,
        features: ["14ft Backdrop with Fresh Genda Flowers","Traditional Decorated Wooden Swing","4 Side Floor Seating Mattresses","Warm Fairy Lights"]
      },
      {
        tier: "Grand Holud Extravaganza",
        price: 45000,
        features: ["20ft 3D Floral Canopy","Authentic Hand-Painted Rickshaw Props","Custom Neon 'Gaye Holud' Sign","Mehendi Lounge Setup with Low Tables"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Minimum 15ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 18,
      bookingCount: 95
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800002f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    title: "Executive Conference & Seminar Staging - Padma",
    slug: "executive-conference-seminar-staging-padma-47",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_09",
      name: "Conferences & Seminars",
      slug: "conferences-seminars"
    },
    shortDescription: "Sleek matte stage backdrop with acrylic branded podium, LED wash lights, and crisp projection framing.",
    fullDescription: "Professional corporate stage setups engineered for board meetings, tech conferences, and annual seminars. Clean lines, wrinkle-free tension fabric prints, branded speaker podiums, and professional lighting wash.",
    pricing: {
      basePrice: 38000,
      discountedPrice: 33000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Corporate Standard",
        price: 33000,
        features: ["20ft x 10ft Branded Backdrop Wall","Clear Acrylic Branded Podium","4 Warm LED Stage Wash Lights","Stage Carpet Runner"]
      },
      {
        tier: "High-Tech Executive",
        price: 55000,
        features: ["30ft x 12ft Seamless Matte Backdrop","Dual LED Screen Framing & Truss Structure","VIP Speaker Couch Seating Setup","Wireless Microphones & Stage Ambient Lighting"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Auditorium or hall stage",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 21,
      bookingCount: 100
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000030"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    title: "Corporate Dinner & Executive Meetup Decor - Padma",
    slug: "corporate-dinner-executive-meetup-decor-padma-48",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_12",
      name: "Corporate Dinners & Meetups",
      slug: "corporate-dinners-meetups"
    },
    shortDescription: "Refined banquet table decor with branded floral centerpieces, warm uplighting, and acoustic stage.",
    fullDescription: "Elevate your corporate dinner and networking night with tasteful luxury. Sophisticated table runners, modern metallic floral arrangements, branded place settings, and subtle perimeter LED uplighting.",
    pricing: {
      basePrice: 30000,
      discountedPrice: 26000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Banquet Elegant",
        price: 26000,
        features: ["10 Decorated Round Dinner Tables","Fresh Floral Low Centerpieces","Perimeter Warm Wall Uplighting (8 Units)","Welcome Entry Signboard"]
      },
      {
        tier: "Executive President Gala",
        price: 45000,
        features: ["20 Banquet Tables with Crystal Centerpieces","Acoustic Small Stage for Live Band/Speeches","16 Wireless DMX Mood Uplights","Branded Photo Lounge Corner"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Banquet hall with 10+ tables",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 24,
      bookingCount: 25
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000031"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    title: "Royal Wedding Reception Stage Setup - Sundarban",
    slug: "royal-wedding-reception-stage-setup-sundarban-49",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_01",
      name: "Wedding & Reception Stage",
      slug: "wedding-reception-stage"
    },
    shortDescription: "Luxurious fresh floral stage setup with ambient warm spotlighting and customized couple seating.",
    fullDescription: "Transform your wedding reception into a fairytale with our signature floral stage. Includes complete structural backdrop framing, premium real orchid & rose combinations, fairy canopy lighting, and royal seating arrangement.",
    pricing: {
      basePrice: 45000,
      discountedPrice: 40000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Standard Floral",
        price: 40000,
        features: ["16ft x 10ft Stage Backdrop","Artificial & Seasonal Flower Mix","Warm Ambience LED Spotlights","Classic Couple Sofa"]
      },
      {
        tier: "Premium Royal",
        price: 65000,
        features: ["24ft x 12ft Grand Stage Backdrop","100% Fresh Imported Floral Cascades","Intelligent Moving Head Stage Lights","Royal Velvet Throne Chairs","Bride & Groom Entry Pathway Runner"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 6,
      teardownDurationHours: 2,
      minimumNoticeDays: 4,
      spaceRequirement: "Minimum 20ft width, 12ft depth",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 27,
      bookingCount: 30
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000032"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    title: "Bride & Groom Grand Entry Pathway - Sundarban",
    slug: "bride-groom-grand-entry-pathway-sundarban-50",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_03",
      name: "Bride & Groom Grand Entry",
      slug: "bride-groom-grand-entry"
    },
    shortDescription: "Magical entry aisle with floral arches, cold pyro fireworks, and romantic fog walkway.",
    fullDescription: "Make a show-stopping entrance on your special day. Includes continuous floral arches, red or white aisle carpet, automated cold spark machines for entry moments, and dense dry ice smoke clouds.",
    pricing: {
      basePrice: 25000,
      discountedPrice: 22000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Classic Aisle",
        price: 22000,
        features: ["40ft Velvet Red Carpet","6 Floral Pillar Stands","Warm Ambient Spotlights"]
      },
      {
        tier: "Cinematic Fireworks Entry",
        price: 38000,
        features: ["60ft Premium White Carpet","10 Floral Archways with Crystal Hangings","4x Cold Pyro Firework Firing","Heavy Dry Ice Cloud Machine"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Aisle length at least 30ft",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 30,
      bookingCount: 35
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000033"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    title: "Adult Milestone Birthday & Glam Gala - Sundarban",
    slug: "adult-milestone-birthday-glam-gala-sundarban-51",
    category: "Birthday & Anniversary",
    subCategory: {
      id: "sub_06",
      name: "Adult Milestone Birthday",
      slug: "adult-milestone-birthday"
    },
    shortDescription: "Sophisticated black, gold, and champagne balloon styling with shimmer wall and marquee numbers.",
    fullDescription: "Turn 21, 30, 40, or 50 in glamorous style! Includes dazzling gold/silver shimmer sequin walls, light-up 4ft marquee LED numbers, organic matte balloon garlands, and cocktail lounge styling.",
    pricing: {
      basePrice: 22000,
      discountedPrice: 19000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Glam Shimmer",
        price: 19000,
        features: ["8ft x 8ft Gold Shimmer Backdrop","Black & Chrome Gold Balloon Arch","3ft Lighted Marquee Age Numbers","Cake Plinth Stand"]
      },
      {
        tier: "VIP Champagne Gala",
        price: 34000,
        features: ["12ft Shimmer Wall with Custom Neon","4ft Giant Marquee Numbers","Champagne Tower Stand & Neon Sign","Cocktail High-Top Table Linens (4 Units)"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3.5,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 12ft width",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 33,
      bookingCount: 40
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000034"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    title: "Romantic Anniversary & Candlelight Dining - Sundarban",
    slug: "romantic-anniversary-candlelight-dining-sundarban-52",
    category: "Birthday & Anniversary",
    subCategory: {
      id: "sub_07",
      name: "Romantic Anniversary & Candlelight",
      slug: "romantic-anniversary-candlelight"
    },
    shortDescription: "Intimate cabana canopy with hundreds of glass tea-light candles, rose petals, and fairy lights.",
    fullDescription: "Surprise your partner with an unforgettable romantic anniversary evening. Includes private sheer draped cabana, aromatic fresh rose petal pathways, warm ambient tea-lights, and custom couple photo frame wall.",
    pricing: {
      basePrice: 16000,
      discountedPrice: 14000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Sweet Romance",
        price: 14000,
        features: ["Private Draped Canopy Cabana","50 Glass Candle Holders & Fairy Lights","Rose Petal Heart Pathway","Dinner Table Styling"]
      },
      {
        tier: "Grand Luxury Romance",
        price: 25000,
        features: ["Rooftop or Garden Luxe Cabana","150+ Ambient Tea Lights & Lanterns","Custom Memory Photo Gallery on Fairy Strings","Fresh Red Rose Floral Centerpiece","Champagne Bucket & Customized Neon Sign"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3,
      teardownDurationHours: 1,
      minimumNoticeDays: 1,
      spaceRequirement: "Minimum 10ft x 10ft area",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 36,
      bookingCount: 45
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000035"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    title: "Royal Wedding Reception Stage Setup - Kirtankhola",
    slug: "royal-wedding-reception-stage-setup-kirtankhola-53",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_01",
      name: "Wedding & Reception Stage",
      slug: "wedding-reception-stage"
    },
    shortDescription: "Luxurious fresh floral stage setup with ambient warm spotlighting and customized couple seating.",
    fullDescription: "Transform your wedding reception into a fairytale with our signature floral stage. Includes complete structural backdrop framing, premium real orchid & rose combinations, fairy canopy lighting, and royal seating arrangement.",
    pricing: {
      basePrice: 45000,
      discountedPrice: 40000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Standard Floral",
        price: 40000,
        features: ["16ft x 10ft Stage Backdrop","Artificial & Seasonal Flower Mix","Warm Ambience LED Spotlights","Classic Couple Sofa"]
      },
      {
        tier: "Premium Royal",
        price: 65000,
        features: ["24ft x 12ft Grand Stage Backdrop","100% Fresh Imported Floral Cascades","Intelligent Moving Head Stage Lights","Royal Velvet Throne Chairs","Bride & Groom Entry Pathway Runner"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 6,
      teardownDurationHours: 2,
      minimumNoticeDays: 4,
      spaceRequirement: "Minimum 20ft width, 12ft depth",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 39,
      bookingCount: 50
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000036"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    title: "Vibrant Gaye Holud & Mehendi Canopy - Kirtankhola",
    slug: "vibrant-gaye-holud-mehendi-canopy-kirtankhola-54",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_02",
      name: "Haldi & Mehendi Setup",
      slug: "haldi-mehendi-setup"
    },
    shortDescription: "Traditional Bengali marigold decor with wooden swings, rickshaw art accents, and vibrant drapes.",
    fullDescription: "An authentic festive atmosphere for your Gaye Holud and Mehendi night. Features vibrant yellow & orange drape cascades, clay pottery props, traditional kulo decor, and cozy floor seating cushions.",
    pricing: {
      basePrice: 32000,
      discountedPrice: 28000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Festive Basic",
        price: 28000,
        features: ["14ft Backdrop with Fresh Genda Flowers","Traditional Decorated Wooden Swing","4 Side Floor Seating Mattresses","Warm Fairy Lights"]
      },
      {
        tier: "Grand Holud Extravaganza",
        price: 45000,
        features: ["20ft 3D Floral Canopy","Authentic Hand-Painted Rickshaw Props","Custom Neon 'Gaye Holud' Sign","Mehendi Lounge Setup with Low Tables"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Minimum 15ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 42,
      bookingCount: 55
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000037"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    title: "Akika & Naming Ceremony Stage - Kirtankhola",
    slug: "akika-naming-ceremony-stage-kirtankhola-55",
    category: "Baby Shower & Family Gatherings",
    subCategory: {
      id: "sub_14",
      name: "Akika & Naming Ceremony",
      slug: "akika-naming-ceremony"
    },
    shortDescription: "Traditional Islamic & cultural aesthetic stage with fresh jasmine, golden lanterns, and cradle decor.",
    fullDescription: "Honor this blessed milestone with pure, elegant decoration. White and gold drapes, real white rose & jasmine flower ropes, Moroccan brass lanterns, and a beautifully adorned baby cradle.",
    pricing: {
      basePrice: 22000,
      discountedPrice: 19000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Blessed Classic",
        price: 19000,
        features: ["12ft White & Gold Draped Backdrop","Decorated Traditional Baby Cradle","Fresh Flower Garlands","Moroccan Lantern Accents"]
      },
      {
        tier: "Royal Noor Setup",
        price: 33000,
        features: ["16ft Grand Arch with Fresh Floral Ceiling Droop","Ornate Brass Cradle with Velvet Cushions","Custom Arabic Calligraphy Name Board","Family Seating Diwan with Bolsters"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 14ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 45,
      bookingCount: 60
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000038"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    title: "Housewarming & Family Get-Together Decor - Kirtankhola",
    slug: "housewarming-family-get-together-decor-kirtankhola-56",
    category: "Baby Shower & Family Gatherings",
    subCategory: {
      id: "sub_16",
      name: "Housewarming & Get-Togethers",
      slug: "housewarming-get-togethers"
    },
    shortDescription: "Welcoming entrance floral toran, cozy drawing room fairy lights, and elegant dining table styling.",
    fullDescription: "Make your new home feel warm and celebratory for housewarming guests. Includes auspicious front door flower torans, soft fairy light ceilings, scented candle centerpieces, and welcoming hallway decor.",
    pricing: {
      basePrice: 15000,
      discountedPrice: 13000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Cozy Welcome",
        price: 13000,
        features: ["Front Door Floral Toran & Rangoli","Living Room Fairy Light Curtains","Dining Table Floral Runner","Welcome Standee"]
      },
      {
        tier: "New Home Celebration",
        price: 22000,
        features: ["Grand Entrance Arch with Fresh Flowers","Full Apartment Ambient Fairy Lighting","Balcony & Living Room Floral Accents","Custom Acrylic 'Home Sweet Home' Sign"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3,
      teardownDurationHours: 1,
      minimumNoticeDays: 1,
      spaceRequirement: "Residential apartment / house",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 48,
      bookingCount: 65
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000039"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    title: "Vibrant Gaye Holud & Mehendi Canopy - Rangpur",
    slug: "vibrant-gaye-holud-mehendi-canopy-rangpur-57",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_02",
      name: "Haldi & Mehendi Setup",
      slug: "haldi-mehendi-setup"
    },
    shortDescription: "Traditional Bengali marigold decor with wooden swings, rickshaw art accents, and vibrant drapes.",
    fullDescription: "An authentic festive atmosphere for your Gaye Holud and Mehendi night. Features vibrant yellow & orange drape cascades, clay pottery props, traditional kulo decor, and cozy floor seating cushions.",
    pricing: {
      basePrice: 32000,
      discountedPrice: 28000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Festive Basic",
        price: 28000,
        features: ["14ft Backdrop with Fresh Genda Flowers","Traditional Decorated Wooden Swing","4 Side Floor Seating Mattresses","Warm Fairy Lights"]
      },
      {
        tier: "Grand Holud Extravaganza",
        price: 45000,
        features: ["20ft 3D Floral Canopy","Authentic Hand-Painted Rickshaw Props","Custom Neon 'Gaye Holud' Sign","Mehendi Lounge Setup with Low Tables"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Minimum 15ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 51,
      bookingCount: 70
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800003a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    title: "Bride & Groom Grand Entry Pathway - Rangpur",
    slug: "bride-groom-grand-entry-pathway-rangpur-58",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_03",
      name: "Bride & Groom Grand Entry",
      slug: "bride-groom-grand-entry"
    },
    shortDescription: "Magical entry aisle with floral arches, cold pyro fireworks, and romantic fog walkway.",
    fullDescription: "Make a show-stopping entrance on your special day. Includes continuous floral arches, red or white aisle carpet, automated cold spark machines for entry moments, and dense dry ice smoke clouds.",
    pricing: {
      basePrice: 25000,
      discountedPrice: 22000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Classic Aisle",
        price: 22000,
        features: ["40ft Velvet Red Carpet","6 Floral Pillar Stands","Warm Ambient Spotlights"]
      },
      {
        tier: "Cinematic Fireworks Entry",
        price: 38000,
        features: ["60ft Premium White Carpet","10 Floral Archways with Crystal Hangings","4x Cold Pyro Firework Firing","Heavy Dry Ice Cloud Machine"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Aisle length at least 30ft",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 54,
      bookingCount: 75
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800003b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    title: "Product Launch & Trade Expo Pavilion - Rangpur",
    slug: "product-launch-trade-expo-pavilion-rangpur-59",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_11",
      name: "Product Launch & Expo Stalls",
      slug: "product-launch-expo-stalls"
    },
    shortDescription: "Futuristic reveal stage with motorized curtain drop, branded display pedestals, and dynamic laser neon.",
    fullDescription: "Deliver maximum hype for your new product release. Includes concealed curtain drop mechanisms for dramatic reveals, custom illuminated product pedestals, high-contrast brand backdrops, and promotional stall framing.",
    pricing: {
      basePrice: 48000,
      discountedPrice: 42000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Launch Essential",
        price: 42000,
        features: ["16ft Product Reveal Backdrop","Illuminated Center Product Pedestal","Spotlight Pin Spot Focus Lighting","Branded Media Backdrop"]
      },
      {
        tier: "Grand Reveal Mega",
        price: 75000,
        features: ["28ft Custom Built Exhibition Booth","Automatic Kabuki Curtain Drop System","Cold Pyro Sparkular Blast on Reveal","RGB LED Strip Product Counters & Neon Wall"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 7,
      teardownDurationHours: 3,
      minimumNoticeDays: 5,
      spaceRequirement: "Exhibition center or convention hall",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 57,
      bookingCount: 80
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800003c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    title: "Corporate Dinner & Executive Meetup Decor - Rangpur",
    slug: "corporate-dinner-executive-meetup-decor-rangpur-60",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_12",
      name: "Corporate Dinners & Meetups",
      slug: "corporate-dinners-meetups"
    },
    shortDescription: "Refined banquet table decor with branded floral centerpieces, warm uplighting, and acoustic stage.",
    fullDescription: "Elevate your corporate dinner and networking night with tasteful luxury. Sophisticated table runners, modern metallic floral arrangements, branded place settings, and subtle perimeter LED uplighting.",
    pricing: {
      basePrice: 30000,
      discountedPrice: 26000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Banquet Elegant",
        price: 26000,
        features: ["10 Decorated Round Dinner Tables","Fresh Floral Low Centerpieces","Perimeter Warm Wall Uplighting (8 Units)","Welcome Entry Signboard"]
      },
      {
        tier: "Executive President Gala",
        price: 45000,
        features: ["20 Banquet Tables with Crystal Centerpieces","Acoustic Small Stage for Live Band/Speeches","16 Wireless DMX Mood Uplights","Branded Photo Lounge Corner"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Banquet hall with 10+ tables",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 15,
      bookingCount: 85
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800003d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    title: "Pastel Baby Shower & Gender Reveal Setup - Brahmaputra",
    slug: "pastel-baby-shower-gender-reveal-setup-brahmaputra-61",
    category: "Baby Shower & Family Gatherings",
    subCategory: {
      id: "sub_13",
      name: "Baby Shower & Gender Reveal",
      slug: "baby-shower-gender-reveal"
    },
    shortDescription: "Whimsical pastel pink and baby blue balloon arches with giant teddy bears and balloon pop box.",
    fullDescription: "Celebrate the arrival of your little one with a heartwarming baby shower. Custom balloon clouds, teddy bear nursery props, candy table styling, and our signature giant gender reveal mystery box.",
    pricing: {
      basePrice: 20000,
      discountedPrice: 17000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Pastel Joy",
        price: 17000,
        features: ["10ft Dual-Tone Balloon Arch","'Oh Baby' Neon Sign on Grass Wall","Mother-to-be Throne Chair","Dessert Table Props"]
      },
      {
        tier: "Grand Gender Reveal",
        price: 30000,
        features: ["14ft Organic Pastel Balloon Wall","Mystery Balloon Drop Box or Smoke Cannon","Giant Plush Teddy Bears & Plinths","Personalized Photo Backdrop & Favors Table"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3.5,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "Living room, rooftop, or party hall",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 18,
      bookingCount: 90
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800003e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    title: "Akika & Naming Ceremony Stage - Brahmaputra",
    slug: "akika-naming-ceremony-stage-brahmaputra-62",
    category: "Baby Shower & Family Gatherings",
    subCategory: {
      id: "sub_14",
      name: "Akika & Naming Ceremony",
      slug: "akika-naming-ceremony"
    },
    shortDescription: "Traditional Islamic & cultural aesthetic stage with fresh jasmine, golden lanterns, and cradle decor.",
    fullDescription: "Honor this blessed milestone with pure, elegant decoration. White and gold drapes, real white rose & jasmine flower ropes, Moroccan brass lanterns, and a beautifully adorned baby cradle.",
    pricing: {
      basePrice: 22000,
      discountedPrice: 19000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Blessed Classic",
        price: 19000,
        features: ["12ft White & Gold Draped Backdrop","Decorated Traditional Baby Cradle","Fresh Flower Garlands","Moroccan Lantern Accents"]
      },
      {
        tier: "Royal Noor Setup",
        price: 33000,
        features: ["16ft Grand Arch with Fresh Floral Ceiling Droop","Ornate Brass Cradle with Velvet Cushions","Custom Arabic Calligraphy Name Board","Family Seating Diwan with Bolsters"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 14ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 21,
      bookingCount: 95
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800003f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    title: "Religious & Cultural Festival Pavilion - Brahmaputra",
    slug: "religious-cultural-festival-pavilion-brahmaputra-63",
    category: "Baby Shower & Family Gatherings",
    subCategory: {
      id: "sub_15",
      name: "Religious & Cultural Festivals",
      slug: "religious-cultural-festivals"
    },
    shortDescription: "Vibrant traditional fair decor for Eid, Puja, or cultural carnivals with lanterns and clay art.",
    fullDescription: "Capturing the festive spirit of Eid, Durga Puja, or Pahela Baishakh with folk-inspired decor. Hand-painted motifs, decorative colorful umbrella ceilings, ambient brass lanterns, and festive photo booths.",
    pricing: {
      basePrice: 35000,
      discountedPrice: 30000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Festive Pavilion",
        price: 30000,
        features: ["18ft Themed Cultural Backdrop","Ceiling Hanging Lanterns / Umbrellas","Folk Art Entrance Gate","Warm Spotlights"]
      },
      {
        tier: "Grand Mela Extravaganza",
        price: 55000,
        features: ["30ft Festival Main Stage & Altar Setup","Full Overhead Colorful Canopy Drapery","Clay Pottery & Rickshaw Art Installation","Festive Photo Spot with Props"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Community center or outdoor open area",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 24,
      bookingCount: 100
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000040"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    title: "Rooftop Party Canopy & Fairy Light Sky - Brahmaputra",
    slug: "rooftop-party-canopy-fairy-light-sky-brahmaputra-64",
    category: "Home & Rooftop Intimate Setups",
    subCategory: {
      id: "sub_17",
      name: "Rooftop Party Canopy",
      slug: "rooftop-party-canopy"
    },
    shortDescription: "Romantic overhead fairy light tunnel with bohemian wooden pallets, cushions, and faux fire pit.",
    fullDescription: "Turn your rooftop into an enchanting stargazing lounge. Hundreds of meters of twinkling fairy lights forming an overhead sky canopy, low wooden table seating, cozy boho floor cushions, and rustic lanterns.",
    pricing: {
      basePrice: 22000,
      discountedPrice: 19000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Boho Rooftop Standard",
        price: 19000,
        features: ["Overhead Fairy Light Canopy (20ft x 20ft)","Low Wooden Pallet Seating for 12","Bohemian Rugs & 15 Cushions","Mason Jar Lanterns"]
      },
      {
        tier: "Luxe Starlit Rooftop",
        price: 34000,
        features: ["Full Rooftop Fairy Light Web with Bulbs","Cabana Tent Structure with White Sheer Drapes","Acoustic Speaker & Mic Setup","Custom Neon Sign & BBQ Corner Decor"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Rooftop minimum 400 sq ft",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 27,
      bookingCount: 25
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000041"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    title: "Drawing Room & Balcony Aesthetic Makeover - Brahmaputra",
    slug: "drawing-room-balcony-aesthetic-makeover-brahmaputra-65",
    category: "Home & Rooftop Intimate Setups",
    subCategory: {
      id: "sub_18",
      name: "Drawing Room & Balcony Decor",
      slug: "drawing-room-balcony-decor"
    },
    shortDescription: "Intimate corner drape canopy with artificial ivy creepers, floor mats, and warm Edison glow.",
    fullDescription: "Upgrade your living space for compact indoor celebrations. Aesthetic drapery, faux botanical greenery walls, warm filament lighting, and stylish velvet accent cushions for small cozy gatherings.",
    pricing: {
      basePrice: 12000,
      discountedPrice: 10000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Cozy Corner",
        price: 10000,
        features: ["8ft Corner Backdrop Drapes","Warm Edison Light Chandelier","Balcony Railing Fairy Lights","Floor Rug & 6 Cushions"]
      },
      {
        tier: "Full Room Ambiance",
        price: 18000,
        features: ["Drawing Room Accent Wall Backdrop","Balcony Greenery Vines with Fairy Drops","Ceiling Warm Glow String Lights","Mini Photo Frame Memory Grid"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 2.5,
      teardownDurationHours: 1,
      minimumNoticeDays: 1,
      spaceRequirement: "Standard apartment room or balcony",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 30,
      bookingCount: 30
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000042"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    title: "Royal Wedding Reception Stage Setup - Moynamoti",
    slug: "royal-wedding-reception-stage-setup-moynamoti-66",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_01",
      name: "Wedding & Reception Stage",
      slug: "wedding-reception-stage"
    },
    shortDescription: "Luxurious fresh floral stage setup with ambient warm spotlighting and customized couple seating.",
    fullDescription: "Transform your wedding reception into a fairytale with our signature floral stage. Includes complete structural backdrop framing, premium real orchid & rose combinations, fairy canopy lighting, and royal seating arrangement.",
    pricing: {
      basePrice: 45000,
      discountedPrice: 40000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Standard Floral",
        price: 40000,
        features: ["16ft x 10ft Stage Backdrop","Artificial & Seasonal Flower Mix","Warm Ambience LED Spotlights","Classic Couple Sofa"]
      },
      {
        tier: "Premium Royal",
        price: 65000,
        features: ["24ft x 12ft Grand Stage Backdrop","100% Fresh Imported Floral Cascades","Intelligent Moving Head Stage Lights","Royal Velvet Throne Chairs","Bride & Groom Entry Pathway Runner"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 6,
      teardownDurationHours: 2,
      minimumNoticeDays: 4,
      spaceRequirement: "Minimum 20ft width, 12ft depth",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 33,
      bookingCount: 35
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000043"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    title: "Bride & Groom Grand Entry Pathway - Moynamoti",
    slug: "bride-groom-grand-entry-pathway-moynamoti-67",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_03",
      name: "Bride & Groom Grand Entry",
      slug: "bride-groom-grand-entry"
    },
    shortDescription: "Magical entry aisle with floral arches, cold pyro fireworks, and romantic fog walkway.",
    fullDescription: "Make a show-stopping entrance on your special day. Includes continuous floral arches, red or white aisle carpet, automated cold spark machines for entry moments, and dense dry ice smoke clouds.",
    pricing: {
      basePrice: 25000,
      discountedPrice: 22000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Classic Aisle",
        price: 22000,
        features: ["40ft Velvet Red Carpet","6 Floral Pillar Stands","Warm Ambient Spotlights"]
      },
      {
        tier: "Cinematic Fireworks Entry",
        price: 38000,
        features: ["60ft Premium White Carpet","10 Floral Archways with Crystal Hangings","4x Cold Pyro Firework Firing","Heavy Dry Ice Cloud Machine"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Aisle length at least 30ft",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 36,
      bookingCount: 40
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000044"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    title: "Romantic Engagement & Ring Ceremony Decor - Moynamoti",
    slug: "romantic-engagement-ring-ceremony-decor-moynamoti-68",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_04",
      name: "Engagement & Ring Ceremony",
      slug: "engagement-ring-ceremony"
    },
    shortDescription: "Elegant geometric floral ring backdrop with romantic neon signage and acrylic pedestals.",
    fullDescription: "Celebrate the beginning of forever with an intimate, chic engagement setup. Featuring customized metallic circular arches, delicate pastel florals, mirror pedestals for ring exchange, and candle stands.",
    pricing: {
      basePrice: 28000,
      discountedPrice: 24000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Chic Minimal",
        price: 24000,
        features: ["7ft Circular Metallic Ring Arch","Pastel Artificial Florals","Custom 'Better Together' Neon Sign","Dual Acrylic Ring Pedestals"]
      },
      {
        tier: "Luxe Botanical Ring",
        price: 38000,
        features: ["8ft Double Ring Geometric Arch","100% Fresh Hydrangea & Rose Wrap","Warm Edison Bulb Chandelier","Velvet Couple Seating with Rug"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 12ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 39,
      bookingCount: 45
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000045"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    title: "Custom Neon Signs & Marquee Letter Rental - Moynamoti",
    slug: "custom-neon-signs-marquee-letter-rental-moynamoti-69",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_20",
      name: "Custom Neon Signs & Marquee Letters",
      slug: "custom-neon-signs-marquee-letters"
    },
    shortDescription: "Vibrant neon flex signage on acrylic backing and 4ft illuminated vintage marquee letters.",
    fullDescription: "Make your event Instagrammable with bespoke glowing text. Choose from our popular catalog ('Better Together', 'Happily Ever After', 'Crazy In Love') or order custom text with giant lightbulb marquee letters.",
    pricing: {
      basePrice: 10000,
      discountedPrice: 8500,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Neon Sign Rental",
        price: 8500,
        features: ["Choice of 1 Stock Neon Sign (up to 3ft)","Clear Acrylic Hanging Chain & Stand","Dimmer Controller & Long Power Cable"]
      },
      {
        tier: "Giant Marquee + Neon Combo",
        price: 18000,
        features: ["4ft Light-Up Marquee Letters (up to 4 chars e.g. LOVE)","1 Custom or Stock Neon Flex Sign","Faux Greenery Backdrop Wall (8ft x 8ft)"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 1.5,
      teardownDurationHours: 0.5,
      minimumNoticeDays: 1,
      spaceRequirement: "Wall or stand space 8ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 42,
      bookingCount: 50
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000046"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    title: "Special Effects - Cold Pyro & Dry Ice Low Fog - Moynamoti",
    slug: "special-effects-cold-pyro-dry-ice-low-fog-moynamoti-70",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_22",
      name: "Special Effects (Fog, Smoke & Pyro)",
      slug: "special-effects-fog-smoke-pyro"
    },
    shortDescription: "Non-hazardous indoor cold spark fountains and cloud-like heavy dry ice smoke for stage entries.",
    fullDescription: "Create breathless cinematic moments during bridal entries, first dances, or cake cutting. Our special effects use safe, non-smoky cold pyros (safe for indoor ballroom carpets) and heavy floor-hugging dry ice fog.",
    pricing: {
      basePrice: 18000,
      discountedPrice: 15000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Entry FX Pack",
        price: 15000,
        features: ["4x Cold Pyro Sparkular Machines (2 Firings)","1x Heavy Dry Ice Low Fog Machine","Certified Special FX Operator"]
      },
      {
        tier: "Grand Stage FX Spectacular",
        price: 28000,
        features: ["8x Cold Spark Machines (4 Continuous Blasts)","2x High-Output Dry Ice Machines for Dance Floor","CO2 Jet Blaster Guns (2 Units)","Full Event Coordination with DJ/Band"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 2,
      teardownDurationHours: 1,
      minimumNoticeDays: 1,
      spaceRequirement: "Stage front & aisle",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 45,
      bookingCount: 55
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000047"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    title: "Executive Conference & Seminar Staging - Urban",
    slug: "executive-conference-seminar-staging-urban-71",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_09",
      name: "Conferences & Seminars",
      slug: "conferences-seminars"
    },
    shortDescription: "Sleek matte stage backdrop with acrylic branded podium, LED wash lights, and crisp projection framing.",
    fullDescription: "Professional corporate stage setups engineered for board meetings, tech conferences, and annual seminars. Clean lines, wrinkle-free tension fabric prints, branded speaker podiums, and professional lighting wash.",
    pricing: {
      basePrice: 38000,
      discountedPrice: 33000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Corporate Standard",
        price: 33000,
        features: ["20ft x 10ft Branded Backdrop Wall","Clear Acrylic Branded Podium","4 Warm LED Stage Wash Lights","Stage Carpet Runner"]
      },
      {
        tier: "High-Tech Executive",
        price: 55000,
        features: ["30ft x 12ft Seamless Matte Backdrop","Dual LED Screen Framing & Truss Structure","VIP Speaker Couch Seating Setup","Wireless Microphones & Stage Ambient Lighting"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Auditorium or hall stage",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 48,
      bookingCount: 60
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000048"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    title: "Gala & Annual Award Night Stage Setup - Urban",
    slug: "gala-annual-award-night-stage-setup-urban-72",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_10",
      name: "Gala & Annual Award Nights",
      slug: "gala-annual-award-nights"
    },
    shortDescription: "Glamorous red carpet step-and-repeat media wall with golden stanchions, spotlighting, and trophy display.",
    fullDescription: "Create an unforgettable celebratory awards evening. High-impact black and gold stage aesthetics, branded media photo wall with velvet rope stanchions, custom trophy display plinths, and dynamic spotlighting.",
    pricing: {
      basePrice: 42000,
      discountedPrice: 37000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Red Carpet Gala",
        price: 37000,
        features: ["24ft Award Stage Backdrop","10ft Step-and-Repeat Media Wall","30ft Red Carpet with Golden Stanchions","Trophy Plinth Display"]
      },
      {
        tier: "VIP Star Night",
        price: 68000,
        features: ["36ft Multi-Tier Stage Backdrop with LED Trim","Intelligent Moving Head Lighting FX","Custom Neon Brand Logo & Trophy Stage","Full Hall Red Carpet Walkway & Photo Booth"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 6,
      teardownDurationHours: 2.5,
      minimumNoticeDays: 4,
      spaceRequirement: "Grand Ballroom or Hall",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 51,
      bookingCount: 65
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000049"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    title: "Product Launch & Trade Expo Pavilion - Urban",
    slug: "product-launch-trade-expo-pavilion-urban-73",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_11",
      name: "Product Launch & Expo Stalls",
      slug: "product-launch-expo-stalls"
    },
    shortDescription: "Futuristic reveal stage with motorized curtain drop, branded display pedestals, and dynamic laser neon.",
    fullDescription: "Deliver maximum hype for your new product release. Includes concealed curtain drop mechanisms for dramatic reveals, custom illuminated product pedestals, high-contrast brand backdrops, and promotional stall framing.",
    pricing: {
      basePrice: 48000,
      discountedPrice: 42000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Launch Essential",
        price: 42000,
        features: ["16ft Product Reveal Backdrop","Illuminated Center Product Pedestal","Spotlight Pin Spot Focus Lighting","Branded Media Backdrop"]
      },
      {
        tier: "Grand Reveal Mega",
        price: 75000,
        features: ["28ft Custom Built Exhibition Booth","Automatic Kabuki Curtain Drop System","Cold Pyro Sparkular Blast on Reveal","RGB LED Strip Product Counters & Neon Wall"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 7,
      teardownDurationHours: 3,
      minimumNoticeDays: 5,
      spaceRequirement: "Exhibition center or convention hall",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 54,
      bookingCount: 70
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800004a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    title: "Kids Themed Fantasy Birthday Setup - Urban",
    slug: "kids-themed-fantasy-birthday-setup-urban-74",
    category: "Birthday & Anniversary",
    subCategory: {
      id: "sub_05",
      name: "Kids Themed Birthday",
      slug: "kids-themed-birthday"
    },
    shortDescription: "Custom cartoon and fantasy 3D backdrop with organic balloon garlands and character props.",
    fullDescription: "Bring your child's favorite characters to life with custom 3D cutouts, vibrant layered balloon arches, matching cake table styling, and customized name light board.",
    pricing: {
      basePrice: 18000,
      discountedPrice: 15000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Themed Standard",
        price: 15000,
        features: ["8ft x 8ft Printed Backdrop","Double Balloon Garland Arch","2 Custom Character Standees","Themed Cake Table & Props"]
      },
      {
        tier: "3D Fantasy Mega",
        price: 26000,
        features: ["12ft Layered 3D Cutout Backdrop","Full Organic Balloon Tunnel","4 Character Standees + LED Name Board","Kids Tableware & Themed Party Bags"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 10ft width",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 57,
      bookingCount: 75
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800004b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    title: "Adult Milestone Birthday & Glam Gala - Urban",
    slug: "adult-milestone-birthday-glam-gala-urban-75",
    category: "Birthday & Anniversary",
    subCategory: {
      id: "sub_06",
      name: "Adult Milestone Birthday",
      slug: "adult-milestone-birthday"
    },
    shortDescription: "Sophisticated black, gold, and champagne balloon styling with shimmer wall and marquee numbers.",
    fullDescription: "Turn 21, 30, 40, or 50 in glamorous style! Includes dazzling gold/silver shimmer sequin walls, light-up 4ft marquee LED numbers, organic matte balloon garlands, and cocktail lounge styling.",
    pricing: {
      basePrice: 22000,
      discountedPrice: 19000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Glam Shimmer",
        price: 19000,
        features: ["8ft x 8ft Gold Shimmer Backdrop","Black & Chrome Gold Balloon Arch","3ft Lighted Marquee Age Numbers","Cake Plinth Stand"]
      },
      {
        tier: "VIP Champagne Gala",
        price: 34000,
        features: ["12ft Shimmer Wall with Custom Neon","4ft Giant Marquee Numbers","Champagne Tower Stand & Neon Sign","Cocktail High-Top Table Linens (4 Units)"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3.5,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 12ft width",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 15,
      bookingCount: 80
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800004c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    title: "Royal Wedding Reception Stage Setup - Velvet",
    slug: "royal-wedding-reception-stage-setup-velvet-76",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_01",
      name: "Wedding & Reception Stage",
      slug: "wedding-reception-stage"
    },
    shortDescription: "Luxurious fresh floral stage setup with ambient warm spotlighting and customized couple seating.",
    fullDescription: "Transform your wedding reception into a fairytale with our signature floral stage. Includes complete structural backdrop framing, premium real orchid & rose combinations, fairy canopy lighting, and royal seating arrangement.",
    pricing: {
      basePrice: 45000,
      discountedPrice: 40000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Standard Floral",
        price: 40000,
        features: ["16ft x 10ft Stage Backdrop","Artificial & Seasonal Flower Mix","Warm Ambience LED Spotlights","Classic Couple Sofa"]
      },
      {
        tier: "Premium Royal",
        price: 65000,
        features: ["24ft x 12ft Grand Stage Backdrop","100% Fresh Imported Floral Cascades","Intelligent Moving Head Stage Lights","Royal Velvet Throne Chairs","Bride & Groom Entry Pathway Runner"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 6,
      teardownDurationHours: 2,
      minimumNoticeDays: 4,
      spaceRequirement: "Minimum 20ft width, 12ft depth",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 18,
      bookingCount: 85
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800004d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    title: "Vibrant Gaye Holud & Mehendi Canopy - Velvet",
    slug: "vibrant-gaye-holud-mehendi-canopy-velvet-77",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_02",
      name: "Haldi & Mehendi Setup",
      slug: "haldi-mehendi-setup"
    },
    shortDescription: "Traditional Bengali marigold decor with wooden swings, rickshaw art accents, and vibrant drapes.",
    fullDescription: "An authentic festive atmosphere for your Gaye Holud and Mehendi night. Features vibrant yellow & orange drape cascades, clay pottery props, traditional kulo decor, and cozy floor seating cushions.",
    pricing: {
      basePrice: 32000,
      discountedPrice: 28000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Festive Basic",
        price: 28000,
        features: ["14ft Backdrop with Fresh Genda Flowers","Traditional Decorated Wooden Swing","4 Side Floor Seating Mattresses","Warm Fairy Lights"]
      },
      {
        tier: "Grand Holud Extravaganza",
        price: 45000,
        features: ["20ft 3D Floral Canopy","Authentic Hand-Painted Rickshaw Props","Custom Neon 'Gaye Holud' Sign","Mehendi Lounge Setup with Low Tables"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Minimum 15ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 21,
      bookingCount: 90
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800004e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    title: "Bride & Groom Grand Entry Pathway - Velvet",
    slug: "bride-groom-grand-entry-pathway-velvet-78",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_03",
      name: "Bride & Groom Grand Entry",
      slug: "bride-groom-grand-entry"
    },
    shortDescription: "Magical entry aisle with floral arches, cold pyro fireworks, and romantic fog walkway.",
    fullDescription: "Make a show-stopping entrance on your special day. Includes continuous floral arches, red or white aisle carpet, automated cold spark machines for entry moments, and dense dry ice smoke clouds.",
    pricing: {
      basePrice: 25000,
      discountedPrice: 22000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Classic Aisle",
        price: 22000,
        features: ["40ft Velvet Red Carpet","6 Floral Pillar Stands","Warm Ambient Spotlights"]
      },
      {
        tier: "Cinematic Fireworks Entry",
        price: 38000,
        features: ["60ft Premium White Carpet","10 Floral Archways with Crystal Hangings","4x Cold Pyro Firework Firing","Heavy Dry Ice Cloud Machine"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Aisle length at least 30ft",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 24,
      bookingCount: 95
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800004f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    title: "Custom Neon Signs & Marquee Letter Rental - Velvet",
    slug: "custom-neon-signs-marquee-letter-rental-velvet-79",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_20",
      name: "Custom Neon Signs & Marquee Letters",
      slug: "custom-neon-signs-marquee-letters"
    },
    shortDescription: "Vibrant neon flex signage on acrylic backing and 4ft illuminated vintage marquee letters.",
    fullDescription: "Make your event Instagrammable with bespoke glowing text. Choose from our popular catalog ('Better Together', 'Happily Ever After', 'Crazy In Love') or order custom text with giant lightbulb marquee letters.",
    pricing: {
      basePrice: 10000,
      discountedPrice: 8500,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Neon Sign Rental",
        price: 8500,
        features: ["Choice of 1 Stock Neon Sign (up to 3ft)","Clear Acrylic Hanging Chain & Stand","Dimmer Controller & Long Power Cable"]
      },
      {
        tier: "Giant Marquee + Neon Combo",
        price: 18000,
        features: ["4ft Light-Up Marquee Letters (up to 4 chars e.g. LOVE)","1 Custom or Stock Neon Flex Sign","Faux Greenery Backdrop Wall (8ft x 8ft)"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 1.5,
      teardownDurationHours: 0.5,
      minimumNoticeDays: 1,
      spaceRequirement: "Wall or stand space 8ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 27,
      bookingCount: 100
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000050"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    title: "Spotlights & Ambient Event Lighting Setup - Velvet",
    slug: "spotlights-ambient-event-lighting-setup-velvet-80",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_21",
      name: "Spotlights & Ambient Lighting",
      slug: "spotlights-ambient-lighting"
    },
    shortDescription: "Intelligent LED par cans, warm stage profiles, and wireless DMX architectural wall washers.",
    fullDescription: "Complete venue mood lighting to transform any plain hall into a warm, dramatic event setting. Includes 12 to 24 high-powered RGBW LED pars, stage spotlighting, and programmable color mixing.",
    pricing: {
      basePrice: 16000,
      discountedPrice: 14000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Ambience Essential",
        price: 14000,
        features: ["10x High-Power RGBW LED Uplights","2x Stage Profile Focus Spotlights","DMX Lighting Controller & Cabling","On-site Light Technician"]
      },
      {
        tier: "Full Venue Illumination",
        price: 26000,
        features: ["20x Wireless DMX Uplights","4x Moving Head Beam Lights","Stage Warm Light Truss Bar","Live Lighting Operator Throughout Event"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Venue perimeter",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 30,
      bookingCount: 25
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000051"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    title: "Gala & Annual Award Night Stage Setup - Velvet",
    slug: "gala-annual-award-night-stage-setup-velvet-81",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_10",
      name: "Gala & Annual Award Nights",
      slug: "gala-annual-award-nights"
    },
    shortDescription: "Glamorous red carpet step-and-repeat media wall with golden stanchions, spotlighting, and trophy display.",
    fullDescription: "Create an unforgettable celebratory awards evening. High-impact black and gold stage aesthetics, branded media photo wall with velvet rope stanchions, custom trophy display plinths, and dynamic spotlighting.",
    pricing: {
      basePrice: 42000,
      discountedPrice: 37000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Red Carpet Gala",
        price: 37000,
        features: ["24ft Award Stage Backdrop","10ft Step-and-Repeat Media Wall","30ft Red Carpet with Golden Stanchions","Trophy Plinth Display"]
      },
      {
        tier: "VIP Star Night",
        price: 68000,
        features: ["36ft Multi-Tier Stage Backdrop with LED Trim","Intelligent Moving Head Lighting FX","Custom Neon Brand Logo & Trophy Stage","Full Hall Red Carpet Walkway & Photo Booth"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 6,
      teardownDurationHours: 2.5,
      minimumNoticeDays: 4,
      spaceRequirement: "Grand Ballroom or Hall",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 33,
      bookingCount: 30
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000052"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    title: "Kids Themed Fantasy Birthday Setup - Balloon",
    slug: "kids-themed-fantasy-birthday-setup-balloon-82",
    category: "Birthday & Anniversary",
    subCategory: {
      id: "sub_05",
      name: "Kids Themed Birthday",
      slug: "kids-themed-birthday"
    },
    shortDescription: "Custom cartoon and fantasy 3D backdrop with organic balloon garlands and character props.",
    fullDescription: "Bring your child's favorite characters to life with custom 3D cutouts, vibrant layered balloon arches, matching cake table styling, and customized name light board.",
    pricing: {
      basePrice: 18000,
      discountedPrice: 15000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Themed Standard",
        price: 15000,
        features: ["8ft x 8ft Printed Backdrop","Double Balloon Garland Arch","2 Custom Character Standees","Themed Cake Table & Props"]
      },
      {
        tier: "3D Fantasy Mega",
        price: 26000,
        features: ["12ft Layered 3D Cutout Backdrop","Full Organic Balloon Tunnel","4 Character Standees + LED Name Board","Kids Tableware & Themed Party Bags"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 10ft width",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 36,
      bookingCount: 35
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000053"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    title: "Adult Milestone Birthday & Glam Gala - Balloon",
    slug: "adult-milestone-birthday-glam-gala-balloon-83",
    category: "Birthday & Anniversary",
    subCategory: {
      id: "sub_06",
      name: "Adult Milestone Birthday",
      slug: "adult-milestone-birthday"
    },
    shortDescription: "Sophisticated black, gold, and champagne balloon styling with shimmer wall and marquee numbers.",
    fullDescription: "Turn 21, 30, 40, or 50 in glamorous style! Includes dazzling gold/silver shimmer sequin walls, light-up 4ft marquee LED numbers, organic matte balloon garlands, and cocktail lounge styling.",
    pricing: {
      basePrice: 22000,
      discountedPrice: 19000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Glam Shimmer",
        price: 19000,
        features: ["8ft x 8ft Gold Shimmer Backdrop","Black & Chrome Gold Balloon Arch","3ft Lighted Marquee Age Numbers","Cake Plinth Stand"]
      },
      {
        tier: "VIP Champagne Gala",
        price: 34000,
        features: ["12ft Shimmer Wall with Custom Neon","4ft Giant Marquee Numbers","Champagne Tower Stand & Neon Sign","Cocktail High-Top Table Linens (4 Units)"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3.5,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 12ft width",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 39,
      bookingCount: 40
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000054"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    title: "1st Birthday Little Prince / Princess Setup - Balloon",
    slug: "1st-birthday-little-prince-princess-setup-balloon-84",
    category: "Birthday & Anniversary",
    subCategory: {
      id: "sub_08",
      name: "1st Birthday Special",
      slug: "1st-birthday-special"
    },
    shortDescription: "Pastel dreamscape setup with giant teddy bears, soft pastel balloon arches, and light-up ONE letters.",
    fullDescription: "Celebrate baby's momentous first year with an enchanting pastel theme. Includes soft gradient balloon walls, illuminated giant 'ONE' marquee letters, high chair decor, and themed milestone photo board.",
    pricing: {
      basePrice: 20000,
      discountedPrice: 17000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Pastel Dream",
        price: 17000,
        features: ["8ft Circle Arch with Pastel Balloon Cloud","3ft Lighted 'ONE' Letters","Baby Milestone Poster Frame","Decorated High Chair"]
      },
      {
        tier: "Royal First Birthday",
        price: 29000,
        features: ["14ft 3D Castle or Cloud Backdrop","Giant 5ft Plush Teddy Bear Prop","Organic Chrome & Pastel Balloon Cascade","Custom Cake Table Cylinder Trio with LED"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3.5,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 12ft width",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 42,
      bookingCount: 45
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000055"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    title: "Drawing Room & Balcony Aesthetic Makeover - Balloon",
    slug: "drawing-room-balcony-aesthetic-makeover-balloon-85",
    category: "Home & Rooftop Intimate Setups",
    subCategory: {
      id: "sub_18",
      name: "Drawing Room & Balcony Decor",
      slug: "drawing-room-balcony-decor"
    },
    shortDescription: "Intimate corner drape canopy with artificial ivy creepers, floor mats, and warm Edison glow.",
    fullDescription: "Upgrade your living space for compact indoor celebrations. Aesthetic drapery, faux botanical greenery walls, warm filament lighting, and stylish velvet accent cushions for small cozy gatherings.",
    pricing: {
      basePrice: 12000,
      discountedPrice: 10000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Cozy Corner",
        price: 10000,
        features: ["8ft Corner Backdrop Drapes","Warm Edison Light Chandelier","Balcony Railing Fairy Lights","Floor Rug & 6 Cushions"]
      },
      {
        tier: "Full Room Ambiance",
        price: 18000,
        features: ["Drawing Room Accent Wall Backdrop","Balcony Greenery Vines with Fairy Drops","Ceiling Warm Glow String Lights","Mini Photo Frame Memory Grid"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 2.5,
      teardownDurationHours: 1,
      minimumNoticeDays: 1,
      spaceRequirement: "Standard apartment room or balcony",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 45,
      bookingCount: 50
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000056"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    title: "Surprise Room Makeover with Balloons & Candles - Balloon",
    slug: "surprise-room-makeover-with-balloons-candles-balloon-86",
    category: "Home & Rooftop Intimate Setups",
    subCategory: {
      id: "sub_19",
      name: "Surprise Room Makeover",
      slug: "surprise-room-makeover"
    },
    shortDescription: "Secret room transformation with ceiling helium balloons, floor candle path, and photo strings.",
    fullDescription: "The ultimate birthday or anniversary surprise executed while your loved one is away. 50+ floating balloons with ribbon tails, LED battery-operated candle trails on the floor, bed decor, and hanging photo polaroids.",
    pricing: {
      basePrice: 14000,
      discountedPrice: 12000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Sweet Surprise",
        price: 12000,
        features: ["40 Helium Ceiling Balloons with Ribbons","Floor Rose Petal Heart Pathway","30 LED Tea Lights","Happy Birthday / Anniversary Banner"]
      },
      {
        tier: "Grand Romantic Ambush",
        price: 20000,
        features: ["80 Metallic Balloons (Ceiling + Floor)","Bed Canopy Styling with Fairy Lights","20 Hanging Polaroid Photo Memories","Custom Neon Light Sign on Wall"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 2,
      teardownDurationHours: 0.5,
      minimumNoticeDays: 1,
      spaceRequirement: "Bedroom or hotel suite",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 48,
      bookingCount: 55
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000057"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    title: "Custom Neon Signs & Marquee Letter Rental - Nocturne",
    slug: "custom-neon-signs-marquee-letter-rental-nocturne-87",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_20",
      name: "Custom Neon Signs & Marquee Letters",
      slug: "custom-neon-signs-marquee-letters"
    },
    shortDescription: "Vibrant neon flex signage on acrylic backing and 4ft illuminated vintage marquee letters.",
    fullDescription: "Make your event Instagrammable with bespoke glowing text. Choose from our popular catalog ('Better Together', 'Happily Ever After', 'Crazy In Love') or order custom text with giant lightbulb marquee letters.",
    pricing: {
      basePrice: 10000,
      discountedPrice: 8500,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Neon Sign Rental",
        price: 8500,
        features: ["Choice of 1 Stock Neon Sign (up to 3ft)","Clear Acrylic Hanging Chain & Stand","Dimmer Controller & Long Power Cable"]
      },
      {
        tier: "Giant Marquee + Neon Combo",
        price: 18000,
        features: ["4ft Light-Up Marquee Letters (up to 4 chars e.g. LOVE)","1 Custom or Stock Neon Flex Sign","Faux Greenery Backdrop Wall (8ft x 8ft)"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 1.5,
      teardownDurationHours: 0.5,
      minimumNoticeDays: 1,
      spaceRequirement: "Wall or stand space 8ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 51,
      bookingCount: 60
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000058"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    title: "Spotlights & Ambient Event Lighting Setup - Nocturne",
    slug: "spotlights-ambient-event-lighting-setup-nocturne-88",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_21",
      name: "Spotlights & Ambient Lighting",
      slug: "spotlights-ambient-lighting"
    },
    shortDescription: "Intelligent LED par cans, warm stage profiles, and wireless DMX architectural wall washers.",
    fullDescription: "Complete venue mood lighting to transform any plain hall into a warm, dramatic event setting. Includes 12 to 24 high-powered RGBW LED pars, stage spotlighting, and programmable color mixing.",
    pricing: {
      basePrice: 16000,
      discountedPrice: 14000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Ambience Essential",
        price: 14000,
        features: ["10x High-Power RGBW LED Uplights","2x Stage Profile Focus Spotlights","DMX Lighting Controller & Cabling","On-site Light Technician"]
      },
      {
        tier: "Full Venue Illumination",
        price: 26000,
        features: ["20x Wireless DMX Uplights","4x Moving Head Beam Lights","Stage Warm Light Truss Bar","Live Lighting Operator Throughout Event"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 3,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Venue perimeter",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 54,
      bookingCount: 65
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000059"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    title: "Special Effects - Cold Pyro & Dry Ice Low Fog - Nocturne",
    slug: "special-effects-cold-pyro-dry-ice-low-fog-nocturne-89",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_22",
      name: "Special Effects (Fog, Smoke & Pyro)",
      slug: "special-effects-fog-smoke-pyro"
    },
    shortDescription: "Non-hazardous indoor cold spark fountains and cloud-like heavy dry ice smoke for stage entries.",
    fullDescription: "Create breathless cinematic moments during bridal entries, first dances, or cake cutting. Our special effects use safe, non-smoky cold pyros (safe for indoor ballroom carpets) and heavy floor-hugging dry ice fog.",
    pricing: {
      basePrice: 18000,
      discountedPrice: 15000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Entry FX Pack",
        price: 15000,
        features: ["4x Cold Pyro Sparkular Machines (2 Firings)","1x Heavy Dry Ice Low Fog Machine","Certified Special FX Operator"]
      },
      {
        tier: "Grand Stage FX Spectacular",
        price: 28000,
        features: ["8x Cold Spark Machines (4 Continuous Blasts)","2x High-Output Dry Ice Machines for Dance Floor","CO2 Jet Blaster Guns (2 Units)","Full Event Coordination with DJ/Band"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 2,
      teardownDurationHours: 1,
      minimumNoticeDays: 1,
      spaceRequirement: "Stage front & aisle",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 57,
      bookingCount: 70
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800005a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    title: "360 Video Booth & Instant Photo Booth - Nocturne",
    slug: "360-video-booth-instant-photo-booth-nocturne-90",
    category: "Lighting, FX & Rentals",
    subCategory: {
      id: "sub_23",
      name: "Photo Booth & 360 Video Booth",
      slug: "photo-booth-360-video-booth"
    },
    shortDescription: "Motorized 360 rotating video platform with slow-motion effects, ring light, and instant QR sharing.",
    fullDescription: "The ultimate guest entertainment activation. Guests stand on a platform while a camera rotates around them capturing HD 360 slow-motion videos with custom event branding overlays and instant mobile download.",
    pricing: {
      basePrice: 24000,
      discountedPrice: 20000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "360 Video Booth 3 Hours",
        price: 20000,
        features: ["360 Motorized Platform (holds 4 guests)","Studio Ring Light & RGB Tube Lighting","Custom Video Overlay & Music","Instant AirDrop / QR Code Sharing","2 Friendly Attendants"]
      },
      {
        tier: "360 VIP Deluxe 5 Hours",
        price: 34000,
        features: ["Full Event Duration (up to 5 hours)","Red Carpet & Golden Stanchion Enclosure","Fun Props & Money Gun","Custom Branded Backdrop Enclosure","Online Live Gallery Access"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 2,
      teardownDurationHours: 1,
      minimumNoticeDays: 2,
      spaceRequirement: "10ft x 10ft open floor area",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 15,
      bookingCount: 75
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800005b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    title: "Executive Conference & Seminar Staging - Nocturne",
    slug: "executive-conference-seminar-staging-nocturne-91",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_09",
      name: "Conferences & Seminars",
      slug: "conferences-seminars"
    },
    shortDescription: "Sleek matte stage backdrop with acrylic branded podium, LED wash lights, and crisp projection framing.",
    fullDescription: "Professional corporate stage setups engineered for board meetings, tech conferences, and annual seminars. Clean lines, wrinkle-free tension fabric prints, branded speaker podiums, and professional lighting wash.",
    pricing: {
      basePrice: 38000,
      discountedPrice: 33000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Corporate Standard",
        price: 33000,
        features: ["20ft x 10ft Branded Backdrop Wall","Clear Acrylic Branded Podium","4 Warm LED Stage Wash Lights","Stage Carpet Runner"]
      },
      {
        tier: "High-Tech Executive",
        price: 55000,
        features: ["30ft x 12ft Seamless Matte Backdrop","Dual LED Screen Framing & Truss Structure","VIP Speaker Couch Seating Setup","Wireless Microphones & Stage Ambient Lighting"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Auditorium or hall stage",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 18,
      bookingCount: 80
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800005c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    title: "Gala & Annual Award Night Stage Setup - Nocturne",
    slug: "gala-annual-award-night-stage-setup-nocturne-92",
    category: "Corporate & Official Events",
    subCategory: {
      id: "sub_10",
      name: "Gala & Annual Award Nights",
      slug: "gala-annual-award-nights"
    },
    shortDescription: "Glamorous red carpet step-and-repeat media wall with golden stanchions, spotlighting, and trophy display.",
    fullDescription: "Create an unforgettable celebratory awards evening. High-impact black and gold stage aesthetics, branded media photo wall with velvet rope stanchions, custom trophy display plinths, and dynamic spotlighting.",
    pricing: {
      basePrice: 42000,
      discountedPrice: 37000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Red Carpet Gala",
        price: 37000,
        features: ["24ft Award Stage Backdrop","10ft Step-and-Repeat Media Wall","30ft Red Carpet with Golden Stanchions","Trophy Plinth Display"]
      },
      {
        tier: "VIP Star Night",
        price: 68000,
        features: ["36ft Multi-Tier Stage Backdrop with LED Trim","Intelligent Moving Head Lighting FX","Custom Neon Brand Logo & Trophy Stage","Full Hall Red Carpet Walkway & Photo Booth"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 6,
      teardownDurationHours: 2.5,
      minimumNoticeDays: 4,
      spaceRequirement: "Grand Ballroom or Hall",
      isOutdoorSuitable: false
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 21,
      bookingCount: 85
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800005d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    title: "Vibrant Gaye Holud & Mehendi Canopy - Heritage",
    slug: "vibrant-gaye-holud-mehendi-canopy-heritage-93",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_02",
      name: "Haldi & Mehendi Setup",
      slug: "haldi-mehendi-setup"
    },
    shortDescription: "Traditional Bengali marigold decor with wooden swings, rickshaw art accents, and vibrant drapes.",
    fullDescription: "An authentic festive atmosphere for your Gaye Holud and Mehendi night. Features vibrant yellow & orange drape cascades, clay pottery props, traditional kulo decor, and cozy floor seating cushions.",
    pricing: {
      basePrice: 32000,
      discountedPrice: 28000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Festive Basic",
        price: 28000,
        features: ["14ft Backdrop with Fresh Genda Flowers","Traditional Decorated Wooden Swing","4 Side Floor Seating Mattresses","Warm Fairy Lights"]
      },
      {
        tier: "Grand Holud Extravaganza",
        price: 45000,
        features: ["20ft 3D Floral Canopy","Authentic Hand-Painted Rickshaw Props","Custom Neon 'Gaye Holud' Sign","Mehendi Lounge Setup with Low Tables"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Minimum 15ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 24,
      bookingCount: 90
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800005e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    title: "Bride & Groom Grand Entry Pathway - Heritage",
    slug: "bride-groom-grand-entry-pathway-heritage-94",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_03",
      name: "Bride & Groom Grand Entry",
      slug: "bride-groom-grand-entry"
    },
    shortDescription: "Magical entry aisle with floral arches, cold pyro fireworks, and romantic fog walkway.",
    fullDescription: "Make a show-stopping entrance on your special day. Includes continuous floral arches, red or white aisle carpet, automated cold spark machines for entry moments, and dense dry ice smoke clouds.",
    pricing: {
      basePrice: 25000,
      discountedPrice: 22000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Classic Aisle",
        price: 22000,
        features: ["40ft Velvet Red Carpet","6 Floral Pillar Stands","Warm Ambient Spotlights"]
      },
      {
        tier: "Cinematic Fireworks Entry",
        price: 38000,
        features: ["60ft Premium White Carpet","10 Floral Archways with Crystal Hangings","4x Cold Pyro Firework Firing","Heavy Dry Ice Cloud Machine"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Aisle length at least 30ft",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 27,
      bookingCount: 95
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b8800005f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    title: "Romantic Engagement & Ring Ceremony Decor - Heritage",
    slug: "romantic-engagement-ring-ceremony-decor-heritage-95",
    category: "Wedding & Pre-Wedding",
    subCategory: {
      id: "sub_04",
      name: "Engagement & Ring Ceremony",
      slug: "engagement-ring-ceremony"
    },
    shortDescription: "Elegant geometric floral ring backdrop with romantic neon signage and acrylic pedestals.",
    fullDescription: "Celebrate the beginning of forever with an intimate, chic engagement setup. Featuring customized metallic circular arches, delicate pastel florals, mirror pedestals for ring exchange, and candle stands.",
    pricing: {
      basePrice: 28000,
      discountedPrice: 24000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Chic Minimal",
        price: 24000,
        features: ["7ft Circular Metallic Ring Arch","Pastel Artificial Florals","Custom 'Better Together' Neon Sign","Dual Acrylic Ring Pedestals"]
      },
      {
        tier: "Luxe Botanical Ring",
        price: 38000,
        features: ["8ft Double Ring Geometric Arch","100% Fresh Hydrangea & Rose Wrap","Warm Edison Bulb Chandelier","Velvet Couple Seating with Rug"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 12ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 5.0,
      reviewCount: 30,
      bookingCount: 100
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000060"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    title: "Akika & Naming Ceremony Stage - Heritage",
    slug: "akika-naming-ceremony-stage-heritage-96",
    category: "Baby Shower & Family Gatherings",
    subCategory: {
      id: "sub_14",
      name: "Akika & Naming Ceremony",
      slug: "akika-naming-ceremony"
    },
    shortDescription: "Traditional Islamic & cultural aesthetic stage with fresh jasmine, golden lanterns, and cradle decor.",
    fullDescription: "Honor this blessed milestone with pure, elegant decoration. White and gold drapes, real white rose & jasmine flower ropes, Moroccan brass lanterns, and a beautifully adorned baby cradle.",
    pricing: {
      basePrice: 22000,
      discountedPrice: 19000,
      unit: "per_event",
      depositRequiredPercent: 25
    },
    packages: [
      {
        tier: "Blessed Classic",
        price: 19000,
        features: ["12ft White & Gold Draped Backdrop","Decorated Traditional Baby Cradle","Fresh Flower Garlands","Moroccan Lantern Accents"]
      },
      {
        tier: "Royal Noor Setup",
        price: 33000,
        features: ["16ft Grand Arch with Fresh Floral Ceiling Droop","Ornate Brass Cradle with Velvet Cushions","Custom Arabic Calligraphy Name Board","Family Seating Diwan with Bolsters"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 4,
      teardownDurationHours: 1.5,
      minimumNoticeDays: 2,
      spaceRequirement: "Minimum 14ft width",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 33,
      bookingCount: 25
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a3f2c4a91b88000061"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    title: "Religious & Cultural Festival Pavilion - Heritage",
    slug: "religious-cultural-festival-pavilion-heritage-97",
    category: "Baby Shower & Family Gatherings",
    subCategory: {
      id: "sub_15",
      name: "Religious & Cultural Festivals",
      slug: "religious-cultural-festivals"
    },
    shortDescription: "Vibrant traditional fair decor for Eid, Puja, or cultural carnivals with lanterns and clay art.",
    fullDescription: "Capturing the festive spirit of Eid, Durga Puja, or Pahela Baishakh with folk-inspired decor. Hand-painted motifs, decorative colorful umbrella ceilings, ambient brass lanterns, and festive photo booths.",
    pricing: {
      basePrice: 35000,
      discountedPrice: 30000,
      unit: "per_event",
      depositRequiredPercent: 30
    },
    packages: [
      {
        tier: "Festive Pavilion",
        price: 30000,
        features: ["18ft Themed Cultural Backdrop","Ceiling Hanging Lanterns / Umbrellas","Folk Art Entrance Gate","Warm Spotlights"]
      },
      {
        tier: "Grand Mela Extravaganza",
        price: 55000,
        features: ["30ft Festival Main Stage & Altar Setup","Full Overhead Colorful Canopy Drapery","Clay Pottery & Rickshaw Art Installation","Festive Photo Spot with Props"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000"
    ],
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
    specifications: {
      setupDurationHours: 5,
      teardownDurationHours: 2,
      minimumNoticeDays: 3,
      spaceRequirement: "Community center or outdoor open area",
      isOutdoorSuitable: true
    },
    inclusions: [
      "Complete structural framing & custom design installation",
      "Stage lighting, wiring, and ambient fixtures",
      "Delivery, on-site setup, and post-event teardown"
    ],
    exclusions: [
      "Venue generator power fuel (if required)",
      "Additional audio/sound system (available as add-on)"
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 36,
      bookingCount: 30
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  }
];

module.exports = { servicesData };

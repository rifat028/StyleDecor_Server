const { ObjectId } = require('mongodb');

const decoratorsData = [
  {
    _id: new ObjectId("66be18a2f2c4a91b88000001"),
    userId: new ObjectId("66be18a1f2c4a91b88000002"),
    businessName: "DreamCraft Events & Decors",
    slug: "dreamcraft-events-and-decors",
    tagline: "Crafting Royal Weddings & Magical Moments",
    about: "Premier luxury decoration agency specializing in royal floral wedding stages, vibrant Haldi setups, and corporate gala nights across Dhaka.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=DreamCraft%20Events",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=DreamCraft%20Events%20%26%20Decors",
    contactInfo: {
      phone: "+8801700000002",
      email: "contact@dreamcrafteventsanddecors.com",
      website: "https://dreamcraftdecors.com",
      address: "House 12, Road 5, Dhanmondi",
      city: "Dhaka"
    },
    serviceAreas: ["Dhaka","Chattogram"],
    categories: [
          {
                "name": "Wedding & Pre-Wedding",
                "status": "active",
                "order": 1,
                "description": "Grand wedding stages, vibrant Haldi backdrops, floral photo booths, and elegant royal bridal entry setups.",
                "subCategories": [
                      {
                            "id": "sub_01",
                            "name": "Wedding & Reception Stage",
                            "slug": "wedding-reception-stage",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_02",
                            "name": "Haldi & Mehendi Setup",
                            "slug": "haldi-mehendi-setup",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_03",
                            "name": "Bride & Groom Grand Entry",
                            "slug": "bride-groom-grand-entry",
                            "status": "active",
                            "order": 3
                      }
                ]
          },
          {
                "name": "Lighting, FX & Rentals",
                "status": "active",
                "order": 6,
                "description": "Special event enhancements including custom neon signs, cold pyros, spotlighting, VIP furniture, and photo booths.",
                "subCategories": [
                      {
                            "id": "sub_20",
                            "name": "Custom Neon Signs & Marquee Letters",
                            "slug": "custom-neon-signs-marquee-letters",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_22",
                            "name": "Special Effects (Fog, Smoke & Pyro)",
                            "slug": "special-effects-fog-smoke-pyro",
                            "status": "active",
                            "order": 3
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 142,
      completedEvents: 480,
      responseRate: 98,
      responseTimeHours: 1.5
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/DNCC/012948/2024",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/dreamcraftdecors",
      instagram: "https://instagram.com/dreamcraftdecors"
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b88000002"),
    userId: new ObjectId("66be18a1f2c4a91b88000003"),
    businessName: "Royal Touch Wedding & Events",
    slug: "royal-touch-wedding-events",
    tagline: "Elegance Redefined for Grand Celebrations",
    about: "Specialized in luxury destination weddings, grand entrance archways, and traditional cinematic reception stages in Dhaka & Chittagong.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Royal%20Touch",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Royal%20Touch%20Wedding%20%26%20Events",
    contactInfo: {
      phone: "+8801810001003",
      email: "contact@royaltouchweddingevents.com",
      website: "https://royaltouchbd.com",
      address: "Plot 45, Block D, Gulshan-2",
      city: "Dhaka"
    },
    serviceAreas: ["Dhaka","Chattogram","Sylhet"],
    categories: [
          {
                "name": "Wedding & Pre-Wedding",
                "status": "active",
                "order": 1,
                "description": "Grand wedding stages, vibrant Haldi backdrops, floral photo booths, and elegant royal bridal entry setups.",
                "subCategories": [
                      {
                            "id": "sub_01",
                            "name": "Wedding & Reception Stage",
                            "slug": "wedding-reception-stage",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_03",
                            "name": "Bride & Groom Grand Entry",
                            "slug": "bride-groom-grand-entry",
                            "status": "active",
                            "order": 3
                      },
                      {
                            "id": "sub_04",
                            "name": "Engagement & Ring Ceremony",
                            "slug": "engagement-ring-ceremony",
                            "status": "active",
                            "order": 4
                      }
                ]
          },
          {
                "name": "Corporate & Official Events",
                "status": "active",
                "order": 3,
                "description": "Sleek conference stages, dynamic gala award backdrops, brand launch podiums, and professional lighting.",
                "subCategories": [
                      {
                            "id": "sub_10",
                            "name": "Gala & Annual Award Nights",
                            "slug": "gala-annual-award-nights",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_12",
                            "name": "Corporate Dinners & Meetups",
                            "slug": "corporate-dinners-meetups",
                            "status": "active",
                            "order": 4
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 98,
      completedEvents: 310,
      responseRate: 96,
      responseTimeHours: 2
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/DSCC/049821/2023",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/royaltouchbd",
      instagram: "https://instagram.com/royaltouchbd"
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b88000003"),
    userId: new ObjectId("66be18a1f2c4a91b88000004"),
    businessName: "Bloom & Blossom Floral Decors",
    slug: "bloom-and-blossom-floral-decors",
    tagline: "Natural Florals & Bespoke Event Styling",
    about: "We bring nature's beauty to life with imported fresh flowers, elegant botanical photobooths, and enchanting fairy-light arches.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Bloom%20%26",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Bloom%20%26%20Blossom%20Floral%20Decors",
    contactInfo: {
      phone: "+8801910002004",
      email: "contact@bloomandblossomfloraldecors.com",
      website: "https://bloomandblossombd.com",
      address: "Road 3, Nasirabad Housing Society",
      city: "Chattogram"
    },
    serviceAreas: ["Chattogram","Cumilla"],
    categories: [
          {
                "name": "Wedding & Pre-Wedding",
                "status": "active",
                "order": 1,
                "description": "Grand wedding stages, vibrant Haldi backdrops, floral photo booths, and elegant royal bridal entry setups.",
                "subCategories": [
                      {
                            "id": "sub_01",
                            "name": "Wedding & Reception Stage",
                            "slug": "wedding-reception-stage",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_02",
                            "name": "Haldi & Mehendi Setup",
                            "slug": "haldi-mehendi-setup",
                            "status": "active",
                            "order": 2
                      }
                ]
          },
          {
                "name": "Baby Shower & Family Gatherings",
                "status": "active",
                "order": 4,
                "description": "Sweet pastel baby shower decor, gender reveal boxes, Akika stages, and warm home festival arrangements.",
                "subCategories": [
                      {
                            "id": "sub_13",
                            "name": "Baby Shower & Gender Reveal",
                            "slug": "baby-shower-gender-reveal",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_16",
                            "name": "Housewarming & Get-Togethers",
                            "slug": "housewarming-get-togethers",
                            "status": "active",
                            "order": 4
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 76,
      completedEvents: 220,
      responseRate: 94,
      responseTimeHours: 2.5
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/CCC/081293/2024",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/bloombossombd",
      instagram: "https://instagram.com/bloomandblossombd"
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b88000004"),
    userId: new ObjectId("66be18a1f2c4a91b88000005"),
    businessName: "Kiddos & Confetti Birthday Planners",
    slug: "kiddos-and-confetti-birthday-planners",
    tagline: "Making Little Dreams Come Alive",
    about: "Dhaka's premier theme birthday and 1st birthday decor specialists. Custom 3D cutouts, pastel balloon cascades, and mascot entries.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Kiddos%20%26",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Kiddos%20%26%20Confetti%20Birthday%20Planners",
    contactInfo: {
      phone: "+8801310003005",
      email: "contact@kiddosandconfettibirthdayplanners.com",
      website: "https://kiddosconfetti.com",
      address: "Sector 7, Road 14, Uttara",
      city: "Dhaka"
    },
    serviceAreas: ["Dhaka","Gazipur"],
    categories: [
          {
                "name": "Birthday & Anniversary",
                "status": "active",
                "order": 2,
                "description": "Creative cartoon themes, pastel balloon arches, and romantic candlelight dinner arrangements for milestones.",
                "subCategories": [
                      {
                            "id": "sub_05",
                            "name": "Kids Themed Birthday",
                            "slug": "kids-themed-birthday",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_08",
                            "name": "1st Birthday Special",
                            "slug": "1st-birthday-special",
                            "status": "active",
                            "order": 4
                      }
                ]
          },
          {
                "name": "Baby Shower & Family Gatherings",
                "status": "active",
                "order": 4,
                "description": "Sweet pastel baby shower decor, gender reveal boxes, Akika stages, and warm home festival arrangements.",
                "subCategories": [
                      {
                            "id": "sub_13",
                            "name": "Baby Shower & Gender Reveal",
                            "slug": "baby-shower-gender-reveal",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_14",
                            "name": "Akika & Naming Ceremony",
                            "slug": "akika-naming-ceremony",
                            "status": "active",
                            "order": 2
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 185,
      completedEvents: 540,
      responseRate: 99,
      responseTimeHours: 1
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/DNCC/092182/2024",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/kiddosconfetti",
      instagram: "https://instagram.com/kiddosconfetti"
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b88000005"),
    userId: new ObjectId("66be18a1f2c4a91b88000006"),
    businessName: "Elite Corporate Stages & Expos",
    slug: "elite-corporate-stages-expos",
    tagline: "Corporate Sophistication & Tech-Driven Stages",
    about: "Delivering world-class corporate auditoriums, conference stages, AGM setups, and product launch pavilions for leading enterprises.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Elite%20Corporate",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Elite%20Corporate%20Stages%20%26%20Expos",
    contactInfo: {
      phone: "+8801610004006",
      email: "contact@elitecorporatestagesexpos.com",
      website: "https://elitecorpevents.com.bd",
      address: "Level 6, Navana Tower, Gulshan-1",
      city: "Dhaka"
    },
    serviceAreas: ["Dhaka","Chattogram","Gazipur"],
    categories: [
          {
                "name": "Corporate & Official Events",
                "status": "active",
                "order": 3,
                "description": "Sleek conference stages, dynamic gala award backdrops, brand launch podiums, and professional lighting.",
                "subCategories": [
                      {
                            "id": "sub_09",
                            "name": "Conferences & Seminars",
                            "slug": "conferences-seminars",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_10",
                            "name": "Gala & Annual Award Nights",
                            "slug": "gala-annual-award-nights",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_11",
                            "name": "Product Launch & Expo Stalls",
                            "slug": "product-launch-expo-stalls",
                            "status": "active",
                            "order": 3
                      }
                ]
          },
          {
                "name": "Lighting, FX & Rentals",
                "status": "active",
                "order": 6,
                "description": "Special event enhancements including custom neon signs, cold pyros, spotlighting, VIP furniture, and photo booths.",
                "subCategories": [
                      {
                            "id": "sub_20",
                            "name": "Custom Neon Signs & Marquee Letters",
                            "slug": "custom-neon-signs-marquee-letters",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_21",
                            "name": "Spotlights & Ambient Lighting",
                            "slug": "spotlights-ambient-lighting",
                            "status": "active",
                            "order": 2
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 110,
      completedEvents: 390,
      responseRate: 97,
      responseTimeHours: 1.2
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/DNCC/112948/2023",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/elitecorpevents",
      instagram: "https://instagram.com/elitecorpevents"
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b88000006"),
    userId: new ObjectId("66be18a1f2c4a91b88000007"),
    businessName: "Cozy Corner Home & Rooftop Decors",
    slug: "cozy-corner-home-rooftop-decors",
    tagline: "Intimate Vibes & Aesthetic Small Spaces",
    about: "Transforming rooftops, balconies, and drawing rooms into magical fairy-tale spaces with bohemian canopies, warm lighting, and fresh florals.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Cozy%20Corner",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Cozy%20Corner%20Home%20%26%20Rooftop%20Decors",
    contactInfo: {
      phone: "+8801710005007",
      email: "contact@cozycornerhomerooftopdecors.com",
      website: "https://cozycornerdecors.com",
      address: "Block C, Lalmatia, Mohammadpur",
      city: "Dhaka"
    },
    serviceAreas: ["Dhaka"],
    categories: [
          {
                "name": "Home & Rooftop Intimate Setups",
                "status": "active",
                "order": 5,
                "description": "Cozy fairy light canopies, compact balcony setups, and modern aesthetic backdrops for small spaces.",
                "subCategories": [
                      {
                            "id": "sub_17",
                            "name": "Rooftop Party Canopy",
                            "slug": "rooftop-party-canopy",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_18",
                            "name": "Drawing Room & Balcony Decor",
                            "slug": "drawing-room-balcony-decor",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_19",
                            "name": "Surprise Room Makeover",
                            "slug": "surprise-room-makeover",
                            "status": "active",
                            "order": 3
                      }
                ]
          },
          {
                "name": "Birthday & Anniversary",
                "status": "active",
                "order": 2,
                "description": "Creative cartoon themes, pastel balloon arches, and romantic candlelight dinner arrangements for milestones.",
                "subCategories": [
                      {
                            "id": "sub_06",
                            "name": "Adult Milestone Birthday",
                            "slug": "adult-milestone-birthday",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_07",
                            "name": "Romantic Anniversary & Candlelight",
                            "slug": "romantic-anniversary-candlelight",
                            "status": "active",
                            "order": 3
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 92,
      completedEvents: 275,
      responseRate: 95,
      responseTimeHours: 2
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/DSCC/076214/2024",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/cozycornerdecors",
      instagram: "https://instagram.com/cozycornerdecors"
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b88000007"),
    userId: new ObjectId("66be18a1f2c4a91b88000008"),
    businessName: "Lumina FX & Stage Lighting BD",
    slug: "lumina-fx-stage-lighting-bd",
    tagline: "Illuminating Moments with High-Tech Magic",
    about: "High-end concert lighting, 360 photobooths, custom laser neon signs, cold pyros, and dry ice low fog effects for grand events.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Lumina%20FX",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Lumina%20FX%20%26%20Stage%20Lighting%20BD",
    contactInfo: {
      phone: "+8801810006008",
      email: "contact@luminafxstagelightingbd.com",
      website: "https://luminafxbd.com",
      address: "Agrabad Commercial Area, Road 1",
      city: "Chattogram"
    },
    serviceAreas: ["Chattogram","Dhaka","Sylhet"],
    categories: [
          {
                "name": "Lighting, FX & Rentals",
                "status": "active",
                "order": 6,
                "description": "Special event enhancements including custom neon signs, cold pyros, spotlighting, VIP furniture, and photo booths.",
                "subCategories": [
                      {
                            "id": "sub_20",
                            "name": "Custom Neon Signs & Marquee Letters",
                            "slug": "custom-neon-signs-marquee-letters",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_21",
                            "name": "Spotlights & Ambient Lighting",
                            "slug": "spotlights-ambient-lighting",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_22",
                            "name": "Special Effects (Fog, Smoke & Pyro)",
                            "slug": "special-effects-fog-smoke-pyro",
                            "status": "active",
                            "order": 3
                      },
                      {
                            "id": "sub_23",
                            "name": "Photo Booth & 360 Video Booth",
                            "slug": "photo-booth-360-video-booth",
                            "status": "active",
                            "order": 4
                      }
                ]
          },
          {
                "name": "Corporate & Official Events",
                "status": "active",
                "order": 3,
                "description": "Sleek conference stages, dynamic gala award backdrops, brand launch podiums, and professional lighting.",
                "subCategories": [
                      {
                            "id": "sub_09",
                            "name": "Conferences & Seminars",
                            "slug": "conferences-seminars",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_10",
                            "name": "Gala & Annual Award Nights",
                            "slug": "gala-annual-award-nights",
                            "status": "active",
                            "order": 2
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 64,
      completedEvents: 195,
      responseRate: 93,
      responseTimeHours: 3
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/CCC/031948/2023",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/luminafxbd",
      instagram: "https://instagram.com/luminafxbd"
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b88000008"),
    userId: new ObjectId("66be18a1f2c4a91b88000009"),
    businessName: "Utsab Event Solutions Sylhet",
    slug: "utsab-event-solutions-sylhet",
    tagline: "Traditional Elegance Meets Modern Decor",
    about: "Sylhet's top luxury event decorator specializing in royal wedding conventions, NRI wedding banquets, and grand Mehendi nights.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Utsab%20Event",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Utsab%20Event%20Solutions%20Sylhet",
    contactInfo: {
      phone: "+8801910007009",
      email: "contact@utsabeventsolutionssylhet.com",
      website: "https://utsabsylhet.com",
      address: "East Zindabazar, Main Road",
      city: "Sylhet"
    },
    serviceAreas: ["Sylhet","Dhaka"],
    categories: [
          {
                "name": "Wedding & Pre-Wedding",
                "status": "active",
                "order": 1,
                "description": "Grand wedding stages, vibrant Haldi backdrops, floral photo booths, and elegant royal bridal entry setups.",
                "subCategories": [
                      {
                            "id": "sub_01",
                            "name": "Wedding & Reception Stage",
                            "slug": "wedding-reception-stage",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_02",
                            "name": "Haldi & Mehendi Setup",
                            "slug": "haldi-mehendi-setup",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_04",
                            "name": "Engagement & Ring Ceremony",
                            "slug": "engagement-ring-ceremony",
                            "status": "active",
                            "order": 4
                      }
                ]
          },
          {
                "name": "Baby Shower & Family Gatherings",
                "status": "active",
                "order": 4,
                "description": "Sweet pastel baby shower decor, gender reveal boxes, Akika stages, and warm home festival arrangements.",
                "subCategories": [
                      {
                            "id": "sub_14",
                            "name": "Akika & Naming Ceremony",
                            "slug": "akika-naming-ceremony",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_15",
                            "name": "Religious & Cultural Festivals",
                            "slug": "religious-cultural-festivals",
                            "status": "active",
                            "order": 3
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 88,
      completedEvents: 340,
      responseRate: 96,
      responseTimeHours: 1.8
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/SCC/058291/2024",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/utsabsylhet",
      instagram: "https://instagram.com/utsabsylhet"
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b88000009"),
    userId: new ObjectId("66be18a1f2c4a91b8800000a"),
    businessName: "Pastel Paradise Milestone Events",
    slug: "pastel-paradise-milestone-events",
    tagline: "Soft Pastels, Grand Memories",
    about: "Specialized in pastel-themed baby showers, gender reveal setups, 1st birthday parties, and romantic candlelight dinner arches.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Pastel%20Paradise",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Pastel%20Paradise%20Milestone%20Events",
    contactInfo: {
      phone: "+8801310008010",
      email: "contact@pastelparadisemilestoneevents.com",
      website: "https://pastelparadisebd.com",
      address: "Block F, Banani DOHS",
      city: "Dhaka"
    },
    serviceAreas: ["Dhaka"],
    categories: [
          {
                "name": "Birthday & Anniversary",
                "status": "active",
                "order": 2,
                "description": "Creative cartoon themes, pastel balloon arches, and romantic candlelight dinner arrangements for milestones.",
                "subCategories": [
                      {
                            "id": "sub_05",
                            "name": "Kids Themed Birthday",
                            "slug": "kids-themed-birthday",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_07",
                            "name": "Romantic Anniversary & Candlelight",
                            "slug": "romantic-anniversary-candlelight",
                            "status": "active",
                            "order": 3
                      }
                ]
          },
          {
                "name": "Baby Shower & Family Gatherings",
                "status": "active",
                "order": 4,
                "description": "Sweet pastel baby shower decor, gender reveal boxes, Akika stages, and warm home festival arrangements.",
                "subCategories": [
                      {
                            "id": "sub_13",
                            "name": "Baby Shower & Gender Reveal",
                            "slug": "baby-shower-gender-reveal",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_14",
                            "name": "Akika & Naming Ceremony",
                            "slug": "akika-naming-ceremony",
                            "status": "active",
                            "order": 2
                      }
                ]
          },
          {
                "name": "Home & Rooftop Intimate Setups",
                "status": "active",
                "order": 5,
                "description": "Cozy fairy light canopies, compact balcony setups, and modern aesthetic backdrops for small spaces.",
                "subCategories": [
                      {
                            "id": "sub_17",
                            "name": "Rooftop Party Canopy",
                            "slug": "rooftop-party-canopy",
                            "status": "active",
                            "order": 1
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 134,
      completedEvents: 410,
      responseRate: 98,
      responseTimeHours: 1.1
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/DNCC/087192/2024",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/pastelparadisebd",
      instagram: "https://instagram.com/pastelparadisebd"
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b8800000a"),
    userId: new ObjectId("66be18a1f2c4a91b8800000b"),
    businessName: "Padma Sparkle Event Designers",
    slug: "padma-sparkle-event-designers",
    tagline: "The Pride of Celebrations in Rajshahi",
    about: "Leading event decorator in Rajshahi providing stage setups, cultural festival pavilions, university convocations, and wedding receptions.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Padma%20Sparkle",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Padma%20Sparkle%20Event%20Designers",
    contactInfo: {
      phone: "+8801610009011",
      email: "contact@padmasparkleeventdesigners.com",
      website: "https://padmasparkle.com",
      address: "Greater Road, Kazihata",
      city: "Rajshahi"
    },
    serviceAreas: ["Rajshahi","Rangpur"],
    categories: [
          {
                "name": "Wedding & Pre-Wedding",
                "status": "active",
                "order": 1,
                "description": "Grand wedding stages, vibrant Haldi backdrops, floral photo booths, and elegant royal bridal entry setups.",
                "subCategories": [
                      {
                            "id": "sub_01",
                            "name": "Wedding & Reception Stage",
                            "slug": "wedding-reception-stage",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_02",
                            "name": "Haldi & Mehendi Setup",
                            "slug": "haldi-mehendi-setup",
                            "status": "active",
                            "order": 2
                      }
                ]
          },
          {
                "name": "Corporate & Official Events",
                "status": "active",
                "order": 3,
                "description": "Sleek conference stages, dynamic gala award backdrops, brand launch podiums, and professional lighting.",
                "subCategories": [
                      {
                            "id": "sub_09",
                            "name": "Conferences & Seminars",
                            "slug": "conferences-seminars",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_12",
                            "name": "Corporate Dinners & Meetups",
                            "slug": "corporate-dinners-meetups",
                            "status": "active",
                            "order": 4
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 52,
      completedEvents: 180,
      responseRate: 92,
      responseTimeHours: 2.8
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/RCC/029184/2023",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/padmasparkle",
      instagram: "https://instagram.com/padmasparkle"
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b8800000b"),
    userId: new ObjectId("66be18a1f2c4a91b8800000c"),
    businessName: "Sundarban Splendor Decors Khulna",
    slug: "sundarban-splendor-decors-khulna",
    tagline: "Exquisite Event Styling in Southern Bengal",
    about: "Comprehensive decor services in Khulna city for wedding stages, Haldi nights, corporate annual dinners, and family milestones.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Sundarban%20Splendor",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Sundarban%20Splendor%20Decors%20Khulna",
    contactInfo: {
      phone: "+8801710010012",
      email: "contact@sundarbansplendordecorskhulna.com",
      website: "https://splendordecorskhulna.com",
      address: "Sonadanga Main Road, 2nd Phase",
      city: "Khulna"
    },
    serviceAreas: ["Khulna","Barishal"],
    categories: [
          {
                "name": "Wedding & Pre-Wedding",
                "status": "active",
                "order": 1,
                "description": "Grand wedding stages, vibrant Haldi backdrops, floral photo booths, and elegant royal bridal entry setups.",
                "subCategories": [
                      {
                            "id": "sub_01",
                            "name": "Wedding & Reception Stage",
                            "slug": "wedding-reception-stage",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_03",
                            "name": "Bride & Groom Grand Entry",
                            "slug": "bride-groom-grand-entry",
                            "status": "active",
                            "order": 3
                      }
                ]
          },
          {
                "name": "Birthday & Anniversary",
                "status": "active",
                "order": 2,
                "description": "Creative cartoon themes, pastel balloon arches, and romantic candlelight dinner arrangements for milestones.",
                "subCategories": [
                      {
                            "id": "sub_06",
                            "name": "Adult Milestone Birthday",
                            "slug": "adult-milestone-birthday",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_07",
                            "name": "Romantic Anniversary & Candlelight",
                            "slug": "romantic-anniversary-candlelight",
                            "status": "active",
                            "order": 3
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 61,
      completedEvents: 205,
      responseRate: 94,
      responseTimeHours: 2.2
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/KCC/049182/2024",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/splendordecorskhulna",
      instagram: "https://instagram.com/splendordecorskhulna"
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b8800000c"),
    userId: new ObjectId("66be18a1f2c4a91b8800000d"),
    businessName: "Kirtankhola Grand Events Barishal",
    slug: "kirtankhola-grand-events-barishal",
    tagline: "Grandeur and Grace on the Riverbank",
    about: "Barishal's premier full-service wedding and festival stage designer with grand floral gates, photobooths, and VIP furniture rentals.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Kirtankhola%20Grand",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Kirtankhola%20Grand%20Events%20Barishal",
    contactInfo: {
      phone: "+8801810011013",
      email: "contact@kirtankholagrandeventsbarishal.com",
      website: "https://kirtankholaevents.com",
      address: "Band Road, Sadat Area",
      city: "Barishal"
    },
    serviceAreas: ["Barishal","Khulna"],
    categories: [
          {
                "name": "Wedding & Pre-Wedding",
                "status": "active",
                "order": 1,
                "description": "Grand wedding stages, vibrant Haldi backdrops, floral photo booths, and elegant royal bridal entry setups.",
                "subCategories": [
                      {
                            "id": "sub_01",
                            "name": "Wedding & Reception Stage",
                            "slug": "wedding-reception-stage",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_02",
                            "name": "Haldi & Mehendi Setup",
                            "slug": "haldi-mehendi-setup",
                            "status": "active",
                            "order": 2
                      }
                ]
          },
          {
                "name": "Baby Shower & Family Gatherings",
                "status": "active",
                "order": 4,
                "description": "Sweet pastel baby shower decor, gender reveal boxes, Akika stages, and warm home festival arrangements.",
                "subCategories": [
                      {
                            "id": "sub_14",
                            "name": "Akika & Naming Ceremony",
                            "slug": "akika-naming-ceremony",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_16",
                            "name": "Housewarming & Get-Togethers",
                            "slug": "housewarming-get-togethers",
                            "status": "active",
                            "order": 4
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 45,
      completedEvents: 160,
      responseRate: 91,
      responseTimeHours: 3.2
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/BCC/019284/2023",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/kirtankholaevents",
      instagram: "https://instagram.com/kirtankholaevents"
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b8800000d"),
    userId: new ObjectId("66be18a1f2c4a91b8800000e"),
    businessName: "Rangpur Royal Festive Decors",
    slug: "rangpur-royal-festive-decors",
    tagline: "North Bengal's Most Trusted Decor Agency",
    about: "Transforming venues into magical experiences across Rangpur division. Specialized in Gaye Holud, Walima stages, and expo stalls.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Rangpur%20Royal",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Rangpur%20Royal%20Festive%20Decors",
    contactInfo: {
      phone: "+8801910012014",
      email: "contact@rangpurroyalfestivedecors.com",
      website: "https://rangpurroyaldecors.com",
      address: "Station Road, Dhap",
      city: "Rangpur"
    },
    serviceAreas: ["Rangpur","Rajshahi"],
    categories: [
          {
                "name": "Wedding & Pre-Wedding",
                "status": "active",
                "order": 1,
                "description": "Grand wedding stages, vibrant Haldi backdrops, floral photo booths, and elegant royal bridal entry setups.",
                "subCategories": [
                      {
                            "id": "sub_02",
                            "name": "Haldi & Mehendi Setup",
                            "slug": "haldi-mehendi-setup",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_03",
                            "name": "Bride & Groom Grand Entry",
                            "slug": "bride-groom-grand-entry",
                            "status": "active",
                            "order": 3
                      }
                ]
          },
          {
                "name": "Corporate & Official Events",
                "status": "active",
                "order": 3,
                "description": "Sleek conference stages, dynamic gala award backdrops, brand launch podiums, and professional lighting.",
                "subCategories": [
                      {
                            "id": "sub_11",
                            "name": "Product Launch & Expo Stalls",
                            "slug": "product-launch-expo-stalls",
                            "status": "active",
                            "order": 3
                      },
                      {
                            "id": "sub_12",
                            "name": "Corporate Dinners & Meetups",
                            "slug": "corporate-dinners-meetups",
                            "status": "active",
                            "order": 4
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.5,
      reviewCount: 39,
      completedEvents: 140,
      responseRate: 90,
      responseTimeHours: 3.5
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/RPCC/038192/2024",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/rangpurroyaldecors",
      instagram: "https://instagram.com/rangpurroyaldecors"
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b8800000e"),
    userId: new ObjectId("66be18a1f2c4a91b8800000f"),
    businessName: "Brahmaputra Bloom & Glow Mymensingh",
    slug: "brahmaputra-bloom-glow-mymensingh",
    tagline: "Charming Setups for Every Family Milestone",
    about: "Providing colorful Haldi setups, Akika ceremonies, school/college annual functions, and elegant rooftop celebration canopies.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Brahmaputra%20Bloom",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Brahmaputra%20Bloom%20%26%20Glow%20Mymensingh",
    contactInfo: {
      phone: "+8801310013015",
      email: "contact@brahmaputrabloomglowmymensingh.com",
      website: "https://brahmaputradecors.com",
      address: "Ganginar Par Road, Town Hall Area",
      city: "Mymensingh"
    },
    serviceAreas: ["Mymensingh","Dhaka","Gazipur"],
    categories: [
          {
                "name": "Baby Shower & Family Gatherings",
                "status": "active",
                "order": 4,
                "description": "Sweet pastel baby shower decor, gender reveal boxes, Akika stages, and warm home festival arrangements.",
                "subCategories": [
                      {
                            "id": "sub_13",
                            "name": "Baby Shower & Gender Reveal",
                            "slug": "baby-shower-gender-reveal",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_14",
                            "name": "Akika & Naming Ceremony",
                            "slug": "akika-naming-ceremony",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_15",
                            "name": "Religious & Cultural Festivals",
                            "slug": "religious-cultural-festivals",
                            "status": "active",
                            "order": 3
                      }
                ]
          },
          {
                "name": "Home & Rooftop Intimate Setups",
                "status": "active",
                "order": 5,
                "description": "Cozy fairy light canopies, compact balcony setups, and modern aesthetic backdrops for small spaces.",
                "subCategories": [
                      {
                            "id": "sub_17",
                            "name": "Rooftop Party Canopy",
                            "slug": "rooftop-party-canopy",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_18",
                            "name": "Drawing Room & Balcony Decor",
                            "slug": "drawing-room-balcony-decor",
                            "status": "active",
                            "order": 2
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.6,
      reviewCount: 48,
      completedEvents: 165,
      responseRate: 93,
      responseTimeHours: 2.6
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/MCC/028193/2024",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/brahmaputradecors",
      instagram: "https://instagram.com/brahmaputradecors"
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b8800000f"),
    userId: new ObjectId("66be18a1f2c4a91b88000010"),
    businessName: "Moynamoti Royal Decors Cumilla",
    slug: "moynamoti-royal-decors-cumilla",
    tagline: "Honoring Heritage with Royal Event Aesthetics",
    about: "Premier decorator in Cumilla for traditional wedding receptions, grand bridal entries, engagement ring ceremonies, and neon lighting.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Moynamoti%20Royal",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Moynamoti%20Royal%20Decors%20Cumilla",
    contactInfo: {
      phone: "+8801610014016",
      email: "contact@moynamotiroyaldecorscumilla.com",
      website: "https://moynamotidecors.com",
      address: "Nazrul Avenue, Kandirpar",
      city: "Cumilla"
    },
    serviceAreas: ["Cumilla","Chattogram","Dhaka"],
    categories: [
          {
                "name": "Wedding & Pre-Wedding",
                "status": "active",
                "order": 1,
                "description": "Grand wedding stages, vibrant Haldi backdrops, floral photo booths, and elegant royal bridal entry setups.",
                "subCategories": [
                      {
                            "id": "sub_01",
                            "name": "Wedding & Reception Stage",
                            "slug": "wedding-reception-stage",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_03",
                            "name": "Bride & Groom Grand Entry",
                            "slug": "bride-groom-grand-entry",
                            "status": "active",
                            "order": 3
                      },
                      {
                            "id": "sub_04",
                            "name": "Engagement & Ring Ceremony",
                            "slug": "engagement-ring-ceremony",
                            "status": "active",
                            "order": 4
                      }
                ]
          },
          {
                "name": "Lighting, FX & Rentals",
                "status": "active",
                "order": 6,
                "description": "Special event enhancements including custom neon signs, cold pyros, spotlighting, VIP furniture, and photo booths.",
                "subCategories": [
                      {
                            "id": "sub_20",
                            "name": "Custom Neon Signs & Marquee Letters",
                            "slug": "custom-neon-signs-marquee-letters",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_22",
                            "name": "Special Effects (Fog, Smoke & Pyro)",
                            "slug": "special-effects-fog-smoke-pyro",
                            "status": "active",
                            "order": 3
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 59,
      completedEvents: 210,
      responseRate: 95,
      responseTimeHours: 2.1
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/CUCC/048192/2023",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/moynamotidecors",
      instagram: "https://instagram.com/moynamotidecors"
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b88000010"),
    userId: new ObjectId("66be18a1f2c4a91b88000011"),
    businessName: "Urban Vibes Gazipur Event Craft",
    slug: "urban-vibes-gazipur-event-craft",
    tagline: "Industrial Meets Glamour in Event Design",
    about: "Expert in factory annual gala nights, corporate seminar stages, resort birthday parties, and wedding setups in the Gazipur & Tongi hub.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Urban%20Vibes",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Urban%20Vibes%20Gazipur%20Event%20Craft",
    contactInfo: {
      phone: "+8801710015017",
      email: "contact@urbanvibesgazipureventcraft.com",
      website: "https://urbanvibesgazipur.com",
      address: "Dhaka-Mymensingh Highway, Chowrasta",
      city: "Gazipur"
    },
    serviceAreas: ["Gazipur","Dhaka"],
    categories: [
          {
                "name": "Corporate & Official Events",
                "status": "active",
                "order": 3,
                "description": "Sleek conference stages, dynamic gala award backdrops, brand launch podiums, and professional lighting.",
                "subCategories": [
                      {
                            "id": "sub_09",
                            "name": "Conferences & Seminars",
                            "slug": "conferences-seminars",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_10",
                            "name": "Gala & Annual Award Nights",
                            "slug": "gala-annual-award-nights",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_11",
                            "name": "Product Launch & Expo Stalls",
                            "slug": "product-launch-expo-stalls",
                            "status": "active",
                            "order": 3
                      }
                ]
          },
          {
                "name": "Birthday & Anniversary",
                "status": "active",
                "order": 2,
                "description": "Creative cartoon themes, pastel balloon arches, and romantic candlelight dinner arrangements for milestones.",
                "subCategories": [
                      {
                            "id": "sub_05",
                            "name": "Kids Themed Birthday",
                            "slug": "kids-themed-birthday",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_06",
                            "name": "Adult Milestone Birthday",
                            "slug": "adult-milestone-birthday",
                            "status": "active",
                            "order": 2
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.7,
      reviewCount: 68,
      completedEvents: 245,
      responseRate: 95,
      responseTimeHours: 1.9
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/GCC/068192/2024",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/urbanvibesgazipur",
      instagram: "https://instagram.com/urbanvibesgazipur"
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b88000011"),
    userId: new ObjectId("66be18a1f2c4a91b88000012"),
    businessName: "Velvet & Vines Luxury Event Studio",
    slug: "velvet-and-vines-luxury-event-studio",
    tagline: "Curators of Ultra-Luxury Destination Decors",
    about: "Bespoke styling for high-profile weddings, VIP lounges, luxury ceiling floral drops, and custom chandeliers in 5-star hotels across Dhaka.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Velvet%20%26",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Velvet%20%26%20Vines%20Luxury%20Event%20Studio",
    contactInfo: {
      phone: "+8801810016018",
      email: "contact@velvetandvinesluxuryeventstudio.com",
      website: "https://velvetandvinesbd.com",
      address: "Road 11, Block D, Banani",
      city: "Dhaka"
    },
    serviceAreas: ["Dhaka","Chattogram","Sylhet"],
    categories: [
          {
                "name": "Wedding & Pre-Wedding",
                "status": "active",
                "order": 1,
                "description": "Grand wedding stages, vibrant Haldi backdrops, floral photo booths, and elegant royal bridal entry setups.",
                "subCategories": [
                      {
                            "id": "sub_01",
                            "name": "Wedding & Reception Stage",
                            "slug": "wedding-reception-stage",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_02",
                            "name": "Haldi & Mehendi Setup",
                            "slug": "haldi-mehendi-setup",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_03",
                            "name": "Bride & Groom Grand Entry",
                            "slug": "bride-groom-grand-entry",
                            "status": "active",
                            "order": 3
                      }
                ]
          },
          {
                "name": "Lighting, FX & Rentals",
                "status": "active",
                "order": 6,
                "description": "Special event enhancements including custom neon signs, cold pyros, spotlighting, VIP furniture, and photo booths.",
                "subCategories": [
                      {
                            "id": "sub_20",
                            "name": "Custom Neon Signs & Marquee Letters",
                            "slug": "custom-neon-signs-marquee-letters",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_21",
                            "name": "Spotlights & Ambient Lighting",
                            "slug": "spotlights-ambient-lighting",
                            "status": "active",
                            "order": 2
                      }
                ]
          },
          {
                "name": "Corporate & Official Events",
                "status": "active",
                "order": 3,
                "description": "Sleek conference stages, dynamic gala award backdrops, brand launch podiums, and professional lighting.",
                "subCategories": [
                      {
                            "id": "sub_10",
                            "name": "Gala & Annual Award Nights",
                            "slug": "gala-annual-award-nights",
                            "status": "active",
                            "order": 2
                      }
                ]
          }
    ],
    metrics: {
      rating: 5,
      reviewCount: 165,
      completedEvents: 520,
      responseRate: 99,
      responseTimeHours: 0.8
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/DNCC/148291/2023",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/velvetandvinesbd",
      instagram: "https://instagram.com/velvetandvinesbd"
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b88000012"),
    userId: new ObjectId("66be18a1f2c4a91b88000013"),
    businessName: "Balloon Symphony & Party Sparks",
    slug: "balloon-symphony-party-sparks",
    tagline: "Organic Balloon Sculptures & Fun Celebrations",
    about: "Specialized in organic balloon garlands, neon light walls, cartoon character themes, and surprise room makeovers for anniversaries & birthdays.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Balloon%20Symphony",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Balloon%20Symphony%20%26%20Party%20Sparks",
    contactInfo: {
      phone: "+8801910017019",
      email: "contact@balloonsymphonypartysparks.com",
      website: "https://balloonsymphonybd.com",
      address: "Shantinagar Main Road, Kakrail",
      city: "Dhaka"
    },
    serviceAreas: ["Dhaka"],
    categories: [
          {
                "name": "Birthday & Anniversary",
                "status": "active",
                "order": 2,
                "description": "Creative cartoon themes, pastel balloon arches, and romantic candlelight dinner arrangements for milestones.",
                "subCategories": [
                      {
                            "id": "sub_05",
                            "name": "Kids Themed Birthday",
                            "slug": "kids-themed-birthday",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_06",
                            "name": "Adult Milestone Birthday",
                            "slug": "adult-milestone-birthday",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_08",
                            "name": "1st Birthday Special",
                            "slug": "1st-birthday-special",
                            "status": "active",
                            "order": 4
                      }
                ]
          },
          {
                "name": "Home & Rooftop Intimate Setups",
                "status": "active",
                "order": 5,
                "description": "Cozy fairy light canopies, compact balcony setups, and modern aesthetic backdrops for small spaces.",
                "subCategories": [
                      {
                            "id": "sub_18",
                            "name": "Drawing Room & Balcony Decor",
                            "slug": "drawing-room-balcony-decor",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_19",
                            "name": "Surprise Room Makeover",
                            "slug": "surprise-room-makeover",
                            "status": "active",
                            "order": 3
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.8,
      reviewCount: 112,
      completedEvents: 380,
      responseRate: 97,
      responseTimeHours: 1.4
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/DSCC/091823/2024",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/balloonsymphonybd",
      instagram: "https://instagram.com/balloonsymphonybd"
    },
    status: "active",
    featured: false,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b88000013"),
    userId: new ObjectId("66be18a1f2c4a91b88000014"),
    businessName: "Nocturne Ambient Lighting & Staging",
    slug: "nocturne-ambient-lighting-staging",
    tagline: "Setting the Stage for Extraordinary Moments",
    about: "Professional acoustic stages, architectural uplighting, 3D mapped backdrops, truss roofing, and special effects for concerts and galas.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Nocturne%20Ambient",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Nocturne%20Ambient%20Lighting%20%26%20Staging",
    contactInfo: {
      phone: "+8801310018020",
      email: "contact@nocturneambientlightingstaging.com",
      website: "https://nocturnelightingbd.com",
      address: "Tejgaon Industrial Area, Link Road",
      city: "Dhaka"
    },
    serviceAreas: ["Dhaka","Chattogram","Sylhet","Rajshahi"],
    categories: [
          {
                "name": "Lighting, FX & Rentals",
                "status": "active",
                "order": 6,
                "description": "Special event enhancements including custom neon signs, cold pyros, spotlighting, VIP furniture, and photo booths.",
                "subCategories": [
                      {
                            "id": "sub_20",
                            "name": "Custom Neon Signs & Marquee Letters",
                            "slug": "custom-neon-signs-marquee-letters",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_21",
                            "name": "Spotlights & Ambient Lighting",
                            "slug": "spotlights-ambient-lighting",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_22",
                            "name": "Special Effects (Fog, Smoke & Pyro)",
                            "slug": "special-effects-fog-smoke-pyro",
                            "status": "active",
                            "order": 3
                      },
                      {
                            "id": "sub_23",
                            "name": "Photo Booth & 360 Video Booth",
                            "slug": "photo-booth-360-video-booth",
                            "status": "active",
                            "order": 4
                      }
                ]
          },
          {
                "name": "Corporate & Official Events",
                "status": "active",
                "order": 3,
                "description": "Sleek conference stages, dynamic gala award backdrops, brand launch podiums, and professional lighting.",
                "subCategories": [
                      {
                            "id": "sub_09",
                            "name": "Conferences & Seminars",
                            "slug": "conferences-seminars",
                            "status": "active",
                            "order": 1
                      },
                      {
                            "id": "sub_10",
                            "name": "Gala & Annual Award Nights",
                            "slug": "gala-annual-award-nights",
                            "status": "active",
                            "order": 2
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 95,
      completedEvents: 330,
      responseRate: 96,
      responseTimeHours: 1.6
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/DNCC/129841/2024",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/nocturnelightingbd",
      instagram: "https://instagram.com/nocturnelightingbd"
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a2f2c4a91b88000014"),
    userId: new ObjectId("66be18a1f2c4a91b88000015"),
    businessName: "Heritage Haldi & Wedding Crafts",
    slug: "heritage-haldi-wedding-crafts",
    tagline: "Authentic Bengali Folk & Traditional Wedding Styling",
    about: "Reviving Bengali heritage with traditional rickshaw paint themes, clay pottery art, marigold floral curtains, and vibrant Mehendi gazebos.",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=Heritage%20Haldi",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=Heritage%20Haldi%20%26%20Wedding%20Crafts",
    contactInfo: {
      phone: "+8801610019021",
      email: "contact@heritagehaldiweddingcrafts.com",
      website: "https://heritagehaldibd.com",
      address: "Rankin Street, Wari, Old Dhaka",
      city: "Dhaka"
    },
    serviceAreas: ["Dhaka","Cumilla","Mymensingh"],
    categories: [
          {
                "name": "Wedding & Pre-Wedding",
                "status": "active",
                "order": 1,
                "description": "Grand wedding stages, vibrant Haldi backdrops, floral photo booths, and elegant royal bridal entry setups.",
                "subCategories": [
                      {
                            "id": "sub_02",
                            "name": "Haldi & Mehendi Setup",
                            "slug": "haldi-mehendi-setup",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_03",
                            "name": "Bride & Groom Grand Entry",
                            "slug": "bride-groom-grand-entry",
                            "status": "active",
                            "order": 3
                      },
                      {
                            "id": "sub_04",
                            "name": "Engagement & Ring Ceremony",
                            "slug": "engagement-ring-ceremony",
                            "status": "active",
                            "order": 4
                      }
                ]
          },
          {
                "name": "Baby Shower & Family Gatherings",
                "status": "active",
                "order": 4,
                "description": "Sweet pastel baby shower decor, gender reveal boxes, Akika stages, and warm home festival arrangements.",
                "subCategories": [
                      {
                            "id": "sub_14",
                            "name": "Akika & Naming Ceremony",
                            "slug": "akika-naming-ceremony",
                            "status": "active",
                            "order": 2
                      },
                      {
                            "id": "sub_15",
                            "name": "Religious & Cultural Festivals",
                            "slug": "religious-cultural-festivals",
                            "status": "active",
                            "order": 3
                      }
                ]
          }
    ],
    metrics: {
      rating: 4.9,
      reviewCount: 140,
      completedEvents: 460,
      responseRate: 98,
      responseTimeHours: 1.3
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "TRAD/DSCC/061928/2024",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "https://facebook.com/heritagehaldibd",
      instagram: "https://instagram.com/heritagehaldibd"
    },
    status: "active",
    featured: true,
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  }
];

module.exports = { decoratorsData };

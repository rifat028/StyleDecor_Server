const categoriesData = [
  {
    name: "Wedding & Pre-Wedding",
    status: "active",
    order: 1,
    description: "Grand wedding stages, vibrant Haldi backdrops, floral photo booths, and elegant royal bridal entry setups.",
    subCategories: [
      {
        id: "sub_01",
        name: "Wedding & Reception Stage",
        slug: "wedding-reception-stage",
        status: "active",
        order: 1
      },
      {
        id: "sub_02",
        name: "Haldi & Mehendi Setup",
        slug: "haldi-mehendi-setup",
        status: "active",
        order: 2
      },
      {
        id: "sub_03",
        name: "Bride & Groom Grand Entry",
        slug: "bride-groom-grand-entry",
        status: "active",
        order: 3
      },
      {
        id: "sub_04",
        name: "Engagement & Ring Ceremony",
        slug: "engagement-ring-ceremony",
        status: "active",
        order: 4
      }
    ],
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    name: "Birthday & Anniversary",
    status: "active",
    order: 2,
    description: "Creative cartoon themes, pastel balloon arches, and romantic candlelight dinner arrangements for milestones.",
    subCategories: [
      {
        id: "sub_05",
        name: "Kids Themed Birthday",
        slug: "kids-themed-birthday",
        status: "active",
        order: 1
      },
      {
        id: "sub_06",
        name: "Adult Milestone Birthday",
        slug: "adult-milestone-birthday",
        status: "active",
        order: 2
      },
      {
        id: "sub_07",
        name: "Romantic Anniversary & Candlelight",
        slug: "romantic-anniversary-candlelight",
        status: "active",
        order: 3
      },
      {
        id: "sub_08",
        name: "1st Birthday Special",
        slug: "1st-birthday-special",
        status: "active",
        order: 4
      }
    ],
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    name: "Corporate & Official Events",
    status: "active",
    order: 3,
    description: "Sleek conference stages, dynamic gala award backdrops, brand launch podiums, and professional lighting.",
    subCategories: [
      {
        id: "sub_09",
        name: "Conferences & Seminars",
        slug: "conferences-seminars",
        status: "active",
        order: 1
      },
      {
        id: "sub_10",
        name: "Gala & Annual Award Nights",
        slug: "gala-annual-award-nights",
        status: "active",
        order: 2
      },
      {
        id: "sub_11",
        name: "Product Launch & Expo Stalls",
        slug: "product-launch-expo-stalls",
        status: "active",
        order: 3
      },
      {
        id: "sub_12",
        name: "Corporate Dinners & Meetups",
        slug: "corporate-dinners-meetups",
        status: "active",
        order: 4
      }
    ],
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    name: "Baby Shower & Family Gatherings",
    status: "active",
    order: 4,
    description: "Sweet pastel baby shower decor, gender reveal boxes, Akika stages, and warm home festival arrangements.",
    subCategories: [
      {
        id: "sub_13",
        name: "Baby Shower & Gender Reveal",
        slug: "baby-shower-gender-reveal",
        status: "active",
        order: 1
      },
      {
        id: "sub_14",
        name: "Akika & Naming Ceremony",
        slug: "akika-naming-ceremony",
        status: "active",
        order: 2
      },
      {
        id: "sub_15",
        name: "Religious & Cultural Festivals",
        slug: "religious-cultural-festivals",
        status: "active",
        order: 3
      },
      {
        id: "sub_16",
        name: "Housewarming & Get-Togethers",
        slug: "housewarming-get-togethers",
        status: "active",
        order: 4
      }
    ],
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    name: "Home & Rooftop Intimate Setups",
    status: "active",
    order: 5,
    description: "Cozy fairy light canopies, compact balcony setups, and modern aesthetic backdrops for small spaces.",
    subCategories: [
      {
        id: "sub_17",
        name: "Rooftop Party Canopy",
        slug: "rooftop-party-canopy",
        status: "active",
        order: 1
      },
      {
        id: "sub_18",
        name: "Drawing Room & Balcony Decor",
        slug: "drawing-room-balcony-decor",
        status: "active",
        order: 2
      },
      {
        id: "sub_19",
        name: "Surprise Room Makeover",
        slug: "surprise-room-makeover",
        status: "active",
        order: 3
      }
    ],
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    name: "Lighting, FX & Rentals",
    status: "active",
    order: 6,
    description: "Special event enhancements including custom neon signs, cold pyros, spotlighting, VIP furniture, and photo booths.",
    subCategories: [
      {
        id: "sub_20",
        name: "Custom Neon Signs & Marquee Letters",
        slug: "custom-neon-signs-marquee-letters",
        status: "active",
        order: 1
      },
      {
        id: "sub_21",
        name: "Spotlights & Ambient Lighting",
        slug: "spotlights-ambient-lighting",
        status: "active",
        order: 2
      },
      {
        id: "sub_22",
        name: "Special Effects (Fog, Smoke & Pyro)",
        slug: "special-effects-fog-smoke-pyro",
        status: "active",
        order: 3
      },
      {
        id: "sub_23",
        name: "Photo Booth & 360 Video Booth",
        slug: "photo-booth-360-video-booth",
        status: "active",
        order: 4
      }
    ],
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  }
];

module.exports = { categoriesData };

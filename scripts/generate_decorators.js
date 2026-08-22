const fs = require('fs');
const path = require('path');
const { categoriesData } = require('../data/categoriesData');

const businesses = [
  {
    name: "DreamCraft Events & Decors",
    slug: "dreamcraft-events-and-decors",
    tagline: "Crafting Royal Weddings & Magical Moments",
    about: "Premier luxury decoration agency specializing in royal floral wedding stages, vibrant Haldi setups, and corporate gala nights across Dhaka.",
    website: "https://dreamcraftdecors.com",
    facebook: "https://facebook.com/dreamcraftdecors",
    instagram: "https://instagram.com/dreamcraftdecors",
    license: "TRAD/DNCC/012948/2024",
    phone: "+8801700000002",
    city: "Dhaka",
    address: "House 12, Road 5, Dhanmondi",
    serviceAreas: ["Dhaka", "Chattogram"],
    rating: 4.9,
    reviewCount: 142,
    completedEvents: 480,
    responseRate: 98,
    responseTimeHours: 1.5,
    featured: true,
    catIndices: [0, 5], // Wedding & Pre-Wedding, Lighting
    subCatIndices: [[0, 1, 2], [0, 2]]
  },
  {
    name: "Royal Touch Wedding & Events",
    slug: "royal-touch-wedding-events",
    tagline: "Elegance Redefined for Grand Celebrations",
    about: "Specialized in luxury destination weddings, grand entrance archways, and traditional cinematic reception stages in Dhaka & Chittagong.",
    website: "https://royaltouchbd.com",
    facebook: "https://facebook.com/royaltouchbd",
    instagram: "https://instagram.com/royaltouchbd",
    license: "TRAD/DSCC/049821/2023",
    phone: "+8801810001003",
    city: "Dhaka",
    address: "Plot 45, Block D, Gulshan-2",
    serviceAreas: ["Dhaka", "Chattogram", "Sylhet"],
    rating: 4.8,
    reviewCount: 98,
    completedEvents: 310,
    responseRate: 96,
    responseTimeHours: 2.0,
    featured: true,
    catIndices: [0, 2], // Wedding, Corporate
    subCatIndices: [[0, 2, 3], [1, 3]]
  },
  {
    name: "Bloom & Blossom Floral Decors",
    slug: "bloom-and-blossom-floral-decors",
    tagline: "Natural Florals & Bespoke Event Styling",
    about: "We bring nature's beauty to life with imported fresh flowers, elegant botanical photobooths, and enchanting fairy-light arches.",
    website: "https://bloomandblossombd.com",
    facebook: "https://facebook.com/bloombossombd",
    instagram: "https://instagram.com/bloomandblossombd",
    license: "TRAD/CCC/081293/2024",
    phone: "+8801910002004",
    city: "Chattogram",
    address: "Road 3, Nasirabad Housing Society",
    serviceAreas: ["Chattogram", "Cumilla"],
    rating: 4.7,
    reviewCount: 76,
    completedEvents: 220,
    responseRate: 94,
    responseTimeHours: 2.5,
    featured: false,
    catIndices: [0, 3], // Wedding, Baby shower
    subCatIndices: [[0, 1], [0, 3]]
  },
  {
    name: "Kiddos & Confetti Birthday Planners",
    slug: "kiddos-and-confetti-birthday-planners",
    tagline: "Making Little Dreams Come Alive",
    about: "Dhaka's premier theme birthday and 1st birthday decor specialists. Custom 3D cutouts, pastel balloon cascades, and mascot entries.",
    website: "https://kiddosconfetti.com",
    facebook: "https://facebook.com/kiddosconfetti",
    instagram: "https://instagram.com/kiddosconfetti",
    license: "TRAD/DNCC/092182/2024",
    phone: "+8801310003005",
    city: "Dhaka",
    address: "Sector 7, Road 14, Uttara",
    serviceAreas: ["Dhaka", "Gazipur"],
    rating: 4.9,
    reviewCount: 185,
    completedEvents: 540,
    responseRate: 99,
    responseTimeHours: 1.0,
    featured: true,
    catIndices: [1, 3], // Birthday, Baby Shower
    subCatIndices: [[0, 3], [0, 1]]
  },
  {
    name: "Elite Corporate Stages & Expos",
    slug: "elite-corporate-stages-expos",
    tagline: "Corporate Sophistication & Tech-Driven Stages",
    about: "Delivering world-class corporate auditoriums, conference stages, AGM setups, and product launch pavilions for leading enterprises.",
    website: "https://elitecorpevents.com.bd",
    facebook: "https://facebook.com/elitecorpevents",
    instagram: "https://instagram.com/elitecorpevents",
    license: "TRAD/DNCC/112948/2023",
    phone: "+8801610004006",
    city: "Dhaka",
    address: "Level 6, Navana Tower, Gulshan-1",
    serviceAreas: ["Dhaka", "Chattogram", "Gazipur"],
    rating: 4.9,
    reviewCount: 110,
    completedEvents: 390,
    responseRate: 97,
    responseTimeHours: 1.2,
    featured: true,
    catIndices: [2, 5], // Corporate, Lighting FX
    subCatIndices: [[0, 1, 2], [0, 1]]
  },
  {
    name: "Cozy Corner Home & Rooftop Decors",
    slug: "cozy-corner-home-rooftop-decors",
    tagline: "Intimate Vibes & Aesthetic Small Spaces",
    about: "Transforming rooftops, balconies, and drawing rooms into magical fairy-tale spaces with bohemian canopies, warm lighting, and fresh florals.",
    website: "https://cozycornerdecors.com",
    facebook: "https://facebook.com/cozycornerdecors",
    instagram: "https://instagram.com/cozycornerdecors",
    license: "TRAD/DSCC/076214/2024",
    phone: "+8801710005007",
    city: "Dhaka",
    address: "Block C, Lalmatia, Mohammadpur",
    serviceAreas: ["Dhaka"],
    rating: 4.8,
    reviewCount: 92,
    completedEvents: 275,
    responseRate: 95,
    responseTimeHours: 2.0,
    featured: false,
    catIndices: [4, 1], // Home & Rooftop, Birthday & Anniversary
    subCatIndices: [[0, 1, 2], [1, 2]]
  },
  {
    name: "Lumina FX & Stage Lighting BD",
    slug: "lumina-fx-stage-lighting-bd",
    tagline: "Illuminating Moments with High-Tech Magic",
    about: "High-end concert lighting, 360 photobooths, custom laser neon signs, cold pyros, and dry ice low fog effects for grand events.",
    website: "https://luminafxbd.com",
    facebook: "https://facebook.com/luminafxbd",
    instagram: "https://instagram.com/luminafxbd",
    license: "TRAD/CCC/031948/2023",
    phone: "+8801810006008",
    city: "Chattogram",
    address: "Agrabad Commercial Area, Road 1",
    serviceAreas: ["Chattogram", "Dhaka", "Sylhet"],
    rating: 4.7,
    reviewCount: 64,
    completedEvents: 195,
    responseRate: 93,
    responseTimeHours: 3.0,
    featured: false,
    catIndices: [5, 2], // Lighting FX, Corporate
    subCatIndices: [[0, 1, 2, 3], [0, 1]]
  },
  {
    name: "Utsab Event Solutions Sylhet",
    slug: "utsab-event-solutions-sylhet",
    tagline: "Traditional Elegance Meets Modern Decor",
    about: "Sylhet's top luxury event decorator specializing in royal wedding conventions, NRI wedding banquets, and grand Mehendi nights.",
    website: "https://utsabsylhet.com",
    facebook: "https://facebook.com/utsabsylhet",
    instagram: "https://instagram.com/utsabsylhet",
    license: "TRAD/SCC/058291/2024",
    phone: "+8801910007009",
    city: "Sylhet",
    address: "East Zindabazar, Main Road",
    serviceAreas: ["Sylhet", "Dhaka"],
    rating: 4.8,
    reviewCount: 88,
    completedEvents: 340,
    responseRate: 96,
    responseTimeHours: 1.8,
    featured: true,
    catIndices: [0, 3], // Wedding, Family
    subCatIndices: [[0, 1, 3], [1, 2]]
  },
  {
    name: "Pastel Paradise Milestone Events",
    slug: "pastel-paradise-milestone-events",
    tagline: "Soft Pastels, Grand Memories",
    about: "Specialized in pastel-themed baby showers, gender reveal setups, 1st birthday parties, and romantic candlelight dinner arches.",
    website: "https://pastelparadisebd.com",
    facebook: "https://facebook.com/pastelparadisebd",
    instagram: "https://instagram.com/pastelparadisebd",
    license: "TRAD/DNCC/087192/2024",
    phone: "+8801310008010",
    city: "Dhaka",
    address: "Block F, Banani DOHS",
    serviceAreas: ["Dhaka"],
    rating: 4.9,
    reviewCount: 134,
    completedEvents: 410,
    responseRate: 98,
    responseTimeHours: 1.1,
    featured: true,
    catIndices: [1, 3, 4], // Birthday, Baby Shower, Rooftop
    subCatIndices: [[0, 2], [0, 1], [0]]
  },
  {
    name: "Padma Sparkle Event Designers",
    slug: "padma-sparkle-event-designers",
    tagline: "The Pride of Celebrations in Rajshahi",
    about: "Leading event decorator in Rajshahi providing stage setups, cultural festival pavilions, university convocations, and wedding receptions.",
    website: "https://padmasparkle.com",
    facebook: "https://facebook.com/padmasparkle",
    instagram: "https://instagram.com/padmasparkle",
    license: "TRAD/RCC/029184/2023",
    phone: "+8801610009011",
    city: "Rajshahi",
    address: "Greater Road, Kazihata",
    serviceAreas: ["Rajshahi", "Rangpur"],
    rating: 4.6,
    reviewCount: 52,
    completedEvents: 180,
    responseRate: 92,
    responseTimeHours: 2.8,
    featured: false,
    catIndices: [0, 2], // Wedding, Corporate
    subCatIndices: [[0, 1], [0, 3]]
  },
  {
    name: "Sundarban Splendor Decors Khulna",
    slug: "sundarban-splendor-decors-khulna",
    tagline: "Exquisite Event Styling in Southern Bengal",
    about: "Comprehensive decor services in Khulna city for wedding stages, Haldi nights, corporate annual dinners, and family milestones.",
    website: "https://splendordecorskhulna.com",
    facebook: "https://facebook.com/splendordecorskhulna",
    instagram: "https://instagram.com/splendordecorskhulna",
    license: "TRAD/KCC/049182/2024",
    phone: "+8801710010012",
    city: "Khulna",
    address: "Sonadanga Main Road, 2nd Phase",
    serviceAreas: ["Khulna", "Barishal"],
    rating: 4.7,
    reviewCount: 61,
    completedEvents: 205,
    responseRate: 94,
    responseTimeHours: 2.2,
    featured: false,
    catIndices: [0, 1], // Wedding, Birthday
    subCatIndices: [[0, 2], [1, 2]]
  },
  {
    name: "Kirtankhola Grand Events Barishal",
    slug: "kirtankhola-grand-events-barishal",
    tagline: "Grandeur and Grace on the Riverbank",
    about: "Barishal's premier full-service wedding and festival stage designer with grand floral gates, photobooths, and VIP furniture rentals.",
    website: "https://kirtankholaevents.com",
    facebook: "https://facebook.com/kirtankholaevents",
    instagram: "https://instagram.com/kirtankholaevents",
    license: "TRAD/BCC/019284/2023",
    phone: "+8801810011013",
    city: "Barishal",
    address: "Band Road, Sadat Area",
    serviceAreas: ["Barishal", "Khulna"],
    rating: 4.6,
    reviewCount: 45,
    completedEvents: 160,
    responseRate: 91,
    responseTimeHours: 3.2,
    featured: false,
    catIndices: [0, 3], // Wedding, Family
    subCatIndices: [[0, 1], [1, 3]]
  },
  {
    name: "Rangpur Royal Festive Decors",
    slug: "rangpur-royal-festive-decors",
    tagline: "North Bengal's Most Trusted Decor Agency",
    about: "Transforming venues into magical experiences across Rangpur division. Specialized in Gaye Holud, Walima stages, and expo stalls.",
    website: "https://rangpurroyaldecors.com",
    facebook: "https://facebook.com/rangpurroyaldecors",
    instagram: "https://instagram.com/rangpurroyaldecors",
    license: "TRAD/RPCC/038192/2024",
    phone: "+8801910012014",
    city: "Rangpur",
    address: "Station Road, Dhap",
    serviceAreas: ["Rangpur", "Rajshahi"],
    rating: 4.5,
    reviewCount: 39,
    completedEvents: 140,
    responseRate: 90,
    responseTimeHours: 3.5,
    featured: false,
    catIndices: [0, 2], // Wedding, Corporate
    subCatIndices: [[1, 2], [2, 3]]
  },
  {
    name: "Brahmaputra Bloom & Glow Mymensingh",
    slug: "brahmaputra-bloom-glow-mymensingh",
    tagline: "Charming Setups for Every Family Milestone",
    about: "Providing colorful Haldi setups, Akika ceremonies, school/college annual functions, and elegant rooftop celebration canopies.",
    website: "https://brahmaputradecors.com",
    facebook: "https://facebook.com/brahmaputradecors",
    instagram: "https://instagram.com/brahmaputradecors",
    license: "TRAD/MCC/028193/2024",
    phone: "+8801310013015",
    city: "Mymensingh",
    address: "Ganginar Par Road, Town Hall Area",
    serviceAreas: ["Mymensingh", "Dhaka", "Gazipur"],
    rating: 4.6,
    reviewCount: 48,
    completedEvents: 165,
    responseRate: 93,
    responseTimeHours: 2.6,
    featured: false,
    catIndices: [3, 4], // Family, Rooftop
    subCatIndices: [[0, 1, 2], [0, 1]]
  },
  {
    name: "Moynamoti Royal Decors Cumilla",
    slug: "moynamoti-royal-decors-cumilla",
    tagline: "Honoring Heritage with Royal Event Aesthetics",
    about: "Premier decorator in Cumilla for traditional wedding receptions, grand bridal entries, engagement ring ceremonies, and neon lighting.",
    website: "https://moynamotidecors.com",
    facebook: "https://facebook.com/moynamotidecors",
    instagram: "https://instagram.com/moynamotidecors",
    license: "TRAD/CUCC/048192/2023",
    phone: "+8801610014016",
    city: "Cumilla",
    address: "Nazrul Avenue, Kandirpar",
    serviceAreas: ["Cumilla", "Chattogram", "Dhaka"],
    rating: 4.7,
    reviewCount: 59,
    completedEvents: 210,
    responseRate: 95,
    responseTimeHours: 2.1,
    featured: false,
    catIndices: [0, 5], // Wedding, Lighting FX
    subCatIndices: [[0, 2, 3], [0, 2]]
  },
  {
    name: "Urban Vibes Gazipur Event Craft",
    slug: "urban-vibes-gazipur-event-craft",
    tagline: "Industrial Meets Glamour in Event Design",
    about: "Expert in factory annual gala nights, corporate seminar stages, resort birthday parties, and wedding setups in the Gazipur & Tongi hub.",
    website: "https://urbanvibesgazipur.com",
    facebook: "https://facebook.com/urbanvibesgazipur",
    instagram: "https://instagram.com/urbanvibesgazipur",
    license: "TRAD/GCC/068192/2024",
    phone: "+8801710015017",
    city: "Gazipur",
    address: "Dhaka-Mymensingh Highway, Chowrasta",
    serviceAreas: ["Gazipur", "Dhaka"],
    rating: 4.7,
    reviewCount: 68,
    completedEvents: 245,
    responseRate: 95,
    responseTimeHours: 1.9,
    featured: false,
    catIndices: [2, 1], // Corporate, Birthday
    subCatIndices: [[0, 1, 2], [0, 1]]
  },
  {
    name: "Velvet & Vines Luxury Event Studio",
    slug: "velvet-and-vines-luxury-event-studio",
    tagline: "Curators of Ultra-Luxury Destination Decors",
    about: "Bespoke styling for high-profile weddings, VIP lounges, luxury ceiling floral drops, and custom chandeliers in 5-star hotels across Dhaka.",
    website: "https://velvetandvinesbd.com",
    facebook: "https://facebook.com/velvetandvinesbd",
    instagram: "https://instagram.com/velvetandvinesbd",
    license: "TRAD/DNCC/148291/2023",
    phone: "+8801810016018",
    city: "Dhaka",
    address: "Road 11, Block D, Banani",
    serviceAreas: ["Dhaka", "Chattogram", "Sylhet"],
    rating: 5.0,
    reviewCount: 165,
    completedEvents: 520,
    responseRate: 99,
    responseTimeHours: 0.8,
    featured: true,
    catIndices: [0, 5, 2], // Wedding, Lighting, Corporate
    subCatIndices: [[0, 1, 2], [0, 1], [1]]
  },
  {
    name: "Balloon Symphony & Party Sparks",
    slug: "balloon-symphony-party-sparks",
    tagline: "Organic Balloon Sculptures & Fun Celebrations",
    about: "Specialized in organic balloon garlands, neon light walls, cartoon character themes, and surprise room makeovers for anniversaries & birthdays.",
    website: "https://balloonsymphonybd.com",
    facebook: "https://facebook.com/balloonsymphonybd",
    instagram: "https://instagram.com/balloonsymphonybd",
    license: "TRAD/DSCC/091823/2024",
    phone: "+8801910017019",
    city: "Dhaka",
    address: "Shantinagar Main Road, Kakrail",
    serviceAreas: ["Dhaka"],
    rating: 4.8,
    reviewCount: 112,
    completedEvents: 380,
    responseRate: 97,
    responseTimeHours: 1.4,
    featured: false,
    catIndices: [1, 4], // Birthday, Home & Rooftop
    subCatIndices: [[0, 1, 3], [1, 2]]
  },
  {
    name: "Nocturne Ambient Lighting & Staging",
    slug: "nocturne-ambient-lighting-staging",
    tagline: "Setting the Stage for Extraordinary Moments",
    about: "Professional acoustic stages, architectural uplighting, 3D mapped backdrops, truss roofing, and special effects for concerts and galas.",
    website: "https://nocturnelightingbd.com",
    facebook: "https://facebook.com/nocturnelightingbd",
    instagram: "https://instagram.com/nocturnelightingbd",
    license: "TRAD/DNCC/129841/2024",
    phone: "+8801310018020",
    city: "Dhaka",
    address: "Tejgaon Industrial Area, Link Road",
    serviceAreas: ["Dhaka", "Chattogram", "Sylhet", "Rajshahi"],
    rating: 4.9,
    reviewCount: 95,
    completedEvents: 330,
    responseRate: 96,
    responseTimeHours: 1.6,
    featured: true,
    catIndices: [5, 2], // Lighting FX, Corporate
    subCatIndices: [[0, 1, 2, 3], [0, 1]]
  },
  {
    name: "Heritage Haldi & Wedding Crafts",
    slug: "heritage-haldi-wedding-crafts",
    tagline: "Authentic Bengali Folk & Traditional Wedding Styling",
    about: "Reviving Bengali heritage with traditional rickshaw paint themes, clay pottery art, marigold floral curtains, and vibrant Mehendi gazebos.",
    website: "https://heritagehaldibd.com",
    facebook: "https://facebook.com/heritagehaldibd",
    instagram: "https://instagram.com/heritagehaldibd",
    license: "TRAD/DSCC/061928/2024",
    phone: "+8801610019021",
    city: "Dhaka",
    address: "Rankin Street, Wari, Old Dhaka",
    serviceAreas: ["Dhaka", "Cumilla", "Mymensingh"],
    rating: 4.9,
    reviewCount: 140,
    completedEvents: 460,
    responseRate: 98,
    responseTimeHours: 1.3,
    featured: true,
    catIndices: [0, 3], // Wedding, Family
    subCatIndices: [[1, 2, 3], [1, 2]]
  }
];

const decorators = [];

for (let i = 0; i < businesses.length; i++) {
  const b = businesses[i];
  // decorator _id: 66be18a2f2c4a91b88000001 to 66be18a2f2c4a91b88000014
  const decHex = (i + 1).toString(16).padStart(2, '0');
  // user _id: 66be18a1f2c4a91b88000002 to 66be18a1f2c4a91b88000015
  const userHex = (i + 2).toString(16).padStart(2, '0');

  // Build decorator categories subset from categoriesData
  const assignedCategories = b.catIndices.map((catIdx, cIdx) => {
    const rawCat = categoriesData[catIdx];
    const subIndices = b.subCatIndices[cIdx] || [0];
    const selectedSubs = subIndices.map(subIdx => rawCat.subCategories[subIdx]).filter(Boolean);

    return {
      name: rawCat.name,
      status: rawCat.status,
      order: rawCat.order,
      description: rawCat.description,
      subCategories: selectedSubs
    };
  });

  const logoText = encodeURIComponent(b.name.split(' ').slice(0, 2).join(' '));
  const coverText = encodeURIComponent(b.name);

  decorators.push(`  {
    _id: new ObjectId("66be18a2f2c4a91b880000${decHex}"),
    userId: new ObjectId("66be18a1f2c4a91b880000${userHex}"),
    businessName: "${b.name}",
    slug: "${b.slug}",
    tagline: "${b.tagline}",
    about: "${b.about}",
    logo: "https://placehold.co/400x400/4F46E5/FFFFFF?text=${logoText}",
    coverImage: "https://placehold.co/1200x600/1E293B/FFFFFF?text=${coverText}",
    contactInfo: {
      phone: "${b.phone}",
      email: "contact@${b.slug.replace(/-/g, '')}.com",
      website: "${b.website}",
      address: "${b.address}",
      city: "${b.city}"
    },
    serviceAreas: ${JSON.stringify(b.serviceAreas)},
    categories: ${JSON.stringify(assignedCategories, null, 6).replace(/\n/g, '\n    ')},
    metrics: {
      rating: ${b.rating},
      reviewCount: ${b.reviewCount},
      completedEvents: ${b.completedEvents},
      responseRate: ${b.responseRate},
      responseTimeHours: ${b.responseTimeHours}
    },
    verification: {
      isVerified: true,
      tradeLicenseNo: "${b.license}",
      nidVerified: true,
      verifiedAt: new Date("2026-01-10T08:30:00.000Z")
    },
    socialLinks: {
      facebook: "${b.facebook}",
      instagram: "${b.instagram}"
    },
    status: "active",
    featured: ${b.featured},
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  }`);
}

const fileContent = `const { ObjectId } = require('mongodb');

const decoratorsData = [
${decorators.join(',\n')}
];

module.exports = { decoratorsData };
`;

fs.writeFileSync(path.join(__dirname, '../data/decoratorsData.js'), fileContent);
console.log('decoratorsData.js generated successfully with 20 synced decorators!');

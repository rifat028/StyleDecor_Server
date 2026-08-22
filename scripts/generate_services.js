const fs = require('fs');
const path = require('path');
const { decoratorsData } = require('../data/decoratorsData');

const sampleImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
];

const subcategoryDetails = {
  "sub_01": {
    baseTitle: "Royal Wedding Reception Stage Setup",
    shortDesc: "Luxurious fresh floral stage setup with ambient warm spotlighting and customized couple seating.",
    fullDesc: "Transform your wedding reception into a fairytale with our signature floral stage. Includes complete structural backdrop framing, premium real orchid & rose combinations, fairy canopy lighting, and royal seating arrangement.",
    basePrice: 45000,
    discPrice: 40000,
    pkg1: { tier: "Standard Floral", price: 40000, features: ["16ft x 10ft Stage Backdrop", "Artificial & Seasonal Flower Mix", "Warm Ambience LED Spotlights", "Classic Couple Sofa"] },
    pkg2: { tier: "Premium Royal", price: 65000, features: ["24ft x 12ft Grand Stage Backdrop", "100% Fresh Imported Floral Cascades", "Intelligent Moving Head Stage Lights", "Royal Velvet Throne Chairs", "Bride & Groom Entry Pathway Runner"] },
    space: "Minimum 20ft width, 12ft depth",
    duration: 6,
    teardown: 2,
    notice: 4,
    outdoor: true
  },
  "sub_02": {
    baseTitle: "Vibrant Gaye Holud & Mehendi Canopy",
    shortDesc: "Traditional Bengali marigold decor with wooden swings, rickshaw art accents, and vibrant drapes.",
    fullDesc: "An authentic festive atmosphere for your Gaye Holud and Mehendi night. Features vibrant yellow & orange drape cascades, clay pottery props, traditional kulo decor, and cozy floor seating cushions.",
    basePrice: 32000,
    discPrice: 28000,
    pkg1: { tier: "Festive Basic", price: 28000, features: ["14ft Backdrop with Fresh Genda Flowers", "Traditional Decorated Wooden Swing", "4 Side Floor Seating Mattresses", "Warm Fairy Lights"] },
    pkg2: { tier: "Grand Holud Extravaganza", price: 45000, features: ["20ft 3D Floral Canopy", "Authentic Hand-Painted Rickshaw Props", "Custom Neon 'Gaye Holud' Sign", "Mehendi Lounge Setup with Low Tables"] },
    space: "Minimum 15ft width",
    duration: 5,
    teardown: 2,
    notice: 3,
    outdoor: true
  },
  "sub_03": {
    baseTitle: "Bride & Groom Grand Entry Pathway",
    shortDesc: "Magical entry aisle with floral arches, cold pyro fireworks, and romantic fog walkway.",
    fullDesc: "Make a show-stopping entrance on your special day. Includes continuous floral arches, red or white aisle carpet, automated cold spark machines for entry moments, and dense dry ice smoke clouds.",
    basePrice: 25000,
    discPrice: 22000,
    pkg1: { tier: "Classic Aisle", price: 22000, features: ["40ft Velvet Red Carpet", "6 Floral Pillar Stands", "Warm Ambient Spotlights"] },
    pkg2: { tier: "Cinematic Fireworks Entry", price: 38000, features: ["60ft Premium White Carpet", "10 Floral Archways with Crystal Hangings", "4x Cold Pyro Firework Firing", "Heavy Dry Ice Cloud Machine"] },
    space: "Aisle length at least 30ft",
    duration: 4,
    teardown: 1.5,
    notice: 2,
    outdoor: true
  },
  "sub_04": {
    baseTitle: "Romantic Engagement & Ring Ceremony Decor",
    shortDesc: "Elegant geometric floral ring backdrop with romantic neon signage and acrylic pedestals.",
    fullDesc: "Celebrate the beginning of forever with an intimate, chic engagement setup. Featuring customized metallic circular arches, delicate pastel florals, mirror pedestals for ring exchange, and candle stands.",
    basePrice: 28000,
    discPrice: 24000,
    pkg1: { tier: "Chic Minimal", price: 24000, features: ["7ft Circular Metallic Ring Arch", "Pastel Artificial Florals", "Custom 'Better Together' Neon Sign", "Dual Acrylic Ring Pedestals"] },
    pkg2: { tier: "Luxe Botanical Ring", price: 38000, features: ["8ft Double Ring Geometric Arch", "100% Fresh Hydrangea & Rose Wrap", "Warm Edison Bulb Chandelier", "Velvet Couple Seating with Rug"] },
    space: "Minimum 12ft width",
    duration: 4,
    teardown: 1.5,
    notice: 2,
    outdoor: true
  },
  "sub_05": {
    baseTitle: "Kids Themed Fantasy Birthday Setup",
    shortDesc: "Custom cartoon and fantasy 3D backdrop with organic balloon garlands and character props.",
    fullDesc: "Bring your child's favorite characters to life with custom 3D cutouts, vibrant layered balloon arches, matching cake table styling, and customized name light board.",
    basePrice: 18000,
    discPrice: 15000,
    pkg1: { tier: "Themed Standard", price: 15000, features: ["8ft x 8ft Printed Backdrop", "Double Balloon Garland Arch", "2 Custom Character Standees", "Themed Cake Table & Props"] },
    pkg2: { tier: "3D Fantasy Mega", price: 26000, features: ["12ft Layered 3D Cutout Backdrop", "Full Organic Balloon Tunnel", "4 Character Standees + LED Name Board", "Kids Tableware & Themed Party Bags"] },
    space: "Minimum 10ft width",
    duration: 3,
    teardown: 1,
    notice: 2,
    outdoor: false
  },
  "sub_06": {
    baseTitle: "Adult Milestone Birthday & Glam Gala",
    shortDesc: "Sophisticated black, gold, and champagne balloon styling with shimmer wall and marquee numbers.",
    fullDesc: "Turn 21, 30, 40, or 50 in glamorous style! Includes dazzling gold/silver shimmer sequin walls, light-up 4ft marquee LED numbers, organic matte balloon garlands, and cocktail lounge styling.",
    basePrice: 22000,
    discPrice: 19000,
    pkg1: { tier: "Glam Shimmer", price: 19000, features: ["8ft x 8ft Gold Shimmer Backdrop", "Black & Chrome Gold Balloon Arch", "3ft Lighted Marquee Age Numbers", "Cake Plinth Stand"] },
    pkg2: { tier: "VIP Champagne Gala", price: 34000, features: ["12ft Shimmer Wall with Custom Neon", "4ft Giant Marquee Numbers", "Champagne Tower Stand & Neon Sign", "Cocktail High-Top Table Linens (4 Units)"] },
    space: "Minimum 12ft width",
    duration: 3.5,
    teardown: 1,
    notice: 2,
    outdoor: false
  },
  "sub_07": {
    baseTitle: "Romantic Anniversary & Candlelight Dining",
    shortDesc: "Intimate cabana canopy with hundreds of glass tea-light candles, rose petals, and fairy lights.",
    fullDesc: "Surprise your partner with an unforgettable romantic anniversary evening. Includes private sheer draped cabana, aromatic fresh rose petal pathways, warm ambient tea-lights, and custom couple photo frame wall.",
    basePrice: 16000,
    discPrice: 14000,
    pkg1: { tier: "Sweet Romance", price: 14000, features: ["Private Draped Canopy Cabana", "50 Glass Candle Holders & Fairy Lights", "Rose Petal Heart Pathway", "Dinner Table Styling"] },
    pkg2: { tier: "Grand Luxury Romance", price: 25000, features: ["Rooftop or Garden Luxe Cabana", "150+ Ambient Tea Lights & Lanterns", "Custom Memory Photo Gallery on Fairy Strings", "Fresh Red Rose Floral Centerpiece", "Champagne Bucket & Customized Neon Sign"] },
    space: "Minimum 10ft x 10ft area",
    duration: 3,
    teardown: 1,
    notice: 1,
    outdoor: true
  },
  "sub_08": {
    baseTitle: "1st Birthday Little Prince / Princess Setup",
    shortDesc: "Pastel dreamscape setup with giant teddy bears, soft pastel balloon arches, and light-up ONE letters.",
    fullDesc: "Celebrate baby's momentous first year with an enchanting pastel theme. Includes soft gradient balloon walls, illuminated giant 'ONE' marquee letters, high chair decor, and themed milestone photo board.",
    basePrice: 20000,
    discPrice: 17000,
    pkg1: { tier: "Pastel Dream", price: 17000, features: ["8ft Circle Arch with Pastel Balloon Cloud", "3ft Lighted 'ONE' Letters", "Baby Milestone Poster Frame", "Decorated High Chair"] },
    pkg2: { tier: "Royal First Birthday", price: 29000, features: ["14ft 3D Castle or Cloud Backdrop", "Giant 5ft Plush Teddy Bear Prop", "Organic Chrome & Pastel Balloon Cascade", "Custom Cake Table Cylinder Trio with LED"] },
    space: "Minimum 12ft width",
    duration: 3.5,
    teardown: 1,
    notice: 2,
    outdoor: false
  },
  "sub_09": {
    baseTitle: "Executive Conference & Seminar Staging",
    shortDesc: "Sleek matte stage backdrop with acrylic branded podium, LED wash lights, and crisp projection framing.",
    fullDesc: "Professional corporate stage setups engineered for board meetings, tech conferences, and annual seminars. Clean lines, wrinkle-free tension fabric prints, branded speaker podiums, and professional lighting wash.",
    basePrice: 38000,
    discPrice: 33000,
    pkg1: { tier: "Corporate Standard", price: 33000, features: ["20ft x 10ft Branded Backdrop Wall", "Clear Acrylic Branded Podium", "4 Warm LED Stage Wash Lights", "Stage Carpet Runner"] },
    pkg2: { tier: "High-Tech Executive", price: 55000, features: ["30ft x 12ft Seamless Matte Backdrop", "Dual LED Screen Framing & Truss Structure", "VIP Speaker Couch Seating Setup", "Wireless Microphones & Stage Ambient Lighting"] },
    space: "Auditorium or hall stage",
    duration: 5,
    teardown: 2,
    notice: 3,
    outdoor: false
  },
  "sub_10": {
    baseTitle: "Gala & Annual Award Night Stage Setup",
    shortDesc: "Glamorous red carpet step-and-repeat media wall with golden stanchions, spotlighting, and trophy display.",
    fullDesc: "Create an unforgettable celebratory awards evening. High-impact black and gold stage aesthetics, branded media photo wall with velvet rope stanchions, custom trophy display plinths, and dynamic spotlighting.",
    basePrice: 42000,
    discPrice: 37000,
    pkg1: { tier: "Red Carpet Gala", price: 37000, features: ["24ft Award Stage Backdrop", "10ft Step-and-Repeat Media Wall", "30ft Red Carpet with Golden Stanchions", "Trophy Plinth Display"] },
    pkg2: { tier: "VIP Star Night", price: 68000, features: ["36ft Multi-Tier Stage Backdrop with LED Trim", "Intelligent Moving Head Lighting FX", "Custom Neon Brand Logo & Trophy Stage", "Full Hall Red Carpet Walkway & Photo Booth"] },
    space: "Grand Ballroom or Hall",
    duration: 6,
    teardown: 2.5,
    notice: 4,
    outdoor: false
  },
  "sub_11": {
    baseTitle: "Product Launch & Trade Expo Pavilion",
    shortDesc: "Futuristic reveal stage with motorized curtain drop, branded display pedestals, and dynamic laser neon.",
    fullDesc: "Deliver maximum hype for your new product release. Includes concealed curtain drop mechanisms for dramatic reveals, custom illuminated product pedestals, high-contrast brand backdrops, and promotional stall framing.",
    basePrice: 48000,
    discPrice: 42000,
    pkg1: { tier: "Launch Essential", price: 42000, features: ["16ft Product Reveal Backdrop", "Illuminated Center Product Pedestal", "Spotlight Pin Spot Focus Lighting", "Branded Media Backdrop"] },
    pkg2: { tier: "Grand Reveal Mega", price: 75000, features: ["28ft Custom Built Exhibition Booth", "Automatic Kabuki Curtain Drop System", "Cold Pyro Sparkular Blast on Reveal", "RGB LED Strip Product Counters & Neon Wall"] },
    space: "Exhibition center or convention hall",
    duration: 7,
    teardown: 3,
    notice: 5,
    outdoor: false
  },
  "sub_12": {
    baseTitle: "Corporate Dinner & Executive Meetup Decor",
    shortDesc: "Refined banquet table decor with branded floral centerpieces, warm uplighting, and acoustic stage.",
    fullDesc: "Elevate your corporate dinner and networking night with tasteful luxury. Sophisticated table runners, modern metallic floral arrangements, branded place settings, and subtle perimeter LED uplighting.",
    basePrice: 30000,
    discPrice: 26000,
    pkg1: { tier: "Banquet Elegant", price: 26000, features: ["10 Decorated Round Dinner Tables", "Fresh Floral Low Centerpieces", "Perimeter Warm Wall Uplighting (8 Units)", "Welcome Entry Signboard"] },
    pkg2: { tier: "Executive President Gala", price: 45000, features: ["20 Banquet Tables with Crystal Centerpieces", "Acoustic Small Stage for Live Band/Speeches", "16 Wireless DMX Mood Uplights", "Branded Photo Lounge Corner"] },
    space: "Banquet hall with 10+ tables",
    duration: 4,
    teardown: 2,
    notice: 3,
    outdoor: false
  },
  "sub_13": {
    baseTitle: "Pastel Baby Shower & Gender Reveal Setup",
    shortDesc: "Whimsical pastel pink and baby blue balloon arches with giant teddy bears and balloon pop box.",
    fullDesc: "Celebrate the arrival of your little one with a heartwarming baby shower. Custom balloon clouds, teddy bear nursery props, candy table styling, and our signature giant gender reveal mystery box.",
    basePrice: 20000,
    discPrice: 17000,
    pkg1: { tier: "Pastel Joy", price: 17000, features: ["10ft Dual-Tone Balloon Arch", "'Oh Baby' Neon Sign on Grass Wall", "Mother-to-be Throne Chair", "Dessert Table Props"] },
    pkg2: { tier: "Grand Gender Reveal", price: 30000, features: ["14ft Organic Pastel Balloon Wall", "Mystery Balloon Drop Box or Smoke Cannon", "Giant Plush Teddy Bears & Plinths", "Personalized Photo Backdrop & Favors Table"] },
    space: "Living room, rooftop, or party hall",
    duration: 3.5,
    teardown: 1,
    notice: 2,
    outdoor: true
  },
  "sub_14": {
    baseTitle: "Akika & Naming Ceremony Stage",
    shortDesc: "Traditional Islamic & cultural aesthetic stage with fresh jasmine, golden lanterns, and cradle decor.",
    fullDesc: "Honor this blessed milestone with pure, elegant decoration. White and gold drapes, real white rose & jasmine flower ropes, Moroccan brass lanterns, and a beautifully adorned baby cradle.",
    basePrice: 22000,
    discPrice: 19000,
    pkg1: { tier: "Blessed Classic", price: 19000, features: ["12ft White & Gold Draped Backdrop", "Decorated Traditional Baby Cradle", "Fresh Flower Garlands", "Moroccan Lantern Accents"] },
    pkg2: { tier: "Royal Noor Setup", price: 33000, features: ["16ft Grand Arch with Fresh Floral Ceiling Droop", "Ornate Brass Cradle with Velvet Cushions", "Custom Arabic Calligraphy Name Board", "Family Seating Diwan with Bolsters"] },
    space: "Minimum 14ft width",
    duration: 4,
    teardown: 1.5,
    notice: 2,
    outdoor: true
  },
  "sub_15": {
    baseTitle: "Religious & Cultural Festival Pavilion",
    shortDesc: "Vibrant traditional fair decor for Eid, Puja, or cultural carnivals with lanterns and clay art.",
    fullDesc: "Capturing the festive spirit of Eid, Durga Puja, or Pahela Baishakh with folk-inspired decor. Hand-painted motifs, decorative colorful umbrella ceilings, ambient brass lanterns, and festive photo booths.",
    basePrice: 35000,
    discPrice: 30000,
    pkg1: { tier: "Festive Pavilion", price: 30000, features: ["18ft Themed Cultural Backdrop", "Ceiling Hanging Lanterns / Umbrellas", "Folk Art Entrance Gate", "Warm Spotlights"] },
    pkg2: { tier: "Grand Mela Extravaganza", price: 55000, features: ["30ft Festival Main Stage & Altar Setup", "Full Overhead Colorful Canopy Drapery", "Clay Pottery & Rickshaw Art Installation", "Festive Photo Spot with Props"] },
    space: "Community center or outdoor open area",
    duration: 5,
    teardown: 2,
    notice: 3,
    outdoor: true
  },
  "sub_16": {
    baseTitle: "Housewarming & Family Get-Together Decor",
    shortDesc: "Welcoming entrance floral toran, cozy drawing room fairy lights, and elegant dining table styling.",
    fullDesc: "Make your new home feel warm and celebratory for housewarming guests. Includes auspicious front door flower torans, soft fairy light ceilings, scented candle centerpieces, and welcoming hallway decor.",
    basePrice: 15000,
    discPrice: 13000,
    pkg1: { tier: "Cozy Welcome", price: 13000, features: ["Front Door Floral Toran & Rangoli", "Living Room Fairy Light Curtains", "Dining Table Floral Runner", "Welcome Standee"] },
    pkg2: { tier: "New Home Celebration", price: 22000, features: ["Grand Entrance Arch with Fresh Flowers", "Full Apartment Ambient Fairy Lighting", "Balcony & Living Room Floral Accents", "Custom Acrylic 'Home Sweet Home' Sign"] },
    space: "Residential apartment / house",
    duration: 3,
    teardown: 1,
    notice: 1,
    outdoor: false
  },
  "sub_17": {
    baseTitle: "Rooftop Party Canopy & Fairy Light Sky",
    shortDesc: "Romantic overhead fairy light tunnel with bohemian wooden pallets, cushions, and faux fire pit.",
    fullDesc: "Turn your rooftop into an enchanting stargazing lounge. Hundreds of meters of twinkling fairy lights forming an overhead sky canopy, low wooden table seating, cozy boho floor cushions, and rustic lanterns.",
    basePrice: 22000,
    discPrice: 19000,
    pkg1: { tier: "Boho Rooftop Standard", price: 19000, features: ["Overhead Fairy Light Canopy (20ft x 20ft)", "Low Wooden Pallet Seating for 12", "Bohemian Rugs & 15 Cushions", "Mason Jar Lanterns"] },
    pkg2: { tier: "Luxe Starlit Rooftop", price: 34000, features: ["Full Rooftop Fairy Light Web with Bulbs", "Cabana Tent Structure with White Sheer Drapes", "Acoustic Speaker & Mic Setup", "Custom Neon Sign & BBQ Corner Decor"] },
    space: "Rooftop minimum 400 sq ft",
    duration: 4,
    teardown: 1.5,
    notice: 2,
    outdoor: true
  },
  "sub_18": {
    baseTitle: "Drawing Room & Balcony Aesthetic Makeover",
    shortDesc: "Intimate corner drape canopy with artificial ivy creepers, floor mats, and warm Edison glow.",
    fullDesc: "Upgrade your living space for compact indoor celebrations. Aesthetic drapery, faux botanical greenery walls, warm filament lighting, and stylish velvet accent cushions for small cozy gatherings.",
    basePrice: 12000,
    discPrice: 10000,
    pkg1: { tier: "Cozy Corner", price: 10000, features: ["8ft Corner Backdrop Drapes", "Warm Edison Light Chandelier", "Balcony Railing Fairy Lights", "Floor Rug & 6 Cushions"] },
    pkg2: { tier: "Full Room Ambiance", price: 18000, features: ["Drawing Room Accent Wall Backdrop", "Balcony Greenery Vines with Fairy Drops", "Ceiling Warm Glow String Lights", "Mini Photo Frame Memory Grid"] },
    space: "Standard apartment room or balcony",
    duration: 2.5,
    teardown: 1,
    notice: 1,
    outdoor: false
  },
  "sub_19": {
    baseTitle: "Surprise Room Makeover with Balloons & Candles",
    shortDesc: "Secret room transformation with ceiling helium balloons, floor candle path, and photo strings.",
    fullDesc: "The ultimate birthday or anniversary surprise executed while your loved one is away. 50+ floating balloons with ribbon tails, LED battery-operated candle trails on the floor, bed decor, and hanging photo polaroids.",
    basePrice: 14000,
    discPrice: 12000,
    pkg1: { tier: "Sweet Surprise", price: 12000, features: ["40 Helium Ceiling Balloons with Ribbons", "Floor Rose Petal Heart Pathway", "30 LED Tea Lights", "Happy Birthday / Anniversary Banner"] },
    pkg2: { tier: "Grand Romantic Ambush", price: 20000, features: ["80 Metallic Balloons (Ceiling + Floor)", "Bed Canopy Styling with Fairy Lights", "20 Hanging Polaroid Photo Memories", "Custom Neon Light Sign on Wall"] },
    space: "Bedroom or hotel suite",
    duration: 2,
    teardown: 0.5,
    notice: 1,
    outdoor: false
  },
  "sub_20": {
    baseTitle: "Custom Neon Signs & Marquee Letter Rental",
    shortDesc: "Vibrant neon flex signage on acrylic backing and 4ft illuminated vintage marquee letters.",
    fullDesc: "Make your event Instagrammable with bespoke glowing text. Choose from our popular catalog ('Better Together', 'Happily Ever After', 'Crazy In Love') or order custom text with giant lightbulb marquee letters.",
    basePrice: 10000,
    discPrice: 8500,
    pkg1: { tier: "Neon Sign Rental", price: 8500, features: ["Choice of 1 Stock Neon Sign (up to 3ft)", "Clear Acrylic Hanging Chain & Stand", "Dimmer Controller & Long Power Cable"] },
    pkg2: { tier: "Giant Marquee + Neon Combo", price: 18000, features: ["4ft Light-Up Marquee Letters (up to 4 chars e.g. LOVE)", "1 Custom or Stock Neon Flex Sign", "Faux Greenery Backdrop Wall (8ft x 8ft)"] },
    space: "Wall or stand space 8ft width",
    duration: 1.5,
    teardown: 0.5,
    notice: 1,
    outdoor: true
  },
  "sub_21": {
    baseTitle: "Spotlights & Ambient Event Lighting Setup",
    shortDesc: "Intelligent LED par cans, warm stage profiles, and wireless DMX architectural wall washers.",
    fullDesc: "Complete venue mood lighting to transform any plain hall into a warm, dramatic event setting. Includes 12 to 24 high-powered RGBW LED pars, stage spotlighting, and programmable color mixing.",
    basePrice: 16000,
    discPrice: 14000,
    pkg1: { tier: "Ambience Essential", price: 14000, features: ["10x High-Power RGBW LED Uplights", "2x Stage Profile Focus Spotlights", "DMX Lighting Controller & Cabling", "On-site Light Technician"] },
    pkg2: { tier: "Full Venue Illumination", price: 26000, features: ["20x Wireless DMX Uplights", "4x Moving Head Beam Lights", "Stage Warm Light Truss Bar", "Live Lighting Operator Throughout Event"] },
    space: "Venue perimeter",
    duration: 3,
    teardown: 1.5,
    notice: 2,
    outdoor: true
  },
  "sub_22": {
    baseTitle: "Special Effects - Cold Pyro & Dry Ice Low Fog",
    shortDesc: "Non-hazardous indoor cold spark fountains and cloud-like heavy dry ice smoke for stage entries.",
    fullDesc: "Create breathless cinematic moments during bridal entries, first dances, or cake cutting. Our special effects use safe, non-smoky cold pyros (safe for indoor ballroom carpets) and heavy floor-hugging dry ice fog.",
    basePrice: 18000,
    discPrice: 15000,
    pkg1: { tier: "Entry FX Pack", price: 15000, features: ["4x Cold Pyro Sparkular Machines (2 Firings)", "1x Heavy Dry Ice Low Fog Machine", "Certified Special FX Operator"] },
    pkg2: { tier: "Grand Stage FX Spectacular", price: 28000, features: ["8x Cold Spark Machines (4 Continuous Blasts)", "2x High-Output Dry Ice Machines for Dance Floor", "CO2 Jet Blaster Guns (2 Units)", "Full Event Coordination with DJ/Band"] },
    space: "Stage front & aisle",
    duration: 2,
    teardown: 1,
    notice: 1,
    outdoor: true
  },
  "sub_23": {
    baseTitle: "360 Video Booth & Instant Photo Booth",
    shortDesc: "Motorized 360 rotating video platform with slow-motion effects, ring light, and instant QR sharing.",
    fullDesc: "The ultimate guest entertainment activation. Guests stand on a platform while a camera rotates around them capturing HD 360 slow-motion videos with custom event branding overlays and instant mobile download.",
    basePrice: 24000,
    discPrice: 20000,
    pkg1: { tier: "360 Video Booth 3 Hours", price: 20000, features: ["360 Motorized Platform (holds 4 guests)", "Studio Ring Light & RGB Tube Lighting", "Custom Video Overlay & Music", "Instant AirDrop / QR Code Sharing", "2 Friendly Attendants"] },
    pkg2: { tier: "360 VIP Deluxe 5 Hours", price: 34000, features: ["Full Event Duration (up to 5 hours)", "Red Carpet & Golden Stanchion Enclosure", "Fun Props & Money Gun", "Custom Branded Backdrop Enclosure", "Online Live Gallery Access"] },
    space: "10ft x 10ft open floor area",
    duration: 2,
    teardown: 1,
    notice: 2,
    outdoor: true
  }
};

const services = [];
let serviceCounter = 1;

decoratorsData.forEach((dec, dIdx) => {
  dec.categories.forEach((cat) => {
    if (!cat.subCategories || cat.subCategories.length === 0) return;

    cat.subCategories.forEach((sub) => {
      const hex = serviceCounter.toString(16).padStart(2, '0');
      const serviceId = `66be18a3f2c4a91b880000${hex}`;
      const detail = subcategoryDetails[sub.id] || {
        baseTitle: `${sub.name} by ${dec.businessName}`,
        shortDesc: `Custom and professional ${sub.name.toLowerCase()} design tailored for your celebration.`,
        fullDesc: `High quality bespoke setup for ${sub.name.toLowerCase()} by ${dec.businessName}. Includes premium materials, structural setup, lighting, and full event support.`,
        basePrice: 25000,
        discPrice: 22000,
        pkg1: { tier: "Standard", price: 22000, features: ["Full Setup", "Standard Decor Props", "Warm Lighting"] },
        pkg2: { tier: "Premium", price: 35000, features: ["Grand Setup", "Imported Props & Florals", "Full Ambient Stage Lighting"] },
        space: "Standard venue dimensions",
        duration: 4,
        teardown: 2,
        notice: 2,
        outdoor: true
      };

      const title = `${detail.baseTitle} - ${dec.businessName.split(' ')[0]}`;
      const slug = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${serviceCounter}`;
      
      const img1 = sampleImages[(serviceCounter - 1) % sampleImages.length];
      const img2 = sampleImages[serviceCounter % sampleImages.length];
      const img3 = sampleImages[(serviceCounter + 1) % sampleImages.length];

      services.push(`  {
    _id: new ObjectId("${serviceId}"),
    decoratorId: new ObjectId("${dec._id}"),
    title: "${title}",
    slug: "${slug}",
    category: "${cat.name}",
    subCategory: {
      id: "${sub.id}",
      name: "${sub.name}",
      slug: "${sub.slug}"
    },
    shortDescription: "${detail.shortDesc}",
    fullDescription: "${detail.fullDesc}",
    pricing: {
      basePrice: ${detail.basePrice},
      discountedPrice: ${detail.discPrice},
      unit: "per_event",
      depositRequiredPercent: ${serviceCounter % 2 === 0 ? 25 : 30}
    },
    packages: [
      {
        tier: "${detail.pkg1.tier}",
        price: ${detail.pkg1.price},
        features: ${JSON.stringify(detail.pkg1.features)}
      },
      {
        tier: "${detail.pkg2.tier}",
        price: ${detail.pkg2.price},
        features: ${JSON.stringify(detail.pkg2.features)}
      }
    ],
    images: [
      "${img1}",
      "${img2}",
      "${img3}"
    ],
    coverImage: "${img1}",
    specifications: {
      setupDurationHours: ${detail.duration},
      teardownDurationHours: ${detail.teardown},
      minimumNoticeDays: ${detail.notice},
      spaceRequirement: "${detail.space}",
      isOutdoorSuitable: ${detail.outdoor}
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
      rating: ${(4.5 + ((serviceCounter * 7) % 6) / 10).toFixed(1)},
      reviewCount: ${15 + (serviceCounter * 3) % 45},
      bookingCount: ${25 + (serviceCounter * 5) % 80}
    },
    status: "active",
    featured: ${serviceCounter % 5 === 0},
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  }`);

      serviceCounter++;
    });
  });
});

const fileContent = `const { ObjectId } = require('mongodb');

const servicesData = [
${services.join(',\n')}
];

module.exports = { servicesData };
`;

fs.writeFileSync(path.join(__dirname, '../data/servicesData.js'), fileContent);
console.log(`servicesData.js generated successfully with exactly ${services.length} services!`);

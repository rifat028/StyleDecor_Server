const fs = require('fs');
const path = require('path');
const { bookingsData } = require('../data/bookingsData');
const { usersData } = require('../data/usersData');
const { decoratorsData } = require('../data/decoratorsData');
const { servicesData } = require('../data/servicesData');

const sampleImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
];

const commentsByCategory = {
  "Wedding & Pre-Wedding": [
    "Made our wedding reception look straight out of a fairytale! The fresh flower stage backdrop, ambient lighting, and couple seating arrangement were beyond our expectations. Highly recommended!",
    "The Gaye Holud setup was exceptionally vibrant! The traditional wooden swing and marigold garlands were adored by all our guests. Team was punctual and professional.",
    "Breathtaking bridal entry pathway with the cold pyros and dry ice low fog! Our guests were mesmerized. Truly magical execution.",
    "The engagement ring ceremony backdrop was elegant and modern. The customized neon sign with floral wrap was the highlight of the night."
  ],
  "Birthday & Anniversary": [
    "Our baby's 1st birthday pastel theme was absolutely adorable! The giant teddy bear and organic balloon arch created the perfect photo spots.",
    "Organized an intimate rooftop candlelight anniversary dinner and the fairy light canopy was so romantic! My wife was completely surprised.",
    "The kids 3D theme birthday setup was fantastic. Quality of cutouts and balloon arrangement was top-tier. Kids had a blast!",
    "Celebrated my 30th birthday in glam style with their shimmer wall and giant marquee numbers. Perfect Instagrammable setup!"
  ],
  "Corporate & Official Events": [
    "Executed our annual corporate gala flawlessly. The branded media wall, stage spotlights, and award podium elevated the entire evening.",
    "Very professional team. They delivered our tech seminar stage ahead of time with zero hiccups during the live presentations.",
    "The product launch pavilion was futuristic and sleek. The automatic curtain reveal and lighting effects left a lasting impression on our stakeholders.",
    "Sophisticated corporate dinner arrangement with fresh floral centerpieces and subtle ambient uplighting. Excellent work."
  ],
  "Baby Shower & Family Gatherings": [
    "Such a dreamy pastel baby shower setup! The teddy bears and balloon clouds were so photogenic. Everyone loved it.",
    "The Akika stage with white roses and brass lanterns brought a serene, blessed ambiance to our celebration.",
    "Beautiful cultural festival setup with colorful ceiling drapes and clay pottery props. Authentic Bengali festive touch!",
    "Cozy and welcoming housewarming decor. The floral toran and drawing room fairy lights made our new apartment feel so special."
  ],
  "Home & Rooftop Intimate Setups": [
    "Transformed our bare rooftop into a bohemian paradise with fairy light canopy and low pallet seating. Unforgettable evening with friends.",
    "The surprise bedroom makeover with helium balloons and candle pathway was executed with utmost secrecy and perfection. 10/10!",
    "Aesthetic balcony styling with fairy light cascades and botanical greenery. Perfect small space celebration setup."
  ],
  "Lighting, FX & Rentals": [
    "The 360 video booth was the star attraction of our wedding! Guests queued up all night and downloaded videos instantly via QR.",
    "Cold spark pyros and low fog machine created a dreamlike moment during our first dance. Completely smoke-free and safe indoors.",
    "Custom neon sign arrived sharp and bright. Added the perfect modern aesthetic to our photo corner.",
    "Stage lighting programming was on point! The moving heads and warm wash lights matched every segment of our event."
  ]
};

const vendorReplies = [
  "Thank you so much for trusting us with your special day! Wishing you a wonderful celebration ahead.",
  "It was an absolute pleasure bringing your vision to life! Thank you for the wonderful feedback and kind words.",
  "We are delighted to hear that you and your guests loved the decor. Thank you for choosing our team!",
  "Thank you for your generous review! It was an honor styling this momentous milestone for your family."
];

// Generate 80 reviews for the first 80 bookings
const eligibleBookings = bookingsData.slice(0, 80);
const reviews = [];

eligibleBookings.forEach((b, i) => {
  const hex = (i + 1).toString(16).padStart(2, '0');
  const reviewId = `66be18a7f2c4a91b880000${hex}`;

  const customer = usersData.find(u => u._id.toString() === b.customerId.toString()) || {
    name: "Happy Client",
    email: "client@gmail.com",
    photoUrl: sampleImages[0]
  };

  const decorator = decoratorsData.find(d => d._id.toString() === b.decoratorId.toString());
  const categoryName = b.serviceSnapshot.category || "Wedding & Pre-Wedding";
  const commentList = commentsByCategory[categoryName] || commentsByCategory["Wedding & Pre-Wedding"];
  const comment = commentList[i % commentList.length];

  const rating = (i % 7 === 0) ? 4 : 5;

  const hasImages = (i % 3 !== 0);
  const img1 = sampleImages[(i * 2) % sampleImages.length];
  const img2 = sampleImages[(i * 2 + 1) % sampleImages.length];
  const reviewImages = hasImages ? [img1, img2] : [];

  const hasReply = (i % 4 !== 0);
  const replyText = vendorReplies[i % vendorReplies.length];

  const vendorReplyObj = hasReply ? `{
      reply: "${replyText}",
      repliedAt: new Date("2026-08-15T${10 + (i % 8)}:00:00.000Z")
    }` : `null`;

  reviews.push(`  {
    _id: new ObjectId("${reviewId}"),
    bookingId: new ObjectId("${b._id}"),
    customerId: new ObjectId("${b.customerId}"),
    customerName: "${customer.name}",
    customerEmail: "${customer.email}",
    customerPhotoUrl: "${customer.photoUrl}",
    decoratorId: new ObjectId("${b.decoratorId}"),
    serviceId: new ObjectId("${b.serviceId}"),
    rating: ${rating},
    comment: "${comment.replace(/"/g, '\\"')}",
    images: ${JSON.stringify(reviewImages)},
    vendorReply: ${vendorReplyObj},
    isVerifiedBooking: true,
    status: "published",
    createdAt: new Date("2026-08-14T20:00:00.000Z"),
    updatedAt: new Date("2026-08-14T20:00:00.000Z")
  }`);
});

const fileContent = `const { ObjectId } = require('mongodb');

const decoratorReviewsData = [
${reviews.join(',\n')}
];

module.exports = { decoratorReviewsData };
`;

fs.writeFileSync(path.join(__dirname, '../data/decoratorReviewsData.js'), fileContent);
console.log(`decoratorReviewsData.js generated successfully with ${reviews.length} reviews!`);

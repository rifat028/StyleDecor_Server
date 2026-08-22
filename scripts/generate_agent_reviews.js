const fs = require('fs');
const path = require('path');
const { bookingsData } = require('../data/bookingsData');
const { usersData } = require('../data/usersData');
const { decoratorsData } = require('../data/decoratorsData');
const { agentsData } = require('../data/agentsData');

const agentComments = [
  "Managed the entire on-site floral installation flawlessly and ensured the stage was ready 1 hour ahead of schedule. Excellent team handling.",
  "Outstanding supervision during a tight 4-hour setup window. Handled client last-minute requests with great composure and professionalism.",
  "Superb technical coordination on lighting and cold pyros. Maintained all safety protocols and cable ramps across the venue hall.",
  "Great attention to detail on the 3D cutout backdrop and organic balloon styling. The client specifically praised the clean aesthetic.",
  "Handled on-site logistics and venue permission clearances very smoothly. Punctual, responsive, and disciplined field leadership.",
  "Very dependable supervisor for high-profile VIP events. Ensured pristine flower freshness and prompt post-event teardown by midnight.",
  "Demonstrated great problem-solving skills when venue power fluctuated. Switched to backup lines swiftly without disrupting the program.",
  "Excellent communication with both the venue management and our master decorators. Highly recommended for complex multi-tier setups."
];

const outcomes = ["outstanding", "successful", "outstanding", "successful", "satisfactory"];

// Generate 80 reviews for the first 80 bookings
const eligibleBookings = bookingsData.slice(0, 80);
const reviews = [];

eligibleBookings.forEach((b, i) => {
  const hex = (i + 1).toString(16).padStart(2, '0');
  const reviewId = `66be18a8f2c4a91b880000${hex}`;

  const decorator = decoratorsData.find(d => d._id.toString() === b.decoratorId.toString()) || decoratorsData[0];
  const decoratorUser = usersData.find(u => u._id.toString() === decorator.userId.toString()) || {
    name: "Decorator Owner",
    email: decorator.contactInfo.email
  };

  const agent = agentsData.find(a => a._id.toString() === b.assignedAgentId.toString()) || agentsData[0];

  const rating = (i % 8 === 0) ? 4 : 5;
  const comment = agentComments[i % agentComments.length];
  const outcome = outcomes[i % outcomes.length];
  const recommended = rating >= 4;

  reviews.push(`  {
    _id: new ObjectId("${reviewId}"),
    bookingId: new ObjectId("${b._id}"),
    decoratorId: new ObjectId("${decorator._id}"),
    decoratorBusinessName: "${decorator.businessName}",
    reviewedBy: {
      userId: new ObjectId("${decorator.userId}"),
      name: "${decoratorUser.name}",
      email: "${decoratorUser.email}"
    },
    agentId: new ObjectId("${agent._id}"),
    agentUserId: new ObjectId("${agent.userId}"),
    agentName: "${agent.name}",
    agentEmail: "${agent.email}",
    agentPhotoUrl: "${agent.photoUrl}",
    agentDesignation: "${agent.designation}",
    rating: ${rating},
    comment: "${comment}",
    eventOutcome: "${outcome}",
    recommendedForBigEvents: ${recommended},
    status: "published",
    createdAt: new Date("2026-08-15T11:00:00.000Z"),
    updatedAt: new Date("2026-08-15T11:00:00.000Z")
  }`);
});

const fileContent = `const { ObjectId } = require('mongodb');

const agentReviewsData = [
${reviews.join(',\n')}
];

module.exports = { agentReviewsData };
`;

fs.writeFileSync(path.join(__dirname, '../data/agentReviewsData.js'), fileContent);
console.log(`agentReviewsData.js generated successfully with ${reviews.length} reviews!`);

const fs = require('fs');
const path = require('path');
const { usersData } = require('../data/usersData');
const { decoratorsData } = require('../data/decoratorsData');

const agentUsers = usersData.filter(u => u.role === 'agent');

const designations = [
  "Senior Field Supervisor",
  "Lead Stage Architect",
  "Lighting & FX Coordinator",
  "Logistics & Operations Lead",
  "Master Floral Stylist",
  "Venue Setup Coordinator",
  "Quality Assurance Officer",
  "Technical Audio-Visual Lead"
];

const specializations = [
  "Stage Architecture & Floral Setup",
  "Intelligent Lighting & Rigging",
  "Theme Backdrops & 3D Cutouts",
  "Cold Pyro & Atmospheric Special FX",
  "Traditional Bengali Floral Crafts",
  "Rooftop Canopy & Ambient Drapes",
  "Photo Booth & 360 Video Engineering",
  "Fast-Track Emergency Venue Setup"
];

const cityZones = {
  "Dhaka": ["Dhanmondi", "Gulshan", "Banani", "Uttara", "Mirpur", "Mohammadpur", "Old Dhaka"],
  "Chattogram": ["Agrabad", "Nasirabad", "GEC Circle", "Khulshi", "Panchlaish"],
  "Sylhet": ["Zindabazar", "Shahjalal Upashahar", "Amberkhana", "Shibgonj"],
  "Rajshahi": ["Shaheb Bazar", "Kazihata", "Motihar", "Boalia"],
  "Khulna": ["Sonadanga", "Khalishpur", "Boyra", "Daulatpur"],
  "Barishal": ["Sadat Road", "Natullabad", "Rupatali", "Band Road"],
  "Rangpur": ["Dhap", "Modern More", "Station Road", "Jahaj Company More"],
  "Mymensingh": ["Town Hall", "Charpara", "Ganginar Par", "Medical College Area"],
  "Cumilla": ["Kandirpar", "Badurtala", "Jhawtola", "Bagichagaon"],
  "Gazipur": ["Chowrasta", "Tongi", "Board Bazar", "Konabari"]
};

const statuses = ["available", "available", "available", "on_assignment", "busy"];

const agents = [];

agentUsers.forEach((u, i) => {
  const agentHex = (i + 1).toString(16).padStart(2, '0');
  const agentId = `66be18a4f2c4a91b880000${agentHex}`;

  // Distribute 4 agents per decorator (for 20 decorators)
  const decoratorIndex = Math.min(Math.floor(i / 4), decoratorsData.length - 1);
  const decorator = decoratorsData[decoratorIndex];

  const designation = designations[i % designations.length];
  const specialization = specializations[i % specializations.length];
  const experienceYears = 2 + (i % 7);

  const city = decorator.contactInfo.city || "Dhaka";
  const allZones = cityZones[city] || cityZones["Dhaka"];
  // pick 2-3 zones
  const zoneCount = 2 + (i % 2);
  const startZone = (i * 2) % allZones.length;
  const zones = [];
  for (let z = 0; z < zoneCount; z++) {
    zones.push(allZones[(startZone + z) % allZones.length]);
  }

  const rating = parseFloat((4.5 + ((i * 3) % 6) / 10).toFixed(1));
  const completedEvents = 30 + (i * 7) % 110;
  const activeAssignedBookings = (i % 4);
  const status = statuses[i % statuses.length];

  agents.push(`  {
    _id: new ObjectId("${agentId}"),
    userId: new ObjectId("${u._id}"),
    decoratorId: new ObjectId("${decorator._id}"),
    name: "${u.name}",
    email: "${u.email}",
    phone: "${u.phone}",
    photoUrl: "${u.photoUrl}",
    designation: "${designation}",
    specialization: "${specialization}",
    experienceYears: ${experienceYears},
    assignedArea: {
      city: "${city}",
      zones: ${JSON.stringify(zones)}
    },
    metrics: {
      rating: ${rating},
      completedEvents: ${completedEvents},
      activeAssignedBookings: ${activeAssignedBookings}
    },
    status: "${status}",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  }`);
});

const fileContent = `const { ObjectId } = require('mongodb');

const agentsData = [
${agents.join(',\n')}
];

module.exports = { agentsData };
`;

fs.writeFileSync(path.join(__dirname, '../data/agentsData.js'), fileContent);
console.log(`agentsData.js generated successfully with exactly ${agents.length} agents across 20 decorators!`);

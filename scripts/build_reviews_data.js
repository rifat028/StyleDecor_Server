const fs = require('fs');
const { decoratorReviewsData } = require('../data/decoratorReviewsData');
const { bookingsData } = require('../data/bookingsData');
const { agentsData } = require('../data/agentsData');

const bookingMap = new Map(bookingsData.map(b => [b._id.toString(), b]));
const agentMap = new Map(agentsData.map(a => [a._id.toString(), a]));

const agentsByDecorator = {};
agentsData.forEach(a => {
  const dId = a.decoratorId.toString();
  if (!agentsByDecorator[dId]) agentsByDecorator[dId] = [];
  agentsByDecorator[dId].push(a);
});

let agentCounter = {};

const codeLines = [
  "const { ObjectId } = require('mongodb');",
  "",
  "const reviewsData = ["
];

decoratorReviewsData.forEach((rev, idx) => {
  let agentId = null;
  let agentName = 'Lead Specialist';

  const b = rev.bookingId ? bookingMap.get(rev.bookingId.toString()) : null;
  if (b && b.assignedAgentId && agentMap.has(b.assignedAgentId.toString())) {
    const ag = agentMap.get(b.assignedAgentId.toString());
    agentId = ag._id;
    agentName = ag.name;
  } else {
    const decIdStr = rev.decoratorId.toString();
    const decAgents = agentsByDecorator[decIdStr] || [];
    if (decAgents.length > 0) {
      if (!agentCounter[decIdStr]) agentCounter[decIdStr] = 0;
      const chosen = decAgents[agentCounter[decIdStr] % decAgents.length];
      agentCounter[decIdStr]++;
      agentId = chosen._id;
      agentName = chosen.name;
    }
  }

  codeLines.push('  {');
  codeLines.push(`    _id: new ObjectId("${rev._id.toString()}"),`);
  codeLines.push(`    bookingId: new ObjectId("${rev.bookingId.toString()}"),`);
  codeLines.push(`    customerId: new ObjectId("${rev.customerId.toString()}"),`);
  codeLines.push(`    customerName: ${JSON.stringify(rev.customerName)},`);
  codeLines.push(`    customerEmail: ${JSON.stringify(rev.customerEmail)},`);
  codeLines.push(`    customerPhotoUrl: ${JSON.stringify(rev.customerPhotoUrl)},`);
  codeLines.push(`    decoratorId: new ObjectId("${rev.decoratorId.toString()}"),`);
  codeLines.push(`    serviceId: new ObjectId("${rev.serviceId.toString()}"),`);
  codeLines.push(`    agentId: new ObjectId("${agentId.toString()}"),`);
  codeLines.push(`    agentName: ${JSON.stringify(agentName)},`);
  codeLines.push(`    rating: ${rev.rating},`);
  codeLines.push(`    comment: ${JSON.stringify(rev.comment)},`);
  codeLines.push(`    images: ${JSON.stringify(rev.images || [])},`);
  if (rev.vendorReply) {
    codeLines.push('    vendorReply: {');
    codeLines.push(`      reply: ${JSON.stringify(rev.vendorReply.reply)},`);
    codeLines.push(`      repliedAt: new Date("${new Date(rev.vendorReply.repliedAt).toISOString()}")`);
    codeLines.push('    },');
  } else {
    codeLines.push('    vendorReply: null,');
  }
  codeLines.push(`    isVerifiedBooking: ${rev.isVerifiedBooking !== undefined ? rev.isVerifiedBooking : true},`);
  codeLines.push(`    status: ${JSON.stringify(rev.status || 'published')},`);
  codeLines.push(`    createdAt: new Date("${new Date(rev.createdAt).toISOString()}"),`);
  codeLines.push(`    updatedAt: new Date("${new Date(rev.updatedAt).toISOString()}")`);
  codeLines.push(idx === decoratorReviewsData.length - 1 ? '  }' : '  },');
});

codeLines.push('];');
codeLines.push('');
codeLines.push('module.exports = { reviewsData };');
codeLines.push('');

fs.writeFileSync('./data/reviewsData.js', codeLines.join('\n'), 'utf8');
console.log('✅ Successfully generated data/reviewsData.js with 80 reviews containing agentId and agentName.');

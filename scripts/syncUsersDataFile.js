const fs = require('fs');
const path = require('path');
const { client } = require('../config/db');
const { userCollection } = require('../models/collections');

async function updateUsersDataFile() {
  try {
    await client.connect();
    const users = await userCollection.find({}).toArray();
    console.log(`Fetched ${users.length} users with firebaseUid.`);

    let content = 'const { ObjectId } = require("mongodb");\n\nconst usersData = [\n';
    users.forEach((u, i) => {
      content += '  {\n';
      content += `    _id: new ObjectId("${u._id.toString()}"),\n`;
      content += `    firebaseUid: ${u.firebaseUid ? JSON.stringify(u.firebaseUid) : 'null'},\n`;
      content += `    name: ${JSON.stringify(u.name)},\n`;
      content += `    email: ${JSON.stringify(u.email)},\n`;
      content += `    phone: ${JSON.stringify(u.phone || "")},\n`;
      content += `    photoUrl: ${JSON.stringify(u.photoUrl || "")},\n`;
      content += `    role: ${JSON.stringify(u.role)},\n`;
      content += `    address: ${JSON.stringify(u.address || { street: "", area: "", city: "Dhaka", postalCode: "" }, null, 6).replace(/\n/g, "\n    ")},\n`;
      content += `    createdAt: new Date("${new Date(u.createdAt).toISOString()}"),\n`;
      content += `    updatedAt: new Date("${new Date(u.updatedAt).toISOString()}")\n`;
      content += '  }' + (i < users.length - 1 ? ',\n' : '\n');
    });
    content += '];\n\nmodule.exports = { usersData };\n';

    const targetPath = path.join(__dirname, '../data/usersData.js');
    fs.writeFileSync(targetPath, content, 'utf8');
    console.log(`✅ Successfully updated ${targetPath} with 121 genuine Firebase UIDs!`);
  } finally {
    await client.close();
    process.exit(0);
  }
}

updateUsersDataFile();

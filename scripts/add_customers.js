const fs = require('fs');
const path = require('path');
const { usersData } = require('../data/usersData');

const customerNames = [
  "Tahmidur Rahman", "Shamima Nasrin", "Ashikur Rahman", "Tania Sultana",
  "Shakib Al Hasan", "Mehnaz Tabassum", "Golam Rabbani", "Farzana Yasmin",
  "Mahmudur Rahman", "Sabrina Mostafa", "Towhidul Alam", "Humaira Khatun",
  "Rashedul Islam", "Nusrat Sharmin", "Imtiaz Hossain", "Jannatul Ferdous",
  "Zahidul Karim", "Afsana Mimi", "Kazi Nazrul", "Sumaiya Akter"
];

const customerAddresses = [
  { street: "House 14, Road 4, Sector 3", area: "Uttara", city: "Dhaka", postalCode: "1230" },
  { street: "Flat 4B, Plot 19, Block A", area: "Bashundhara R/A", city: "Dhaka", postalCode: "1229" },
  { street: "House 52, Road 11/A", area: "Dhanmondi", city: "Dhaka", postalCode: "1209" },
  { street: "Plot 8, Block E", area: "Banani", city: "Dhaka", postalCode: "1213" },
  { street: "House 23, Road 2, Block B", area: "Mirpur-1", city: "Dhaka", postalCode: "1216" },
  { street: "124 O.R. Nizam Road", area: "GEC Circle", city: "Chattogram", postalCode: "4000" },
  { street: "House 7, Road 3", area: "South Khulshi", city: "Chattogram", postalCode: "4225" },
  { street: "East Nasirabad Housing Society", area: "Nasirabad", city: "Chattogram", postalCode: "4000" },
  { street: "House 15, Block C", area: "Shahjalal Upashahar", city: "Sylhet", postalCode: "3100" },
  { street: "Kumarpara Main Road", area: "Kumarpara", city: "Sylhet", postalCode: "3100" },
  { street: "VIP Road", area: "Kazihata", city: "Rajshahi", postalCode: "6000" },
  { street: "Station Road", area: "Shaheb Bazar", city: "Rajshahi", postalCode: "6100" },
  { street: "House 45, 1st Phase", area: "Sonadanga R/A", city: "Khulna", postalCode: "9100" },
  { street: "KDA Avenue", area: "Boyra", city: "Khulna", postalCode: "9000" },
  { street: "Band Road", area: "Sadat Area", city: "Barishal", postalCode: "8200" },
  { street: "Central Jail Road", area: "Dhap", city: "Rangpur", postalCode: "5400" },
  { street: "Medical College Road", area: "Charpara", city: "Mymensingh", postalCode: "2206" },
  { street: "Badurtala Road", area: "Kandirpar", city: "Cumilla", postalCode: "3500" },
  { street: "College Road", area: "Tongi", city: "Gazipur", postalCode: "1710" },
  { street: "Dhaka-Mymensingh Highway", area: "Chowrasta", city: "Gazipur", postalCode: "1702" }
];

const customerAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534751516642-a171edd2521d?w=400&auto=format&fit=crop&q=80"
];

function generatePhone(index) {
  const prefixes = ["017", "018", "019", "013", "016", "015"];
  const prefix = prefixes[index % prefixes.length];
  const suffix = (20000000 + index * 843).toString().slice(0, 8);
  return `+88${prefix}${suffix}`;
}

const newCustomerBlocks = [];

for (let i = 0; i < 20; i++) {
  const decIdNum = 101 + i; // 101 to 120
  const hex = decIdNum.toString(16).padStart(2, '0'); // 65 to 78
  const name = customerNames[i];
  const emailName = name.toLowerCase().replace(/[^a-z]/g, '.').replace(/\.+/g, '.');
  const email = `${emailName}.user${i + 1}@gmail.com`;
  const phone = generatePhone(i + 100);
  const photo = customerAvatars[i % customerAvatars.length];
  const address = customerAddresses[i];

  newCustomerBlocks.push(`  {
    _id: new ObjectId("66be18a1f2c4a91b880000${hex}"),
    firebaseUid: null,
    name: "${name}",
    email: "${email}",
    phone: "${phone}",
    photoUrl: "${photo}",
    role: "customer",
    address: {
      street: "${address.street}",
      area: "${address.area}",
      city: "${address.city}",
      postalCode: "${address.postalCode}"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  }`);
}

const existingFile = fs.readFileSync(path.join(__dirname, '../data/usersData.js'), 'utf8');

// Replace the closing bracket
const updatedContent = existingFile.replace(
  /\n\];\s*\n\s*module\.exports\s*=\s*{\s*usersData\s*};\s*$/,
  `,\n${newCustomerBlocks.join(',\n')}\n];\n\nmodule.exports = { usersData };\n`
);

fs.writeFileSync(path.join(__dirname, '../data/usersData.js'), updatedContent);
console.log('Successfully appended 20 customers to usersData.js!');

const fs = require('fs');
const path = require('path');

// Curated Bangladeshi Male and Female Names
const bangladeshiNames = [
  "Tanvir Ahmed", "Sadia Islam", "Rahim Chowdhury", "Farhana Akter", "Arifur Rahman",
  "Nusrat Jahan", "Mahmudul Hasan", "Tasnim Sultana", "Mehedi Hasan", "Sabrina Yesmin",
  "Shahriar Kabir", "Rifat Ara", "Kamrul Islam", "Fatema Tuj Johora", "Ashraful Alam",
  "Nazia Hasan", "Jannatul Ferdous", "Shakil Mahmud", "Sumaiya Tabassum", "Zubair Hossain",
  "Israt Jahan", "Fahim Faysal", "Afroza Begum", "Nazmul Huda", "Sharmin Sultana",
  "Saiful Islam", "Maliha Rahman", "Imran Hossain", "Tasmia Haque", "Rashedul Karim",
  "Anika Bushra", "Mostafizur Rahman", "Rumana Akter", "Sabbir Hossain", "Nabila Tahsin",
  "Tariqul Islam", "Fariha Tasnim", "Ahsan Habib", "Samira Khan", "Mizanur Rahman",
  "Tahmina Akter", "Shohel Rana", "Farzana Yeasmin", "Towhidul Islam", "Nafisa Anjum",
  "Kazi Rashed", "Sayeda Farzana", "Abdur Rob", "Meghla Chowdhury", "Sajib Ahmed",
  "Rubina Parvin", "Monirul Islam", "Humaira Kabir", "Hasan Al Mamun", "Laboni Akter",
  "Golam Mostafa", "Farzana Haque", "Mustafizur Rahman", "Sultana Razia", "Al Amin Hossain",
  "Sharmin Akter", "Nurul Huda", "Jannat Ara", "Shahadat Hossain", "Tamanna Yasmin",
  "Rezaul Karim", "Roksana Begum", "Zahid Hasan", "Mim Akter", "Enamul Haque",
  "Bushra Rahman", "Ashiqur Rahman", "Nusrat Sharmin", "Sayed Ali", "Shamima Nasrin",
  "Asaduzzaman Noor", "Farhana Sharmin", "Shamim Reza", "Priya Das", "Delwar Hossain",
  "Mahfuza Khatun", "Mahbubur Rahman", "Khadija Begum", "Zakir Hossain", "Nasima Akter",
  "Habibur Rahman", "Sufia Begum", "Babul Mia", "Shirin Akter", "Sirajul Islam",
  "Rokeya Sultana", "Liton Das", "Anowara Begum", "Joynal Abedin", "Mariam Begum",
  "Abul Kashem", "Shahina Akter", "Abdul Mannan", "Rehana Parvin", "Mainul Islam"
];

// Top 10 Bangladeshi Cities with Realistic Areas and Postal Codes
const topCities = [
  { city: "Dhaka", area: "Dhanmondi", street: "House 24, Road 8/A", postalCode: "1209" },
  { city: "Dhaka", area: "Gulshan-2", street: "Plot 12, Road 113", postalCode: "1212" },
  { city: "Dhaka", area: "Banani", street: "Block C, Road 11", postalCode: "1213" },
  { city: "Dhaka", area: "Uttara", street: "Sector 4, Road 7", postalCode: "1230" },
  { city: "Dhaka", area: "Mirpur-10", street: "Block D, Section 10", postalCode: "1216" },
  { city: "Chattogram", area: "Agrabad C/A", street: "Commercial Area, Road 3", postalCode: "4100" },
  { city: "Chattogram", area: "GEC Circle", street: "Nasirabad Housing Society, Road 2", postalCode: "4000" },
  { city: "Chattogram", area: "Khulshi", street: "South Khulshi Residential Area", postalCode: "4225" },
  { city: "Sylhet", area: "Zindabazar", street: "East Zindabazar, Main Road", postalCode: "3100" },
  { city: "Sylhet", area: "Shahjalal Upashahar", street: "Block B, Sector 2", postalCode: "3100" },
  { city: "Rajshahi", area: "Shaheb Bazar", street: "Station Road, Ward 11", postalCode: "6100" },
  { city: "Rajshahi", area: "Kazihata", street: "VIP Road, Greater Road", postalCode: "6000" },
  { city: "Khulna", area: "Sonadanga", street: "Sonadanga R/A, 2nd Phase", postalCode: "9100" },
  { city: "Khulna", area: "Khalishpur", street: "Housing Estate Road", postalCode: "9200" },
  { city: "Barishal", area: "Sadat Road", street: "Band Road, Ward 5", postalCode: "8200" },
  { city: "Barishal", area: "Natullabad", street: "Central Bus Terminal Area", postalCode: "8200" },
  { city: "Rangpur", area: "Dhap", street: "Jail Road, Dhap", postalCode: "5400" },
  { city: "Rangpur", area: "Modern More", street: "Station Road", postalCode: "5402" },
  { city: "Mymensingh", area: "Town Hall", street: "Ganginar Par Road", postalCode: "2200" },
  { city: "Mymensingh", area: "Charpara", street: "Medical College Road", postalCode: "2206" },
  { city: "Cumilla", area: "Kandirpar", street: "Nazrul Avenue", postalCode: "3500" },
  { city: "Cumilla", area: "Jhawtola", street: "Badurtala Road", postalCode: "3500" },
  { city: "Gazipur", area: "Chowrasta", street: "Dhaka-Mymensingh Highway", postalCode: "1702" },
  { city: "Gazipur", area: "Tongi", street: "College Road, Tongi Bazar", postalCode: "1710" }
];

// Curated high quality Unsplash avatar portraits
const unsplashAvatars = [
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

function generateEmail(name, index, role) {
  const cleanName = name.toLowerCase().replace(/[^a-z]/g, '.').replace(/\.+/g, '.');
  return `${cleanName}.${role}${index}@styledecor.com`;
}

function generatePhone(index) {
  const prefixes = ["017", "018", "019", "013", "016", "015"];
  const prefix = prefixes[index % prefixes.length];
  const suffix = (10000000 + index * 937).toString().slice(0, 8);
  return `+88${prefix}${suffix}`;
}

const users = [];

// 1. Super Admin (Exact specification)
users.push(`  {
    _id: new ObjectId("694a67222d7b0885ab704273"),
    firebaseUid: null,
    name: "Admin StyleDecor",
    email: "admin.styledecor1@gmail.com",
    phone: "+8801700000001",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    role: "admin",
    address: {
      street: "Level 4, Corporate Tower",
      area: "Banani",
      city: "Dhaka",
      postalCode: "1213"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  }`);

// 2. Decorators (20 users) -> 0x02 to 0x15
for (let i = 2; i <= 21; i++) {
  const hex = i.toString(16).padStart(2, '0');
  const index = i - 2; // 0 to 19
  const name = bangladeshiNames[index];
  const email = generateEmail(name, i - 1, 'dec');
  const phone = generatePhone(i);
  const photo = unsplashAvatars[index % unsplashAvatars.length];
  const address = topCities[index % topCities.length];

  users.push(`  {
    _id: new ObjectId("66be18a1f2c4a91b880000${hex}"),
    firebaseUid: null,
    name: "${name}",
    email: "${email}",
    phone: "${phone}",
    photoUrl: "${photo}",
    role: "decorator",
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

// 3. Agents (79 users) -> 0x16 to 0x64
for (let i = 22; i <= 100; i++) {
  const hex = i.toString(16).padStart(2, '0');
  const index = (i - 2) % bangladeshiNames.length; // cycle through names
  const agentNum = i - 21;
  const name = bangladeshiNames[index];
  const email = generateEmail(name, agentNum, 'agent');
  const phone = generatePhone(i + 50);
  const photo = unsplashAvatars[(i - 2) % unsplashAvatars.length];
  const address = topCities[(i + 3) % topCities.length];

  users.push(`  {
    _id: new ObjectId("66be18a1f2c4a91b880000${hex}"),
    firebaseUid: null,
    name: "${name}",
    email: "${email}",
    phone: "${phone}",
    photoUrl: "${photo}",
    role: "agent",
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

const fileContent = `const { ObjectId } = require('mongodb');

const usersData = [
${users.join(',\n')}
];

module.exports = { usersData };
`;

fs.writeFileSync(path.join(__dirname, '../data/usersData.js'), fileContent);
console.log('usersData.js generated successfully with real Bangladeshi names, top 10 cities addresses, and Unsplash portraits!');

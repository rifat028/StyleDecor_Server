const { ObjectId } = require('mongodb');

const usersData = [
  {
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
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000002"),
    firebaseUid: null,
    name: "Tanvir Ahmed",
    email: "tanvir.ahmed.dec1@styledecor.com",
    phone: "+8801910001874",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "House 24, Road 8/A",
      area: "Dhanmondi",
      city: "Dhaka",
      postalCode: "1209"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000003"),
    firebaseUid: null,
    name: "Sadia Islam",
    email: "sadia.islam.dec2@styledecor.com",
    phone: "+8801310002811",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Plot 12, Road 113",
      area: "Gulshan-2",
      city: "Dhaka",
      postalCode: "1212"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000004"),
    firebaseUid: null,
    name: "Rahim Chowdhury",
    email: "rahim.chowdhury.dec3@styledecor.com",
    phone: "+8801610003748",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Block C, Road 11",
      area: "Banani",
      city: "Dhaka",
      postalCode: "1213"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000005"),
    firebaseUid: null,
    name: "Farhana Akter",
    email: "farhana.akter.dec4@styledecor.com",
    phone: "+8801510004685",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Sector 4, Road 7",
      area: "Uttara",
      city: "Dhaka",
      postalCode: "1230"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000006"),
    firebaseUid: null,
    name: "Arifur Rahman",
    email: "arifur.rahman.dec5@styledecor.com",
    phone: "+8801710005622",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Block D, Section 10",
      area: "Mirpur-10",
      city: "Dhaka",
      postalCode: "1216"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000007"),
    firebaseUid: null,
    name: "Nusrat Jahan",
    email: "nusrat.jahan.dec6@styledecor.com",
    phone: "+8801810006559",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Commercial Area, Road 3",
      area: "Agrabad C/A",
      city: "Chattogram",
      postalCode: "4100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000008"),
    firebaseUid: null,
    name: "Mahmudul Hasan",
    email: "mahmudul.hasan.dec7@styledecor.com",
    phone: "+8801910007496",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Nasirabad Housing Society, Road 2",
      area: "GEC Circle",
      city: "Chattogram",
      postalCode: "4000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000009"),
    firebaseUid: null,
    name: "Tasnim Sultana",
    email: "tasnim.sultana.dec8@styledecor.com",
    phone: "+8801310008433",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "South Khulshi Residential Area",
      area: "Khulshi",
      city: "Chattogram",
      postalCode: "4225"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800000a"),
    firebaseUid: null,
    name: "Mehedi Hasan",
    email: "mehedi.hasan.dec9@styledecor.com",
    phone: "+8801610009370",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "East Zindabazar, Main Road",
      area: "Zindabazar",
      city: "Sylhet",
      postalCode: "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800000b"),
    firebaseUid: null,
    name: "Sabrina Yesmin",
    email: "sabrina.yesmin.dec10@styledecor.com",
    phone: "+8801510010307",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Block B, Sector 2",
      area: "Shahjalal Upashahar",
      city: "Sylhet",
      postalCode: "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800000c"),
    firebaseUid: null,
    name: "Shahriar Kabir",
    email: "shahriar.kabir.dec11@styledecor.com",
    phone: "+8801710011244",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Station Road, Ward 11",
      area: "Shaheb Bazar",
      city: "Rajshahi",
      postalCode: "6100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800000d"),
    firebaseUid: null,
    name: "Rifat Ara",
    email: "rifat.ara.dec12@styledecor.com",
    phone: "+8801810012181",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "VIP Road, Greater Road",
      area: "Kazihata",
      city: "Rajshahi",
      postalCode: "6000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800000e"),
    firebaseUid: null,
    name: "Kamrul Islam",
    email: "kamrul.islam.dec13@styledecor.com",
    phone: "+8801910013118",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Sonadanga R/A, 2nd Phase",
      area: "Sonadanga",
      city: "Khulna",
      postalCode: "9100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800000f"),
    firebaseUid: null,
    name: "Fatema Tuj Johora",
    email: "fatema.tuj.johora.dec14@styledecor.com",
    phone: "+8801310014055",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Housing Estate Road",
      area: "Khalishpur",
      city: "Khulna",
      postalCode: "9200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000010"),
    firebaseUid: null,
    name: "Ashraful Alam",
    email: "ashraful.alam.dec15@styledecor.com",
    phone: "+8801610014992",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Band Road, Ward 5",
      area: "Sadat Road",
      city: "Barishal",
      postalCode: "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000011"),
    firebaseUid: null,
    name: "Nazia Hasan",
    email: "nazia.hasan.dec16@styledecor.com",
    phone: "+8801510015929",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Central Bus Terminal Area",
      area: "Natullabad",
      city: "Barishal",
      postalCode: "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000012"),
    firebaseUid: null,
    name: "Jannatul Ferdous",
    email: "jannatul.ferdous.dec17@styledecor.com",
    phone: "+8801710016866",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Jail Road, Dhap",
      area: "Dhap",
      city: "Rangpur",
      postalCode: "5400"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000013"),
    firebaseUid: null,
    name: "Shakil Mahmud",
    email: "shakil.mahmud.dec18@styledecor.com",
    phone: "+8801810017803",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Station Road",
      area: "Modern More",
      city: "Rangpur",
      postalCode: "5402"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000014"),
    firebaseUid: null,
    name: "Sumaiya Tabassum",
    email: "sumaiya.tabassum.dec19@styledecor.com",
    phone: "+8801910018740",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Ganginar Par Road",
      area: "Town Hall",
      city: "Mymensingh",
      postalCode: "2200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000015"),
    firebaseUid: null,
    name: "Zubair Hossain",
    email: "zubair.hossain.dec20@styledecor.com",
    phone: "+8801310019677",
    photoUrl: "https://images.unsplash.com/photo-1534751516642-a171edd2521d?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
      street: "Medical College Road",
      area: "Charpara",
      city: "Mymensingh",
      postalCode: "2206"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000016"),
    firebaseUid: null,
    name: "Israt Jahan",
    email: "israt.jahan.agent1@styledecor.com",
    phone: "+8801710067464",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Plot 12, Road 113",
      area: "Gulshan-2",
      city: "Dhaka",
      postalCode: "1212"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000017"),
    firebaseUid: null,
    name: "Fahim Faysal",
    email: "fahim.faysal.agent2@styledecor.com",
    phone: "+8801810068401",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Block C, Road 11",
      area: "Banani",
      city: "Dhaka",
      postalCode: "1213"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000018"),
    firebaseUid: null,
    name: "Afroza Begum",
    email: "afroza.begum.agent3@styledecor.com",
    phone: "+8801910069338",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Sector 4, Road 7",
      area: "Uttara",
      city: "Dhaka",
      postalCode: "1230"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000019"),
    firebaseUid: null,
    name: "Nazmul Huda",
    email: "nazmul.huda.agent4@styledecor.com",
    phone: "+8801310070275",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Block D, Section 10",
      area: "Mirpur-10",
      city: "Dhaka",
      postalCode: "1216"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800001a"),
    firebaseUid: null,
    name: "Sharmin Sultana",
    email: "sharmin.sultana.agent5@styledecor.com",
    phone: "+8801610071212",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Commercial Area, Road 3",
      area: "Agrabad C/A",
      city: "Chattogram",
      postalCode: "4100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800001b"),
    firebaseUid: null,
    name: "Saiful Islam",
    email: "saiful.islam.agent6@styledecor.com",
    phone: "+8801510072149",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Nasirabad Housing Society, Road 2",
      area: "GEC Circle",
      city: "Chattogram",
      postalCode: "4000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800001c"),
    firebaseUid: null,
    name: "Maliha Rahman",
    email: "maliha.rahman.agent7@styledecor.com",
    phone: "+8801710073086",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "South Khulshi Residential Area",
      area: "Khulshi",
      city: "Chattogram",
      postalCode: "4225"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800001d"),
    firebaseUid: null,
    name: "Imran Hossain",
    email: "imran.hossain.agent8@styledecor.com",
    phone: "+8801810074023",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "East Zindabazar, Main Road",
      area: "Zindabazar",
      city: "Sylhet",
      postalCode: "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800001e"),
    firebaseUid: null,
    name: "Tasmia Haque",
    email: "tasmia.haque.agent9@styledecor.com",
    phone: "+8801910074960",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Block B, Sector 2",
      area: "Shahjalal Upashahar",
      city: "Sylhet",
      postalCode: "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800001f"),
    firebaseUid: null,
    name: "Rashedul Karim",
    email: "rashedul.karim.agent10@styledecor.com",
    phone: "+8801310075897",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Station Road, Ward 11",
      area: "Shaheb Bazar",
      city: "Rajshahi",
      postalCode: "6100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000020"),
    firebaseUid: null,
    name: "Anika Bushra",
    email: "anika.bushra.agent11@styledecor.com",
    phone: "+8801610076834",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "VIP Road, Greater Road",
      area: "Kazihata",
      city: "Rajshahi",
      postalCode: "6000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000021"),
    firebaseUid: null,
    name: "Mostafizur Rahman",
    email: "mostafizur.rahman.agent12@styledecor.com",
    phone: "+8801510077771",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Sonadanga R/A, 2nd Phase",
      area: "Sonadanga",
      city: "Khulna",
      postalCode: "9100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000022"),
    firebaseUid: null,
    name: "Rumana Akter",
    email: "rumana.akter.agent13@styledecor.com",
    phone: "+8801710078708",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Housing Estate Road",
      area: "Khalishpur",
      city: "Khulna",
      postalCode: "9200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000023"),
    firebaseUid: null,
    name: "Sabbir Hossain",
    email: "sabbir.hossain.agent14@styledecor.com",
    phone: "+8801810079645",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Band Road, Ward 5",
      area: "Sadat Road",
      city: "Barishal",
      postalCode: "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000024"),
    firebaseUid: null,
    name: "Nabila Tahsin",
    email: "nabila.tahsin.agent15@styledecor.com",
    phone: "+8801910080582",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Central Bus Terminal Area",
      area: "Natullabad",
      city: "Barishal",
      postalCode: "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000025"),
    firebaseUid: null,
    name: "Tariqul Islam",
    email: "tariqul.islam.agent16@styledecor.com",
    phone: "+8801310081519",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Jail Road, Dhap",
      area: "Dhap",
      city: "Rangpur",
      postalCode: "5400"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000026"),
    firebaseUid: null,
    name: "Fariha Tasnim",
    email: "fariha.tasnim.agent17@styledecor.com",
    phone: "+8801610082456",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Station Road",
      area: "Modern More",
      city: "Rangpur",
      postalCode: "5402"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000027"),
    firebaseUid: null,
    name: "Ahsan Habib",
    email: "ahsan.habib.agent18@styledecor.com",
    phone: "+8801510083393",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Ganginar Par Road",
      area: "Town Hall",
      city: "Mymensingh",
      postalCode: "2200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000028"),
    firebaseUid: null,
    name: "Samira Khan",
    email: "samira.khan.agent19@styledecor.com",
    phone: "+8801710084330",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Medical College Road",
      area: "Charpara",
      city: "Mymensingh",
      postalCode: "2206"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000029"),
    firebaseUid: null,
    name: "Mizanur Rahman",
    email: "mizanur.rahman.agent20@styledecor.com",
    phone: "+8801810085267",
    photoUrl: "https://images.unsplash.com/photo-1534751516642-a171edd2521d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Nazrul Avenue",
      area: "Kandirpar",
      city: "Cumilla",
      postalCode: "3500"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800002a"),
    firebaseUid: null,
    name: "Tahmina Akter",
    email: "tahmina.akter.agent21@styledecor.com",
    phone: "+8801910086204",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Badurtala Road",
      area: "Jhawtola",
      city: "Cumilla",
      postalCode: "3500"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800002b"),
    firebaseUid: null,
    name: "Shohel Rana",
    email: "shohel.rana.agent22@styledecor.com",
    phone: "+8801310087141",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Dhaka-Mymensingh Highway",
      area: "Chowrasta",
      city: "Gazipur",
      postalCode: "1702"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800002c"),
    firebaseUid: null,
    name: "Farzana Yeasmin",
    email: "farzana.yeasmin.agent23@styledecor.com",
    phone: "+8801610088078",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "College Road, Tongi Bazar",
      area: "Tongi",
      city: "Gazipur",
      postalCode: "1710"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800002d"),
    firebaseUid: null,
    name: "Towhidul Islam",
    email: "towhidul.islam.agent24@styledecor.com",
    phone: "+8801510089015",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "House 24, Road 8/A",
      area: "Dhanmondi",
      city: "Dhaka",
      postalCode: "1209"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800002e"),
    firebaseUid: null,
    name: "Nafisa Anjum",
    email: "nafisa.anjum.agent25@styledecor.com",
    phone: "+8801710089952",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Plot 12, Road 113",
      area: "Gulshan-2",
      city: "Dhaka",
      postalCode: "1212"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800002f"),
    firebaseUid: null,
    name: "Kazi Rashed",
    email: "kazi.rashed.agent26@styledecor.com",
    phone: "+8801810090889",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Block C, Road 11",
      area: "Banani",
      city: "Dhaka",
      postalCode: "1213"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000030"),
    firebaseUid: null,
    name: "Sayeda Farzana",
    email: "sayeda.farzana.agent27@styledecor.com",
    phone: "+8801910091826",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Sector 4, Road 7",
      area: "Uttara",
      city: "Dhaka",
      postalCode: "1230"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000031"),
    firebaseUid: null,
    name: "Abdur Rob",
    email: "abdur.rob.agent28@styledecor.com",
    phone: "+8801310092763",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Block D, Section 10",
      area: "Mirpur-10",
      city: "Dhaka",
      postalCode: "1216"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000032"),
    firebaseUid: null,
    name: "Meghla Chowdhury",
    email: "meghla.chowdhury.agent29@styledecor.com",
    phone: "+8801610093700",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Commercial Area, Road 3",
      area: "Agrabad C/A",
      city: "Chattogram",
      postalCode: "4100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000033"),
    firebaseUid: null,
    name: "Sajib Ahmed",
    email: "sajib.ahmed.agent30@styledecor.com",
    phone: "+8801510094637",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Nasirabad Housing Society, Road 2",
      area: "GEC Circle",
      city: "Chattogram",
      postalCode: "4000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000034"),
    firebaseUid: null,
    name: "Rubina Parvin",
    email: "rubina.parvin.agent31@styledecor.com",
    phone: "+8801710095574",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "South Khulshi Residential Area",
      area: "Khulshi",
      city: "Chattogram",
      postalCode: "4225"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000035"),
    firebaseUid: null,
    name: "Monirul Islam",
    email: "monirul.islam.agent32@styledecor.com",
    phone: "+8801810096511",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "East Zindabazar, Main Road",
      area: "Zindabazar",
      city: "Sylhet",
      postalCode: "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000036"),
    firebaseUid: null,
    name: "Humaira Kabir",
    email: "humaira.kabir.agent33@styledecor.com",
    phone: "+8801910097448",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Block B, Sector 2",
      area: "Shahjalal Upashahar",
      city: "Sylhet",
      postalCode: "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000037"),
    firebaseUid: null,
    name: "Hasan Al Mamun",
    email: "hasan.al.mamun.agent34@styledecor.com",
    phone: "+8801310098385",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Station Road, Ward 11",
      area: "Shaheb Bazar",
      city: "Rajshahi",
      postalCode: "6100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000038"),
    firebaseUid: null,
    name: "Laboni Akter",
    email: "laboni.akter.agent35@styledecor.com",
    phone: "+8801610099322",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "VIP Road, Greater Road",
      area: "Kazihata",
      city: "Rajshahi",
      postalCode: "6000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000039"),
    firebaseUid: null,
    name: "Golam Mostafa",
    email: "golam.mostafa.agent36@styledecor.com",
    phone: "+8801510100259",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Sonadanga R/A, 2nd Phase",
      area: "Sonadanga",
      city: "Khulna",
      postalCode: "9100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800003a"),
    firebaseUid: null,
    name: "Farzana Haque",
    email: "farzana.haque.agent37@styledecor.com",
    phone: "+8801710101196",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Housing Estate Road",
      area: "Khalishpur",
      city: "Khulna",
      postalCode: "9200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800003b"),
    firebaseUid: null,
    name: "Mustafizur Rahman",
    email: "mustafizur.rahman.agent38@styledecor.com",
    phone: "+8801810102133",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Band Road, Ward 5",
      area: "Sadat Road",
      city: "Barishal",
      postalCode: "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800003c"),
    firebaseUid: null,
    name: "Sultana Razia",
    email: "sultana.razia.agent39@styledecor.com",
    phone: "+8801910103070",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Central Bus Terminal Area",
      area: "Natullabad",
      city: "Barishal",
      postalCode: "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800003d"),
    firebaseUid: null,
    name: "Al Amin Hossain",
    email: "al.amin.hossain.agent40@styledecor.com",
    phone: "+8801310104007",
    photoUrl: "https://images.unsplash.com/photo-1534751516642-a171edd2521d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Jail Road, Dhap",
      area: "Dhap",
      city: "Rangpur",
      postalCode: "5400"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800003e"),
    firebaseUid: null,
    name: "Sharmin Akter",
    email: "sharmin.akter.agent41@styledecor.com",
    phone: "+8801610104944",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Station Road",
      area: "Modern More",
      city: "Rangpur",
      postalCode: "5402"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800003f"),
    firebaseUid: null,
    name: "Nurul Huda",
    email: "nurul.huda.agent42@styledecor.com",
    phone: "+8801510105881",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Ganginar Par Road",
      area: "Town Hall",
      city: "Mymensingh",
      postalCode: "2200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000040"),
    firebaseUid: null,
    name: "Jannat Ara",
    email: "jannat.ara.agent43@styledecor.com",
    phone: "+8801710106818",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Medical College Road",
      area: "Charpara",
      city: "Mymensingh",
      postalCode: "2206"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000041"),
    firebaseUid: null,
    name: "Shahadat Hossain",
    email: "shahadat.hossain.agent44@styledecor.com",
    phone: "+8801810107755",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Nazrul Avenue",
      area: "Kandirpar",
      city: "Cumilla",
      postalCode: "3500"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000042"),
    firebaseUid: null,
    name: "Tamanna Yasmin",
    email: "tamanna.yasmin.agent45@styledecor.com",
    phone: "+8801910108692",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Badurtala Road",
      area: "Jhawtola",
      city: "Cumilla",
      postalCode: "3500"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000043"),
    firebaseUid: null,
    name: "Rezaul Karim",
    email: "rezaul.karim.agent46@styledecor.com",
    phone: "+8801310109629",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Dhaka-Mymensingh Highway",
      area: "Chowrasta",
      city: "Gazipur",
      postalCode: "1702"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000044"),
    firebaseUid: null,
    name: "Roksana Begum",
    email: "roksana.begum.agent47@styledecor.com",
    phone: "+8801610110566",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "College Road, Tongi Bazar",
      area: "Tongi",
      city: "Gazipur",
      postalCode: "1710"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000045"),
    firebaseUid: null,
    name: "Zahid Hasan",
    email: "zahid.hasan.agent48@styledecor.com",
    phone: "+8801510111503",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "House 24, Road 8/A",
      area: "Dhanmondi",
      city: "Dhaka",
      postalCode: "1209"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000046"),
    firebaseUid: null,
    name: "Mim Akter",
    email: "mim.akter.agent49@styledecor.com",
    phone: "+8801710112440",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Plot 12, Road 113",
      area: "Gulshan-2",
      city: "Dhaka",
      postalCode: "1212"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000047"),
    firebaseUid: null,
    name: "Enamul Haque",
    email: "enamul.haque.agent50@styledecor.com",
    phone: "+8801810113377",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Block C, Road 11",
      area: "Banani",
      city: "Dhaka",
      postalCode: "1213"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000048"),
    firebaseUid: null,
    name: "Bushra Rahman",
    email: "bushra.rahman.agent51@styledecor.com",
    phone: "+8801910114314",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Sector 4, Road 7",
      area: "Uttara",
      city: "Dhaka",
      postalCode: "1230"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000049"),
    firebaseUid: null,
    name: "Ashiqur Rahman",
    email: "ashiqur.rahman.agent52@styledecor.com",
    phone: "+8801310115251",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Block D, Section 10",
      area: "Mirpur-10",
      city: "Dhaka",
      postalCode: "1216"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800004a"),
    firebaseUid: null,
    name: "Nusrat Sharmin",
    email: "nusrat.sharmin.agent53@styledecor.com",
    phone: "+8801610116188",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Commercial Area, Road 3",
      area: "Agrabad C/A",
      city: "Chattogram",
      postalCode: "4100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800004b"),
    firebaseUid: null,
    name: "Sayed Ali",
    email: "sayed.ali.agent54@styledecor.com",
    phone: "+8801510117125",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Nasirabad Housing Society, Road 2",
      area: "GEC Circle",
      city: "Chattogram",
      postalCode: "4000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800004c"),
    firebaseUid: null,
    name: "Shamima Nasrin",
    email: "shamima.nasrin.agent55@styledecor.com",
    phone: "+8801710118062",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "South Khulshi Residential Area",
      area: "Khulshi",
      city: "Chattogram",
      postalCode: "4225"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800004d"),
    firebaseUid: null,
    name: "Asaduzzaman Noor",
    email: "asaduzzaman.noor.agent56@styledecor.com",
    phone: "+8801810118999",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "East Zindabazar, Main Road",
      area: "Zindabazar",
      city: "Sylhet",
      postalCode: "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800004e"),
    firebaseUid: null,
    name: "Farhana Sharmin",
    email: "farhana.sharmin.agent57@styledecor.com",
    phone: "+8801910119936",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Block B, Sector 2",
      area: "Shahjalal Upashahar",
      city: "Sylhet",
      postalCode: "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800004f"),
    firebaseUid: null,
    name: "Shamim Reza",
    email: "shamim.reza.agent58@styledecor.com",
    phone: "+8801310120873",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Station Road, Ward 11",
      area: "Shaheb Bazar",
      city: "Rajshahi",
      postalCode: "6100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000050"),
    firebaseUid: null,
    name: "Priya Das",
    email: "priya.das.agent59@styledecor.com",
    phone: "+8801610121810",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "VIP Road, Greater Road",
      area: "Kazihata",
      city: "Rajshahi",
      postalCode: "6000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000051"),
    firebaseUid: null,
    name: "Delwar Hossain",
    email: "delwar.hossain.agent60@styledecor.com",
    phone: "+8801510122747",
    photoUrl: "https://images.unsplash.com/photo-1534751516642-a171edd2521d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Sonadanga R/A, 2nd Phase",
      area: "Sonadanga",
      city: "Khulna",
      postalCode: "9100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000052"),
    firebaseUid: null,
    name: "Mahfuza Khatun",
    email: "mahfuza.khatun.agent61@styledecor.com",
    phone: "+8801710123684",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Housing Estate Road",
      area: "Khalishpur",
      city: "Khulna",
      postalCode: "9200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000053"),
    firebaseUid: null,
    name: "Mahbubur Rahman",
    email: "mahbubur.rahman.agent62@styledecor.com",
    phone: "+8801810124621",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Band Road, Ward 5",
      area: "Sadat Road",
      city: "Barishal",
      postalCode: "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000054"),
    firebaseUid: null,
    name: "Khadija Begum",
    email: "khadija.begum.agent63@styledecor.com",
    phone: "+8801910125558",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Central Bus Terminal Area",
      area: "Natullabad",
      city: "Barishal",
      postalCode: "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000055"),
    firebaseUid: null,
    name: "Zakir Hossain",
    email: "zakir.hossain.agent64@styledecor.com",
    phone: "+8801310126495",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Jail Road, Dhap",
      area: "Dhap",
      city: "Rangpur",
      postalCode: "5400"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000056"),
    firebaseUid: null,
    name: "Nasima Akter",
    email: "nasima.akter.agent65@styledecor.com",
    phone: "+8801610127432",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Station Road",
      area: "Modern More",
      city: "Rangpur",
      postalCode: "5402"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000057"),
    firebaseUid: null,
    name: "Habibur Rahman",
    email: "habibur.rahman.agent66@styledecor.com",
    phone: "+8801510128369",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Ganginar Par Road",
      area: "Town Hall",
      city: "Mymensingh",
      postalCode: "2200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000058"),
    firebaseUid: null,
    name: "Sufia Begum",
    email: "sufia.begum.agent67@styledecor.com",
    phone: "+8801710129306",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Medical College Road",
      area: "Charpara",
      city: "Mymensingh",
      postalCode: "2206"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000059"),
    firebaseUid: null,
    name: "Babul Mia",
    email: "babul.mia.agent68@styledecor.com",
    phone: "+8801810130243",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Nazrul Avenue",
      area: "Kandirpar",
      city: "Cumilla",
      postalCode: "3500"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800005a"),
    firebaseUid: null,
    name: "Shirin Akter",
    email: "shirin.akter.agent69@styledecor.com",
    phone: "+8801910131180",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Badurtala Road",
      area: "Jhawtola",
      city: "Cumilla",
      postalCode: "3500"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800005b"),
    firebaseUid: null,
    name: "Sirajul Islam",
    email: "sirajul.islam.agent70@styledecor.com",
    phone: "+8801310132117",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Dhaka-Mymensingh Highway",
      area: "Chowrasta",
      city: "Gazipur",
      postalCode: "1702"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800005c"),
    firebaseUid: null,
    name: "Rokeya Sultana",
    email: "rokeya.sultana.agent71@styledecor.com",
    phone: "+8801610133054",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "College Road, Tongi Bazar",
      area: "Tongi",
      city: "Gazipur",
      postalCode: "1710"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800005d"),
    firebaseUid: null,
    name: "Liton Das",
    email: "liton.das.agent72@styledecor.com",
    phone: "+8801510133991",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "House 24, Road 8/A",
      area: "Dhanmondi",
      city: "Dhaka",
      postalCode: "1209"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800005e"),
    firebaseUid: null,
    name: "Anowara Begum",
    email: "anowara.begum.agent73@styledecor.com",
    phone: "+8801710134928",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Plot 12, Road 113",
      area: "Gulshan-2",
      city: "Dhaka",
      postalCode: "1212"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800005f"),
    firebaseUid: null,
    name: "Joynal Abedin",
    email: "joynal.abedin.agent74@styledecor.com",
    phone: "+8801810135865",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Block C, Road 11",
      area: "Banani",
      city: "Dhaka",
      postalCode: "1213"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000060"),
    firebaseUid: null,
    name: "Mariam Begum",
    email: "mariam.begum.agent75@styledecor.com",
    phone: "+8801910136802",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Sector 4, Road 7",
      area: "Uttara",
      city: "Dhaka",
      postalCode: "1230"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000061"),
    firebaseUid: null,
    name: "Abul Kashem",
    email: "abul.kashem.agent76@styledecor.com",
    phone: "+8801310137739",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Block D, Section 10",
      area: "Mirpur-10",
      city: "Dhaka",
      postalCode: "1216"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000062"),
    firebaseUid: null,
    name: "Shahina Akter",
    email: "shahina.akter.agent77@styledecor.com",
    phone: "+8801610138676",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Commercial Area, Road 3",
      area: "Agrabad C/A",
      city: "Chattogram",
      postalCode: "4100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000063"),
    firebaseUid: null,
    name: "Abdul Mannan",
    email: "abdul.mannan.agent78@styledecor.com",
    phone: "+8801510139613",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "Nasirabad Housing Society, Road 2",
      area: "GEC Circle",
      city: "Chattogram",
      postalCode: "4000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000064"),
    firebaseUid: null,
    name: "Rehana Parvin",
    email: "rehana.parvin.agent79@styledecor.com",
    phone: "+8801710140550",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
      street: "South Khulshi Residential Area",
      area: "Khulshi",
      city: "Chattogram",
      postalCode: "4225"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000065"),
    firebaseUid: null,
    name: "Tahmidur Rahman",
    email: "tahmidur.rahman.user1@gmail.com",
    phone: "+8801620084300",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "House 14, Road 4, Sector 3",
      area: "Uttara",
      city: "Dhaka",
      postalCode: "1230"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000066"),
    firebaseUid: null,
    name: "Shamima Nasrin",
    email: "shamima.nasrin.user2@gmail.com",
    phone: "+8801520085143",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "Flat 4B, Plot 19, Block A",
      area: "Bashundhara R/A",
      city: "Dhaka",
      postalCode: "1229"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000067"),
    firebaseUid: null,
    name: "Ashikur Rahman",
    email: "ashikur.rahman.user3@gmail.com",
    phone: "+8801720085986",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "House 52, Road 11/A",
      area: "Dhanmondi",
      city: "Dhaka",
      postalCode: "1209"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000068"),
    firebaseUid: null,
    name: "Tania Sultana",
    email: "tania.sultana.user4@gmail.com",
    phone: "+8801820086829",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "Plot 8, Block E",
      area: "Banani",
      city: "Dhaka",
      postalCode: "1213"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000069"),
    firebaseUid: null,
    name: "Shakib Al Hasan",
    email: "shakib.al.hasan.user5@gmail.com",
    phone: "+8801920087672",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "House 23, Road 2, Block B",
      area: "Mirpur-1",
      city: "Dhaka",
      postalCode: "1216"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800006a"),
    firebaseUid: null,
    name: "Mehnaz Tabassum",
    email: "mehnaz.tabassum.user6@gmail.com",
    phone: "+8801320088515",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "124 O.R. Nizam Road",
      area: "GEC Circle",
      city: "Chattogram",
      postalCode: "4000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800006b"),
    firebaseUid: null,
    name: "Golam Rabbani",
    email: "golam.rabbani.user7@gmail.com",
    phone: "+8801620089358",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "House 7, Road 3",
      area: "South Khulshi",
      city: "Chattogram",
      postalCode: "4225"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800006c"),
    firebaseUid: null,
    name: "Farzana Yasmin",
    email: "farzana.yasmin.user8@gmail.com",
    phone: "+8801520090201",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "East Nasirabad Housing Society",
      area: "Nasirabad",
      city: "Chattogram",
      postalCode: "4000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800006d"),
    firebaseUid: null,
    name: "Mahmudur Rahman",
    email: "mahmudur.rahman.user9@gmail.com",
    phone: "+8801720091044",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "House 15, Block C",
      area: "Shahjalal Upashahar",
      city: "Sylhet",
      postalCode: "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800006e"),
    firebaseUid: null,
    name: "Sabrina Mostafa",
    email: "sabrina.mostafa.user10@gmail.com",
    phone: "+8801820091887",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "Kumarpara Main Road",
      area: "Kumarpara",
      city: "Sylhet",
      postalCode: "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800006f"),
    firebaseUid: null,
    name: "Towhidul Alam",
    email: "towhidul.alam.user11@gmail.com",
    phone: "+8801920092730",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "VIP Road",
      area: "Kazihata",
      city: "Rajshahi",
      postalCode: "6000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000070"),
    firebaseUid: null,
    name: "Humaira Khatun",
    email: "humaira.khatun.user12@gmail.com",
    phone: "+8801320093573",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "Station Road",
      area: "Shaheb Bazar",
      city: "Rajshahi",
      postalCode: "6100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000071"),
    firebaseUid: null,
    name: "Rashedul Islam",
    email: "rashedul.islam.user13@gmail.com",
    phone: "+8801620094416",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "House 45, 1st Phase",
      area: "Sonadanga R/A",
      city: "Khulna",
      postalCode: "9100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000072"),
    firebaseUid: null,
    name: "Nusrat Sharmin",
    email: "nusrat.sharmin.user14@gmail.com",
    phone: "+8801520095259",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "KDA Avenue",
      area: "Boyra",
      city: "Khulna",
      postalCode: "9000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000073"),
    firebaseUid: null,
    name: "Imtiaz Hossain",
    email: "imtiaz.hossain.user15@gmail.com",
    phone: "+8801720096102",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "Band Road",
      area: "Sadat Area",
      city: "Barishal",
      postalCode: "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000074"),
    firebaseUid: null,
    name: "Jannatul Ferdous",
    email: "jannatul.ferdous.user16@gmail.com",
    phone: "+8801820096945",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "Central Jail Road",
      area: "Dhap",
      city: "Rangpur",
      postalCode: "5400"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000075"),
    firebaseUid: null,
    name: "Zahidul Karim",
    email: "zahidul.karim.user17@gmail.com",
    phone: "+8801920097788",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "Medical College Road",
      area: "Charpara",
      city: "Mymensingh",
      postalCode: "2206"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000076"),
    firebaseUid: null,
    name: "Afsana Mimi",
    email: "afsana.mimi.user18@gmail.com",
    phone: "+8801320098631",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "Badurtala Road",
      area: "Kandirpar",
      city: "Cumilla",
      postalCode: "3500"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000077"),
    firebaseUid: null,
    name: "Kazi Nazrul",
    email: "kazi.nazrul.user19@gmail.com",
    phone: "+8801620099474",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "College Road",
      area: "Tongi",
      city: "Gazipur",
      postalCode: "1710"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000078"),
    firebaseUid: null,
    name: "Sumaiya Akter",
    email: "sumaiya.akter.user20@gmail.com",
    phone: "+8801520100317",
    photoUrl: "https://images.unsplash.com/photo-1534751516642-a171edd2521d?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
      street: "Dhaka-Mymensingh Highway",
      area: "Chowrasta",
      city: "Gazipur",
      postalCode: "1702"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  }
];

module.exports = { usersData };

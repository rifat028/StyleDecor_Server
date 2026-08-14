const { ObjectId } = require('mongodb');

const agentsData = [
  {
    _id: new ObjectId("66be18a4f2c4a91b88000001"),
    userId: new ObjectId("66be18a1f2c4a91b88000016"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    name: "Israt Jahan",
    email: "israt.jahan.agent1@styledecor.com",
    phone: "+8801710067464",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    designation: "Senior Field Supervisor",
    specialization: "Stage Architecture & Floral Setup",
    experienceYears: 2,
    assignedArea: {
      city: "Dhaka",
      zones: ["Dhanmondi","Gulshan"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 30,
      activeAssignedBookings: 0
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000002"),
    userId: new ObjectId("66be18a1f2c4a91b88000017"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    name: "Fahim Faysal",
    email: "fahim.faysal.agent2@styledecor.com",
    phone: "+8801810068401",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    designation: "Lead Stage Architect",
    specialization: "Intelligent Lighting & Rigging",
    experienceYears: 3,
    assignedArea: {
      city: "Dhaka",
      zones: ["Banani","Uttara","Mirpur"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 37,
      activeAssignedBookings: 1
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000003"),
    userId: new ObjectId("66be18a1f2c4a91b88000018"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    name: "Afroza Begum",
    email: "afroza.begum.agent3@styledecor.com",
    phone: "+8801910069338",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    designation: "Lighting & FX Coordinator",
    specialization: "Theme Backdrops & 3D Cutouts",
    experienceYears: 4,
    assignedArea: {
      city: "Dhaka",
      zones: ["Mirpur","Mohammadpur"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 44,
      activeAssignedBookings: 2
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000004"),
    userId: new ObjectId("66be18a1f2c4a91b88000019"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    name: "Nazmul Huda",
    email: "nazmul.huda.agent4@styledecor.com",
    phone: "+8801310070275",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    designation: "Logistics & Operations Lead",
    specialization: "Cold Pyro & Atmospheric Special FX",
    experienceYears: 5,
    assignedArea: {
      city: "Dhaka",
      zones: ["Old Dhaka","Dhanmondi","Gulshan"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 51,
      activeAssignedBookings: 3
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000005"),
    userId: new ObjectId("66be18a1f2c4a91b8800001a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    name: "Sharmin Sultana",
    email: "sharmin.sultana.agent5@styledecor.com",
    phone: "+8801610071212",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    designation: "Master Floral Stylist",
    specialization: "Traditional Bengali Floral Crafts",
    experienceYears: 6,
    assignedArea: {
      city: "Dhaka",
      zones: ["Gulshan","Banani"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 58,
      activeAssignedBookings: 0
    },
    status: "busy",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000006"),
    userId: new ObjectId("66be18a1f2c4a91b8800001b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    name: "Saiful Islam",
    email: "saiful.islam.agent6@styledecor.com",
    phone: "+8801510072149",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    designation: "Venue Setup Coordinator",
    specialization: "Rooftop Canopy & Ambient Drapes",
    experienceYears: 7,
    assignedArea: {
      city: "Dhaka",
      zones: ["Uttara","Mirpur","Mohammadpur"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 65,
      activeAssignedBookings: 1
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000007"),
    userId: new ObjectId("66be18a1f2c4a91b8800001c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    name: "Maliha Rahman",
    email: "maliha.rahman.agent7@styledecor.com",
    phone: "+8801710073086",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    designation: "Quality Assurance Officer",
    specialization: "Photo Booth & 360 Video Engineering",
    experienceYears: 8,
    assignedArea: {
      city: "Dhaka",
      zones: ["Mohammadpur","Old Dhaka"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 72,
      activeAssignedBookings: 2
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000008"),
    userId: new ObjectId("66be18a1f2c4a91b8800001d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    name: "Imran Hossain",
    email: "imran.hossain.agent8@styledecor.com",
    phone: "+8801810074023",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    designation: "Technical Audio-Visual Lead",
    specialization: "Fast-Track Emergency Venue Setup",
    experienceYears: 2,
    assignedArea: {
      city: "Dhaka",
      zones: ["Dhanmondi","Gulshan","Banani"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 79,
      activeAssignedBookings: 3
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000009"),
    userId: new ObjectId("66be18a1f2c4a91b8800001e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    name: "Tasmia Haque",
    email: "tasmia.haque.agent9@styledecor.com",
    phone: "+8801910074960",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    designation: "Senior Field Supervisor",
    specialization: "Stage Architecture & Floral Setup",
    experienceYears: 3,
    assignedArea: {
      city: "Chattogram",
      zones: ["Nasirabad","GEC Circle"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 86,
      activeAssignedBookings: 0
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800000a"),
    userId: new ObjectId("66be18a1f2c4a91b8800001f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    name: "Rashedul Karim",
    email: "rashedul.karim.agent10@styledecor.com",
    phone: "+8801310075897",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    designation: "Lead Stage Architect",
    specialization: "Intelligent Lighting & Rigging",
    experienceYears: 4,
    assignedArea: {
      city: "Chattogram",
      zones: ["Khulshi","Panchlaish","Agrabad"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 93,
      activeAssignedBookings: 1
    },
    status: "busy",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800000b"),
    userId: new ObjectId("66be18a1f2c4a91b88000020"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    name: "Anika Bushra",
    email: "anika.bushra.agent11@styledecor.com",
    phone: "+8801610076834",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    designation: "Lighting & FX Coordinator",
    specialization: "Theme Backdrops & 3D Cutouts",
    experienceYears: 5,
    assignedArea: {
      city: "Chattogram",
      zones: ["Agrabad","Nasirabad"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 100,
      activeAssignedBookings: 2
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800000c"),
    userId: new ObjectId("66be18a1f2c4a91b88000021"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    name: "Mostafizur Rahman",
    email: "mostafizur.rahman.agent12@styledecor.com",
    phone: "+8801510077771",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    designation: "Logistics & Operations Lead",
    specialization: "Cold Pyro & Atmospheric Special FX",
    experienceYears: 6,
    assignedArea: {
      city: "Chattogram",
      zones: ["GEC Circle","Khulshi","Panchlaish"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 107,
      activeAssignedBookings: 3
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800000d"),
    userId: new ObjectId("66be18a1f2c4a91b88000022"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    name: "Rumana Akter",
    email: "rumana.akter.agent13@styledecor.com",
    phone: "+8801710078708",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    designation: "Master Floral Stylist",
    specialization: "Traditional Bengali Floral Crafts",
    experienceYears: 7,
    assignedArea: {
      city: "Dhaka",
      zones: ["Uttara","Mirpur"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 114,
      activeAssignedBookings: 0
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800000e"),
    userId: new ObjectId("66be18a1f2c4a91b88000023"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    name: "Sabbir Hossain",
    email: "sabbir.hossain.agent14@styledecor.com",
    phone: "+8801810079645",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    designation: "Venue Setup Coordinator",
    specialization: "Rooftop Canopy & Ambient Drapes",
    experienceYears: 8,
    assignedArea: {
      city: "Dhaka",
      zones: ["Mohammadpur","Old Dhaka","Dhanmondi"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 121,
      activeAssignedBookings: 1
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800000f"),
    userId: new ObjectId("66be18a1f2c4a91b88000024"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    name: "Nabila Tahsin",
    email: "nabila.tahsin.agent15@styledecor.com",
    phone: "+8801910080582",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    designation: "Quality Assurance Officer",
    specialization: "Photo Booth & 360 Video Engineering",
    experienceYears: 2,
    assignedArea: {
      city: "Dhaka",
      zones: ["Dhanmondi","Gulshan"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 128,
      activeAssignedBookings: 2
    },
    status: "busy",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000010"),
    userId: new ObjectId("66be18a1f2c4a91b88000025"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    name: "Tariqul Islam",
    email: "tariqul.islam.agent16@styledecor.com",
    phone: "+8801310081519",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    designation: "Technical Audio-Visual Lead",
    specialization: "Fast-Track Emergency Venue Setup",
    experienceYears: 3,
    assignedArea: {
      city: "Dhaka",
      zones: ["Banani","Uttara","Mirpur"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 135,
      activeAssignedBookings: 3
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000011"),
    userId: new ObjectId("66be18a1f2c4a91b88000026"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    name: "Fariha Tasnim",
    email: "fariha.tasnim.agent17@styledecor.com",
    phone: "+8801610082456",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    designation: "Senior Field Supervisor",
    specialization: "Stage Architecture & Floral Setup",
    experienceYears: 4,
    assignedArea: {
      city: "Dhaka",
      zones: ["Mirpur","Mohammadpur"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 32,
      activeAssignedBookings: 0
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000012"),
    userId: new ObjectId("66be18a1f2c4a91b88000027"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    name: "Ahsan Habib",
    email: "ahsan.habib.agent18@styledecor.com",
    phone: "+8801510083393",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    designation: "Lead Stage Architect",
    specialization: "Intelligent Lighting & Rigging",
    experienceYears: 5,
    assignedArea: {
      city: "Dhaka",
      zones: ["Old Dhaka","Dhanmondi","Gulshan"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 39,
      activeAssignedBookings: 1
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000013"),
    userId: new ObjectId("66be18a1f2c4a91b88000028"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    name: "Samira Khan",
    email: "samira.khan.agent19@styledecor.com",
    phone: "+8801710084330",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    designation: "Lighting & FX Coordinator",
    specialization: "Theme Backdrops & 3D Cutouts",
    experienceYears: 6,
    assignedArea: {
      city: "Dhaka",
      zones: ["Gulshan","Banani"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 46,
      activeAssignedBookings: 2
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000014"),
    userId: new ObjectId("66be18a1f2c4a91b88000029"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    name: "Mizanur Rahman",
    email: "mizanur.rahman.agent20@styledecor.com",
    phone: "+8801810085267",
    photoUrl: "https://images.unsplash.com/photo-1534751516642-a171edd2521d?w=400&auto=format&fit=crop&q=80",
    designation: "Logistics & Operations Lead",
    specialization: "Cold Pyro & Atmospheric Special FX",
    experienceYears: 7,
    assignedArea: {
      city: "Dhaka",
      zones: ["Uttara","Mirpur","Mohammadpur"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 53,
      activeAssignedBookings: 3
    },
    status: "busy",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000015"),
    userId: new ObjectId("66be18a1f2c4a91b8800002a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    name: "Tahmina Akter",
    email: "tahmina.akter.agent21@styledecor.com",
    phone: "+8801910086204",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    designation: "Master Floral Stylist",
    specialization: "Traditional Bengali Floral Crafts",
    experienceYears: 8,
    assignedArea: {
      city: "Dhaka",
      zones: ["Mohammadpur","Old Dhaka"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 60,
      activeAssignedBookings: 0
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000016"),
    userId: new ObjectId("66be18a1f2c4a91b8800002b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    name: "Shohel Rana",
    email: "shohel.rana.agent22@styledecor.com",
    phone: "+8801310087141",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    designation: "Venue Setup Coordinator",
    specialization: "Rooftop Canopy & Ambient Drapes",
    experienceYears: 2,
    assignedArea: {
      city: "Dhaka",
      zones: ["Dhanmondi","Gulshan","Banani"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 67,
      activeAssignedBookings: 1
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000017"),
    userId: new ObjectId("66be18a1f2c4a91b8800002c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    name: "Farzana Yeasmin",
    email: "farzana.yeasmin.agent23@styledecor.com",
    phone: "+8801610088078",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    designation: "Quality Assurance Officer",
    specialization: "Photo Booth & 360 Video Engineering",
    experienceYears: 3,
    assignedArea: {
      city: "Dhaka",
      zones: ["Banani","Uttara"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 74,
      activeAssignedBookings: 2
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000018"),
    userId: new ObjectId("66be18a1f2c4a91b8800002d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    name: "Towhidul Islam",
    email: "towhidul.islam.agent24@styledecor.com",
    phone: "+8801510089015",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    designation: "Technical Audio-Visual Lead",
    specialization: "Fast-Track Emergency Venue Setup",
    experienceYears: 4,
    assignedArea: {
      city: "Dhaka",
      zones: ["Mirpur","Mohammadpur","Old Dhaka"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 81,
      activeAssignedBookings: 3
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000019"),
    userId: new ObjectId("66be18a1f2c4a91b8800002e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    name: "Nafisa Anjum",
    email: "nafisa.anjum.agent25@styledecor.com",
    phone: "+8801710089952",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    designation: "Senior Field Supervisor",
    specialization: "Stage Architecture & Floral Setup",
    experienceYears: 5,
    assignedArea: {
      city: "Chattogram",
      zones: ["Khulshi","Panchlaish"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 88,
      activeAssignedBookings: 0
    },
    status: "busy",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800001a"),
    userId: new ObjectId("66be18a1f2c4a91b8800002f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    name: "Kazi Rashed",
    email: "kazi.rashed.agent26@styledecor.com",
    phone: "+8801810090889",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    designation: "Lead Stage Architect",
    specialization: "Intelligent Lighting & Rigging",
    experienceYears: 6,
    assignedArea: {
      city: "Chattogram",
      zones: ["Agrabad","Nasirabad","GEC Circle"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 95,
      activeAssignedBookings: 1
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800001b"),
    userId: new ObjectId("66be18a1f2c4a91b88000030"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    name: "Sayeda Farzana",
    email: "sayeda.farzana.agent27@styledecor.com",
    phone: "+8801910091826",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    designation: "Lighting & FX Coordinator",
    specialization: "Theme Backdrops & 3D Cutouts",
    experienceYears: 7,
    assignedArea: {
      city: "Chattogram",
      zones: ["GEC Circle","Khulshi"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 102,
      activeAssignedBookings: 2
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800001c"),
    userId: new ObjectId("66be18a1f2c4a91b88000031"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    name: "Abdur Rob",
    email: "abdur.rob.agent28@styledecor.com",
    phone: "+8801310092763",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    designation: "Logistics & Operations Lead",
    specialization: "Cold Pyro & Atmospheric Special FX",
    experienceYears: 8,
    assignedArea: {
      city: "Chattogram",
      zones: ["Panchlaish","Agrabad","Nasirabad"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 109,
      activeAssignedBookings: 3
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800001d"),
    userId: new ObjectId("66be18a1f2c4a91b88000032"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    name: "Meghla Chowdhury",
    email: "meghla.chowdhury.agent29@styledecor.com",
    phone: "+8801610093700",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    designation: "Master Floral Stylist",
    specialization: "Traditional Bengali Floral Crafts",
    experienceYears: 2,
    assignedArea: {
      city: "Sylhet",
      zones: ["Zindabazar","Shahjalal Upashahar"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 116,
      activeAssignedBookings: 0
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800001e"),
    userId: new ObjectId("66be18a1f2c4a91b88000033"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    name: "Sajib Ahmed",
    email: "sajib.ahmed.agent30@styledecor.com",
    phone: "+8801510094637",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    designation: "Venue Setup Coordinator",
    specialization: "Rooftop Canopy & Ambient Drapes",
    experienceYears: 3,
    assignedArea: {
      city: "Sylhet",
      zones: ["Amberkhana","Shibgonj","Zindabazar"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 123,
      activeAssignedBookings: 1
    },
    status: "busy",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800001f"),
    userId: new ObjectId("66be18a1f2c4a91b88000034"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    name: "Rubina Parvin",
    email: "rubina.parvin.agent31@styledecor.com",
    phone: "+8801710095574",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    designation: "Quality Assurance Officer",
    specialization: "Photo Booth & 360 Video Engineering",
    experienceYears: 4,
    assignedArea: {
      city: "Sylhet",
      zones: ["Zindabazar","Shahjalal Upashahar"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 130,
      activeAssignedBookings: 2
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000020"),
    userId: new ObjectId("66be18a1f2c4a91b88000035"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    name: "Monirul Islam",
    email: "monirul.islam.agent32@styledecor.com",
    phone: "+8801810096511",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    designation: "Technical Audio-Visual Lead",
    specialization: "Fast-Track Emergency Venue Setup",
    experienceYears: 5,
    assignedArea: {
      city: "Sylhet",
      zones: ["Amberkhana","Shibgonj","Zindabazar"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 137,
      activeAssignedBookings: 3
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000021"),
    userId: new ObjectId("66be18a1f2c4a91b88000036"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    name: "Humaira Kabir",
    email: "humaira.kabir.agent33@styledecor.com",
    phone: "+8801910097448",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    designation: "Senior Field Supervisor",
    specialization: "Stage Architecture & Floral Setup",
    experienceYears: 6,
    assignedArea: {
      city: "Dhaka",
      zones: ["Gulshan","Banani"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 34,
      activeAssignedBookings: 0
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000022"),
    userId: new ObjectId("66be18a1f2c4a91b88000037"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    name: "Hasan Al Mamun",
    email: "hasan.al.mamun.agent34@styledecor.com",
    phone: "+8801310098385",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    designation: "Lead Stage Architect",
    specialization: "Intelligent Lighting & Rigging",
    experienceYears: 7,
    assignedArea: {
      city: "Dhaka",
      zones: ["Uttara","Mirpur","Mohammadpur"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 41,
      activeAssignedBookings: 1
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000023"),
    userId: new ObjectId("66be18a1f2c4a91b88000038"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    name: "Laboni Akter",
    email: "laboni.akter.agent35@styledecor.com",
    phone: "+8801610099322",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    designation: "Lighting & FX Coordinator",
    specialization: "Theme Backdrops & 3D Cutouts",
    experienceYears: 8,
    assignedArea: {
      city: "Dhaka",
      zones: ["Mohammadpur","Old Dhaka"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 48,
      activeAssignedBookings: 2
    },
    status: "busy",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000024"),
    userId: new ObjectId("66be18a1f2c4a91b88000039"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    name: "Golam Mostafa",
    email: "golam.mostafa.agent36@styledecor.com",
    phone: "+8801510100259",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    designation: "Logistics & Operations Lead",
    specialization: "Cold Pyro & Atmospheric Special FX",
    experienceYears: 2,
    assignedArea: {
      city: "Dhaka",
      zones: ["Dhanmondi","Gulshan","Banani"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 55,
      activeAssignedBookings: 3
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000025"),
    userId: new ObjectId("66be18a1f2c4a91b8800003a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    name: "Farzana Haque",
    email: "farzana.haque.agent37@styledecor.com",
    phone: "+8801710101196",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    designation: "Master Floral Stylist",
    specialization: "Traditional Bengali Floral Crafts",
    experienceYears: 3,
    assignedArea: {
      city: "Rajshahi",
      zones: ["Shaheb Bazar","Kazihata"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 62,
      activeAssignedBookings: 0
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000026"),
    userId: new ObjectId("66be18a1f2c4a91b8800003b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    name: "Mustafizur Rahman",
    email: "mustafizur.rahman.agent38@styledecor.com",
    phone: "+8801810102133",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    designation: "Venue Setup Coordinator",
    specialization: "Rooftop Canopy & Ambient Drapes",
    experienceYears: 4,
    assignedArea: {
      city: "Rajshahi",
      zones: ["Motihar","Boalia","Shaheb Bazar"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 69,
      activeAssignedBookings: 1
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000027"),
    userId: new ObjectId("66be18a1f2c4a91b8800003c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    name: "Sultana Razia",
    email: "sultana.razia.agent39@styledecor.com",
    phone: "+8801910103070",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    designation: "Quality Assurance Officer",
    specialization: "Photo Booth & 360 Video Engineering",
    experienceYears: 5,
    assignedArea: {
      city: "Rajshahi",
      zones: ["Shaheb Bazar","Kazihata"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 76,
      activeAssignedBookings: 2
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000028"),
    userId: new ObjectId("66be18a1f2c4a91b8800003d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    name: "Al Amin Hossain",
    email: "al.amin.hossain.agent40@styledecor.com",
    phone: "+8801310104007",
    photoUrl: "https://images.unsplash.com/photo-1534751516642-a171edd2521d?w=400&auto=format&fit=crop&q=80",
    designation: "Technical Audio-Visual Lead",
    specialization: "Fast-Track Emergency Venue Setup",
    experienceYears: 6,
    assignedArea: {
      city: "Rajshahi",
      zones: ["Motihar","Boalia","Shaheb Bazar"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 83,
      activeAssignedBookings: 3
    },
    status: "busy",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000029"),
    userId: new ObjectId("66be18a1f2c4a91b8800003e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    name: "Sharmin Akter",
    email: "sharmin.akter.agent41@styledecor.com",
    phone: "+8801610104944",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    designation: "Senior Field Supervisor",
    specialization: "Stage Architecture & Floral Setup",
    experienceYears: 7,
    assignedArea: {
      city: "Khulna",
      zones: ["Sonadanga","Khalishpur"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 90,
      activeAssignedBookings: 0
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800002a"),
    userId: new ObjectId("66be18a1f2c4a91b8800003f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    name: "Nurul Huda",
    email: "nurul.huda.agent42@styledecor.com",
    phone: "+8801510105881",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    designation: "Lead Stage Architect",
    specialization: "Intelligent Lighting & Rigging",
    experienceYears: 8,
    assignedArea: {
      city: "Khulna",
      zones: ["Boyra","Daulatpur","Sonadanga"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 97,
      activeAssignedBookings: 1
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800002b"),
    userId: new ObjectId("66be18a1f2c4a91b88000040"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    name: "Jannat Ara",
    email: "jannat.ara.agent43@styledecor.com",
    phone: "+8801710106818",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    designation: "Lighting & FX Coordinator",
    specialization: "Theme Backdrops & 3D Cutouts",
    experienceYears: 2,
    assignedArea: {
      city: "Khulna",
      zones: ["Sonadanga","Khalishpur"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 104,
      activeAssignedBookings: 2
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800002c"),
    userId: new ObjectId("66be18a1f2c4a91b88000041"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    name: "Shahadat Hossain",
    email: "shahadat.hossain.agent44@styledecor.com",
    phone: "+8801810107755",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    designation: "Logistics & Operations Lead",
    specialization: "Cold Pyro & Atmospheric Special FX",
    experienceYears: 3,
    assignedArea: {
      city: "Khulna",
      zones: ["Boyra","Daulatpur","Sonadanga"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 111,
      activeAssignedBookings: 3
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800002d"),
    userId: new ObjectId("66be18a1f2c4a91b88000042"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    name: "Tamanna Yasmin",
    email: "tamanna.yasmin.agent45@styledecor.com",
    phone: "+8801910108692",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    designation: "Master Floral Stylist",
    specialization: "Traditional Bengali Floral Crafts",
    experienceYears: 4,
    assignedArea: {
      city: "Barishal",
      zones: ["Sadat Road","Natullabad"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 118,
      activeAssignedBookings: 0
    },
    status: "busy",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800002e"),
    userId: new ObjectId("66be18a1f2c4a91b88000043"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    name: "Rezaul Karim",
    email: "rezaul.karim.agent46@styledecor.com",
    phone: "+8801310109629",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    designation: "Venue Setup Coordinator",
    specialization: "Rooftop Canopy & Ambient Drapes",
    experienceYears: 5,
    assignedArea: {
      city: "Barishal",
      zones: ["Rupatali","Band Road","Sadat Road"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 125,
      activeAssignedBookings: 1
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800002f"),
    userId: new ObjectId("66be18a1f2c4a91b88000044"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    name: "Roksana Begum",
    email: "roksana.begum.agent47@styledecor.com",
    phone: "+8801610110566",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    designation: "Quality Assurance Officer",
    specialization: "Photo Booth & 360 Video Engineering",
    experienceYears: 6,
    assignedArea: {
      city: "Barishal",
      zones: ["Sadat Road","Natullabad"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 132,
      activeAssignedBookings: 2
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000030"),
    userId: new ObjectId("66be18a1f2c4a91b88000045"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    name: "Zahid Hasan",
    email: "zahid.hasan.agent48@styledecor.com",
    phone: "+8801510111503",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    designation: "Technical Audio-Visual Lead",
    specialization: "Fast-Track Emergency Venue Setup",
    experienceYears: 7,
    assignedArea: {
      city: "Barishal",
      zones: ["Rupatali","Band Road","Sadat Road"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 139,
      activeAssignedBookings: 3
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000031"),
    userId: new ObjectId("66be18a1f2c4a91b88000046"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    name: "Mim Akter",
    email: "mim.akter.agent49@styledecor.com",
    phone: "+8801710112440",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    designation: "Senior Field Supervisor",
    specialization: "Stage Architecture & Floral Setup",
    experienceYears: 8,
    assignedArea: {
      city: "Rangpur",
      zones: ["Dhap","Modern More"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 36,
      activeAssignedBookings: 0
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000032"),
    userId: new ObjectId("66be18a1f2c4a91b88000047"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    name: "Enamul Haque",
    email: "enamul.haque.agent50@styledecor.com",
    phone: "+8801810113377",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    designation: "Lead Stage Architect",
    specialization: "Intelligent Lighting & Rigging",
    experienceYears: 2,
    assignedArea: {
      city: "Rangpur",
      zones: ["Station Road","Jahaj Company More","Dhap"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 43,
      activeAssignedBookings: 1
    },
    status: "busy",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000033"),
    userId: new ObjectId("66be18a1f2c4a91b88000048"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    name: "Bushra Rahman",
    email: "bushra.rahman.agent51@styledecor.com",
    phone: "+8801910114314",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    designation: "Lighting & FX Coordinator",
    specialization: "Theme Backdrops & 3D Cutouts",
    experienceYears: 3,
    assignedArea: {
      city: "Rangpur",
      zones: ["Dhap","Modern More"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 50,
      activeAssignedBookings: 2
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000034"),
    userId: new ObjectId("66be18a1f2c4a91b88000049"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    name: "Ashiqur Rahman",
    email: "ashiqur.rahman.agent52@styledecor.com",
    phone: "+8801310115251",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    designation: "Logistics & Operations Lead",
    specialization: "Cold Pyro & Atmospheric Special FX",
    experienceYears: 4,
    assignedArea: {
      city: "Rangpur",
      zones: ["Station Road","Jahaj Company More","Dhap"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 57,
      activeAssignedBookings: 3
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000035"),
    userId: new ObjectId("66be18a1f2c4a91b8800004a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    name: "Nusrat Sharmin",
    email: "nusrat.sharmin.agent53@styledecor.com",
    phone: "+8801610116188",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    designation: "Master Floral Stylist",
    specialization: "Traditional Bengali Floral Crafts",
    experienceYears: 5,
    assignedArea: {
      city: "Mymensingh",
      zones: ["Town Hall","Charpara"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 64,
      activeAssignedBookings: 0
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000036"),
    userId: new ObjectId("66be18a1f2c4a91b8800004b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    name: "Sayed Ali",
    email: "sayed.ali.agent54@styledecor.com",
    phone: "+8801510117125",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    designation: "Venue Setup Coordinator",
    specialization: "Rooftop Canopy & Ambient Drapes",
    experienceYears: 6,
    assignedArea: {
      city: "Mymensingh",
      zones: ["Ganginar Par","Medical College Area","Town Hall"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 71,
      activeAssignedBookings: 1
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000037"),
    userId: new ObjectId("66be18a1f2c4a91b8800004c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    name: "Shamima Nasrin",
    email: "shamima.nasrin.agent55@styledecor.com",
    phone: "+8801710118062",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    designation: "Quality Assurance Officer",
    specialization: "Photo Booth & 360 Video Engineering",
    experienceYears: 7,
    assignedArea: {
      city: "Mymensingh",
      zones: ["Town Hall","Charpara"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 78,
      activeAssignedBookings: 2
    },
    status: "busy",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000038"),
    userId: new ObjectId("66be18a1f2c4a91b8800004d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    name: "Asaduzzaman Noor",
    email: "asaduzzaman.noor.agent56@styledecor.com",
    phone: "+8801810118999",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    designation: "Technical Audio-Visual Lead",
    specialization: "Fast-Track Emergency Venue Setup",
    experienceYears: 8,
    assignedArea: {
      city: "Mymensingh",
      zones: ["Ganginar Par","Medical College Area","Town Hall"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 85,
      activeAssignedBookings: 3
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000039"),
    userId: new ObjectId("66be18a1f2c4a91b8800004e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    name: "Farhana Sharmin",
    email: "farhana.sharmin.agent57@styledecor.com",
    phone: "+8801910119936",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    designation: "Senior Field Supervisor",
    specialization: "Stage Architecture & Floral Setup",
    experienceYears: 2,
    assignedArea: {
      city: "Cumilla",
      zones: ["Kandirpar","Badurtala"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 92,
      activeAssignedBookings: 0
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800003a"),
    userId: new ObjectId("66be18a1f2c4a91b8800004f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    name: "Shamim Reza",
    email: "shamim.reza.agent58@styledecor.com",
    phone: "+8801310120873",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    designation: "Lead Stage Architect",
    specialization: "Intelligent Lighting & Rigging",
    experienceYears: 3,
    assignedArea: {
      city: "Cumilla",
      zones: ["Jhawtola","Bagichagaon","Kandirpar"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 99,
      activeAssignedBookings: 1
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800003b"),
    userId: new ObjectId("66be18a1f2c4a91b88000050"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    name: "Priya Das",
    email: "priya.das.agent59@styledecor.com",
    phone: "+8801610121810",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    designation: "Lighting & FX Coordinator",
    specialization: "Theme Backdrops & 3D Cutouts",
    experienceYears: 4,
    assignedArea: {
      city: "Cumilla",
      zones: ["Kandirpar","Badurtala"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 106,
      activeAssignedBookings: 2
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800003c"),
    userId: new ObjectId("66be18a1f2c4a91b88000051"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    name: "Delwar Hossain",
    email: "delwar.hossain.agent60@styledecor.com",
    phone: "+8801510122747",
    photoUrl: "https://images.unsplash.com/photo-1534751516642-a171edd2521d?w=400&auto=format&fit=crop&q=80",
    designation: "Logistics & Operations Lead",
    specialization: "Cold Pyro & Atmospheric Special FX",
    experienceYears: 5,
    assignedArea: {
      city: "Cumilla",
      zones: ["Jhawtola","Bagichagaon","Kandirpar"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 113,
      activeAssignedBookings: 3
    },
    status: "busy",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800003d"),
    userId: new ObjectId("66be18a1f2c4a91b88000052"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    name: "Mahfuza Khatun",
    email: "mahfuza.khatun.agent61@styledecor.com",
    phone: "+8801710123684",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    designation: "Master Floral Stylist",
    specialization: "Traditional Bengali Floral Crafts",
    experienceYears: 6,
    assignedArea: {
      city: "Gazipur",
      zones: ["Chowrasta","Tongi"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 120,
      activeAssignedBookings: 0
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800003e"),
    userId: new ObjectId("66be18a1f2c4a91b88000053"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    name: "Mahbubur Rahman",
    email: "mahbubur.rahman.agent62@styledecor.com",
    phone: "+8801810124621",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    designation: "Venue Setup Coordinator",
    specialization: "Rooftop Canopy & Ambient Drapes",
    experienceYears: 7,
    assignedArea: {
      city: "Gazipur",
      zones: ["Board Bazar","Konabari","Chowrasta"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 127,
      activeAssignedBookings: 1
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800003f"),
    userId: new ObjectId("66be18a1f2c4a91b88000054"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    name: "Khadija Begum",
    email: "khadija.begum.agent63@styledecor.com",
    phone: "+8801910125558",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    designation: "Quality Assurance Officer",
    specialization: "Photo Booth & 360 Video Engineering",
    experienceYears: 8,
    assignedArea: {
      city: "Gazipur",
      zones: ["Chowrasta","Tongi"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 134,
      activeAssignedBookings: 2
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000040"),
    userId: new ObjectId("66be18a1f2c4a91b88000055"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    name: "Zakir Hossain",
    email: "zakir.hossain.agent64@styledecor.com",
    phone: "+8801310126495",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    designation: "Technical Audio-Visual Lead",
    specialization: "Fast-Track Emergency Venue Setup",
    experienceYears: 2,
    assignedArea: {
      city: "Gazipur",
      zones: ["Board Bazar","Konabari","Chowrasta"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 31,
      activeAssignedBookings: 3
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000041"),
    userId: new ObjectId("66be18a1f2c4a91b88000056"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    name: "Nasima Akter",
    email: "nasima.akter.agent65@styledecor.com",
    phone: "+8801610127432",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    designation: "Senior Field Supervisor",
    specialization: "Stage Architecture & Floral Setup",
    experienceYears: 3,
    assignedArea: {
      city: "Dhaka",
      zones: ["Banani","Uttara"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 38,
      activeAssignedBookings: 0
    },
    status: "busy",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000042"),
    userId: new ObjectId("66be18a1f2c4a91b88000057"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    name: "Habibur Rahman",
    email: "habibur.rahman.agent66@styledecor.com",
    phone: "+8801510128369",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    designation: "Lead Stage Architect",
    specialization: "Intelligent Lighting & Rigging",
    experienceYears: 4,
    assignedArea: {
      city: "Dhaka",
      zones: ["Mirpur","Mohammadpur","Old Dhaka"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 45,
      activeAssignedBookings: 1
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000043"),
    userId: new ObjectId("66be18a1f2c4a91b88000058"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    name: "Sufia Begum",
    email: "sufia.begum.agent67@styledecor.com",
    phone: "+8801710129306",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    designation: "Lighting & FX Coordinator",
    specialization: "Theme Backdrops & 3D Cutouts",
    experienceYears: 5,
    assignedArea: {
      city: "Dhaka",
      zones: ["Old Dhaka","Dhanmondi"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 52,
      activeAssignedBookings: 2
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000044"),
    userId: new ObjectId("66be18a1f2c4a91b88000059"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    name: "Babul Mia",
    email: "babul.mia.agent68@styledecor.com",
    phone: "+8801810130243",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    designation: "Logistics & Operations Lead",
    specialization: "Cold Pyro & Atmospheric Special FX",
    experienceYears: 6,
    assignedArea: {
      city: "Dhaka",
      zones: ["Gulshan","Banani","Uttara"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 59,
      activeAssignedBookings: 3
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000045"),
    userId: new ObjectId("66be18a1f2c4a91b8800005a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    name: "Shirin Akter",
    email: "shirin.akter.agent69@styledecor.com",
    phone: "+8801910131180",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    designation: "Master Floral Stylist",
    specialization: "Traditional Bengali Floral Crafts",
    experienceYears: 7,
    assignedArea: {
      city: "Dhaka",
      zones: ["Uttara","Mirpur"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 66,
      activeAssignedBookings: 0
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000046"),
    userId: new ObjectId("66be18a1f2c4a91b8800005b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    name: "Sirajul Islam",
    email: "sirajul.islam.agent70@styledecor.com",
    phone: "+8801310132117",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    designation: "Venue Setup Coordinator",
    specialization: "Rooftop Canopy & Ambient Drapes",
    experienceYears: 8,
    assignedArea: {
      city: "Dhaka",
      zones: ["Mohammadpur","Old Dhaka","Dhanmondi"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 73,
      activeAssignedBookings: 1
    },
    status: "busy",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000047"),
    userId: new ObjectId("66be18a1f2c4a91b8800005c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    name: "Rokeya Sultana",
    email: "rokeya.sultana.agent71@styledecor.com",
    phone: "+8801610133054",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    designation: "Quality Assurance Officer",
    specialization: "Photo Booth & 360 Video Engineering",
    experienceYears: 2,
    assignedArea: {
      city: "Dhaka",
      zones: ["Dhanmondi","Gulshan"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 80,
      activeAssignedBookings: 2
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000048"),
    userId: new ObjectId("66be18a1f2c4a91b8800005d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    name: "Liton Das",
    email: "liton.das.agent72@styledecor.com",
    phone: "+8801510133991",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    designation: "Technical Audio-Visual Lead",
    specialization: "Fast-Track Emergency Venue Setup",
    experienceYears: 3,
    assignedArea: {
      city: "Dhaka",
      zones: ["Banani","Uttara","Mirpur"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 87,
      activeAssignedBookings: 3
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b88000049"),
    userId: new ObjectId("66be18a1f2c4a91b8800005e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    name: "Anowara Begum",
    email: "anowara.begum.agent73@styledecor.com",
    phone: "+8801710134928",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    designation: "Senior Field Supervisor",
    specialization: "Stage Architecture & Floral Setup",
    experienceYears: 4,
    assignedArea: {
      city: "Dhaka",
      zones: ["Mirpur","Mohammadpur"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 94,
      activeAssignedBookings: 0
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800004a"),
    userId: new ObjectId("66be18a1f2c4a91b8800005f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    name: "Joynal Abedin",
    email: "joynal.abedin.agent74@styledecor.com",
    phone: "+8801810135865",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    designation: "Lead Stage Architect",
    specialization: "Intelligent Lighting & Rigging",
    experienceYears: 5,
    assignedArea: {
      city: "Dhaka",
      zones: ["Old Dhaka","Dhanmondi","Gulshan"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 101,
      activeAssignedBookings: 1
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800004b"),
    userId: new ObjectId("66be18a1f2c4a91b88000060"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    name: "Mariam Begum",
    email: "mariam.begum.agent75@styledecor.com",
    phone: "+8801910136802",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    designation: "Lighting & FX Coordinator",
    specialization: "Theme Backdrops & 3D Cutouts",
    experienceYears: 6,
    assignedArea: {
      city: "Dhaka",
      zones: ["Gulshan","Banani"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 108,
      activeAssignedBookings: 2
    },
    status: "busy",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800004c"),
    userId: new ObjectId("66be18a1f2c4a91b88000061"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    name: "Abul Kashem",
    email: "abul.kashem.agent76@styledecor.com",
    phone: "+8801310137739",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    designation: "Logistics & Operations Lead",
    specialization: "Cold Pyro & Atmospheric Special FX",
    experienceYears: 7,
    assignedArea: {
      city: "Dhaka",
      zones: ["Uttara","Mirpur","Mohammadpur"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 115,
      activeAssignedBookings: 3
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800004d"),
    userId: new ObjectId("66be18a1f2c4a91b88000062"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    name: "Shahina Akter",
    email: "shahina.akter.agent77@styledecor.com",
    phone: "+8801610138676",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    designation: "Master Floral Stylist",
    specialization: "Traditional Bengali Floral Crafts",
    experienceYears: 8,
    assignedArea: {
      city: "Dhaka",
      zones: ["Mohammadpur","Old Dhaka"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 122,
      activeAssignedBookings: 0
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800004e"),
    userId: new ObjectId("66be18a1f2c4a91b88000063"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    name: "Abdul Mannan",
    email: "abdul.mannan.agent78@styledecor.com",
    phone: "+8801510139613",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    designation: "Venue Setup Coordinator",
    specialization: "Rooftop Canopy & Ambient Drapes",
    experienceYears: 2,
    assignedArea: {
      city: "Dhaka",
      zones: ["Dhanmondi","Gulshan","Banani"]
    },
    metrics: {
      rating: 4.8,
      completedEvents: 129,
      activeAssignedBookings: 1
    },
    status: "available",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a4f2c4a91b8800004f"),
    userId: new ObjectId("66be18a1f2c4a91b88000064"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    name: "Rehana Parvin",
    email: "rehana.parvin.agent79@styledecor.com",
    phone: "+8801710140550",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    designation: "Quality Assurance Officer",
    specialization: "Photo Booth & 360 Video Engineering",
    experienceYears: 3,
    assignedArea: {
      city: "Dhaka",
      zones: ["Banani","Uttara"]
    },
    metrics: {
      rating: 4.5,
      completedEvents: 136,
      activeAssignedBookings: 2
    },
    status: "on_assignment",
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  }
];

module.exports = { agentsData };

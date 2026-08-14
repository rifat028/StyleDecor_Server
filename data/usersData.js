const { ObjectId } = require("mongodb");

const usersData = [
  {
    _id: new ObjectId("694a67222d7b0885ab704273"),
    firebaseUid: "vtKi7wz7wIaCNvs7LgNLAZYPnB93",
    name: "Admin StyleDecor",
    email: "admin.styledecor1@gmail.com",
    phone: "+8801700000001",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    role: "admin",
    address: {
          "street": "Level 4, Corporate Tower",
          "area": "Banani",
          "city": "Dhaka",
          "postalCode": "1213"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:04:58.602Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000002"),
    firebaseUid: "Ary842I4x9WtjyqgXRYhRRf8EsR2",
    name: "Tanvir Ahmed",
    email: "tanvir.ahmed.dec1@styledecor.com",
    phone: "+8801910001874",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "House 24, Road 8/A",
          "area": "Dhanmondi",
          "city": "Dhaka",
          "postalCode": "1209"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:04:59.795Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000003"),
    firebaseUid: "pGis7PRkpihx8zoAVa7TNjyQxpm2",
    name: "Sadia Islam",
    email: "sadia.islam.dec2@styledecor.com",
    phone: "+8801310002811",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Plot 12, Road 113",
          "area": "Gulshan-2",
          "city": "Dhaka",
          "postalCode": "1212"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:01.607Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000004"),
    firebaseUid: "1dWNc2oGZaS1Gh86MjJH3mRkHhC2",
    name: "Rahim Chowdhury",
    email: "rahim.chowdhury.dec3@styledecor.com",
    phone: "+8801610003748",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Block C, Road 11",
          "area": "Banani",
          "city": "Dhaka",
          "postalCode": "1213"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:02.948Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000005"),
    firebaseUid: "nWUAhcn2jOZfitkPzpxXCzZDeWw1",
    name: "Farhana Akter",
    email: "farhana.akter.dec4@styledecor.com",
    phone: "+8801510004685",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Sector 4, Road 7",
          "area": "Uttara",
          "city": "Dhaka",
          "postalCode": "1230"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:04.447Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000006"),
    firebaseUid: "c0AgJrzF1UQH9Busqbo33uedDIy1",
    name: "Arifur Rahman",
    email: "arifur.rahman.dec5@styledecor.com",
    phone: "+8801710005622",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Block D, Section 10",
          "area": "Mirpur-10",
          "city": "Dhaka",
          "postalCode": "1216"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:05.797Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000007"),
    firebaseUid: "fTv0e93pu7V9uhdEf2ojG9bvAcX2",
    name: "Nusrat Jahan",
    email: "nusrat.jahan.dec6@styledecor.com",
    phone: "+8801810006559",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Commercial Area, Road 3",
          "area": "Agrabad C/A",
          "city": "Chattogram",
          "postalCode": "4100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:07.343Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000008"),
    firebaseUid: "gmcdL336Y5Xs5DgYXFLH7iBQoWq2",
    name: "Mahmudul Hasan",
    email: "mahmudul.hasan.dec7@styledecor.com",
    phone: "+8801910007496",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Nasirabad Housing Society, Road 2",
          "area": "GEC Circle",
          "city": "Chattogram",
          "postalCode": "4000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:08.732Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000009"),
    firebaseUid: "JMmdncrGTFeEG7EwKLLh2PiSHyb2",
    name: "Tasnim Sultana",
    email: "tasnim.sultana.dec8@styledecor.com",
    phone: "+8801310008433",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "South Khulshi Residential Area",
          "area": "Khulshi",
          "city": "Chattogram",
          "postalCode": "4225"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:10.111Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800000a"),
    firebaseUid: "kxwWofDttsdgzUfTHvbim7oSfUE3",
    name: "Mehedi Hasan",
    email: "mehedi.hasan.dec9@styledecor.com",
    phone: "+8801610009370",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "East Zindabazar, Main Road",
          "area": "Zindabazar",
          "city": "Sylhet",
          "postalCode": "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:11.391Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800000b"),
    firebaseUid: "w9de06twOXcxMCWm2nobGIzhce32",
    name: "Sabrina Yesmin",
    email: "sabrina.yesmin.dec10@styledecor.com",
    phone: "+8801510010307",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Block B, Sector 2",
          "area": "Shahjalal Upashahar",
          "city": "Sylhet",
          "postalCode": "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:12.784Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800000c"),
    firebaseUid: "JYzwZFP77pPdDwQMiBvVpCsSNrO2",
    name: "Shahriar Kabir",
    email: "shahriar.kabir.dec11@styledecor.com",
    phone: "+8801710011244",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Station Road, Ward 11",
          "area": "Shaheb Bazar",
          "city": "Rajshahi",
          "postalCode": "6100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:14.395Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800000d"),
    firebaseUid: "nyypLq7AW8UpVlH3vVBLAhkJ0Nh1",
    name: "Rifat Ara",
    email: "rifat.ara.dec12@styledecor.com",
    phone: "+8801810012181",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "VIP Road, Greater Road",
          "area": "Kazihata",
          "city": "Rajshahi",
          "postalCode": "6000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:15.711Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800000e"),
    firebaseUid: "ELRpRZF9ACRUgupFCki34r9dTX93",
    name: "Kamrul Islam",
    email: "kamrul.islam.dec13@styledecor.com",
    phone: "+8801910013118",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Sonadanga R/A, 2nd Phase",
          "area": "Sonadanga",
          "city": "Khulna",
          "postalCode": "9100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:17.015Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800000f"),
    firebaseUid: "fC8sjbPwWmXaxeTlyv2viFe1yH22",
    name: "Fatema Tuj Johora",
    email: "fatema.tuj.johora.dec14@styledecor.com",
    phone: "+8801310014055",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Housing Estate Road",
          "area": "Khalishpur",
          "city": "Khulna",
          "postalCode": "9200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:18.314Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000010"),
    firebaseUid: "VVc2BKDVEzUHlqKiB6JGgOuCFt93",
    name: "Ashraful Alam",
    email: "ashraful.alam.dec15@styledecor.com",
    phone: "+8801610014992",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Band Road, Ward 5",
          "area": "Sadat Road",
          "city": "Barishal",
          "postalCode": "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:19.664Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000011"),
    firebaseUid: "CWUovJOxudd7J7HpgK8jrDQKGcC2",
    name: "Nazia Hasan",
    email: "nazia.hasan.dec16@styledecor.com",
    phone: "+8801510015929",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Central Bus Terminal Area",
          "area": "Natullabad",
          "city": "Barishal",
          "postalCode": "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:21.317Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000012"),
    firebaseUid: "5f4Fg7B0nCUOyiMkvp1NioE31JD2",
    name: "Jannatul Ferdous",
    email: "jannatul.ferdous.dec17@styledecor.com",
    phone: "+8801710016866",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Jail Road, Dhap",
          "area": "Dhap",
          "city": "Rangpur",
          "postalCode": "5400"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:22.642Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000013"),
    firebaseUid: "MmDcRhD4jff9O2DsqYlGWWbcVJD3",
    name: "Shakil Mahmud",
    email: "shakil.mahmud.dec18@styledecor.com",
    phone: "+8801810017803",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Station Road",
          "area": "Modern More",
          "city": "Rangpur",
          "postalCode": "5402"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:23.946Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000014"),
    firebaseUid: "Dgycd51kfJg6RPUiwBGFH5Q7wzI3",
    name: "Sumaiya Tabassum",
    email: "sumaiya.tabassum.dec19@styledecor.com",
    phone: "+8801910018740",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Ganginar Par Road",
          "area": "Town Hall",
          "city": "Mymensingh",
          "postalCode": "2200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:25.435Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000015"),
    firebaseUid: "GoCkYTnsQphnFFyEaBDKCqJm3MX2",
    name: "Zubair Hossain",
    email: "zubair.hossain.dec20@styledecor.com",
    phone: "+8801310019677",
    photoUrl: "https://images.unsplash.com/photo-1534751516642-a171edd2521d?w=400&auto=format&fit=crop&q=80",
    role: "decorator",
    address: {
          "street": "Medical College Road",
          "area": "Charpara",
          "city": "Mymensingh",
          "postalCode": "2206"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:26.676Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000016"),
    firebaseUid: "djPCbiAqstX3O7zsanf2MjL0ocH2",
    name: "Israt Jahan",
    email: "israt.jahan.agent1@styledecor.com",
    phone: "+8801710067464",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Plot 12, Road 113",
          "area": "Gulshan-2",
          "city": "Dhaka",
          "postalCode": "1212"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:28.011Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000017"),
    firebaseUid: "oV9AlAs6WPVPBQGWXJzKPeiCaAp2",
    name: "Fahim Faysal",
    email: "fahim.faysal.agent2@styledecor.com",
    phone: "+8801810068401",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Block C, Road 11",
          "area": "Banani",
          "city": "Dhaka",
          "postalCode": "1213"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:29.323Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000018"),
    firebaseUid: "ZYAZAFF0pjMri9c9RGJoUr1KAOw2",
    name: "Afroza Begum",
    email: "afroza.begum.agent3@styledecor.com",
    phone: "+8801910069338",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Sector 4, Road 7",
          "area": "Uttara",
          "city": "Dhaka",
          "postalCode": "1230"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:30.641Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000019"),
    firebaseUid: "e3LV4a0KiTcDydZPAresF9AtC6T2",
    name: "Nazmul Huda",
    email: "nazmul.huda.agent4@styledecor.com",
    phone: "+8801310070275",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Block D, Section 10",
          "area": "Mirpur-10",
          "city": "Dhaka",
          "postalCode": "1216"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:31.936Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800001a"),
    firebaseUid: "1RB6fAyCyvRfpxFao4ZVBzVsXE43",
    name: "Sharmin Sultana",
    email: "sharmin.sultana.agent5@styledecor.com",
    phone: "+8801610071212",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Commercial Area, Road 3",
          "area": "Agrabad C/A",
          "city": "Chattogram",
          "postalCode": "4100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:33.162Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800001b"),
    firebaseUid: "jGrEZvTT4FZAMYcMvU0ABSq7EWW2",
    name: "Saiful Islam",
    email: "saiful.islam.agent6@styledecor.com",
    phone: "+8801510072149",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Nasirabad Housing Society, Road 2",
          "area": "GEC Circle",
          "city": "Chattogram",
          "postalCode": "4000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:34.516Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800001c"),
    firebaseUid: "0qaAmx8w5QXBkE8iNESqFkUY0vn1",
    name: "Maliha Rahman",
    email: "maliha.rahman.agent7@styledecor.com",
    phone: "+8801710073086",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "South Khulshi Residential Area",
          "area": "Khulshi",
          "city": "Chattogram",
          "postalCode": "4225"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:35.903Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800001d"),
    firebaseUid: "jl871fpdtQOiJH2QbzzVu7ZsCCf1",
    name: "Imran Hossain",
    email: "imran.hossain.agent8@styledecor.com",
    phone: "+8801810074023",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "East Zindabazar, Main Road",
          "area": "Zindabazar",
          "city": "Sylhet",
          "postalCode": "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:37.224Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800001e"),
    firebaseUid: "kJoeWF7fGrNZk4xiPDhXwoauijM2",
    name: "Tasmia Haque",
    email: "tasmia.haque.agent9@styledecor.com",
    phone: "+8801910074960",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Block B, Sector 2",
          "area": "Shahjalal Upashahar",
          "city": "Sylhet",
          "postalCode": "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:38.659Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800001f"),
    firebaseUid: "a7y8nP1YHsboGEHiCqr5FJfSOY03",
    name: "Rashedul Karim",
    email: "rashedul.karim.agent10@styledecor.com",
    phone: "+8801310075897",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Station Road, Ward 11",
          "area": "Shaheb Bazar",
          "city": "Rajshahi",
          "postalCode": "6100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:39.915Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000020"),
    firebaseUid: "z6vNIADspIfyAjxlPqO0aZOhyxJ3",
    name: "Anika Bushra",
    email: "anika.bushra.agent11@styledecor.com",
    phone: "+8801610076834",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "VIP Road, Greater Road",
          "area": "Kazihata",
          "city": "Rajshahi",
          "postalCode": "6000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:41.164Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000021"),
    firebaseUid: "HZYH2zxFI7gCtPH1UzHmeOJGaVj2",
    name: "Mostafizur Rahman",
    email: "mostafizur.rahman.agent12@styledecor.com",
    phone: "+8801510077771",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Sonadanga R/A, 2nd Phase",
          "area": "Sonadanga",
          "city": "Khulna",
          "postalCode": "9100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:42.423Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000022"),
    firebaseUid: "2rxiJB7s2yUE1XuVdb9Rq4IctOj2",
    name: "Rumana Akter",
    email: "rumana.akter.agent13@styledecor.com",
    phone: "+8801710078708",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Housing Estate Road",
          "area": "Khalishpur",
          "city": "Khulna",
          "postalCode": "9200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:43.763Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000023"),
    firebaseUid: "se3GMpoUPEhxkCCBE8t6e22evOr2",
    name: "Sabbir Hossain",
    email: "sabbir.hossain.agent14@styledecor.com",
    phone: "+8801810079645",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Band Road, Ward 5",
          "area": "Sadat Road",
          "city": "Barishal",
          "postalCode": "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:44.993Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000024"),
    firebaseUid: "kVMOiWecw4QXz7TXuE7r3QFze0E3",
    name: "Nabila Tahsin",
    email: "nabila.tahsin.agent15@styledecor.com",
    phone: "+8801910080582",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Central Bus Terminal Area",
          "area": "Natullabad",
          "city": "Barishal",
          "postalCode": "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:47.224Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000025"),
    firebaseUid: "BpiQQMBXbeUz0ZxbIMPqrSfLb792",
    name: "Tariqul Islam",
    email: "tariqul.islam.agent16@styledecor.com",
    phone: "+8801310081519",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Jail Road, Dhap",
          "area": "Dhap",
          "city": "Rangpur",
          "postalCode": "5400"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:48.716Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000026"),
    firebaseUid: "Ix5n4s6zlKTujrKqir8d3YkVvZ92",
    name: "Fariha Tasnim",
    email: "fariha.tasnim.agent17@styledecor.com",
    phone: "+8801610082456",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Station Road",
          "area": "Modern More",
          "city": "Rangpur",
          "postalCode": "5402"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:50.030Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000027"),
    firebaseUid: "XuUVdAVnLZQxsGQz0xU9mcmbNav1",
    name: "Ahsan Habib",
    email: "ahsan.habib.agent18@styledecor.com",
    phone: "+8801510083393",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Ganginar Par Road",
          "area": "Town Hall",
          "city": "Mymensingh",
          "postalCode": "2200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:05:51.404Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000028"),
    firebaseUid: "XGu2SSa4loZWR9Bx3cnzjgehJ1G2",
    name: "Samira Khan",
    email: "samira.khan.agent19@styledecor.com",
    phone: "+8801710084330",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Medical College Road",
          "area": "Charpara",
          "city": "Mymensingh",
          "postalCode": "2206"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:24.073Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000029"),
    firebaseUid: "GlzFoDR1SqWM4o0id5H14a0GShC3",
    name: "Mizanur Rahman",
    email: "mizanur.rahman.agent20@styledecor.com",
    phone: "+8801810085267",
    photoUrl: "https://images.unsplash.com/photo-1534751516642-a171edd2521d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Nazrul Avenue",
          "area": "Kandirpar",
          "city": "Cumilla",
          "postalCode": "3500"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:25.485Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800002a"),
    firebaseUid: "G3TwjthRpaWoEW0ZLHM1rSk1JFN2",
    name: "Tahmina Akter",
    email: "tahmina.akter.agent21@styledecor.com",
    phone: "+8801910086204",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Badurtala Road",
          "area": "Jhawtola",
          "city": "Cumilla",
          "postalCode": "3500"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:26.826Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800002b"),
    firebaseUid: "KQiCEB57OYNmvDKn5AevJeKeqdN2",
    name: "Shohel Rana",
    email: "shohel.rana.agent22@styledecor.com",
    phone: "+8801310087141",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Dhaka-Mymensingh Highway",
          "area": "Chowrasta",
          "city": "Gazipur",
          "postalCode": "1702"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:28.165Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800002c"),
    firebaseUid: "YfFZTLhZMNXIesI1uh8rP02975D2",
    name: "Farzana Yeasmin",
    email: "farzana.yeasmin.agent23@styledecor.com",
    phone: "+8801610088078",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "College Road, Tongi Bazar",
          "area": "Tongi",
          "city": "Gazipur",
          "postalCode": "1710"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:29.497Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800002d"),
    firebaseUid: "GeX0gZPiajdXZoJ5OE38W6WNJgk1",
    name: "Towhidul Islam",
    email: "towhidul.islam.agent24@styledecor.com",
    phone: "+8801510089015",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "House 24, Road 8/A",
          "area": "Dhanmondi",
          "city": "Dhaka",
          "postalCode": "1209"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:30.799Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800002e"),
    firebaseUid: "tl2BTxKFfWVfRv1PJYb6IEaFJzg1",
    name: "Nafisa Anjum",
    email: "nafisa.anjum.agent25@styledecor.com",
    phone: "+8801710089952",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Plot 12, Road 113",
          "area": "Gulshan-2",
          "city": "Dhaka",
          "postalCode": "1212"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:32.119Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800002f"),
    firebaseUid: "3XfD4lLKDZUmgQ3osajlHCKZrR32",
    name: "Kazi Rashed",
    email: "kazi.rashed.agent26@styledecor.com",
    phone: "+8801810090889",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Block C, Road 11",
          "area": "Banani",
          "city": "Dhaka",
          "postalCode": "1213"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:33.453Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000030"),
    firebaseUid: "y2LJe2vz5iW0sNjhiVnncsYhvZI3",
    name: "Sayeda Farzana",
    email: "sayeda.farzana.agent27@styledecor.com",
    phone: "+8801910091826",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Sector 4, Road 7",
          "area": "Uttara",
          "city": "Dhaka",
          "postalCode": "1230"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:35.255Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000031"),
    firebaseUid: "qDopQEdT5Qcdf2EBF812BQVzjFE3",
    name: "Abdur Rob",
    email: "abdur.rob.agent28@styledecor.com",
    phone: "+8801310092763",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Block D, Section 10",
          "area": "Mirpur-10",
          "city": "Dhaka",
          "postalCode": "1216"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:36.592Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000032"),
    firebaseUid: "M622vZuoozYq7FickqJLF2H5lTE2",
    name: "Meghla Chowdhury",
    email: "meghla.chowdhury.agent29@styledecor.com",
    phone: "+8801610093700",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Commercial Area, Road 3",
          "area": "Agrabad C/A",
          "city": "Chattogram",
          "postalCode": "4100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:37.911Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000033"),
    firebaseUid: "iAX7MSVdZuS4y5eTd9CiWXEWsu43",
    name: "Sajib Ahmed",
    email: "sajib.ahmed.agent30@styledecor.com",
    phone: "+8801510094637",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Nasirabad Housing Society, Road 2",
          "area": "GEC Circle",
          "city": "Chattogram",
          "postalCode": "4000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:39.203Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000034"),
    firebaseUid: "YMyxhBdO3VSrEUeW71K502yJwmk1",
    name: "Rubina Parvin",
    email: "rubina.parvin.agent31@styledecor.com",
    phone: "+8801710095574",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "South Khulshi Residential Area",
          "area": "Khulshi",
          "city": "Chattogram",
          "postalCode": "4225"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:40.582Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000035"),
    firebaseUid: "UDDMBvzPv8ex41VrTgfPycSZJU33",
    name: "Monirul Islam",
    email: "monirul.islam.agent32@styledecor.com",
    phone: "+8801810096511",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "East Zindabazar, Main Road",
          "area": "Zindabazar",
          "city": "Sylhet",
          "postalCode": "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:41.883Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000036"),
    firebaseUid: "sVrd7YMf6zgEnmghSRFXvKK47R02",
    name: "Humaira Kabir",
    email: "humaira.kabir.agent33@styledecor.com",
    phone: "+8801910097448",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Block B, Sector 2",
          "area": "Shahjalal Upashahar",
          "city": "Sylhet",
          "postalCode": "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:43.208Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000037"),
    firebaseUid: "0DG3K4zpApgAb6feXCDbUdd5hrf2",
    name: "Hasan Al Mamun",
    email: "hasan.al.mamun.agent34@styledecor.com",
    phone: "+8801310098385",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Station Road, Ward 11",
          "area": "Shaheb Bazar",
          "city": "Rajshahi",
          "postalCode": "6100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:44.531Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000038"),
    firebaseUid: "on0kYycaWNPhlliZ9YAj4WTrI3w2",
    name: "Laboni Akter",
    email: "laboni.akter.agent35@styledecor.com",
    phone: "+8801610099322",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "VIP Road, Greater Road",
          "area": "Kazihata",
          "city": "Rajshahi",
          "postalCode": "6000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:45.947Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000039"),
    firebaseUid: "hwUGJr8eSgW42ERys0npDEAxN2K3",
    name: "Golam Mostafa",
    email: "golam.mostafa.agent36@styledecor.com",
    phone: "+8801510100259",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Sonadanga R/A, 2nd Phase",
          "area": "Sonadanga",
          "city": "Khulna",
          "postalCode": "9100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:47.266Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800003a"),
    firebaseUid: "w3CtbINYmManQ6Nzqgmj23ZNw8g2",
    name: "Farzana Haque",
    email: "farzana.haque.agent37@styledecor.com",
    phone: "+8801710101196",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Housing Estate Road",
          "area": "Khalishpur",
          "city": "Khulna",
          "postalCode": "9200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:48.511Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800003b"),
    firebaseUid: "LSnmlAlbShRQppMOncDfedwP4X52",
    name: "Mustafizur Rahman",
    email: "mustafizur.rahman.agent38@styledecor.com",
    phone: "+8801810102133",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Band Road, Ward 5",
          "area": "Sadat Road",
          "city": "Barishal",
          "postalCode": "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:49.822Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800003c"),
    firebaseUid: "H2Hg1Wsmhwglzt1AbH6lNUi8E053",
    name: "Sultana Razia",
    email: "sultana.razia.agent39@styledecor.com",
    phone: "+8801910103070",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Central Bus Terminal Area",
          "area": "Natullabad",
          "city": "Barishal",
          "postalCode": "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:51.142Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800003d"),
    firebaseUid: "bdNBJFsQxqXbNB42RyoqBqxtljg1",
    name: "Al Amin Hossain",
    email: "al.amin.hossain.agent40@styledecor.com",
    phone: "+8801310104007",
    photoUrl: "https://images.unsplash.com/photo-1534751516642-a171edd2521d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Jail Road, Dhap",
          "area": "Dhap",
          "city": "Rangpur",
          "postalCode": "5400"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:52.460Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800003e"),
    firebaseUid: "08TMXeRNsGM9XRqmymo0zhzsqZ03",
    name: "Sharmin Akter",
    email: "sharmin.akter.agent41@styledecor.com",
    phone: "+8801610104944",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Station Road",
          "area": "Modern More",
          "city": "Rangpur",
          "postalCode": "5402"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:53.709Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800003f"),
    firebaseUid: "YFaHBKC5FQfz8pGXM1w3gEWnRMf2",
    name: "Nurul Huda",
    email: "nurul.huda.agent42@styledecor.com",
    phone: "+8801510105881",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Ganginar Par Road",
          "area": "Town Hall",
          "city": "Mymensingh",
          "postalCode": "2200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:55.045Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000040"),
    firebaseUid: "vMhjHwLyaAYDqkfq47aAFMztzKY2",
    name: "Jannat Ara",
    email: "jannat.ara.agent43@styledecor.com",
    phone: "+8801710106818",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Medical College Road",
          "area": "Charpara",
          "city": "Mymensingh",
          "postalCode": "2206"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:56.455Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000041"),
    firebaseUid: "VzyOIJf12bfdkq5ANZW7xZ4KeSG3",
    name: "Shahadat Hossain",
    email: "shahadat.hossain.agent44@styledecor.com",
    phone: "+8801810107755",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Nazrul Avenue",
          "area": "Kandirpar",
          "city": "Cumilla",
          "postalCode": "3500"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:57.820Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000042"),
    firebaseUid: "mrUMv6Au5tV6QHkriju9MRqmmVx1",
    name: "Tamanna Yasmin",
    email: "tamanna.yasmin.agent45@styledecor.com",
    phone: "+8801910108692",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Badurtala Road",
          "area": "Jhawtola",
          "city": "Cumilla",
          "postalCode": "3500"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:06:59.058Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000043"),
    firebaseUid: "W3i60sNE4DhfbQVRxENBCQuJ44y2",
    name: "Rezaul Karim",
    email: "rezaul.karim.agent46@styledecor.com",
    phone: "+8801310109629",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Dhaka-Mymensingh Highway",
          "area": "Chowrasta",
          "city": "Gazipur",
          "postalCode": "1702"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:00.375Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000044"),
    firebaseUid: "6EeyInDj77boViLRgIrWDbZM1Cl1",
    name: "Roksana Begum",
    email: "roksana.begum.agent47@styledecor.com",
    phone: "+8801610110566",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "College Road, Tongi Bazar",
          "area": "Tongi",
          "city": "Gazipur",
          "postalCode": "1710"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:01.659Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000045"),
    firebaseUid: "va6upXyZKfV4kJjPYbkZ3C4GOX22",
    name: "Zahid Hasan",
    email: "zahid.hasan.agent48@styledecor.com",
    phone: "+8801510111503",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "House 24, Road 8/A",
          "area": "Dhanmondi",
          "city": "Dhaka",
          "postalCode": "1209"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:02.974Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000046"),
    firebaseUid: "hQhOqtQOn7XwCqSUvkfZehEjy7k1",
    name: "Mim Akter",
    email: "mim.akter.agent49@styledecor.com",
    phone: "+8801710112440",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Plot 12, Road 113",
          "area": "Gulshan-2",
          "city": "Dhaka",
          "postalCode": "1212"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:04.250Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000047"),
    firebaseUid: "tQz68WfOq2bq1apQtoplTieTwCj1",
    name: "Enamul Haque",
    email: "enamul.haque.agent50@styledecor.com",
    phone: "+8801810113377",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Block C, Road 11",
          "area": "Banani",
          "city": "Dhaka",
          "postalCode": "1213"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:05.554Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000048"),
    firebaseUid: "hMTwXhVOhzLyJ9xVV20WTZjW5ml1",
    name: "Bushra Rahman",
    email: "bushra.rahman.agent51@styledecor.com",
    phone: "+8801910114314",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Sector 4, Road 7",
          "area": "Uttara",
          "city": "Dhaka",
          "postalCode": "1230"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:06.856Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000049"),
    firebaseUid: "JMap3o4hPogLEiPCVmVdrCzSf8p2",
    name: "Ashiqur Rahman",
    email: "ashiqur.rahman.agent52@styledecor.com",
    phone: "+8801310115251",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Block D, Section 10",
          "area": "Mirpur-10",
          "city": "Dhaka",
          "postalCode": "1216"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:08.212Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800004a"),
    firebaseUid: "YtyQ4v6ELgeZAKmrVq3DOYiUHSN2",
    name: "Nusrat Sharmin",
    email: "nusrat.sharmin.agent53@styledecor.com",
    phone: "+8801610116188",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Commercial Area, Road 3",
          "area": "Agrabad C/A",
          "city": "Chattogram",
          "postalCode": "4100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:09.515Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800004b"),
    firebaseUid: "TboScaDbY8T3m8E1dnzWZqsi4gH3",
    name: "Sayed Ali",
    email: "sayed.ali.agent54@styledecor.com",
    phone: "+8801510117125",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Nasirabad Housing Society, Road 2",
          "area": "GEC Circle",
          "city": "Chattogram",
          "postalCode": "4000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:10.820Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800004c"),
    firebaseUid: "SyHWwb7Z4CY2W9pfaFQZ8PI6F3y1",
    name: "Shamima Nasrin",
    email: "shamima.nasrin.agent55@styledecor.com",
    phone: "+8801710118062",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "South Khulshi Residential Area",
          "area": "Khulshi",
          "city": "Chattogram",
          "postalCode": "4225"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:12.164Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800004d"),
    firebaseUid: "cIxQsmG6aIYGLJg48Lg3zMPc0IM2",
    name: "Asaduzzaman Noor",
    email: "asaduzzaman.noor.agent56@styledecor.com",
    phone: "+8801810118999",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "East Zindabazar, Main Road",
          "area": "Zindabazar",
          "city": "Sylhet",
          "postalCode": "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:13.488Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800004e"),
    firebaseUid: "8G05REVOvCbjXzavIFruipftRoO2",
    name: "Farhana Sharmin",
    email: "farhana.sharmin.agent57@styledecor.com",
    phone: "+8801910119936",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Block B, Sector 2",
          "area": "Shahjalal Upashahar",
          "city": "Sylhet",
          "postalCode": "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:14.853Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800004f"),
    firebaseUid: "tKnMmdTefTga3nf3tqRPXAJp3si1",
    name: "Shamim Reza",
    email: "shamim.reza.agent58@styledecor.com",
    phone: "+8801310120873",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Station Road, Ward 11",
          "area": "Shaheb Bazar",
          "city": "Rajshahi",
          "postalCode": "6100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:16.147Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000050"),
    firebaseUid: "3brEu681dQZY6FKPp7dehbZPigw1",
    name: "Priya Das",
    email: "priya.das.agent59@styledecor.com",
    phone: "+8801610121810",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "VIP Road, Greater Road",
          "area": "Kazihata",
          "city": "Rajshahi",
          "postalCode": "6000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:17.549Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000051"),
    firebaseUid: "sbBviFa4pkRpGrzuwtjpzDwFl6c2",
    name: "Delwar Hossain",
    email: "delwar.hossain.agent60@styledecor.com",
    phone: "+8801510122747",
    photoUrl: "https://images.unsplash.com/photo-1534751516642-a171edd2521d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Sonadanga R/A, 2nd Phase",
          "area": "Sonadanga",
          "city": "Khulna",
          "postalCode": "9100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:18.950Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000052"),
    firebaseUid: "6kQvWm6AvnWK03ouKgHI45YG4S92",
    name: "Mahfuza Khatun",
    email: "mahfuza.khatun.agent61@styledecor.com",
    phone: "+8801710123684",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Housing Estate Road",
          "area": "Khalishpur",
          "city": "Khulna",
          "postalCode": "9200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:20.353Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000053"),
    firebaseUid: "IVwboT55PcM96CtK3npqEiwxGPq2",
    name: "Mahbubur Rahman",
    email: "mahbubur.rahman.agent62@styledecor.com",
    phone: "+8801810124621",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Band Road, Ward 5",
          "area": "Sadat Road",
          "city": "Barishal",
          "postalCode": "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:21.644Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000054"),
    firebaseUid: "JuX2pHHukKZYicGvOUhweahge7C2",
    name: "Khadija Begum",
    email: "khadija.begum.agent63@styledecor.com",
    phone: "+8801910125558",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Central Bus Terminal Area",
          "area": "Natullabad",
          "city": "Barishal",
          "postalCode": "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:22.974Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000055"),
    firebaseUid: "JlwHu0CJPCajBgpogYBLu6K5qrH3",
    name: "Zakir Hossain",
    email: "zakir.hossain.agent64@styledecor.com",
    phone: "+8801310126495",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Jail Road, Dhap",
          "area": "Dhap",
          "city": "Rangpur",
          "postalCode": "5400"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:24.766Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000056"),
    firebaseUid: "qFvuA7fZQ7csMk0tPiGcOAYhuO53",
    name: "Nasima Akter",
    email: "nasima.akter.agent65@styledecor.com",
    phone: "+8801610127432",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Station Road",
          "area": "Modern More",
          "city": "Rangpur",
          "postalCode": "5402"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:26.121Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000057"),
    firebaseUid: "n3qUMEKPMPXmwevA5e4H6WJHpIh1",
    name: "Habibur Rahman",
    email: "habibur.rahman.agent66@styledecor.com",
    phone: "+8801510128369",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Ganginar Par Road",
          "area": "Town Hall",
          "city": "Mymensingh",
          "postalCode": "2200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:27.438Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000058"),
    firebaseUid: "ofJgisDDvsXNLZdkhOhgDaTiHZV2",
    name: "Sufia Begum",
    email: "sufia.begum.agent67@styledecor.com",
    phone: "+8801710129306",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Medical College Road",
          "area": "Charpara",
          "city": "Mymensingh",
          "postalCode": "2206"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:29.454Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000059"),
    firebaseUid: "7q9Gi7cSbtaQkWYzjEPdGdx0m1n1",
    name: "Babul Mia",
    email: "babul.mia.agent68@styledecor.com",
    phone: "+8801810130243",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Nazrul Avenue",
          "area": "Kandirpar",
          "city": "Cumilla",
          "postalCode": "3500"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:30.784Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800005a"),
    firebaseUid: "T6YG61mnrgaI2xQlaMQpAoxKYtf1",
    name: "Shirin Akter",
    email: "shirin.akter.agent69@styledecor.com",
    phone: "+8801910131180",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Badurtala Road",
          "area": "Jhawtola",
          "city": "Cumilla",
          "postalCode": "3500"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:32.096Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800005b"),
    firebaseUid: "IphqufK8Ejf30PEWZmvnIlcpwfG3",
    name: "Sirajul Islam",
    email: "sirajul.islam.agent70@styledecor.com",
    phone: "+8801310132117",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Dhaka-Mymensingh Highway",
          "area": "Chowrasta",
          "city": "Gazipur",
          "postalCode": "1702"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:33.429Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800005c"),
    firebaseUid: "mwB6Y4COCKWs2wYxUcBfvt96gEz2",
    name: "Rokeya Sultana",
    email: "rokeya.sultana.agent71@styledecor.com",
    phone: "+8801610133054",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "College Road, Tongi Bazar",
          "area": "Tongi",
          "city": "Gazipur",
          "postalCode": "1710"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:34.730Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800005d"),
    firebaseUid: "0gkBJoNfwKcxswB0zagvKIXlUq92",
    name: "Liton Das",
    email: "liton.das.agent72@styledecor.com",
    phone: "+8801510133991",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "House 24, Road 8/A",
          "area": "Dhanmondi",
          "city": "Dhaka",
          "postalCode": "1209"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:36.082Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800005e"),
    firebaseUid: "k8Bk3r9bPcUXXqhHcxUK8jFU5wm2",
    name: "Anowara Begum",
    email: "anowara.begum.agent73@styledecor.com",
    phone: "+8801710134928",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Plot 12, Road 113",
          "area": "Gulshan-2",
          "city": "Dhaka",
          "postalCode": "1212"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:37.368Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800005f"),
    firebaseUid: "V69BbM12VzN0iIjdpPklFIlAF0F3",
    name: "Joynal Abedin",
    email: "joynal.abedin.agent74@styledecor.com",
    phone: "+8801810135865",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Block C, Road 11",
          "area": "Banani",
          "city": "Dhaka",
          "postalCode": "1213"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:38.661Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000060"),
    firebaseUid: "1WRL0XhcZ6XnrWxxGxOjFnqec8Y2",
    name: "Mariam Begum",
    email: "mariam.begum.agent75@styledecor.com",
    phone: "+8801910136802",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Sector 4, Road 7",
          "area": "Uttara",
          "city": "Dhaka",
          "postalCode": "1230"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:39.999Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000061"),
    firebaseUid: "owE1on0C9PQuLRUcvCohOFMgQn63",
    name: "Abul Kashem",
    email: "abul.kashem.agent76@styledecor.com",
    phone: "+8801310137739",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Block D, Section 10",
          "area": "Mirpur-10",
          "city": "Dhaka",
          "postalCode": "1216"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:41.432Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000062"),
    firebaseUid: "tIIwa4fnyRTN9FLMvZHUuT5vmi43",
    name: "Shahina Akter",
    email: "shahina.akter.agent77@styledecor.com",
    phone: "+8801610138676",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Commercial Area, Road 3",
          "area": "Agrabad C/A",
          "city": "Chattogram",
          "postalCode": "4100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:42.791Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000063"),
    firebaseUid: "B84xs7mKcsWjl095QEIttWLlzLr2",
    name: "Abdul Mannan",
    email: "abdul.mannan.agent78@styledecor.com",
    phone: "+8801510139613",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "Nasirabad Housing Society, Road 2",
          "area": "GEC Circle",
          "city": "Chattogram",
          "postalCode": "4000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:44.099Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000064"),
    firebaseUid: "5dcveEbQTHTqX09GAh1xudUb5l62",
    name: "Rehana Parvin",
    email: "rehana.parvin.agent79@styledecor.com",
    phone: "+8801710140550",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    role: "agent",
    address: {
          "street": "South Khulshi Residential Area",
          "area": "Khulshi",
          "city": "Chattogram",
          "postalCode": "4225"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:45.438Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000065"),
    firebaseUid: "jrATylq8mRTUulq2r3hfjIGhCfK2",
    name: "Tahmidur Rahman",
    email: "tahmidur.rahman.user1@gmail.com",
    phone: "+8801620084300",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "House 14, Road 4, Sector 3",
          "area": "Uttara",
          "city": "Dhaka",
          "postalCode": "1230"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:46.881Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000066"),
    firebaseUid: "pEVJjNnvteY8Qkl0oI6Dkr3wWhX2",
    name: "Shamima Nasrin",
    email: "shamima.nasrin.user2@gmail.com",
    phone: "+8801520085143",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "Flat 4B, Plot 19, Block A",
          "area": "Bashundhara R/A",
          "city": "Dhaka",
          "postalCode": "1229"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:48.967Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000067"),
    firebaseUid: "IjhLaRaAn1NGy1WVqbrinWsGg8h2",
    name: "Ashikur Rahman",
    email: "ashikur.rahman.user3@gmail.com",
    phone: "+8801720085986",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "House 52, Road 11/A",
          "area": "Dhanmondi",
          "city": "Dhaka",
          "postalCode": "1209"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:50.256Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000068"),
    firebaseUid: "NX8yOO2QYvd5FgWlrctwvamz1ms1",
    name: "Tania Sultana",
    email: "tania.sultana.user4@gmail.com",
    phone: "+8801820086829",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "Plot 8, Block E",
          "area": "Banani",
          "city": "Dhaka",
          "postalCode": "1213"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:51.619Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000069"),
    firebaseUid: "q1mzfln4UbgB4S2BA00bPRUs8D42",
    name: "Shakib Al Hasan",
    email: "shakib.al.hasan.user5@gmail.com",
    phone: "+8801920087672",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "House 23, Road 2, Block B",
          "area": "Mirpur-1",
          "city": "Dhaka",
          "postalCode": "1216"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:52.944Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800006a"),
    firebaseUid: "rfA1Dwfgl2aIIsJCT1rPZZRU1XB2",
    name: "Mehnaz Tabassum",
    email: "mehnaz.tabassum.user6@gmail.com",
    phone: "+8801320088515",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "124 O.R. Nizam Road",
          "area": "GEC Circle",
          "city": "Chattogram",
          "postalCode": "4000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:54.217Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800006b"),
    firebaseUid: "0dDkB9zQFHQdI0vTC80HpSpGbJY2",
    name: "Golam Rabbani",
    email: "golam.rabbani.user7@gmail.com",
    phone: "+8801620089358",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "House 7, Road 3",
          "area": "South Khulshi",
          "city": "Chattogram",
          "postalCode": "4225"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:55.505Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800006c"),
    firebaseUid: "Xe3Fk6TpBLWIP90UO0maFE6oB962",
    name: "Farzana Yasmin",
    email: "farzana.yasmin.user8@gmail.com",
    phone: "+8801520090201",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "East Nasirabad Housing Society",
          "area": "Nasirabad",
          "city": "Chattogram",
          "postalCode": "4000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:56.828Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800006d"),
    firebaseUid: "SlRl0S35HbVdB0RiIWX3Fb60FWl1",
    name: "Mahmudur Rahman",
    email: "mahmudur.rahman.user9@gmail.com",
    phone: "+8801720091044",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "House 15, Block C",
          "area": "Shahjalal Upashahar",
          "city": "Sylhet",
          "postalCode": "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:58.310Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800006e"),
    firebaseUid: "UNyxdk3qqAeNeQObCv4qTcrh0qn1",
    name: "Sabrina Mostafa",
    email: "sabrina.mostafa.user10@gmail.com",
    phone: "+8801820091887",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "Kumarpara Main Road",
          "area": "Kumarpara",
          "city": "Sylhet",
          "postalCode": "3100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:07:59.696Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b8800006f"),
    firebaseUid: "e07QSfJwJWXUnHXluZNpfsfllaF2",
    name: "Towhidul Alam",
    email: "towhidul.alam.user11@gmail.com",
    phone: "+8801920092730",
    photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "VIP Road",
          "area": "Kazihata",
          "city": "Rajshahi",
          "postalCode": "6000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:08:01.097Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000070"),
    firebaseUid: "9r2waMQYG8PbaFPcEDr6cOk4o0r2",
    name: "Humaira Khatun",
    email: "humaira.khatun.user12@gmail.com",
    phone: "+8801320093573",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "Station Road",
          "area": "Shaheb Bazar",
          "city": "Rajshahi",
          "postalCode": "6100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:08:02.486Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000071"),
    firebaseUid: "zYhIYS8W7gbfnTxr6Nsf8nK5xEv1",
    name: "Rashedul Islam",
    email: "rashedul.islam.user13@gmail.com",
    phone: "+8801620094416",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "House 45, 1st Phase",
          "area": "Sonadanga R/A",
          "city": "Khulna",
          "postalCode": "9100"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:08:03.773Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000072"),
    firebaseUid: "mRQLA249koaVDB5H3S4LWaDEmWR2",
    name: "Nusrat Sharmin",
    email: "nusrat.sharmin.user14@gmail.com",
    phone: "+8801520095259",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "KDA Avenue",
          "area": "Boyra",
          "city": "Khulna",
          "postalCode": "9000"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:08:05.153Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000073"),
    firebaseUid: "AgPKX0t4TwR0nDuyhYhikABArJy1",
    name: "Imtiaz Hossain",
    email: "imtiaz.hossain.user15@gmail.com",
    phone: "+8801720096102",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "Band Road",
          "area": "Sadat Area",
          "city": "Barishal",
          "postalCode": "8200"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:08:06.514Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000074"),
    firebaseUid: "ScQnCdUAe9UKt4Yb5nYIdOqYa4g1",
    name: "Jannatul Ferdous",
    email: "jannatul.ferdous.user16@gmail.com",
    phone: "+8801820096945",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "Central Jail Road",
          "area": "Dhap",
          "city": "Rangpur",
          "postalCode": "5400"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:08:07.849Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000075"),
    firebaseUid: "t0OKnXFei3OE10fqcpyCE4JWLkl2",
    name: "Zahidul Karim",
    email: "zahidul.karim.user17@gmail.com",
    phone: "+8801920097788",
    photoUrl: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "Medical College Road",
          "area": "Charpara",
          "city": "Mymensingh",
          "postalCode": "2206"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:08:09.103Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000076"),
    firebaseUid: "EBbdorRb8KT2FGIs3O8aJUrd7lw2",
    name: "Afsana Mimi",
    email: "afsana.mimi.user18@gmail.com",
    phone: "+8801320098631",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "Badurtala Road",
          "area": "Kandirpar",
          "city": "Cumilla",
          "postalCode": "3500"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:08:10.386Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000077"),
    firebaseUid: "D0uqykXPEuMBGwy042aRzqgLDwh2",
    name: "Kazi Nazrul",
    email: "kazi.nazrul.user19@gmail.com",
    phone: "+8801620099474",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "College Road",
          "area": "Tongi",
          "city": "Gazipur",
          "postalCode": "1710"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:08:11.752Z")
  },
  {
    _id: new ObjectId("66be18a1f2c4a91b88000078"),
    firebaseUid: "4Hr7SZ1tkCgoDhyIkZMrpHxTnV33",
    name: "Sumaiya Akter",
    email: "sumaiya.akter.user20@gmail.com",
    phone: "+8801520100317",
    photoUrl: "https://images.unsplash.com/photo-1534751516642-a171edd2521d?w=400&auto=format&fit=crop&q=80",
    role: "customer",
    address: {
          "street": "Dhaka-Mymensingh Highway",
          "area": "Chowrasta",
          "city": "Gazipur",
          "postalCode": "1702"
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T16:08:12.971Z")
  },
  {
    _id: new ObjectId("6a7f2e0aaefae1aa7d90185b"),
    firebaseUid: "tv9HMa89QLYTvu9tGeu9OxO3Zwv2",
    name: "Istiak Ahmad Rifat",
    email: "istiakrifat001@gmail.com",
    phone: "",
    photoUrl: "https://lh3.googleusercontent.com/a/ACg8ocL_-rBFX93eYLlsG93VSpEMFj2AgHsmGqYj6N5LLNJ1g5zkuiw=s96-c",
    role: "customer",
    address: {
          "street": "",
          "area": "",
          "city": "Dhaka",
          "postalCode": ""
    },
    createdAt: new Date("2026-08-14T15:02:34.997Z"),
    updatedAt: new Date("2026-08-14T16:08:14.173Z")
  }
];

module.exports = { usersData };

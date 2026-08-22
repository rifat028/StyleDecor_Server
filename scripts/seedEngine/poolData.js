// ==============================================================================
// STATIC DATA POOLS FOR REALISTIC BANGLADESHI ENTITY GENERATION
// ==============================================================================

// Complete mapping of all 8 administrative divisions and 64 districts with postal codes and streets
const DIVISIONS_DISTRICTS = {
  Dhaka: [
    { district: "Dhaka", postalCode: "1209", streets: ["House 14, Road 4, Dhanmondi", "Plot 45, Block D, Gulshan-2", "House 12, Road 7, Banani", "Holding 56, Mirpur 10", "Sector 3, Uttara"] },
    { district: "Gazipur", postalCode: "1700", streets: ["Joydebpur Road, Chourasta", "Board Bazar Main Road", "Tongi Station Road"] },
    { district: "Narayanganj", postalCode: "1400", streets: ["B.B. Road, Chashara", "Missionpara Road", "Tanbazar Main Street"] },
    { district: "Narsingdi", postalCode: "1600", streets: ["Station Road, Velanagar", "Madhabdi Bazar Road", "Sadat Ali Road"] },
    { district: "Tangail", postalCode: "1900", streets: ["Victoria Road, Akur Takur Para", "College Road, Bhuapur", "Main Road, Mirzapur"] },
    { district: "Manikganj", postalCode: "1800", streets: ["Khalpar Road, Seota", "Bus Stand Road, Singair", "Court Road"] },
    { district: "Munshiganj", postalCode: "1500", streets: ["Supermarket Road, Sadar", "Mirkadim Municipal Area", "Srinagar Bazar Road"] },
    { district: "Faridpur", postalCode: "7800", streets: ["Mujib Sarak, Goalchamot", "Jhiltuly Main Road", "Bhanga Bus Stand Area"] },
    { district: "Gopalganj", postalCode: "8100", streets: ["Bangabandhu Road, Sadar", "Tungipara Main Road", "Court Mosque Area"] },
    { district: "Madaripur", postalCode: "7900", streets: ["Main Road, Puran Bazar", "Shakuni Lake View Road", "Mustafapur Junction"] },
    { district: "Rajbari", postalCode: "7700", streets: ["Panjuria Road, Sadar", "Goalanda Ghat Road", "Pangsha Station Road"] },
    { district: "Shariatpur", postalCode: "8000", streets: ["Palong Bazar Road", "Naria Thana Road", "Bhedarganj Main Street"] },
    { district: "Kishoreganj", postalCode: "2300", streets: ["Station Road, Gaital", "Kachari Bazar Road", "Bhairab Bazar Area"] }
  ],
  Chattogram: [
    { district: "Chattogram", postalCode: "4000", streets: ["GEC Circle, Nasirabad", "Agrabad C/A, Road 2", "Chawkbazar Main Road", "Khulshi Residential Area", "Halishahar Block B"] },
    { district: "Cox's Bazar", postalCode: "4700", streets: ["Kolatoli Beach Road", "Marine Drive, Laboni Point", "Main Road, Tekpara"] },
    { district: "Cumilla", postalCode: "3500", streets: ["Kandirpar, Badurtala", "Jhawtala Main Road", "Kotbari University Road"] },
    { district: "Feni", postalCode: "3900", streets: ["Trunk Road, Sadar", "Grand Trunk Road, Daganbhuiyan", "SS Academy Road"] },
    { district: "Brahmanbaria", postalCode: "3400", streets: ["Court Road, Medda", "Ashuganj Station Area", "Kasba Bazar Road"] },
    { district: "Noakhali", postalCode: "3800", streets: ["Main Road, Maijdee Court", "Chowmuhani Commercial Area", "Sonaimuri Road"] },
    { district: "Chandpur", postalCode: "3600", streets: ["Haji Mohsin Road, Natun Bazar", "Boro Station Ghat Area", "Puran Bazar Road"] },
    { district: "Lakshmipur", postalCode: "3700", streets: ["Hospital Road, Sadar", "Ramganj Bazar Road", "Raipur Main Sarak"] },
    { district: "Khagrachhari", postalCode: "4400", streets: ["Mahajan Para, Sadar", "Pankhaiya Para Road", "Chengi Square"] },
    { district: "Rangamati", postalCode: "4500", streets: ["Tabalchhari Main Road", "Reserve Bazar Area", "Banarupa Market Road"] },
    { district: "Bandarban", postalCode: "4600", streets: ["VIP Road, Sadar", "Balaghata Road", "Meghla Tourist Spot Road"] }
  ],
  Sylhet: [
    { district: "Sylhet", postalCode: "3100", streets: ["Zindabazar, East Darga Gate", "Upashahar Block C", "Kumarpara Main Road", "Amberkhana Point", "Shahi Eidgah Road"] },
    { district: "Moulvibazar", postalCode: "3200", streets: ["Sreemangal Road, Sadar", "Chourangi Point, Kulaura", "Shamshernagar Road"] },
    { district: "Habiganj", postalCode: "3300", streets: ["Cinema Hall Road, Sadar", "Madhabpur Bus Stand", "Shayestaganj Junction Area"] },
    { district: "Sunamganj", postalCode: "3000", streets: ["Traffic Point, Sadar", "Hason Raja Road", "Chhatak Bazar Road"] }
  ],
  Rajshahi: [
    { district: "Rajshahi", postalCode: "6000", streets: ["Saheb Bazar, Zero Point", "Kazihata Medical Road", "Upashahar Sector 1", "Motihar University Road"] },
    { district: "Bogura", postalCode: "5800", streets: ["Sutrapur, Jaleshwaritola", "Borogola Main Road", "Sherpur Road, Thanthania"] },
    { district: "Pabna", postalCode: "6600", streets: ["Abdul Hamid Road, Sadar", "Ishwardi Station Road", "Rupkatha Cinema Hall Road"] },
    { district: "Sirajganj", postalCode: "6700", streets: ["S.S. Road, Sadar", "Ullapara Bazar Road", "Shahjadpur Rabindra Road"] },
    { district: "Naogaon", postalCode: "6500", streets: ["Chawkdev Residential Area", "Main Road, Bridge Mor", "Patnitala Bazar"] },
    { district: "Natore", postalCode: "6400", streets: ["Kanaikhali Main Road", "Station Road, Sadar", "Dighapatia Palace Road"] },
    { district: "Chapainawabganj", postalCode: "6300", streets: ["Shibtala Road, Sadar", "Puraton Hospital Road", "Rohanpur Bazar"] },
    { district: "Joypurhat", postalCode: "5900", streets: ["Station Road, Sadar", "Panchbibi Bazar", "Bus Stand Road"] }
  ],
  Khulna: [
    { district: "Khulna", postalCode: "9000", streets: ["KDA Avenue, Boyra", "Shibbari Mor, Sonadanga", "Mujgunni Main Road", "Khalishpur Housing Estate"] },
    { district: "Jashore", postalCode: "7400", streets: ["Mujib Sarak, Kotwali", "Chowrasta, Garikhana", "Benapole Port Link Road"] },
    { district: "Kushtia", postalCode: "7000", streets: ["NS Road, Majampur", "Court Para, Sadar", "Lalon Shah Mazar Road"] },
    { district: "Satkhira", postalCode: "9400", streets: ["Palashpole Main Road", "Itagacha Road", "Shyamnagar Bazar Road"] },
    { district: "Bagerhat", postalCode: "9300", streets: ["Shat Gombuj Road", "Pachani Bazar, Sadar", "Mongla Port Commercial Area"] },
    { district: "Jhenaidah", postalCode: "7300", streets: ["H.S.S. Road, Sadar", "Kaliganj Main Bazar", "Court Para"] },
    { district: "Chuadanga", postalCode: "7200", streets: ["Court Road, Sadar", "Alamdanga Railgate Road", "Damurhuda Road"] },
    { district: "Magura", postalCode: "7600", streets: ["Syed Atar Ali Road", "Dhaka Road, Vaina Mor", "Sreepur Bazar"] },
    { district: "Meherpur", postalCode: "7100", streets: ["Hotel Bazar, Sadar", "Mujibnagar Memorial Road", "Gangni Main Road"] },
    { district: "Narail", postalCode: "7500", streets: ["Kurigram Road, Sadar", "Lohagara Bazar Road", "Chowrasta Point"] }
  ],
  Barishal: [
    { district: "Barishal", postalCode: "8200", streets: ["Sadadar Road, Brown Compound", "Band Road, Launch Ghat", "Nattullabad Bus Stand Road", "C&B Road"] },
    { district: "Bhola", postalCode: "8300", streets: ["Banglabazar Road, Sadar", "Kalibari Road", "Char Fasson Main Road"] },
    { district: "Patuakhali", postalCode: "8600", streets: ["Sadar Hospital Road", "Launch Ghat Road", "Kuakata Beach Road"] },
    { district: "Pirojpur", postalCode: "8500", streets: ["Baler Mor, Sadar", "Hularhat Road", "Bhandaria Bazar Area"] },
    { district: "Barguna", postalCode: "8700", streets: ["Barguna Sadar Road", "Amtali Bus Stand", "Patharghata Road"] },
    { district: "Jhalokati", postalCode: "8400", streets: ["Main Road, Sadar", "Rajapur Bazar Road", "Gabkhan Bridge Link Road"] }
  ],
  Rangpur: [
    { district: "Rangpur", postalCode: "5400", streets: ["Dhap, Medical East Gate", "Jahaj Company Mor", "Station Road, Alamnagar", "Radhaballav"] },
    { district: "Dinajpur", postalCode: "5200", streets: ["Nimtola, Goneshtola", "Hospital Mor, Sadar", "Kantajew Temple Road"] },
    { district: "Kurigram", postalCode: "5600", streets: ["Ghoshpara Road, Sadar", "College Mor, Nageshwari", "Chilmari Port Road"] },
    { district: "Gaibandha", postalCode: "5700", streets: ["Circular Road, Sadar", "DBC Road, Gobindaganj", "Palashbari Mor"] },
    { district: "Nilphamari", postalCode: "5300", streets: ["College Road, Sadar", "Saidpur Plaza Road", "Domar Bazar"] },
    { district: "Lalmonirhat", postalCode: "5500", streets: ["Mission Mor, Sadar", "Airport Road", "Patgram Station Road"] },
    { district: "Thakurgaon", postalCode: "5100", streets: ["Old Bus Stand, Sadar", "Kalibari Road", "Pirganj Station Road"] },
    { district: "Panchagarh", postalCode: "5000", streets: ["Tetulia Highway Road", "Dokropara, Sadar", "Boda Bazar Road"] }
  ],
  Mymensingh: [
    { district: "Mymensingh", postalCode: "2200", streets: ["Town Hall Mor, Ganginar Par", "Charpara Medical Road", "Noumahal Road", "Kashor"] },
    { district: "Jamalpur", postalCode: "2000", streets: ["H.No 34/5, Nawapara", "Station Road, Bakultala", "Madarganj Bazar Area", "Melandaha Road"] },
    { district: "Netrokona", postalCode: "2400", streets: ["Choto Bazar, Sadar", "Nagorpur Road", "Mohanganj Railgate"] },
    { district: "Sherpur", postalCode: "2100", streets: ["Narayankhila Road, Sadar", "Raghunath Bazar", "Nakla Main Road"] }
  ]
};

// Flattened list of all 64 districts for convenient round-robin distribution
const ALL_DISTRICTS_FLAT = [];
Object.entries(DIVISIONS_DISTRICTS).forEach(([division, districts]) => {
  districts.forEach(d => {
    ALL_DISTRICTS_FLAT.push({
      division,
      district: d.district,
      postalCode: d.postalCode,
      streets: d.streets
    });
  });
});

// Authentic Bangladeshi male first names (100 names)
const FIRST_NAMES_MALE = [
  "Tanvir", "Rakibul", "Arifur", "Shahriar", "Mehedi", "Fahim", "Naimur", "Mahfuzur", "Sajjad", "Zubair",
  "Imran", "Ashraful", "Tareq", "Nasir", "Kamrul", "Samiur", "Shakil", "Mustafizur", "Al-Amin", "Rezwan",
  "Hasibul", "Farhan", "Riyad", "Jamil", "Anisur", "Hasan", "Sadman", "Rayhan", "Kawsar", "Touhid",
  "Abdullah", "Abir", "Adnan", "Ahnaf", "Asif", "Azhar", "Babul", "Belal", "Delwar", "Emon",
  "Faisal", "Golam", "Habib", "Harun", "Iftekhar", "Jahid", "Kabir", "Latif", "Mahmud", "Mizan",
  "Monir", "Morshed", "Mozammel", "Mushfiq", "Nabil", "Nahid", "Nazmul", "Obaidul", "Omar", "Parvez",
  "Qamrul", "Rashed", "Redwan", "Rifat", "Robiul", "Rubel", "Sababb", "Safwan", "Saidur", "Saif",
  "Sajid", "Sakib", "Salman", "Sarwar", "Saiful", "Shahadat", "Shahed", "Shahin", "Shamim", "Sharier",
  "Sharif", "Shawkat", "Shohag", "Sohel", "Sourav", "Sumon", "Tahmid", "Talha", "Tanmoy", "Tarek",
  "Tawhid", "Tofazzal", "Wahid", "Wasim", "Yeasin", "Zahid", "Zakir", "Ziaur", "Zillur", "Zishan"
];

// Authentic Bangladeshi female first names (100 names)
const FIRST_NAMES_FEMALE = [
  "Sharmin", "Nusrat", "Israt", "Farhana", "Tanzina", "Sadia", "Sabrina", "Rumana", "Sumaiya", "Afsana",
  "Nadia", "Tasnim", "Lamia", "Samira", "Jannatul", "Mahbuba", "Anika", "Naznin", "Suraiya", "Mehnaz",
  "Fatema", "Tamanna", "Tahmina", "Farzana", "Mithila", "Shahnaz", "Munira", "Dilruba", "Sultana", "Habiba",
  "Afia", "Afrin", "Ayesha", "Bilkis", "Bushra", "Chaity", "Dilara", "Fahmida", "Falguni", "Farida",
  "Farin", "Faria", "Fatma", "Firoza", "Humaira", "Ishrat", "Jarin", "Jesmin", "Julekha", "Kaniz",
  "Khadija", "Kohinoor", "Laboni", "Laila", "Lipi", "Lubna", "Mahia", "Maliha", "Marufa", "Masuma",
  "Mayeesha", "Mim", "Moushumi", "Mukta", "Nabilla", "Nahida", "Nargis", "Nasima", "Nasrin", "Nawrin",
  "Nayana", "Nazifa", "Nazma", "Nilufa", "Nipa", "Nishat", "Nowshin", "Parvin", "Rabeya", "Rahima",
  "Raisa", "Rasheda", "Rashida", "Rifat", "Rokeya", "Roksana", "Rubina", "Sabina", "Sabera", "Safia",
  "Sajeda", "Salma", "Samia", "Sanjida", "Sayeda", "Shabnam", "Shahana", "Shamima", "Shanta", "Shirin"
];

// Common Bangladeshi male family and surnames
const LAST_NAMES_MALE = [
  "Ahmed", "Hasan", "Rahman", "Islam", "Hossain", "Chowdhury", "Khan", "Sikder", "Miah", "Bhuiyan",
  "Talukder", "Howlader", "Majumder", "Molla", "Alam", "Siddique", "Karim", "Mahmud", "Bepari", "Gazi",
  "Munshi", "Dewan", "Sarder", "Mondal", "Kazi", "Ali", "Uddin", "Zaman", "Akand", "Sheikh",
  "Barua", "Chakma", "Pradhan", "Hawlader", "Chakraborty", "Bhowmik", "Das", "Dhar", "Paul", "Roy",
  "Saha", "Sen", "Bhattacharya", "Dutta", "Nandi", "Ghosh", "Pal", "Biswas", "Sarker", "Mazumder"
];

// Common Bangladeshi female family and surnames
const LAST_NAMES_FEMALE = [
  "Akter", "Khatun", "Jahan", "Begum", "Sultana", "Parvin", "Nahar", "Banu", "Nesa", "Yasmin",
  "Ferdous", "Khanom", "Chowdhury", "Majumder", "Sikder", "Bhuiyan", "Rahman", "Ahmed", "Hossain", "Islam",
  "Talukder", "Howlader", "Molla", "Alam", "Siddiqua", "Karim", "Roy", "Das", "Saha", "Sen",
  "Dutta", "Ghosh", "Pal", "Biswas", "Sarker", "Paul", "Nandi", "Bhowmik", "Chakraborty", "Dhar",
  "Anjum", "Tabassum", "Afroz", "Haque", "Khanam", "Ara", "Binte", "Habib", "Nargis", "Mazumder"
];

// Backward-compatible alias combining all surnames
const LAST_NAMES = [...LAST_NAMES_MALE, ...LAST_NAMES_FEMALE];

// Curated high-resolution profile avatars for male users (50 avatars)
const AVATARS_MALE = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1584999734482-0361aecad844?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1586083702768-190ab09213a7?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1596075780750-81249df16d19?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1615109398623-88346a601842?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80"
];

// Curated high-resolution profile avatars for female users (50 avatars)
const AVATARS_FEMALE = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1558898479-33c0057a5d12?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1620000617482-821324eb9a14?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1627087820883-7a102b79179a?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1558898479-33c0057a5d12?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1620000617482-821324eb9a14?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1627087820883-7a102b79179a?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80"
];

// Combined alias of all profile avatars
const PROFILE_AVATARS = [...AVATARS_MALE, ...AVATARS_FEMALE];

// Professional event decoration brand identities and biographies
const DECORATOR_BRANDS = [
  { name: "DreamCraft Events & Decors", tagline: "Crafting Royal Weddings & Magical Moments", about: "Premier luxury decoration agency specializing in royal floral wedding stages, vibrant Haldi setups, and corporate gala nights." },
  { name: "Royal Touch Wedding & Events", tagline: "Elegance Redefined for Grand Celebrations", about: "Specialized in luxury destination weddings, grand entrance archways, and traditional cinematic reception stages." },
  { name: "Bloom & Blossom Floral Decors", tagline: "Natural Florals & Bespoke Event Styling", about: "We bring nature's beauty to life with imported fresh flowers, elegant botanical photobooths, and enchanting fairy-light arches." },
  { name: "Shine & Glow Illuminations", tagline: "State-of-the-Art Lighting & FX Production", about: "Transforming venues into visual wonders with synchronized intelligent moving heads, 3D laser mapping, and custom neon marquees." },
  { name: "Grandeur Banquets & Styling", tagline: "Corporate Galas & High-Profile Conclaves", about: "Trusted partner for multinational corporate seminars, annual award nights, product launches, and thematic executive stages." },
  { name: "Celebrate Moments Event Hub", tagline: "Birthday, Baby Shower & Milestone Magic", about: "Whimsical pastel balloon installations, personalized milestone backdrops, candy dessert stations, and themed party styling." },
  { name: "Heritage Aesthetic Creations", tagline: "Authentic Folk, Cultural & Traditional Art", about: "Bringing rich Bengali cultural motifs, intricate terracotta backdrops, hand-painted rickshaw art, and marigold garlands." },
  { name: "Skyline Rooftop & Canopy Decors", tagline: "Chic Open-Air & Intimate Cozy Gatherings", about: "Creating enchanting rooftop canopies with Bohemian macrame swings, warm fairy bulbs, and candlelit cabanas." },
  { name: "Imperial Majestic Weddings", tagline: "Aristocratic Destination Stage Decorators", about: "Crafting royal Mughal architectural arches, velvet drapery, antique crystal chandeliers, and grand bridal pathways." },
  { name: "Urban Elegance Productions", tagline: "Contemporary Minimalist & Modern Styling", about: "Specializing in chic geometric arches, subtle pampas grass installations, matte finish structures, and neon typography." },
  { name: "Radiant Sparkle Studio", tagline: "Vibrant Haldi, Mehendi & Sangeet Stages", about: "Bursting with marigold yellow, lotus backdrops, Rajasthani umbrellas, and colorful dhol photo zones." },
  { name: "Elite Corporate Solutions", tagline: "Professional Staging & Brand Audio-Visuals", about: "Seamless staging, LED video wall backdrops, branded podiums, and VIP lounge furniture for Fortune 500 corporate events." },
  { name: "Starry Night Event Designers", tagline: "Fairytale Starry Ceiling & Crystal Arches", about: "Transforming indoor banquet halls with immersive galaxy ceiling lights, suspended crystal chandeliers, and mirror walkways." },
  { name: "Botanical Wonders Floral Art", tagline: "Sustainable Fresh Organic Plant & Floral Styling", about: "Eco-friendly natural leaf walls, cascading white orchids, eucalyptus garlands, and rustic wooden structures." },
  { name: "Euphoria Birthday Wonderland", tagline: "Imaginative Themed Kids & Adult Parties", about: "From Marvel superhero universes to Disney princess castles, we build 3D life-sized cartoon character installations." },
  { name: "Classic Terracotta Traditions", tagline: "Indigenous Bangladeshi Cultural Heritage Styling", about: "Handcrafted earthen pottery, jute weaves, brass lamps, and lotus ponds for Pohela Boishakh, Gaye Holud, and exhibitions." },
  { name: "Prestige Gala Specialists", tagline: "VIP Diplomatic & Luxury Corporate Summits", about: "Prestigious banquet styling, custom acrylic stage structures, digital entrance tunnels, and sophisticated cocktail lounges." },
  { name: "Illumina FX & Laser Shows", tagline: "Cold Spark Pyros, Dry Ice Smoke & Heavy Fog", about: "Providing safe indoor pyrotechnics, bridal entrance cloud effects, CO2 jet blasters, and synchronized musical laser shows." },
  { name: "Velvet Blossom Studio", tagline: "Romantic Pastel & Vintage English Garden Decors", about: "Dusty rose florals, Victorian gazebos, wrought iron furniture, and lace drapery for romantic engagement parties." },
  { name: "Signature Luxe Ambience", tagline: "Ultra-Premium VIP Weddings & Conclaves", about: "Catering to celebrity weddings, diamond anniversary galas, and high-society gatherings with bespoke imported fixtures." },
  { name: "Golden Glow Occasions", tagline: "Gilded Traditional Wedding Pavilions", about: "Golden filigree panels, royal brocade fabrics, brass urlis with floating candles, and fragrant tuberoses." },
  { name: "Cosmic Beat Party Decors", tagline: "DJ Nights, Youth Fests & College Socials", about: "UV reactive backdrops, glow-in-the-dark neon installations, truss staging, and high-energy party lighting." },
  { name: "Joyful Joy Birthday Co.", tagline: "Milestone Birthdays & Surprise Room Makeovers", about: "Surprise luxury bedroom styling with helium ceiling balloons, floral bed runners, customized marquee LED numbers." },
  { name: "Tranquil Garden Styling", tagline: "Open-Air Lawn & Farmhouse Destination Events", about: "Rustic wooden pergolas, bistro canopy lights, hay-bale seating with tribal throws, and acoustic concert stages." }
];

// Standard core event styling categories and subcategories
const CATEGORIES_DATA = [
  {
    name: "Wedding & Pre-Wedding",
    status: "active",
    order: 1,
    feature: true,
    description: "Grand wedding stages, vibrant Haldi backdrops, floral photo booths, and elegant royal bridal entry setups.",
    subCategories: [
      { id: 1, name: "Wedding & Reception Stage", status: "active", order: 1 },
      { id: 2, name: "Haldi & Mehendi Setup", status: "active", order: 2 },
      { id: 3, name: "Bride & Groom Grand Entry", status: "active", order: 3 },
      { id: 4, name: "Floral Photobooth & Backdrop", status: "active", order: 4 }
    ]
  },
  {
    name: "Corporate & Gala",
    status: "active",
    order: 2,
    feature: true,
    description: "Executive staging, LED screen backdrops, conference branding, award night gala decor, and product launch setups.",
    subCategories: [
      { id: 1, name: "Executive Stage & LED Backdrop", status: "active", order: 1 },
      { id: 2, name: "Annual Gala & Award Night", status: "active", order: 2 },
      { id: 3, name: "Product Launch & Brand Zone", status: "active", order: 3 },
      { id: 4, name: "Conference & Seminar Staging", status: "active", order: 4 }
    ]
  },
  {
    name: "Birthday & Milestone",
    status: "active",
    order: 3,
    feature: true,
    description: "Themed birthday arches, character setups, milestone anniversary numbers, and customized dessert table styling.",
    subCategories: [
      { id: 1, name: "Kids Themed Birthday Arch", status: "active", order: 1 },
      { id: 2, name: "Adult Milestone Celebration", status: "active", order: 2 },
      { id: 3, name: "Dessert & Cake Table Styling", status: "active", order: 3 },
      { id: 4, name: "Baby Shower & Gender Reveal", status: "active", order: 4 }
    ]
  },
  {
    name: "Cultural & Religious",
    status: "active",
    order: 4,
    feature: false,
    description: "Traditional folk motifs, Pohela Boishakh setups, Islamic milestones, Puja pavilions, and traditional handcrafts.",
    subCategories: [
      { id: 1, name: "Pohela Boishakh Folk Setup", status: "active", order: 1 },
      { id: 2, name: "Islamic Milestone & Akika", status: "active", order: 2 },
      { id: 3, name: "Puja Pavilion & Mandap Decor", status: "active", order: 3 },
      { id: 4, name: "Traditional Earthen Art Stage", status: "active", order: 4 }
    ]
  },
  {
    name: "Home & Rooftop Intimate Setups",
    status: "active",
    order: 5,
    feature: true,
    description: "Cozy bohemian canopies, romantic balcony makeovers, rooftop candlelit dining, and intimate family gatherings.",
    subCategories: [
      { id: 1, name: "Rooftop Party Canopy", status: "active", order: 1 },
      { id: 2, name: "Drawing Room & Balcony Decor", status: "active", order: 2 },
      { id: 3, name: "Surprise Room Makeover", status: "active", order: 3 },
      { id: 4, name: "Candlelit Romantic Dinner Setup", status: "active", order: 4 }
    ]
  },
  {
    name: "Lighting, FX & Rentals",
    status: "active",
    order: 6,
    feature: false,
    description: "Special event enhancements including custom neon signs, cold pyros, dry ice clouds, truss lighting, and VIP furniture.",
    subCategories: [
      { id: 1, name: "Custom Neon Signs & Marquee Letters", status: "active", order: 1 },
      { id: 2, name: "Fairy Light Canopy & Chandeliers", status: "active", order: 2 },
      { id: 3, name: "Special Effects (Fog, Smoke & Pyro)", status: "active", order: 3 },
      { id: 4, name: "VIP Lounge & Furniture Rentals", status: "active", order: 4 }
    ]
  }
];

// Curated high-resolution imagery specifically matched to each of the 24 event styling subcategories
const SUBCATEGORY_MEDIA = {
  // Wedding & Pre-Wedding
  "Wedding & Reception Stage": {
    primary: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Haldi & Mehendi Setup": {
    primary: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1545232979-fbf673994344?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Bride & Groom Grand Entry": {
    primary: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Floral Photobooth & Backdrop": {
    primary: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1000"
    ]
  },

  // Corporate & Gala
  "Executive Stage & LED Backdrop": {
    primary: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Annual Gala & Award Night": {
    primary: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Product Launch & Brand Zone": {
    primary: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Conference & Seminar Staging": {
    primary: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000"
    ]
  },

  // Birthday & Milestone
  "Kids Themed Birthday Arch": {
    primary: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Adult Milestone Celebration": {
    primary: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Dessert & Cake Table Styling": {
    primary: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Baby Shower & Gender Reveal": {
    primary: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000"
    ]
  },

  // Cultural & Religious
  "Pohela Boishakh Folk Setup": {
    primary: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1545232979-fbf673994344?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Islamic Milestone & Akika": {
    primary: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Puja Pavilion & Mandap Decor": {
    primary: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Traditional Earthen Art Stage": {
    primary: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1545232979-fbf673994344?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000"
    ]
  },

  // Home & Rooftop Intimate Setups
  "Rooftop Party Canopy": {
    primary: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Drawing Room & Balcony Decor": {
    primary: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Surprise Room Makeover": {
    primary: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Candlelit Romantic Dinner Setup": {
    primary: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1000"
    ]
  },

  // Lighting, FX & Rentals
  "Custom Neon Signs & Marquee Letters": {
    primary: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Fairy Light Canopy & Chandeliers": {
    primary: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "Special Effects (Fog, Smoke & Pyro)": {
    primary: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "VIP Lounge & Furniture Rentals": {
    primary: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000"
    ]
  }
};

// High-quality event imagery fallback
const SERVICE_IMAGES = Object.values(SUBCATEGORY_MEDIA).map((m) => m.primary);

// Authentic customer review feedback testimonials (100 distinct reviews)
const REVIEW_COMMENTS = [
  "Made our wedding reception look straight out of a fairytale! The fresh flower stage backdrop, ambient lighting, and couple seating arrangement were beyond our expectations. Highly recommended!",
  "Exceptional service! The Haldi stage was bursting with vibrant marigolds and lovely traditional props. Our family loved taking photos in the photo booth.",
  "Super professional team! They arrived right on time, completed the executive stage setup 2 hours before our corporate gala, and the LED screen backdrop looked crisp.",
  "The rooftop canopy was breathtaking. The fairy lights, bohemian cushions, and floral arch made our anniversary unforgettable!",
  "Great execution and friendly field agents. Handled our last-minute venue changes gracefully and delivered a stunning stage.",
  "The cold spark pyros and heavy smoke during the bridal entry gave everyone goosebumps! Outstanding production quality.",
  "Flawless stage decor and very cooperative staff. The flowers remained fresh throughout the 7-hour reception.",
  "Loved the custom neon sign and pastel balloon arch for my daughter's first birthday. Super clean finishing.",
  "Unbelievable attention to detail on the wedding reception stage! Every guest was taking selfies in front of the floral arch.",
  "The traditional Pohela Boishakh stage setup with clay pottery and marigold torans created such an authentic festive atmosphere.",
  "Corporate product launch stage was executed with military precision. The backdrop framing and audio-visuals were seamless.",
  "From initial booking to final teardown, the decorator and agent team were polite, communicative, and very punctual.",
  "Our Mehendi ceremony looked vibrant and lively with colorful Rajasthani umbrellas and floor cushions. Outstanding work!",
  "The fairy light canopy transformed our open-air garden into a glowing wonderland. Worth every single penny.",
  "Surprise room makeover for my husband's milestone birthday was executed flawlessly while we were away. He was truly amazed!",
  "Top-tier floral arrangement! Real imported roses and orchids were used throughout the royal throne background.",
  "The dry ice cloud effect during our couple first dance was pure cinematic magic. All our wedding videos look breathtaking.",
  "Booked for our company's annual award gala in Chittagong. The stage lighting and VIP lounge seating exceeded executive expectations.",
  "The pastel organic balloon arch for our baby shower was so aesthetically pleasing and durable. Stayed intact for 2 full days.",
  "Extremely courteous agent who supervised the venue setup from start to finish without needing any intervention from us.",
  "Very reliable decoration service in Sylhet. Delivered exactly what was shown in the catalog previews without compromises.",
  "The dessert table backdrop and gold marquee letter rentals added such an upscale vibe to our engagement party.",
  "Acoustic ambiance and warm Edison bulbs made our intimate rooftop dinner date super romantic. Highly recommend this package.",
  "Grand bridal pathway runner with illuminated crystal pedestals made the bride's entry look like a royal procession.",
  "Terracotta art and jute fabric backdrops for our cultural club anniversary drew high praise from all visiting dignitaries.",
  "The LED screen stage backdrop was bright and sharp. The sound wiring was discreetly hidden without cluttering the hall.",
  "Loved the intricate floral stage craftsmanship. The color palette perfectly complemented our wedding outfits.",
  "Fast on-site assembly and hassle-free post-event cleanup. The decorator team left the community hall spotless.",
  "Our daughter loved her Disney princess themed birthday stage. The 3D castle cutouts and balloon towers were fantastic.",
  "Very accommodating team when we requested extra spotlighting on the stage 2 hours before the event began.",
  "The custom neon name sign looked ultra-modern and is now hanging in our drawing room as a permanent keepsake!",
  "The Haldi photo booth with traditional rickshaw art was the biggest attraction of our event. Super creative!",
  "Everything from structural stability to floral freshness was top tier. Will definitely book again for future family events.",
  "Impressive execution of an indoor corporate conference stage at Radisson Blu. Professional and hassle-free experience.",
  "The fairy light ceiling with suspended chandeliers made our banquet hall feel twice as large and luxurious.",
  "Cake table styling with pastel drapery and warm fairy lights made our anniversary pictures look straight out of Pinterest.",
  "Smooth coordination between the decorator and field agent. They kept us updated with WhatsApp photos during the setup.",
  "Stunning Haldi swing backdrop with marigolds and jasmine garlands. The fragrance and visual appeal were incredible.",
  "The heavy fog machine and cold pyros during our stage entry worked safely and created spectacular photo moments.",
  "Very transparent pricing with no hidden charges at venue teardown. Highly respect their professional business ethics.",
  "The drawing room makeover for our Eid family dinner was cozy and elegant. The floral centerpieces were gorgeous.",
  "Our executive seminar staging looked sleek and international. The branded acrylic podium was a great touch.",
  "A fairytale setup in Rajshahi! The decorator fulfilled all custom requests with genuine enthusiasm.",
  "Superb flower quality! Even in hot weather, the stage roses and lilies remained fresh and crisp until midnight.",
  "The Bohemian macrame rooftop canopy with fairy lighting was the highlight of our intimate batch reunion.",
  "Delivered on extremely short notice of 3 days and executed a flawless engagement stage. Lifesavers!",
  "The VIP velvet lounge sofas and gold cocktail tables gave our corporate VIP lounge an ultra-premium look.",
  "High attention to safety during truss lighting installation. The electrical wiring was properly insulated and taped.",
  "The Akika stage decoration was elegant, peaceful, and beautifully designed with soft white florals and Islamic arches.",
  "Outstanding customer support on StyleDecor platform. The assigned agent arrived 4 hours before the event started.",
  "Such vibrant color harmony! The yellow and orange marigold backdrop for Mehendi night was dazzling in every photo.",
  "The geometric wedding arch with imported pampas grass and white roses gave our stage a modern chic aesthetic.",
  "Seamless execution for our wedding reception in Khulna. Every single guest complimented the royal throne setup.",
  "The cold firework fountains during the cake-cutting were completely smokeless and safe indoors. Huge hit with the crowd!",
  "Great value for money. The packages include everything from structural framing to post-event teardown.",
  "Loved the personalized marquee numbers and helium balloon cluster for my son's 18th birthday celebration.",
  "Professional audio-visual and stage lighting production. Handled a crowd of 600 attendees with total confidence.",
  "The botanical plant wall and cascading greenery made our indoor photo booth look lush, organic, and inviting.",
  "Prompt response from the decorator whenever we had questions during planning. Felt completely reassured.",
  "The wedding reception stage framing was sturdy and the floral density was much higher than typical market decorators.",
  "The baby shower floral arch in pastel pink and gold was breathtaking. My sister was overjoyed with the surprise.",
  "Very neat cable management on stage. The spotlighting focused perfectly on the couple seating without blinding the audience.",
  "Traditional brass lamps and floating lotus urlis added such a serene and sacred ambience to our Puja pavilion.",
  "The surprise anniversary bedroom makeover was tasteful, romantic, and beautifully arranged with rose petals and fairy bulbs.",
  "High standard of professionalism. They complied with all venue safety regulations and finished setup ahead of schedule.",
  "The bride entry floral chadar was lightweight, gorgeous, and made the entrance walking moment unforgettable.",
  "Our corporate gala night looked like an international award ceremony thanks to the dynamic moving head stage lights.",
  "Loved the attention given to floral details. The combination of imported carnations and fresh lilies was stunning.",
  "The field agent was constantly on site to ensure spotlight angles and stage cleanliness remained perfect throughout the night.",
  "Rooftop canopy with Bohemian cushions and acoustic stage created the coziest party atmosphere we could have asked for.",
  "Every piece of furniture rented was in pristine, clean condition. The velvet upholstery was spotless.",
  "The Haldi backdrop with custom earthen pots and marigold hangings was a masterclass in traditional Bengali craftsmanship.",
  "Stress-free experience from the moment we placed the booking. The decorator handled all logistics with the venue authority.",
  "The stage looked even more magnificent in person than in the 3D preview render. Exceptional talent!",
  "Our product launch backdrop with recessed LED strip lights made our brand presentation look world-class.",
  "The bridal pathway with Roman pillars and floral urns created a truly majestic grand entrance.",
  "Very cooperative crew who patiently waited until our post-event family photos were done before beginning teardown.",
  "The dessert table with tiered acrylic stands and fresh floral accents made the cake cutting ceremony memorable.",
  "Warm, inviting lighting design that made every guest look photogenic without harsh shadows.",
  "Super clean finish on the custom neon sign. We received compliments from almost everyone who attended.",
  "The flower wall backdrop was completely covered in real roses with zero gaps. The quality was truly premium.",
  "Handled our large wedding in Barishal with remarkable poise and dedication. Highly recommended decoration team.",
  "The surprise romantic balcony dinner setup with fairy jar lights and customized menu stand was utterly magical.",
  "The conference branding banners and executive podium were printed in high resolution without color banding.",
  "The stage royal throne chairs were comfortable, luxurious, and looked stunning against the velvet backdrop drapery.",
  "The Haldi photo props and colorful sunglasses station kept all our young guests thoroughly entertained.",
  "Outstanding coordination between the platform and field team. Received prompt receipts and booking timeline alerts.",
  "The dry ice low-lying fog covered the entire ballroom floor like a real cloud. Magical first dance moment!",
  "The Pohela Boishakh stage with painted clay plates and traditional handloom fabric was deeply appreciated by all attendees.",
  "The kids superhero birthday stage was built with sturdy 3D panels that survived dozens of excited children running around.",
  "The cold spark machines triggered right on cue as the newlyweds entered the hall. Flawless timing!",
  "The fairy light ceiling canopy in Rangpur city convention centre made our winter wedding look like a starry night.",
  "The drawing room floral makeover lasted 3 days and kept our house smelling wonderful throughout the holiday weekend.",
  "Excellent customer service when we requested a slight adjustment to the package inclusions 5 days before the event.",
  "The executive gala stage lighting synchronized beautifully with our corporate intro video. Top-tier engineering.",
  "The pastel floral arch and personalized wooden nameplate made our engagement photobooth the star of the night.",
  "Very neat work with zero tape residue or damage to the venue walls. The venue manager was very impressed.",
  "The Haldi swing decor was comfortable, sturdy, and richly covered in fresh flowers. Outstanding craftsmanship!",
  "From booking confirmation to on-site delivery, the entire experience was transparent, high quality, and stress-free.",
  "The absolute best event decoration agency we have ever worked with in Bangladesh. Will recommend to all our friends and family!"
];

module.exports = {
  DIVISIONS_DISTRICTS,
  ALL_DISTRICTS_FLAT,
  FIRST_NAMES_MALE,
  FIRST_NAMES_FEMALE,
  LAST_NAMES_MALE,
  LAST_NAMES_FEMALE,
  LAST_NAMES,
  AVATARS_MALE,
  AVATARS_FEMALE,
  PROFILE_AVATARS,
  DECORATOR_BRANDS,
  CATEGORIES_DATA,
  SUBCATEGORY_MEDIA,
  SERVICE_IMAGES,
  REVIEW_COMMENTS
};

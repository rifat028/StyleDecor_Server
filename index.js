require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const admin = require("firebase-admin");

// var serviceAccount = require("./styledecor-firebase-adminsdk.json");
const decoded = Buffer.from(process.env.FB_SERVICE_KEY, "base64").toString(
  "utf8"
);
const serviceAccount = JSON.parse(decoded);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// =========================== middlewares ==================
app.use(cors());
app.use(express.json());

const verifyFbToken = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.status(401).send({ message: "Unauthorized Access..!" });
  }
  try {
    const idToken = token.split(" ")[1];
    const decoded = await admin.auth().verifyIdToken(idToken);
    console.log("decoded in the token", decoded);
    req.decoded_email = decoded.email;
    next();
  } catch (err) {
    return res.status(401).send({ message: "unauthorized access...!" });
  }
};

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@module54.p4tcocf.mongodb.net/?appName=Module54`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("StyleDecor Is Running..!");
});

//APIs
async function run() {
  try {
    // await client.connect();

    const database = client.db("StyleDecorDB");
    const serviceCollection = database.collection("services");
    const bookingCollection = database.collection("bookings");
    const userCollection = database.collection("users");

    //================================ service APIs ==================================
    //create service
    app.post("/services", async (req, res) => {
      const newService = req.body;
      const result = await serviceCollection.insertOne(newService);
      res.send(result);
    });

    //Get latest 8 services
    app.get("/services/latest", async (req, res) => {
      const cursor = serviceCollection.find({}).sort({ _id: -1 }).limit(8);
      const result = await cursor.toArray();
      res.send(result);
    });

    //Get all services
    app.get("/services", async (req, res) => {
      //   console.log(req.query);

      const { search_text, category, min_cost, max_cost } = req.query;
      let query = {};
      let sort = {};
      console.log("the search text is", search_text);
      if (search_text) {
        query = {
          serviceName: { $regex: search_text, $options: "i" },
        };
        // console.log("search Query is ", query);
      }
      if (req.query) {
        if (category && category != "all") query.serviceCategory = category;
        if (min_cost || max_cost) {
          query.cost = {};
        }
        if (min_cost) query.cost.$gte = Number(min_cost);
        if (max_cost) query.cost.$lte = Number(max_cost);
        // console.log("filter Query is ", query);
        sort = { cost: 1 };
      }
      //   console.log("final Query", query);
      //   if()
      const cursor = serviceCollection.find(query).sort(sort);
      const result = await cursor.toArray();
      res.send(result);
    });

    // get a single service
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await serviceCollection.findOne(query);
      res.send(result);
    });

    //================================ Users APIs ==================================
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      newUser.role = "client";
      const email = newUser.email;
      const userExists = await userCollection.findOne({ email });
      if (userExists) {
        return res.send({ message: "user exists" });
      }
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    // get a single user
    app.get("/users/:email", verifyFbToken, async (req, res) => {
      const email = req.params.email;
      //   console.log(email);
      if (email !== req.decoded_email) {
        return res.status(403).send({ message: "forbidden access...!" });
      }
      const result = await userCollection.findOne({ email });
      res.send(result);
    });

    //================================ Booking APIs ==================================
    // Create a service booking
    app.post("/bookings", verifyFbToken, async (req, res) => {
      const newBooking = req.body;
      //   console.log("in Booking", req.headers);
      if (newBooking.clientEmail !== req.decoded_email) {
        return res.status(403).send({ message: "forbidden access...!" });
      }
      const result = await bookingCollection.insertOne(newBooking);
      res.send(result);
    });

    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run();

app.listen(port, () => {
  console.log(`StyleDecor listening on port ${port}`);
});

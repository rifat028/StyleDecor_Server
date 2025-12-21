require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
var cors = require("cors");

// middlewares
app.use(cors());
app.use(express.json());

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

async function run() {
  try {
    await client.connect();

    const database = client.db("StyleDecorDB");
    const serviceCollection = database.collection("services");

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
      const cursor = serviceCollection.find({});
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

    // get all services

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

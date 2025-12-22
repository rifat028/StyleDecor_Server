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

//APIs
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
      console.log(req.query);

      const { search_text, category, min_cost, max_cost } = req.query;
      let query = {};
      let sort = {};
      console.log("the search text is", search_text);
      if (search_text) {
        query = {
          serviceName: { $regex: search_text, $options: "i" },
        };
        console.log("search Query is ", query);
      }
      if (req.query) {
        if (category && category != "all") query.serviceCategory = category;
        if (min_cost || max_cost) {
          query.cost = {};
        }
        if (min_cost) query.cost.$gte = Number(min_cost);
        if (max_cost) query.cost.$lte = Number(max_cost);
        console.log("filter Query is ", query);
        sort = { cost: 1 };
      }
      console.log("final Query", query);
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

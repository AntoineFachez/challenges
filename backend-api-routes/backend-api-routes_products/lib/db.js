import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://anthonyzornig:Bkegswx8t1aXtV3f@neuefischesumac.vj06r.mongodb.net/?retryWrites=true&w=majority&appName=neueFischeSumAc";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let _db; // Store the database connection

// Function to connect to the database
export async function connectToDatabase() {
  if (!_db) {
    // Connect only if not already connected
    try {
      await client.connect();
      _db = client.db("neuefischesumac"); // Replace with your actual database name
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error; // Re-throw the error to handle it in calling code
    }
  }
  return _db;
}
// connectToDatabase();

export default async function getListOfCollections(req, res) {
  if (req.method === "GET") {
    try {
      const db = await connectToDatabase();

      const collections = await db.listCollections().toArray();
      const collectionNames = collections.map((collection) => collection.name);
      console.log(collectionNames);

      res.status(200).json(collectionNames);
    } catch (error) {
      console.error("Error fetching collection names:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

// Export the function to be used in other parts of your application

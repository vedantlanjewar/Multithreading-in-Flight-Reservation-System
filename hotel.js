const { parentPort } = require("worker_threads");
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://vsl5052:GlBWTTo89acUYFGP@cluster0.dk0h0sf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
    try {
      await client.connect();
      const db = client.db('hotel');
      const collection = db.collection('hotels');
      
      // Find the first document in the collection
      const first = await collection.findOne();
      console.log("1",first);
      console.log("1",first);
      console.log("1",first);
      console.log("1",first);
      console.log("1",first);
      console.log("1",first);
      console.log("1",first);
      console.log("1",first);
      console.log("1",first);
      
    } finally {
      // Close the database connection when finished or an error occurs
      await client.close();
      
    }
  }
  run().catch(console.error);
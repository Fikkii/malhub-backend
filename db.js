
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://ajalafikayo:thisisthepassword@ac-wem52n6-shard-00-00.yqoab3x.mongodb.net:27017,ac-wem52n6-shard-00-01.yqoab3x.mongodb.net:27017,ac-wem52n6-shard-00-02.yqoab3x.mongodb.net:27017/?ssl=true&replicaSet=atlas-pezkmn-shard-0&authSource=admin&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports = { client };
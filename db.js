const mongoose = require("mongoose");

const uri = "mongodb://ajalafikayo:thisisthepassword@ac-wem52n6-shard-00-00.yqoab3x.mongodb.net:27017,ac-wem52n6-shard-00-01.yqoab3x.mongodb.net:27017,ac-wem52n6-shard-00-02.yqoab3x.mongodb.net:27017/?ssl=true&replicaSet=atlas-pezkmn-shard-0&authSource=admin&appName=Cluster0";

mongoose.connect(uri, {
  dbName: "Treasure",
}).then(() => {
  console.log("Database Connected Successfully...")
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});
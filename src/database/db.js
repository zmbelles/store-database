const mongoose = require("mongoose");
require("dotenv/config");
const MONGODB_URI = `mongodb+srv://zmbelles:${process.env.MONGODB_URI}@basecluster.gwsuuxl.mongodb.net/`;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB");
    return;
  }

  mongoose.connect(MONGODB_URI).then((connection) => connection);
  console.log("Connected to MongoDB");
}

module.exports = connectDB;

const mongoose = require('mongoose');

async function connectMongo() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/iot_system");
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB error:", err);
  }
}

module.exports = connectMongo;

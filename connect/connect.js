const mongoose = require("mongoose");
const colors = require('colors')
require("dotenv").config();
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.URL).then(() => {
      console.log("Database Connected" . bgYellow.black.bold);
    });
  } catch (error) {
    console.log(`${error}`.bgMagenta.white); 
  }
};
module.exports = { connectDatabase };
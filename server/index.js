const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

//creating the express app
const app = express();

//routing midlewars
app.get("/", (req, res) => {
  res.send("Hello ermi");
});

//Connecting to mongoose db
const connect = async () => {
  try {
    await mongoose.connect(process.env.MongoDb);
    console.log("Database Connected.");
  } catch (error) {
    throw error;
  }
};

//Creating the server
const Port = process.env.PORT;
app.listen(Port || 5000, () => {
  connect();
  console.log(`app is started at ${Port}`);
});

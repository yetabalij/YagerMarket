const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
dotenv.config();

//route imports
const productRoute = require("./routes/product");

//creating the express app
const app = express();

//middelwares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors({ origin: true, credentials: true }));
app.use(morgan("dev"));

//routing midlewars
app.use("/api/product", productRoute);

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

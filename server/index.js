const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

//creating the express app
const app = express();

//routing midlewars
app.get("/", (req, res) => {
  res.send("Hello ermi");
});

//Creating the server
const Port = process.env.PORT;
app.listen(Port || 5000, () => {
  console.log(`app is started at ${Port}`);
});

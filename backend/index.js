const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000; // define port number

app.use(cors());
app.use(bodyParser.json());

//
app.get("/", (req, res) => {
  res.json("hello");
});

connectDb();

// app listen
app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});

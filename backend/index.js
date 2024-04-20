const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const authRoute = require("./routes/authRoute");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000; // define port number

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoute);

connectDb();

// app listen
app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});

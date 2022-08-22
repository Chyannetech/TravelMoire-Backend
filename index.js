// require dependencies
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
require("dotenv").config();

// require routes
const authRoutes = require("./routes/auth");
const { db } = require("./models/User");


// pull PORT from .env to run on port 8000.
const { PORT = 8000 } = process.env || 8000;

//database connection
connectDB();

// mount middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // this recreates req.body from JSON when express is not serving HTML
app.use(express.urlencoded({ extended: false }));


//routes middleware
app.use("/api", authRoutes);

// router routes
app.use("http://localhost:8000/api/signin", authRoutes)
app.use("http://localhost:8000/api/signup", authRoutes)
app.use("/travelmoire/entry", require("./routes/entries"))




// express listener
app.listen(PORT, () => console.log(`Express is listening on:, port ${PORT}`));

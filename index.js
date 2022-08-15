const mongoose = require("mongoose")
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require("./config/db")
require('dotenv').config();

//import routes
const authRoutes = require('./routes/auth');
const { User } = require('./models/User')

//app
const app = express();

const { PORT = 8000} = process.env || 8000;

//database connection
connectDB()


//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

//routes middleware
app.use('/api', authRoutes);

// Express Listener
app.listen( PORT, () => console.log(`Express is listening on:, port ${PORT}`));




require('dotenv').config();

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const connectDB = require("./config/db")
const app = express();

const { PORT = 8000} = process.env || 8000;

//database connection
connectDB()

//middlewares
app.use(cors());
app.use(bodyParser.json());


// Express Listener
app.listen( PORT, () => console.log(`Express is listening on:, port ${PORT}`));




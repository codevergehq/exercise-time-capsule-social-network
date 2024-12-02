// app.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./database/db');



const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();


module.exports = app;
const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const dataRoutes = require('../routes/dataroutes');
const { connectDB } = require('../db');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', dataRoutes);

let isDbConnected = false;

const handler = async (req, res) => {
  if (!isDbConnected) {
    await connectDB();
    isDbConnected = true;
  }
  return serverless(app)(req, res);
};

module.exports = handler;

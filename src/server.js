const express = require("express");

const connectDB = require("./init/db");
const allRoutes = require("./init/allRoutes");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 6000;

connectDB();
allRoutes(app); //initiate routes


app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
  });
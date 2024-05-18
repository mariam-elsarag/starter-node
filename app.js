const express = require("express");
const core = require("cors");

const app = express();

app.use(express.json());
app.use(core());
module.exports = app;

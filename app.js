const express = require("express");
const core = require("cors");

const httpStatusText = require("./utils/httpStatusText");
const globalErrorHandler = require("./controller/errorController");
const app = express();

app.use(express.json());
app.use(core());

// handle route error
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: httpStatusText.FAIL,
    message: `can't find ${req.originalUrl} on this server`,
  });
});
// handle global error
app.use(globalErrorHandler);
module.exports = app;

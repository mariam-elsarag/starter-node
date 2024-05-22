const httpStatusText = require("../utils/httpStatusText");

module.exports = (err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({
      status: err.status || httpStatusText.ERROR,
      data: null,
      message: err.message,
    });
  next();
};

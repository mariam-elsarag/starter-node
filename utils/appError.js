const httpStatusText = require("../utils/httpStatusText");

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${
      statusCode.startWith("4") ? httpStatusText.FAIL : httpStatusText.ERROR
    }`;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = new AppError();

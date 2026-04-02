const errorHandler = (err, req, res, next) => {
  console.error(err);

  let statusCode = 500;
  let message = err.message || "Server Error";

  // Custom errors
  if (err.name === "ValidationError") {
    statusCode = 400;
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = errorHandler;

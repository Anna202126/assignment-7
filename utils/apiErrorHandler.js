const AppError = require("./error");

function apiErrorHandler(err, _req, res, _next) {
  if (err instanceof AppError) {
    res.status(err.status).json({ message: err.message });
    return;
  }

  if (process.env.NODE_ENV === "development") {
    res.status(500).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Something went wrong" });
  }
}

module.exports = apiErrorHandler;

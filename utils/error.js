class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }

  static badRequest(msg) {
    return new AppError(msg, 400);
  }

  static notFound(msg) {
    return new AppError(msg, 404);
  }

  static forbidden(msg) {
    return new AppError(msg, 403);
  }

  static unauthorized() {
    return new AppError("Unauthorized", 401);
  }

  static internalServerError(msg) {
    return new AppError(msg, 500);
  }
}

module.exports = AppError;

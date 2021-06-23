const jwt = require("jsonwebtoken");

const User = require("../models/User");
const AppError = require("../utils/error");
const { registerValidator, loginValidator } = require("../utils/validators");

class AuthController {
  static async register(req, res, next) {
    await registerValidator.validate(req.body);
    const { username, email } = req.body;

    // checking if username is available
    let user = await User.findOne({ username });
    if (user) {
      return next(AppError.badRequest("Username already taken."));
    }

    // checking if email is not in use
    user = await User.findOne({ email });
    if (user) {
      return next(AppError.badRequest("Email already in use."));
    }

    user = await User.create(req.body);
    res.status(201).json({ user });
  }

  static async login(req, res, next) {
    await loginValidator.validate(req.body);
    const { usernameOrEmail, password } = req.body;

    let user = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });

    if (!user) {
      return next(AppError.badRequest("Invalid Credentials"));
    }

    const isMatch = await user.comparePasswords(password);
    if (!isMatch) {
      return next(AppError.badRequest("Invalid Credentials"));
    }

    const token = user.generateToken();
    user = user.toObject();
    delete user.password;
    res.status(200).json({ user, token });
  }

  static async verifyToken(req, _res, next) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return next(AppError.unauthorized("Unauthorized"));
    }
    let token = authHeader.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        const message =
          err.name === "JsonWebTokenError"
            ? "Something went wrong"
            : err.message;
        return next(AppError.internalServerError(message));
      }
      req.userId = payload.userId;
    });
    next();
  }
}

module.exports = AuthController;

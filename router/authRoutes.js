const router = require("express").Router();
const AuthController = require("../controllers/authController");
const { asyncErrorHandler } = require("../utils");

router.post("/login", asyncErrorHandler(AuthController.login));
router.post("/register", asyncErrorHandler(AuthController.register));

module.exports = router;

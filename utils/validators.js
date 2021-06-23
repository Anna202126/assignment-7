const Yup = require("yup");

exports.registerValidator = Yup.object({
  username: Yup.string().required(),
  email: Yup.string().email("Invalid email").required(),
  password: Yup.string().required(),
});

exports.loginValidator = Yup.object({
  usernameOrEmail: Yup.string().required(),
  password: Yup.string().required(),
});

exports.todosValidator = Yup.object({
  text: Yup.string().required(),
});

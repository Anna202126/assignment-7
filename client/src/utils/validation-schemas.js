import * as Yup from "yup";

export const loginSchema = Yup.object({
  usernameOrEmail: Yup.string().required("Plese enter your Username or Email"),
  password: Yup.string().required("Password is a required field."),
});

export const registerSchema = Yup.object({
  username: Yup.string().required("Username is required."),
  email: Yup.string().email("Invalid email.").required("Email cannot be empty"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

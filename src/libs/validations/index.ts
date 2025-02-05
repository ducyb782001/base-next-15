import * as Yup from "yup";

export const SignUpValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter an email address")
    .max(50, "Email should not exceed 50 characters"),
  password: Yup.string()
    .required("Please enter a password")
    .min(5, "Password should be at least 5 characters"),
  confirmPassword: Yup.string()
    .required("Please enter a confirm password")
    .min(5, "Password should be at least 5 characters"),
});

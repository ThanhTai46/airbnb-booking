import * as yup from "yup";

export const signupSchema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().min(6).max(20).required(),
});

export const signInSchema = signupSchema.omit(["name"]);

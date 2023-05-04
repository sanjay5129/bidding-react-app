import * as Yup from "yup";

export const signUpSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), undefined],
    "Passwords must match"
  ),
});
export const loginSchema = Yup.object({
  username: Yup.string().email().required(),
  password: Yup.string().required("Password is required"),
});
export const bidItemSchema = Yup.object({
  name: Yup.string().required("Name should be String"),
  start_price: Yup.number().required("Price should be number"),
  time_window: Yup.number().required("Time should be number"),
});
export const depositSchema = Yup.object({
  amout: Yup.number().required("Time should be number"),
});
export const bidPriceSchema = Yup.object({
  start_price: Yup.number().required("Time should be number"),
});

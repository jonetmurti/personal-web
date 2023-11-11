import * as Yup from "yup";
import validator from "validator";

export const contactSchema = Yup.object({
  name: Yup.string()
    .trim("Delete leading and trailing spaces")
    .strict(true)
    .required("Required"),
  email: Yup.string()
    .trim("Delete leading and trailing spaces")
    .test("custom-email", "Invalid email address", (value) =>
      validator.isEmail(value),
    )
    .required("Required"),
  message: Yup.string()
    .trim("Delete leading and trailing spaces")
    .strict(true)
    .required("Required"),
});

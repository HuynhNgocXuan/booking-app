import Joi from "joi";

const PASSWORD_REGEX = new RegExp(
  "^(?=.*[0-9])(?=.*[!.@#$%^&*])(?=.{6,})"
);

const authRegister = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(PASSWORD_REGEX).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Passwords do not match",
  }),
});

export default {
  "/register": authRegister,
};

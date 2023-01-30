import Joi from "joi";
import { passwordRegex, emailRegex } from "../../constants/constants";
const schema = Joi.object({
  firstName: Joi.string().required().min(2).messages({
    "string.base": `"First Name" should be a type of 'text'`,
    "string.empty": `"First Name" cannot be an empty`,
    "any.required": `"First Name" is required `,
    "any.min": `"First Name" must be more then {#limit}`,
  }),
  lastName: Joi.string().required().messages({
    "string.base": `"Last Name" should be a type of 'text'`,
    "string.empty": `"Last Name" cannot be an empty`,
    "any.required": `"Last Name" is required `,
  }),
  email: Joi.string().pattern(RegExp(emailRegex)).required().messages({
    "string.base": `"email" should be a type of 'email'`,
    "string.empty": `"email" cannot be an empty`,
    "any.required": `"email" is a required field`,
    "string.pattern.base": `Email must be a valid field`,
  }),
  password: Joi.string()
    .pattern(RegExp(passwordRegex))
    .min(6)
    .max(20)
    .required()
    .messages({
      "string.base": `"password" should be a type of 'password'`,
      "string.empty": `"password" cannot be an empty`,
      "any.required": `"password" is required `,
      "any.min": `"password" must be more then {#limit}`,
      "any.max": `"password" must be more then {#limit}`,
      "string.pattern.base": `password must have 6-20 characaters and must contain at least 1 upper case, 1 lowercase and 1 numeric, between 6 and 20 characters`,
    }),
  passwordConfirmation: Joi.string()
    .min(6)
    .max(20)
    .required()
    .equal(Joi.ref("password"))
    .regex(RegExp(passwordRegex))
    .messages({
      "string.base": `"password" should be a type of 'text'`,
      "string.empty": `"password" cannot be an empty`,
      "any.required": `"password" is required `,
      "any.min": `"password" must be more then {#limit}`,
      "any.max": `"password" must be more then {#limit}`,
      "any.only": "confirm password does not match the password field",
    }),
  role: Joi.string().required().messages({
    "string.base": `"role" should be a type of 'text'`,
    "string.empty": `Please select a Role, this field is required`,
  }),
});

export default schema;

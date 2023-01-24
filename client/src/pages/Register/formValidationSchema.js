import Joi from "joi";

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
  email: Joi.string().required().messages({
    "string.base": `"email" should be a type of 'email'`,
    "string.empty": `"email" cannot be an empty`,
    "any.required": `"email" is a required field`,
  }),
  password: Joi.string().min(6).max(20).required().messages({
    "string.base": `"password" should be a type of 'password'`,
    "string.empty": `"password" cannot be an empty`,
    "any.required": `"password" is required `,
    "any.min": `"password" must be more then {#limit}`,
    "any.max": `"password" must be more then {#limit}`,
  }),
  passwordConfirmation: Joi.string().min(6).max(20).required().messages({
    "string.base": `"Last Name" should be a type of 'text'`,
    "string.empty": `"Last Name" cannot be an empty`,
    "any.required": `"Last Name" is required `,
    "any.min": `"password" must be more then {#limit}`,
    "any.max": `"password" must be more then {#limit}`,
  }),
  role: Joi.string().required().messages({
    "string.base": `"role" should be a type of 'text'`,
    "string.empty": `"role" cannot be an empty`,
    "any.required": `"role" is required `,
  }),
});

export default schema;

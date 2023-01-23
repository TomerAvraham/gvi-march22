import Joi from "joi";

const schema = Joi.object({
  firstName: Joi.string().required().min(2).messages({
    "string.base": `"First Name" should be a type of 'text'`,
    "string.empty": `"First Name" cannot be an empty`,
    "any.required": `"First Name" is a required field`,
    "any.min": `"First Name" must be more then {#limit}`,
  }),
  lastName: Joi.string().required().messages({
    "string.base": `"Last Name" should be a type of 'text'`,
    "string.empty": `"Last Name" cannot be an empty`,
    "any.required": `"Last Name" is a required field`,
  }),
});

export default schema;

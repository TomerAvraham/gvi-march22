const {
  loginRequestSchema,
  registerRequestSchema,
} = require("../validators/schema/authRequests.schema");
const requestValidator = require("../validators/request.validator");

exports.loginValidation = async (requestBody, nextFunction) => {
  await requestValidator(loginRequestSchema, requestBody, nextFunction);
};

exports.registerValidation = async (requestBody, nextFunction) => {
  await requestValidator(registerRequestSchema, requestBody, nextFunction);
};

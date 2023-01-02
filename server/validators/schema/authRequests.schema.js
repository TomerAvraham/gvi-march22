const yup = require("yup");
const { passwordRegex } = require("../password.validator");

const loginRequestSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().matches(passwordRegex),
});

module.exports = { loginRequestSchema };

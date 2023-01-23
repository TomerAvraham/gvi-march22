const yup = require("yup");
const { passwordRegex } = require("../../constants/regex.constants");
const { USER_ROLE } = require("../../constants/user.constants");

const loginRequestSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().matches(passwordRegex),
});

const registerRequestSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().matches(passwordRegex),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  role: yup.mixed().oneOf(Object.values(USER_ROLE)),
  lastName: yup.string().required(),
  firstName: yup.string().required(),
});

module.exports = { loginRequestSchema, registerRequestSchema };

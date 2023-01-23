const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const { USER_ROLE, EXPERTISE } = require("../constants/user.constants");
const { emailRegex } = require("../constants/regex.constants");

const Startup = new Schema({
  name: String,
});
const Consulting = new Schema({
  name: String,
});

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exist."],
    required: true,
    match: [emailRegex],
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    enum: Object.values(USER_ROLE),
    default: USER_ROLE.ENTREPRENEUR,
    required: true,
  },
  startup: String,
  mentoring: [Consulting],
  location: {
    country: String,
    city: String,
    street: String,
    county: String,
  },
  linksView: {
    linkdinURL: String,
    facebookURL: String,
    instagramURL: String,
    gitHubURL: String,
  },
  expertise: {
    type: [String],
    enum: Object.values(EXPERTISE),
    default: [EXPERTISE.FULLSTACK_DEVELOPER],
  },
  phoneNumber: String,
  about: String,
  imgSRC: String,
  jwt_ac_token: { type: String },
  jwt_rf_token: { type: String },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  next();
});

userSchema.methods.comparePassword = async function (plainPassword) {
  const isMatch = await bcrypt.compare(plainPassword, this.password);
  return isMatch;
};

userSchema.methods.setJwtTokens = function (accessToken, refreshToken) {
  this.jwt_ac_token = accessToken;
  this.jwt_rf_token = refreshToken;
  this.save();
};

userSchema.methods.setAccessToken = function (accessToken) {
  this.jwt_ac_token = accessToken;
  this.save();
};

const User = model("User", userSchema);

module.exports = User;

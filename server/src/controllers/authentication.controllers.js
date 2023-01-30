const User = require("../models/user.model");
const { UnauthorizeError, NotFoundError } = require("../errors/Errors");
const JwtTokenService = require("../services/jwt.service");
const RequestValidationService = require("../services/request-validation.service");
const { SELECTED_USER_FIELDS } = require("../constants/user.constants");

exports.login = async (req, res, next) => {
  await RequestValidationService.loginValidation(req.body, next);
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) next(new NotFoundError());
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) return next(new UnauthorizeError());
  const accessToken = JwtTokenService.createAccessToken(user._id);
  const refreshToken = JwtTokenService.createRefreshToken(user._id);
  user.setJwtTokens(accessToken, refreshToken);
  const userWithoutPassword = { ...user._doc };
  delete userWithoutPassword.password;
  res.send(userWithoutPassword);
};

exports.register = async (req, res, next) => {
  await RequestValidationService.registerValidation(req.body, next);
  const newUser = new User(req.body);
  newUser.save((error) => {
    if (error) return next();
    return res.redirect(307, "/auth/login");
  });
};

exports.logout = async (req, res, next) => {
  const { token } = req.body;
  const user = await User.findOne({ jwt_ac_token: token });
  if (!user) next(new NotFoundError());
  user.jwt_ac_token = undefined;
  user.save();
  res.send({ ok: true, messgae: "You have been logged out" });
};

exports.isLogin = async (req, res, next) => {
  try {
    const token = req.query.ac_token || req.body.ac_token;
    if (!token) return next(new UnauthorizeError("Token is required"));
    const decoded = JwtTokenService.verifyAccessToken(token);
    const { userId } = decoded;
    const user = await User.findById(userId).select(SELECTED_USER_FIELDS);
    res.status(200).send(user);
  } catch (error) {
    next(new UnauthorizeError());
  }
};

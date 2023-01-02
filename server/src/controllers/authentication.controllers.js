const User = require("../models/user.model");
const { UnauthorizeError, NotFoundError } = require("../errors/Errors");
const JwtTokenService = require("../services/jwt.service");
const RequestValidationService = require("../services/request-validation.service");

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
  res.send({ accessToken, refreshToken });
};

exports.register = async (req, res, next) => {
  await RequestValidationService.registerValidation(req.body, next);
  const newUser = new User(req.body);
  newUser.save((error) => {
    if (error) return next();
    return res.redirect(307, "/auth/login");
  });
};

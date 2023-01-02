const {
  loginRequestSchema,
} = require("../validators/schema/authRequests.schema");
const requestValidator = require("../validators/request.validator");
const User = require("../models/user.model");
const { UnauthorizeError, NotFoundError } = require("../errors/Errors");
const JwtTokenService = require("../services/jwt.service");

exports.login = async (req, res, next) => {
  await requestValidator(loginRequestSchema, req.body, next);
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) next(new NotFoundError());
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) return next(new UnauthorizeError());
  const accessToken = JwtTokenService.createAccessToken(user._id);
  const refreshToken = JwtTokenService.createRefreshToken(user._id);
  user.setJwtTokens(accessToken, refreshToken);
  res.send({ accessToken, refreshToken });
};

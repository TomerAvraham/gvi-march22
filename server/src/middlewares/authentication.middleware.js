const JwtTokenService = require("../services/jwt.service");
const { JsonWebTokenError, TokenExpiredError } = require("jsonwebtoken");
const { UnauthorizeError } = require("../errors/Errors");

const authJwtToken = (req, res, next) => {
  try {
    const token = req.headers["access-token"];
    if (!token) return res.sendStatus(401);
    const decodedToken = JwtTokenService.verifyAccessToken(token);
    next();
  } catch (error) {
    console.log(error instanceof JsonWebTokenError);
    if (error instanceof TokenExpiredError) {
      // Home work
      console.log("first");
      // CREATE LOGIC
    }
    if (error instanceof JsonWebTokenError) {
      return next(new UnauthorizeError());
    }
  }
};

module.exports = { authJwtToken };

// - add route + plus controller that create new access token case on refresh token

// - when access token expired then the middleware will create one for them and set as well

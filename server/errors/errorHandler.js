const {
  NotFoundError,
  UnauthorizeError,
  BadRequestError,
} = require("./Errors");

function errorHandler(error, req, res, next) {
  switch (error.constructor) {
    case NotFoundError:
      return res.status(404).send({ ok: false, message: "Not found" });

    case UnauthorizeError:
      return res.status(403).send({ ok: false, message: "Unauthorize" });

    case BadRequestError:
      return res.status(400).send({ ok: false, message: "Bad request" });

    default:
      return res.status(500).send({ ok: false, message: "Server error" });
  }
}

module.exports = errorHandler;

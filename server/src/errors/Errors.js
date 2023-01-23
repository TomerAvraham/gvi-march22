class NotFoundError extends Error {
  constructor() {
    super("Not found");
  }
}

class UnauthorizeError extends Error {
  constructor() {
    super("Unauthorize");
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message || "Bad request");
  }
}

module.exports = {
  NotFoundError,
  UnauthorizeError,
  BadRequestError,
};

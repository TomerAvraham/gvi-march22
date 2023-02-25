const fs = require("fs");
const path = require("path");

const {
  NotFoundError,
  UnauthorizeError,
  BadRequestError,
} = require("./Errors");

function errorHandler(error, req, res, next) {
  const { message } = error;
  switch (error.constructor) {
    case NotFoundError:
      logErrorToFile(error)
      return res.status(404).send({ ok: false, message: "Not found" });

    case UnauthorizeError:
      logErrorToFile(error)
      return res.status(403).send({ ok: false, message: "Unauthorize" });

    case BadRequestError:
      logErrorToFile(error)
      return res.status(400).send({ ok: false, message });

    default:
      logErrorToFile(error)
      return res.status(500).send({ ok: false, message: "Server error" });
  }
}

/**
 * @param  {} error
 * Log errors to file
 */
function logErrorToFile(error) {
  const date = new Date();
  const logsDir = path.join(__dirname, "logs");
  const logFileName = `${date.toISOString().slice(0, 10)}.log`;
  const logFilePath = path.join(logsDir, logFileName);
  const logMessage = `${date.toISOString()}: ${error.stack}\n`;

  fs.mkdirSync(logsDir, { recursive: true });
  try {
    fs.appendFileSync(logFilePath, logMessage);
  } catch (err) {
    console.error("Error writing to log file:", err);
  }
}

module.exports = errorHandler;

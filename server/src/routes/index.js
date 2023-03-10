const router = require("express").Router();
const { NotFoundError } = require("../errors/Errors");
const { authJwtToken } = require("../middlewares/authentication.middleware");
const errorHandler = require("../errors/errorHandler");

const authRoutes = require("./authentication.routes");
const userRoutes = require("./user.routes");
const connectionRoutes = require("./connection.routes");

router.use("/auth", authRoutes);
router.use("/user", authJwtToken, userRoutes);
router.use("/connection", authJwtToken, connectionRoutes);

// Handle not found requests
router.all("*", (req, res, next) => {
  next(new NotFoundError());
});

router.use(errorHandler);

module.exports = router;

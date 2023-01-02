const router = require("express").Router();
const { NotFoundError } = require("../errors/Errors");

router.use("/auth", require("./authentication.routes"));

// test auth token

const { authJwtToken } = require("../middlewares/authentication.middleware");

router.get("/onlyToken", authJwtToken, (req, res) => {
  res.send("you can see me only if you have a token");
});

// Handle not found requests
router.all("*", (req, res, next) => {
  next(new NotFoundError());
});

module.exports = router;

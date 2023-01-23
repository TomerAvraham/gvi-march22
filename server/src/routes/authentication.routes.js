const express = require("express");
const router = express.Router();
const authController = require("../controllers/authentication.controllers");
const catchAsyncError = require("../errors/catchAsyncError");

router.post("/login", catchAsyncError(authController.login));
router.post("/register", catchAsyncError(authController.register));
router.delete("/logout");

router.post("/refresh-token");
router.post("/access-token");

module.exports = router;

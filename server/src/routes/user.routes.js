const express = require("express");
const router = express.Router();
const catchAsyncError = require("../errors/catchAsyncError");
const userController = require("../controllers/user.controller");

// Get all users by specific role
router.get("/role/all", catchAsyncError(userController.getAllUsersByRole));

module.exports = router;

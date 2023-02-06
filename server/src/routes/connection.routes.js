const express = require("express");
const router = express.Router();
const catchAsyncError = require("../errors/catchAsyncError");
const connectionController = require("../controllers/connection.controller");

// request chats with users
router.post(
  "/request/:userToConnectId",
  catchAsyncError(connectionController.connectionRequest)
);

module.exports = router;

//controller
//build request

//build model connetcion
//update user model

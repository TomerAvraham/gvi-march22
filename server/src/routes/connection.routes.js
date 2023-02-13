const express = require("express");
const router = express.Router();
const catchAsyncError = require("../errors/catchAsyncError");
const connectionController = require("../controllers/connection.controller");

// request chats with users
router.post(
  "/request/:userToConnectId",
  catchAsyncError(connectionController.connectionRequest)
);

router.get("/myAll", catchAsyncError(connectionController.getAllConnection));

module.exports = router;

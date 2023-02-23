const express = require("express");
const router = express.Router();
const catchAsyncError = require("../errors/catchAsyncError");
const connectionController = require("../controllers/connection.controller");

router.get("/myAll", catchAsyncError(connectionController.getAllConnection));

// request chats with users
router.post(
  "/request/:userToConnectId",
  catchAsyncError(connectionController.connectionRequest)
);

router.put(
  "/approve/:connectionId",
  catchAsyncError(connectionController.approveConnection)
);

module.exports = router;

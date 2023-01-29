const express = require("express");
const router = express.Router();
const catchAsyncError = require("../errors/catchAsyncError");
const chatController = require("../controllers/chat.controller");
const { authJwtToken } = require("../middlewares/authentication.middleware");

// request chats with users
router.post("/chat/conver", catchAsyncError(chatController.chatRequest));




module.exports = router;


//controller 
//build request

//build model connetcion
//update user model 
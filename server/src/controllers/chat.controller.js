const User = require("../models/user.model");
const { USER_ROLE } = require("../constants/user.constants");
const connetctModel = require("../models/connect.model");

exports.chatRequest = async (req, res, next) => {
  const userId = req.userId;
  const username= req.query.userName;
  const requester = await User.findById(username);
  requester.connections.push({userId})

  console.log(requester);
  console.log(userId);
  console.log(username);
};

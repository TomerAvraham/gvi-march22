const User = require("../models/user.model");
const { USER_ROLE } = require("../constants/user.constants");
const connetctModel = require("../models/connect.model");
const getUserByRole = require("../controllers/user.controller")

exports.chatRequest = async (req, res, next) => {
  const userId = req.userId;
  console.log(userId);
  const username = req.query.userName;
  console.log(username);
  const requester = await User.findById(username);
  console.log(requester);

  const connect = new connetctModel({
      entrepreneurId: username,
      consultantId: userId,
  })

  console.log(getUserByRole(requester.id));

  connect.save((error) => {
    if (error) return next();
    return console.log("added");
  });
};

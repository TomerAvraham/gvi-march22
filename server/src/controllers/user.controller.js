const User = require("../models/user.model");
const { USER_ROLE } = require("../constants/user.constants");
const userService = require("../services/user.service");

const selectedUserField = [
  "_id",
  "email",
  "firstName",
  "lastName",
  "startup",
  "role",
  "location",
  "linksView",
  "expertise",
  "phoneNumber",
  "about",
  "imgSRC",
].join(" ");

exports.getAllUsersByRole = async (req, res, next) => {
  const userRole = await userService.getUserRoleById(req.userId);

  //console.log("someone made request");

  const filterRoleByFetcherRole =
    userRole === USER_ROLE.ENTREPRENEUR
      ? USER_ROLE.CONSULTANT
      : USER_ROLE.ENTREPRENEUR;

  const users = await User.find({ role: filterRoleByFetcherRole }).select(
    selectedUserField
  );

  res.status(200).send(users);
};

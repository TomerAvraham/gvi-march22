const User = require("../models/user.model");
const { USER_ROLE } = require("../constants/user.constants");
const { BadRequestError } = require("../errors/Errors");

const selectedUserFiled = [
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
  const userId = req.userId;
  const { role: fetcherRole } = await User.findOne({ _id: userId }).select(
    "role"
  );

  const filterRoleByFetcherRole =
    fetcherRole === USER_ROLE.ENTREPRENEUR
      ? USER_ROLE.CONSULTANT
      : USER_ROLE.ENTREPRENEUR;

  const users = await User.find({ role: filterRoleByFetcherRole }).select(
    selectedUserFiled
  );

  res.status(200).send(users);
};

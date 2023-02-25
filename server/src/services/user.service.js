const User = require("../models/user.model");
const { USER_ROLE } = require("../constants/user.constants");

exports.getUserRoleById = async (id) => {
  const { role } = await User.findById(id).select("role");
  return role;
};

exports.isAdmin = async (id) => {
  const { role } = await User.findById(id).select("role");
  return role === USER_ROLE.ADMIN;
};

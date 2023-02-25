const User = require("../models/user.model");
const { USER_ROLE } = require("../constants/user.constants");

exports.getUserRoleById = async (id) => {
  const user = await User.findById(id).select("role");
  if (!user) {
    // handle the case where the user is not found
    return;
  }
  const { role } = user;
  return role;
};

exports.isAdmin = async (id) => {
  const { role } = await User.findById(id).select("role");
  return role === USER_ROLE.ADMIN;
};

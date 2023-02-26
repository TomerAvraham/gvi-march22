const User = require("../models/user.model");
const { USER_ROLE } = require("../constants/user.constants");

exports.getUserRoleById = async (id) => {
  const { role } = await User.findById(id).select("role");
  if (!role) {
    // handle the case where the role is not found
    return false;
  }
  return role;
};

exports.getUserEmailById = async (id) => {
  const { email } = await User.findById(id).select("email");
  if (!email) {
    // handle the case where the email is not found
    return false;
  }

  return email;
};

exports.isAdmin = async (id) => {
  const { role } = await User.findById(id).select("role");
  if (!role) {
    // handle the case where the role is not found
    return false;
  }
  return role === USER_ROLE.ADMIN;
};

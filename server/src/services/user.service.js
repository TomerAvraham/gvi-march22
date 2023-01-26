const User = require("../models/user.model");

exports.getUserRoleById = async (id) => {
  const { role } = await User.findById(id).select("role");
  return role;
};

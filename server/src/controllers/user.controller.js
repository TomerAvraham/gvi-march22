const User = require("../models/user.model");
const {
  USER_ROLE,
  SELECTED_USER_FIELDS,
} = require("../constants/user.constants");
const userService = require("../services/user.service");

exports.getAllUsersByRole = async (req, res, next) => {
  const userRole = await userService.getUserRoleById(req.userId);

  //// we just add it to show completion of task although
  // you already change it in the code.
  //const fetcherRoleTmp  = req.fetcherRoleById;
  //const userFetcherRole = await User.find({ _id: fetcherRoleTmp });
  //const fetcherRole = userFetcherRole[0].role;

  const filterRoleByFetcherRole =
    userRole === USER_ROLE.ENTREPRENEUR
      ? USER_ROLE.CONSULTANT
      : USER_ROLE.ENTREPRENEUR;

  const users = await User.find({ role: filterRoleByFetcherRole }).select(
    SELECTED_USER_FIELDS
  );

  res.status(200).send(users);
};

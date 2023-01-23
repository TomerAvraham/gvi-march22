const User = require("../models/user.model");
const { USER_ROLE } = require("../constants/user.constants");

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
  const userId = req.userId;
  const { role: fetcherRole } = await User.findOne({ _id: userId }).select(
    "role"
  );

   //// we just add it to show completion of task although 
   // you already change it in the code.
      //const fetcherRoleTmp  = req.fetcherRoleById;
      //const userFetcherRole = await User.find({ _id: fetcherRoleTmp });
      //const fetcherRole = userFetcherRole[0].role;


  const filterRoleByFetcherRole =
    fetcherRole === USER_ROLE.ENTREPRENEUR
      ? USER_ROLE.CONSULTANT
      : USER_ROLE.ENTREPRENEUR;

  const users = await User.find({ role: filterRoleByFetcherRole }).select(
    selectedUserField
  );

  res.status(200).send(users);
};

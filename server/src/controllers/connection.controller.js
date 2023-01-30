const Connect= require ("../models/connect.model");
const {getUserRoleById} =require ("../services/user.service")
const { USER_ROLE } = require("../constants/user.constants");


exports.connectionRequest = async (req, res, next) => {
 
  const usernameGetter= req.query.userName;
  const userIdRequester=req.userId;
  const fetcherRole = await getUserRoleById(userIdRequester);


  fetcherRole === USER_ROLE.ENTREPRENEUR
  ? await Connect.create([{entrepreneurId:userIdRequester,consultantId:usernameGetter}])
  : await Connect.create([{entrepreneurId:usernameGetter,consultantId:userIdRequester}])
  
  let keyConnectSchema=
  fetcherRole === USER_ROLE.ENTREPRENEUR
  ?await Connect.find({'entrepreneurId':userIdRequester})
  :await Connect.find({'consultantId':userIdRequester})

  res.status(200).send(keyConnectSchema);
};

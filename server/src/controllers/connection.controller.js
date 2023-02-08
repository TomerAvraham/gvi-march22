const Connect = require("../models/connect.model");
const { getUserRoleById } = require("../services/user.service");
const { USER_ROLE } = require("../constants/user.constants");

exports.connectionRequest = async (req, res, next) => {


  
  console.log(req.userId)





//  await Connect.create({sendRequestId:a,getRequestId:b});

  const connectionsIncludedUserId = await Connect.find({
    [sendRequestId||getRequestId]: req.userId,
  });


  res.status(200).send(x);
};

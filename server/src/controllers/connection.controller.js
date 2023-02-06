const Connect = require("../models/connect.model");
const { getUserRoleById } = require("../services/user.service");
const { USER_ROLE } = require("../constants/user.constants");

exports.connectionRequest = async (req, res, next) => {
  const userToConnectId = req.params.userToConnectId;
  const userIdRequester = req.userId;
  const fetcherRole = await getUserRoleById(userIdRequester);

  const isEntrepreneur = fetcherRole === USER_ROLE.ENTREPRENEUR;
  const connectCreateOptions = {
    entrepreneurId: isEntrepreneur ? userIdRequester : userToConnectId,
    consultantId: isEntrepreneur ? userToConnectId : userIdRequester,
  };

  const newConnection = await Connect.create(connectCreateOptions);

  res.status(200).send(newConnection);
};

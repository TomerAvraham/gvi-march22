const Connect = require("../models/connect.model");
const { getUserRoleById } = require("../services/user.service");
const { USER_ROLE } = require("../constants/user.constants");
const { CONNECT_STATUS } = require("../constants/connect.constants");

exports.connectionRequest = async (req, res, next) => {
  const userToConnectId = req.params.userToConnectId;
  const userIdRequester = req.userId;
  const fetcherRole = await getUserRoleById(userIdRequester);

  const isEntrepreneur = fetcherRole === USER_ROLE.ENTREPRENEUR;
  const connectCreateOptions = {
    entrepreneurId: isEntrepreneur ? userIdRequester : userToConnectId,
    consultantId: isEntrepreneur ? userToConnectId : userIdRequester,
    requestedBy: userIdRequester,
  };

  const isConnectionExist = await Connect.exists(connectCreateOptions);
  if (isConnectionExist) {
    return res.status(400).json({ message: "Connect exist" });
  }

  const newConnection = await Connect.create(connectCreateOptions);

  res.status(200).send(newConnection);
};

/**
 * @param  {} req
 * @param  {} res
 * Approve Connection
 * @Return Updated connection
 */
exports.approveConnection = async (req, res) => {
  const { connectionId } = req.body || req.params;
  const { userId } = req;

  const connection = await Connect.findById(connectionId);

  if (!connection) {
    return res
      .status(404)
      .send({ error: true, message: "Connection not found" });
  }

  if (connection.requestedBy.toString() === userId) {
    return res.status(401).send({
      error: true,
      message: "You are not authorized to approve this connection",
    });
  }

  connection.status = CONNECT_STATUS.APPROVED;
  await connection.save();

  res.status(200).send(connection);
};

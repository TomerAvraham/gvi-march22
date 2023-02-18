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
  const { connectionId } = req.params || req.body;

  const { userId } = req; // assuming the user is authenticated and their information is stored in req.userId

  const connection = await Connect.findById(connectionId);

  if (!connection) {
    return res.status(404).send({ error: "Connection not found" });
  }

  // Check if the user is the receiver of the connection request
  if (
    connection.entrepreneurId.toString() === userId ||
    connection.consultantId.toString() === userId
  ) {
    // Approve the connection
    connection.status = CONNECT_STATUS.APPROVED;
    await connection.save();

    return res.status(200).send(connection);
  } else {
    return res
      .status(403)
      .send({ error: "You are not authorized to approve this connection" });
  }
};

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
    const connection = await Connect.findById(isConnectionExist._id);

    if (connection.status === CONNECT_STATUS.PENDING) {
      if (connection.requestedBy === userIdRequester) {
        await Connect.findByIdAndDelete(connection._id);
        return res.status(200).send({ message: "connection deleted" });
      }
      connection.status = CONNECT_STATUS.APPROVED;
      await connection.save();
      return res.status(200).send(connection);
    }

    // TODO: add more statments to catch all status options
    // if (connection.status === CONNECT_STATUS.PENDING) {
    //   if (connection.requestedBy === userIdRequester) {
    //     await Connect.findByIdAndDelete(connection._id);
    //     return res.status(200).send({ message: "connection deleted" });
    //   }
    //   connection.status = CONNECT_STATUS.APPROVED;
    //   await connection.save();
    //   return res.status(200).send(connection);
    // }

    // if (connection.status === CONNECT_STATUS.PENDING) {
    //   connection.status = CONNECT_STATUS.APPROVED;
    //   const newConnection = await connection.save();
    //   return res.status(200).send(newConnection);
    // }

    return res.status(400).send({ message: "Connect exist" });
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

const Connect = require("../models/connect.model");
const {
  getUserRoleById,
  getUserEmailById,
} = require("../services/user.service");
const {
  USER_ROLE,
  SELECTED_USER_FIELDS,
} = require("../constants/user.constants");
const { CONNECT_STATUS } = require("../constants/connect.constants");
const { BadRequestError } = require("../errors/Errors");
const { sendEmail } = require("../services/mailer.service");

exports.connectionRequest = async (req, res, next) => {
  const userToConnectId = req.params.userToConnectId;
  const userIdRequester = req.userId;
  const fetcherRole = await getUserRoleById(userIdRequester);

  const isEntrepreneur = fetcherRole === USER_ROLE.ENTREPRENEUR;
  const connectCreateOptions = {
    entrepreneurId: isEntrepreneur ? userIdRequester : userToConnectId,
    consultantId: isEntrepreneur ? userToConnectId : userIdRequester,
  };

  const connection = await Connect.findOne(connectCreateOptions);

  if (!connection) {
    connectCreateOptions.requestedBy = userIdRequester;
    const newConnection = await Connect.create(connectCreateOptions);
    return res.status(200).send(newConnection);
  }

  const requestedByUserId = connection.requestedBy.toString();

  switch (connection.status) {
    case CONNECT_STATUS.PENDING:
      if (requestedByUserId === userIdRequester) {
        await Connect.findByIdAndDelete(connection._id);
        return res.status(200).send({ message: "Connection deleted" });
      }

      connection.status = CONNECT_STATUS.APPROVED;
      const updatedConnection = await connection.save();
      return res.status(200).send(updatedConnection);

    case CONNECT_STATUS.APPROVED:
      await Connect.findByIdAndDelete(connection._id);
      return res.status(200).send({ message: "Connection deleted" });

    case CONNECT_STATUS.REJECTED:
      // TODO: do something for status REJECTED
      break;

    default:
      await Connect.findByIdAndDelete(connection._id);
      return res.status(200).send({ message: "Connection deleted" });
  }

  res.status(400).send({ message: "Connection already exists" });
};

exports.deleteConnection = async (connectionId, res) => {
  try {
    await Connect.findByIdAndDelete(connectionId);
    return res.status(200).send({ message: "Connection deleted" });
  } catch (error) {
    return res.status(500).send({ message: "Failed to delete connection" });
  }
};

exports.getAllConnection = async (req, res, next) => {
  const fetcherRole = await getUserRoleById(req.userId);
  const isEntrepreneur = fetcherRole === USER_ROLE.ENTREPRENEUR;
  const connectKeyToFilter = isEntrepreneur ? "entrepreneurId" : "consultantId";
  const connectKeyToPopulate = isEntrepreneur
    ? "consultantId"
    : "entrepreneurId";

  const connections = await Connect.find({
    [connectKeyToFilter]: req.userId,
  }).populate(connectKeyToPopulate, SELECTED_USER_FIELDS);

  res.send(connections);
};

exports.inviteConnectionByMail = async (req, res, next) => {
  const emailFrom = await getUserEmailById(req.userId);
  const emailTo = req.body.emailTo;

  if (!emailTo && emailFrom) {
    return res.send({ error: true, messgae: "No email provided" });
  }

  const response = await sendEmail(emailFrom, emailTo);

  if (response.error) {
    return res.status(500).send({ error: true, messgae: response});
  }

  res.status(200).send({ error: false, messgae: "Email sent"});

};

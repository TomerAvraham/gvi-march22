const Connect = require("../models/connect.model");
const { getUserRoleById } = require("../services/user.service");
const {
  USER_ROLE,
  SELECTED_USER_FIELDS,
} = require("../constants/user.constants");

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

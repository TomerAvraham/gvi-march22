/**
 * @param  {} req
 * @param  {} res
 * Approve Connection
 * @Return Updated connection
 */
export const approveConnection = async (connectionId) => {
  const { userId } = req;

  const connection = await Connect.findById(connectionId);
  if (!connection) return { error: true, message: "Connection not found" };

  if (connection.requestedBy.toString() === userId) {
    return {
      error: true,
      message: "You are not authorized to approve this connection",
    };
  }

  connection.status = CONNECT_STATUS.APPROVED;
  await connection.save();

  return connection;
};

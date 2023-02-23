
export const updateConnectionStatus = async (connection, statusToChange) => {
  if (!connection) return { error: true, message: "Connection not Provided" };

  connection.status = statusToChange;
  await connection.save();

  return connection;
};

/**
 * @param  {String} status
 * return color based on connection status
 */
export const getConnectionStatusColor = (status) => {
  switch (status) {
    case "PENDING":
      return "primary";
    case "APPROVED":
      return "success";
    case "REJECTED":
      return "error";
    default:
      return "default";
  }
};

/**
 * @param  {Object} user
 * return connection status
 */
export const getUserStatusConnection = (user) => {
  return user.connect ? user.connect.status : "Request";
};

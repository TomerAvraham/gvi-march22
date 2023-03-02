import React, { useEffect } from "react";
import Chip from "@mui/material/Chip";
import { getConnectionStatusColor } from "../../utils/connection.util";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
function ConnectStatusChip({ user }) {
  const status = user.connect && user.connect.status;
  const likes = user.likes?.length;
  const color = getConnectionStatusColor(status);

  return (
    <>
      {status && (
        <Chip
          size="small"
          label={status}
          sx={{ fontSize: "0.7rem", m: 1, float: "right" }}
          color={color}
        />
      )}
      {likes && (
        <Chip
          size="small"
          avatar={<ThumbUpOffAltIcon />}
          label={likes}
          sx={{ fontSize: "0.7rem", m: 1, float: "right" }}
          color="primary"
        />
      )}
    </>
  );
}

export default ConnectStatusChip;

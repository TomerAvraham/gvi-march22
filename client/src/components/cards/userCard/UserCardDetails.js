import React from "react";
import { Typography } from "@mui/material";
import { LocationOn, Phone, Person, Email } from "@mui/icons-material";

const UserCardDetails = ({ user }) => {
  const details = [
    { Icon: Phone, value: user.phoneNumber ? user.phoneNumber : "-" },
    { Icon: Email, value: user.email },
    { Icon: Person, value: "we will think" },
  ];

  const typographyStyle = {
    fontSize: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  return (
    <>
      {details.map(({ Icon, value }) => (
        <Typography sx={typographyStyle}>
          <Icon sx={{ fontSize: "large" }} />
          {value}
        </Typography>
      ))}
    </>
  );
};

export default UserCardDetails;

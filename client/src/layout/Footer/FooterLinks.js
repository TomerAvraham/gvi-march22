import React from "react";
import { Link } from "react-router-dom";
import { List, Box, Typography } from "@mui/material";
import { footerRoutes } from "../../app/_routes";

const FooterLinks = () => {
  return (
    <Box className={"test"}>
      <List>
        {footerRoutes.map((link, indexId) => {
          return (
            <Link key={indexId} to={link.path}>
              <Typography margin={"15px"} variant="p" gutterBottom>
                {link.linkLabel}
              </Typography>
            </Link>
          );
        })}
      </List>
    </Box>
  );
};

export default FooterLinks;

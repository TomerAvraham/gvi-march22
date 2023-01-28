import React from "react";
import { Link } from "react-router-dom";
import { List, Box, Typography } from "@mui/material";
import { footerRoutes } from "../../app/_routes";
import classes from "./Footer.module.css";
// import { blueGrey } from "@mui/material/colors";

const FooterLinks = () => {
  return (
    <Box className={"test"}>
      <List>
        {footerRoutes.map((link, indexId) => {
          return (
            <Link key={indexId} to={link.path} className={classes.footer_links}>
              {link.linkLabel}
            </Link>
          );
        })}
      </List>
    </Box>
  );
};

export default FooterLinks;

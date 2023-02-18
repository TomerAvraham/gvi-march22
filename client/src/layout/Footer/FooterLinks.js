import React from "react";
import { Link } from "react-router-dom";
import { List, Box } from "@mui/material";
import { appRoutes } from "../../app/_routes";
import classes from "./Footer.module.css";

const FooterLinks = () => {
  return (
    <Box>
      <List>
        {appRoutes
          .filter((link) => link.isFooterLink)
          .map((link, index) => (
            <Link key={index} to={link.path} className={classes.footer_links}>
              {link.linkLabel}
            </Link>
          ))}
      </List>
    </Box>
  );
};

export default FooterLinks;

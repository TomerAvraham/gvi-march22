import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FooterLinks from "./FooterLinks";
import classes from "./Footer.module.css";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <Box component={"footer"}>
      <div className={classes.footer_container}>
        <FooterLinks />
        <Typography variant="p" component="p">
          Copyright GVI March 2022 - {year}.
        </Typography>
      </div>
    </Box>
  );
};

export default Footer;

import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import classes from "./ContactUs.module.css";
import { PrimaryButton } from "../../components/common/Buttons";

const contactUsFields = [
  { label: "Full Name" },
  { label: "Email" },
  { label: "Phone Number" },
  { label: "Subject", isMultiline: true },
];

const ContactUs = () => {
  const pageTitle = "Contact Us";
  const pageSubTitle = "We'll be glad to hear from you.";
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      className={classes.Contact_us_container}
    >
      <form>
        <Box component="section" sx={{ mb: 2 }}>
          <Typography variant="h4">{pageTitle}</Typography>
          <Typography variant="p">{pageSubTitle}</Typography>
        </Box>
        {contactUsFields.map((item, indexId) => (
          <TextField
            className={classes.Contact_us_text_field}
            id="outlined-basic"
            required
            label={item.label}
            variant="outlined"
            multiline={item.isMultiline && true}
            rows={item.isMultiline && 4}
            fullWidth
          />
        ))}

        <PrimaryButton type="submit">Submit</PrimaryButton>
      </form>
    </Box>
  );
};

export default ContactUs;

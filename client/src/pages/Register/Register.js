import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Box, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import classes from "./Register.module.css";
import formValidationSchema from "./formValidationSchema";
import { joiResolver } from "@hookform/resolvers/joi";

import AdbIcon from "@mui/icons-material/Adb";

const RegisterTextField = ({ label, fieldName, register, errors }) => {
  return (
    <TextField
      label={label}
      error={Boolean(errors[fieldName])}
      helperText={errors[fieldName] ? errors[fieldName]?.message : " "}
      {...register(fieldName)}
    />
  );
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(formValidationSchema),
  });

  React.useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onRegisterSubmit = (formData) => {
    console.log({
      formData,
    });
  };

  return (
    <Box className={classes.page_container}>
      <form onSubmit={handleSubmit(onRegisterSubmit)}>
        <div className={classes.desktop_input_section}>
          <RegisterTextField
            label="First Name"
            fieldName="firstName"
            register={register}
            errors={errors}
          />
          <RegisterTextField
            label="Last Name"
            fieldName="lastName"
            register={register}
            errors={errors}
          />
          <Button type="submit" variant="contained">
            Register
          </Button>
        </div>
      </form>

      <div className={classes.app_preview_container}>
        <Box component={"div"} sx={{ display: "flex" }}>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to={"/"} style={{ color: "white" }}>
            <Typography
              variant="h5"
              noWrap
              component="p"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              GVI
            </Typography>
          </Link>
        </Box>

        <Typography align="center" variant="h4">
          a few clicks away from creating your account
        </Typography>
      </div>
    </Box>
  );
};

export default Register;

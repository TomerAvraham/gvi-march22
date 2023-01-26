import React, { useState } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import classes from "./Register.module.css";
import formValidationSchema from "./formValidationSchema";
import { joiResolver } from "@hookform/resolvers/joi";

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

  const onRegisterSubmit = (formData) => {
    console.log({
      formData,
    });
  };

  return (
    <Box className={classes.page_container}>
      <div className={classes.form_section}>
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
          </div>
          <Button type="submit" variant="contained">
            Register
          </Button>
        </form>
      </div>
      <div>App preview</div>
    </Box>
  );
};

export default Register;

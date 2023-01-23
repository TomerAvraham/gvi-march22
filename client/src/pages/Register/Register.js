import React, { useState } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import classes from "./Register.module.css";

const Register = () => {
  const { register, handleSubmit, formState } = useForm();

  const onRegisterSubmit = (formData) => {
    console.log({
      formData,
      formState,
    });
  };

  return (
    <Box className={classes.page_container}>
      <div className={classes.form_section}>
        <form onSubmit={handleSubmit(onRegisterSubmit)}>
          <div className={classes.desktop_input_section}>
            <TextField
              label="First Name"
              {...register("firstName", { required: true })}
            />
            <TextField label="Last Name" />
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

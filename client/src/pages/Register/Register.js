import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Box, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import classes from "./Register.module.css";
import formValidationSchema from "./formValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { registerByPayload } from "../../app/redux/slices/registerSlice";
import { loginByEmailAndPassword } from "../../app/redux/slices/authSlice";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
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
  React.useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  const onRegisterSubmit = (formData) => {
    const formValues = {
      email: formData.email,
      password: formData.password,
      passwordConfirmation: formData.passwordConfirmation,
      role: formData.role,
      lastName: formData.lastName,
      firstName: formData.firstName,
    };
    dispatch(registerByPayload(formValues));

    setTimeout(() => {
      console.log(formValues.email, formValues.password);
      dispatch(loginByEmailAndPassword(formValues));
    }, 500);
  };

  return (
    <Box className={classes.page_container}>
      <form onSubmit={handleSubmit(onRegisterSubmit)}>
        <div className={classes.desktop_input_section}>
          <RegisterTextField
            label="Email"
            fieldName="email"
            register={register}
            errors={errors}
          />
          <RegisterTextField
            label="Password"
            fieldName="password"
            register={register}
            errors={errors}
          />
          <RegisterTextField
            label="Confirm Password"
            fieldName="passwordConfirmation"
            register={register}
            errors={errors}
          />
          <RegisterTextField
            label="Last Name"
            fieldName="lastName"
            register={register}
            errors={errors}
          />
          <RegisterTextField
            label="First Name"
            fieldName="firstName"
            register={register}
            errors={errors}
          />

          <RegisterTextField
            label="Role"
            fieldName="role"
            register={register}
            errors={errors}
          />

          <Button type="submit" variant="contained">
            Register
          </Button>
          <Link to="/login">Already have an account, please click here</Link>
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

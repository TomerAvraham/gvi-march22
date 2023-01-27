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

import Grid from "@mui/material/Grid";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

// TODO: create custom component for select
// const RegisterSelectField = ({ label, fieldName, register, errors,role,handleChange }) => {
//   return (
//     <>
//       {/* <TextField
//         label={label}
//         error={Boolean(errors[fieldName])}
//         helperText={errors[fieldName] ? errors[fieldName]?.message : " "}
//         {...register(fieldName)}
//       /> */}
//       <Select
//         {...register(fieldName)}
//         error={Boolean(errors[fieldName])}
//         helperText={errors[fieldName] ? errors[fieldName]?.message : " "}
//         value={role}
//         label={label}
//         onChange={handleChange}
//       >
//         <MenuItem value={10}>Ten</MenuItem>
//         <MenuItem value={20}>Twenty</MenuItem>
//         <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
//       </Select>
//     </>
//   );
// };

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

  const [role, setRole] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

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

  const pageTitles = {
    title: "Manage all youe lottery efficiently",
    subTitle:
      "Let's get you all set up so you can verify your personal account and begin setting up your profile.",
  };

  return (
    <Box  className={classes.page_container}>
      <div className={classes.register_left_container} >
        <form onSubmit={handleSubmit(onRegisterSubmit)}>
          <div className={classes.desktop_input_section}>
            <div className={`titles_container ${classes.top_bottom_margin}`}>
              <Typography variant="h4" noWrap component="div">
                Register
              </Typography>
              <Typography variant="h6" noWrap component="div">
                {pageTitles.title}
              </Typography>
              <Typography variant="p" noWrap component="div">
                {pageTitles.subTitle}
              </Typography>
            </div>
            {/* Fields */}
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  {" "}
                  <RegisterTextField
                    label="Email"
                    fieldName="email"
                    register={register}
                    errors={errors}
                  />
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <RegisterTextField
                    label="Password"
                    fieldName="password"
                    register={register}
                    errors={errors}
                  />
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <RegisterTextField
                    label="Confirm Password"
                    fieldName="passwordConfirmation"
                    register={register}
                    errors={errors}
                  />
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <RegisterTextField
                    label="Last Name"
                    fieldName="lastName"
                    register={register}
                    errors={errors}
                  />
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <RegisterTextField
                    label="First Name"
                    fieldName="firstName"
                    register={register}
                    errors={errors}
                  />
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  {/* // TODO: use the select field and use it to select role from ENUM */}
                  {/* <FormControl sx={{ m: 0, width: "82%" }}>
                    <InputLabel id="role">Role</InputLabel>
                    <Select
                      labelId="role"
                      fieldName="role"
                      register={register}
                      errors={errors}
                      id="role"
                      value={role}
                      label="Role"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                    </Select>
                  </FormControl> */}
                  {/* <RegisterTextField
                    label="Role"
                    fieldName="role"
                    register={register}
                    errors={errors}
                  /> */}
                </Grid>
              </Grid>
            </Box>
            <Box component={"div"} className={classes.top_bottom_margin}>
              <Button type="submit" variant="contained">
                Register
              </Button>
              <div>
                <Link to="/login">
                  Already have an account, please click here
                </Link>
              </div>
            </Box>
          </div>
        </form>
      </div>

      <div className={classes.app_preview_container}>
        <Box component={"div"} sx={{ display: "flex" }}>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to={"/"} style={{ color: "white" }}>
            <Typography variant="h5" noWrap component="p">
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

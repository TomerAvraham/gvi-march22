import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import classes from "./Register.module.css";
import formValidationSchema from "./formValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { registerByPayload } from "../../app/redux/slices/registerSlice";
import { loginByEmailAndPassword } from "../../app/redux/slices/authSlice";
import { joiResolver } from "@hookform/resolvers/joi";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  TextField,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import AdbIcon from "@mui/icons-material/Adb";
import { PrimaryButton } from "../../components/common/Buttons";
//need to move to utils

const RegisterSelectField = ({
  label,
  fieldName,
  register,
  errors,
  handleChange,
  value,
  labelId,
  inputLabel,
  inputLabelId,
  id,
}) => {
  return (
    <>
      <InputLabel error={Boolean(errors[fieldName])} id="role-select">
        {label}
      </InputLabel>
      <Select
        error={Boolean(errors[fieldName])}
        {...register(fieldName)}
        // helpertext={errors[fieldName] ? errors[fieldName]?.message : " "}
        value={value}
        label={label}
        onChange={handleChange}
        labelId={labelId}
        id={id}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"ENTREPRENEUR"}>ENTREPRENEUR</MenuItem>
        <MenuItem value={"CONSULTANT"}>CONSULTANT</MenuItem>
      </Select>
      <FormHelperText error={Boolean(errors[fieldName])}>
        {errors[fieldName] ? errors[fieldName]?.message : " "}
      </FormHelperText>
    </>
  );
};

const Register = () => {
  const RegisterTextField = ({ label, fieldName, register, errors, type }) => {
    return (
      <Grid item xs={0} sm={6}>
        <TextField
          label={label}
          type={type}
          error={Boolean(errors[fieldName])}
          helperText={errors[fieldName] ? errors[fieldName]?.message : " "}
          {...register(fieldName)}
          size="small"
        />
        {label === "Password" || label === "Confirm Password" ? (
          <IconButton
            aria-label="toggle password visibility"
            onClick={togglePassword}
            edge="end"
          >
            {!showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        ) : (
          ""
        )}
      </Grid>
    );
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const registerItemLists = [
    { label: "Email", field: "email" },
    {
      label: "Password",
      field: "password",
      type: showPassword ? "text" : "password",
    },
    {
      label: "Confirm Password",
      field: "passwordConfirmation",
      type: showPassword ? "text" : "password",
    },
    { label: "First Name", field: "firstName" },
    { label: "Last Name", field: "lastName" },
  ];

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

  // React.useEffect(() => {
  //   console.log(errors);
  // }, [errors]);

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
    mainTitle: "Register",
    title: "Manage all your connection efficiently",
    subTitle:
      "Let's get you all set up so you can verify your personal account.",
  };

  return (
    <Box className={classes.page_container}>
      <div className={classes.register_left_container}>
        <form onSubmit={handleSubmit(onRegisterSubmit)}>
          <div className={classes.desktop_input_section}>
            <div className={`titles_container ${classes.top_bottom_margin}`}>
              <Typography
                variant="h4"
                noWrap
                component="div"
                className={classes.top_bottom_margin}
              >
                {pageTitles.mainTitle}
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              >
                {pageTitles.title}
              </Typography>
              <Typography
                variant="p"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              >
                {pageTitles.subTitle}
              </Typography>
              <hr />
            </div>
            {/* Fields */}
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 3, md: 5, lg: 1, xl: 0 }}
              >
                {/* <Grid item xs={0} sm={6}>
                  {" "}
                  <RegisterTextField
                    label="Email"
                    fieldName="email"
                    register={register}
                    errors={errors}
                  />
                </Grid>
                <Grid item xs={0} sm={6}>
                  {" "}
                  <RegisterTextField
                    label="Password"
                    fieldName="password"
                    register={register}
                    errors={errors}
                  />
                </Grid>
                <Grid item xs={0} sm={6}>
                  <RegisterTextField
                    label="Confirm Password"
                    fieldName="passwordConfirmation"
                    register={register}
                    errors={errors}
                  />
                </Grid>
                <Grid item xs={0} sm={6}>
                  {" "}
                  <RegisterTextField
                    label="Last Name"
                    fieldName="lastName"
                    register={register}
                    errors={errors}
                  />
                </Grid>
                <Grid item xs={0} sm={6}>
                  {" "}
                  <RegisterTextField
                    label="First Name"
                    fieldName="firstName"
                    register={register}
                    errors={errors}
                  />
                </Grid> */}
                {/* Select field */}
                {/* one map instead of the code above */}
                {registerItemLists.map((itemRegister, index) => {
                  return (
                    <RegisterTextField
                      label={itemRegister.label}
                      fieldName={itemRegister.field}
                      type={itemRegister.type}
                      register={register}
                      errors={errors}
                      key={index}
                    />
                  );
                })}

                <Grid item xs={0} sm={6}>
                  <FormControl sx={{ m: 0, minWidth: 222 }} size="small">
                    <RegisterSelectField
                      value={role}
                      id={"role"}
                      labelId="role-select"
                      label="Role"
                      // InputLabel={"role-select"}
                      fieldName="role"
                      register={register}
                      errors={errors}
                      handleChange={handleChange}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            <FormGroup
              className={classes.top_bottom_margin}
              sx={{ color: blueGrey[600] }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: blueGrey[200],
                      "&.Mui-checked": {
                        color: blueGrey[500],
                      },
                    }}
                    size="small"
                    defaultChecked
                  />
                }
                label="Yes, I want to recive newsletter emails"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    required
                    sx={{
                      color: blueGrey[200],
                      "&.Mui-checked": {
                        color: blueGrey[500],
                      },
                    }}
                    size="small"
                    defaultChecked
                  />
                }
                label="I agree to all the Terms, Privacy Policy and Fees"
              />
            </FormGroup>
            <Box component={"div"} className={classes.top_bottom_margin}>
              <PrimaryButton type="submit">Register</PrimaryButton>
              <div className={classes.top_bottom_margin}>
                Already have an account? <Link to="/login">Log in</Link>
              </div>
            </Box>
          </div>
        </form>
      </div>

      <div className={classes.app_preview_container}>
        <Box component={"div"} sx={{ display: "flex" }}>
          <AdbIcon />
          <Link to={"/"} style={{ color: "white" }}>
            <Typography variant="h4" noWrap component="p">
              GVI
            </Typography>
          </Link>
        </Box>
        <Typography
          component={"div"}
          align="center"
          variant="h5"
          className={classes.top_bottom_margin}
        >
          a few clicks away from creating your account
        </Typography>
        <img
          className={classes.register_background_image}
          src="/register-background-img.png"
          alt="registerImage"
        ></img>
      </div>
    </Box>
  );
};

export default Register;

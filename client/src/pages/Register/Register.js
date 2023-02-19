import React, { useState, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import classes from "./Register.module.css";
import formValidationSchema from "./formValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { registerByPayload } from "../../app/redux/slices/authSlice";
import { loginByEmailAndPassword } from "../../app/redux/slices/authSlice";
import { joiResolver } from "@hookform/resolvers/joi";
import RegisterTextField from "./components/RegisterTextField";
import RegisterSelectField from "./components/RegisterSelectField";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  FormControl,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import AdbIcon from "@mui/icons-material/Adb";
import { PrimaryButton } from "../../components/common/Buttons";

const Register = () => {
  const registerItemLists = [
    { label: "Email", field: "email", type: "text" },
    {
      label: "Password",
      field: "password",
      type: undefined,
    },
    {
      label: "Confirm Password",
      field: "passwordConfirmation",
      type: undefined,
    },
    { label: "First Name", field: "firstName", type: "text" },
    { label: "Last Name", field: "lastName", type: "text" },
  ];

  const pageTitles = {
    mainTitle: "Register",
    title: "Manage all your connection efficiently",
    subTitle:
      "Let's get you all set up so you can verify your personal account.",
  };

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
      dispatch(loginByEmailAndPassword(formValues));
    }, 500);
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
            <Box>
              <Grid
                container
                rowSpacing={2}
                // columnSpacing={{ xs: 1, sm: 3, md: 5, lg: 1, xl: 0 }}
                columnSpacing={1}
              >
                {registerItemLists.map((itemRegister, index) => {
                  return (
                    <RegisterTextField
                      label={itemRegister.label}
                      fieldName={itemRegister.field}
                      register={register}
                      type={itemRegister.type}
                      errors={errors}
                      key={index}
                    />
                  );
                })}
                <Grid item xs={0} sm={6}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
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

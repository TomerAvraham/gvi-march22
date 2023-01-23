import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Typography,
  IconButton,

} from "@mui/material";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginByEmailAndPassword,
  clearErrorMessage,
} from "../../app/redux/slices/authSlice";
import classes from "./Login.module.css";

const TIME_TO_CLEAR_ERROR_MSG = 3500;

const Login = () => {
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);

  const { isLoading, error, isAuth } = useSelector((state) => state.auth);

  function onLoginSubmit(e) {
    e.preventDefault();
    const formValues = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    dispatch(loginByEmailAndPassword(formValues));
  }

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, TIME_TO_CLEAR_ERROR_MSG);
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  const handleClickShowPassword = () => {

      setPasswordShown(!passwordShown);
  };

 

  return (
    <Box className={classes.login_wrapper} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Paper elevation={3} className={classes.login_form_wrapper}>
        {error && (
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        )}
        <Typography variant="h5" sx={{borderBottom: 1}}>
          Login
        </Typography>
        <form className={classes.login_form} onSubmit={onLoginSubmit}>
          <TextField required id="outlined-basic" label="Email" variant="outlined" placeholder="Email" inputRef={emailInputRef} sx={{}} />
          <TextField required id="outlined-basic" type={passwordShown ? 'text' : 'password'} label="Password" variant="outlined" placeholder="Password" inputRef={passwordInputRef} 
          
          />
          <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                className={classes.show_pass}
              >
                {passwordShown ? <VisibilityOff /> : <Visibility />}
              </IconButton>

          <Button type="submit" variant="contained" sx={{backgroundColor: "#49B3DA", borderRadius: "20px", width: "140px"}}>
            Login
          </Button>
          {isLoading && <CircularProgress />}
        </form>
        
        <Link className={classes.link_wrapper} to="/register">Don't have account, please click here</Link>
      </Paper>
     
    </Box>
  );
};

export default Login;
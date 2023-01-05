import React, { useRef } from "react";
import {
  Paper,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../app/redux/slices/authSlice";
import classes from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // const { isLoading, error } = useSelector((state) => state.auth);

  function onLoginSubmit(e) {
    e.preventDefault();
    const payload = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    dispatch(login(payload));
  }

  return (
    <div className={classes.login_wrapper}>
      <Paper elevation={3} className={classes.login_form_wrapper}>
        {/* {error && (
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        )} */}
        <form className={classes.login_form} onSubmit={onLoginSubmit}>
          <TextField required inputRef={emailInputRef} />
          <TextField required inputRef={passwordInputRef} />
          <Button type="submit" variant="contained">
            Login
          </Button>
          {/* {isLoading && <CircularProgress />} */}
        </form>
        <Link to="/register">Don't have account, please click here</Link>
      </Paper>
    </div>
  );
};

export default Login;

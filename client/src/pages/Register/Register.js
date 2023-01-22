import React, { useRef, useEffect, useState } from "react";
import {
  Paper,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrorMessage } from "../../app/redux/slices/authSlice";
import classes from "../Register/Register.module.css";

const TIME_TO_CLEAR_ERROR_MSG = 3500;

const Register = () => {
  const [role, setRole] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const { isLoading, error, isAuth } = useSelector((state) => state.auth);

  function onRegisterSubmit(e) {
    e.preventDefault();
    const formValues = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    // dispatch(loginByEmailAndPassword(formValues));
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

  return (
    <div className={classes.register_wrapper}>
      <Paper
        elevation={3}
        sx={{ boxShadow: "none" }}
        className={classes.register_form_wrapper}
      >
        {error && (
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        )}
        <form className={classes.register_form} onSubmit={onRegisterSubmit}>
          <FormControl fullWidth>
            <TextField
              label="Username"
              variant="outlined"
              required
              type={"text"}
              inputRef={emailInputRef}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Email"
              variant="outlined"
              required
              type={"email"}
              inputRef={emailInputRef}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label="Password"
              variant="outlined"
              required
              type={"password"}
              inputRef={passwordInputRef}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>ENTREPRENEUR</MenuItem>
              <MenuItem value={20}>CONSULTANT</MenuItem>
              <MenuItem value={30}>ADMIN</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained">
            register
          </Button>
          {isLoading && <CircularProgress />}
        </form>
        <Link to="/login">Allready have account?, please click here</Link>
      </Paper>
    </div>
  );
};

export default Register;

import React, { useRef, useEffect } from "react";
import {Box,Paper,TextField, Button,CircularProgress,Alert,} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import {
  loginByEmailAndPassword,
  clearErrorMessage,
} from "../../app/redux/slices/authSlice";
import classes from "./Login.module.css";
import people from "./Teamwork.jpg"


const TIME_TO_CLEAR_ERROR_MSG = 3500;

const Login = () => {
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

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

  return (
   <div className={classes.login_wrapper}>
     <Paper className={classes.login_mid_box}>
     
        <Paper elevation={3} sx={{ boxShadow: "none" }}className={classes.login_form_wrapper}>
            {error && (<Alert variant="filled" severity="error">{error}</Alert>)}
           
          <div className={classes.login_wrapper_title}>Welcom Back!</div>

          <form className={classes.login_form} onSubmit={onLoginSubmit}>
             <FormControl fullWidth>
               <TextField label="Email" variant="outlined" requiredtype={"email"} inputRef={emailInputRef}/>
             </FormControl>
             <FormControl fullWidth>
               <TextField label="Password" variant="outlined"required type={"password"} inputRef={passwordInputRef} />
             </FormControl>
             <Button type="submit" variant="contained">Login</Button>
   
             <div className={classes.social_signin}>
                 <Button type="onClick" variant="contained" className={classes.google}>google</Button>
                 <Button type="onClick" variant="contained" className={classes.facebook}>facebook</Button>
                 <Button type="onClick" variant="contained" className={classes.twitter}>twitter</Button>
             </div>

             {isLoading && <CircularProgress />}
          </form>
          <Link to="/register">Don't have an account? please click HERE</Link>
        </Paper>

        <Box className={classes.image}  component="img" alt="The house from the offer." src={people} />

     </Paper>
   </div>
  );
};

export default Login;
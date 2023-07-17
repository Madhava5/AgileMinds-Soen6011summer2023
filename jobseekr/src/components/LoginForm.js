import React,{ useContext, useState } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import "../index.css"
import { SetPopupContext } from "../App";
import isAuth from "../lib/isAuth";
import img from './login-img.png';
const useStyles = makeStyles((theme) => ({
    body: {
      padding: "60px 60px",
    },
    inputBox: {
      width: "300px",
    },
    submitButton: {
      width: "300px",
    },
  }));
const LoginForm = () => {
    const classes = useStyles();
    const setPopup = useContext(SetPopupContext);

    const [loggedin, setLoggedin] = useState(isAuth());

    const [loginDetails, setLoginDetails] = useState({
      email: "",
      password: "",
    });
  
    const [inputErrorHandler, setInputErrorHandler] = useState({
      email: {
        error: false,
        message: "",
      },
      password: {
        error: false,
        message: "",
      },
    });
  
    const handleInput = (key, value) => {
      setLoginDetails({
        ...loginDetails,
        [key]: value,
      });
    };
  
    const handleInputError = (key, status, message) => {
      setInputErrorHandler({
        ...inputErrorHandler,
        [key]: {
          error: status,
          message: message,
        },
      });
    };

  const handleLogin = () => {
    // Perform login logic here, e.g., send data to the backend for authentication
    const verified = true;
      if (verified) {
      var loggedUser={ loginDetails};
        localStorage.setItem("loggedUser", loggedUser);
        setLoggedin(isAuth());
        setPopup({
            open: true,
            severity: "success",
            message: "Logged in successfully",
          });
  }else {
    setPopup({
      open: true,
      severity: "error",
      message: "Incorrect Input",
    });
  }
};
return loggedin ? (
    <Redirect to="/" />
  ) : (
      <Grid container direction="row" >
      <div style={{alignItems:"center", marginLeft:"8%",marginTop:""}}>
        <img src={img}
          width="450px" height="450px" ></img>
      </div>
    <Paper elevation={3} className={classes.body}>
      
      <Grid container direction="column" spacing={4} alignItems="center">
      
        <Grid item>
          <Typography variant="h3" component="h2" style={{color:"#6f03fc",fontWeight:"bold"}}>
            Welcome back, Login!
          </Typography>
        </Grid>

        <Grid item>
        {/* Email input */}
        </Grid>
        <Grid item>
         {/* Password field */}
        </Grid>
        <Grid item>
         {/* Login button */}
        </Grid>
      </Grid>
    </Paper>
  </Grid>
  );
};

export default LoginForm;

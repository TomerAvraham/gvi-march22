import React, { useState, useCallback } from "react";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextField, Grid, InputAdornment } from "@mui/material";

const RegisterTextField = ({ label, fieldName, register, errors, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const renderPasswordAdornment = useCallback(() => {
    const icon = showPassword ? <VisibilityOff /> : <Visibility />;
    return (
      <InputAdornment position="end">
        <IconButton size="small" onClick={handleShowPassword}>
          {icon}
        </IconButton>
      </InputAdornment>
    );
  }, [showPassword, handleShowPassword]);

  const { message } = errors[fieldName] || {};
  const error = Boolean(errors[fieldName]);

  const isPasswordField = ["Password", "Confirm Password"].includes(label);
  const computedType = isPasswordField ? (showPassword ? "text" : "password") : type;

  return (
    <Grid item xs={0} sm={6}>
      <TextField
        label={label}
        type={computedType}
        error={error}
        helperText={message || " "}
        {...register(fieldName)}
        size="small"
        sx={{ width: "100%" }}
        InputProps={{
          endAdornment: isPasswordField ? renderPasswordAdornment() : null,
        }}
      />
    </Grid>
  );
};

export default RegisterTextField;

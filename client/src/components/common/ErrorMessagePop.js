import React from "react";
import { Snackbar, Alert } from "@mui/material";

const ErrorMessagePop = ({ isOpen, errorMessage, hideDuration }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={isOpen}
      autoHideDuration={hideDuration}
    >
      <Alert severity="error" variant="filled" elevation={6}>
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};

export default ErrorMessagePop;

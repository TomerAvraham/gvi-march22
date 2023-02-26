import React, { useRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { inviteConnectionByEmail } from "../../../services/connection.service";

const InviteDialog = ({
  isInviteDialogOpen,
  handleInviteDialogClickOpen,
  handleInviteDialogClose,
}) => {
  const emailInput = useRef("");

  const handleInviteOnSubmit = (e) => {
    e.preventDefault();
    const response = inviteConnectionByEmail(emailInput.current.value)
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleInviteDialogClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={isInviteDialogOpen}
        onClose={handleInviteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Invite friend to connect."}
        </DialogTitle>

        <form onSubmit={handleInviteOnSubmit}>
          <DialogContent>
            <DialogContentText mb={3} id="alert-dialog-description">
              Do you have friends who you'd like to connect with? Simply invite
              them by email and start grow your network.
            </DialogContentText>
            <TextField
              inputRef={emailInput}
              fullWidth
              id="standard-basic"
              type={"email"}
              label="Email"
              variant="standard"
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleInviteDialogClose}>Close</Button>
            <Button type="submit" onClick={handleInviteOnSubmit} autoFocus>
              Send
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default InviteDialog;

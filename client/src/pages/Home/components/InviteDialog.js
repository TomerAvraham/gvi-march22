import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Slide from "@mui/material/Slide";
import { inviteConnectionByEmail } from "../../../services/connection.service";

const DIALOG_CONTENT_TEXT =
  "Do you have friends who you'd like to connect with? Simply invite them by email and start grow your network.";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const InviteDialog = ({
  isInviteDialogOpen,
  handleInviteDialogClickOpen,
  handleInviteDialogClose,
}) => {
  const [email, setEmail] = useState("");

  const handleInviteOnSubmit = (e) => {
    e.preventDefault();
    const response = inviteConnectionByEmail(email);
  };

  return (
    <Dialog
      open={isInviteDialogOpen}
      onClose={handleInviteDialogClose}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Invite friend to connect."}
      </DialogTitle>

      <form onSubmit={handleInviteOnSubmit}>
        <DialogContent>
          <DialogContentText mb={3} id="alert-dialog-description">
            {DIALOG_CONTENT_TEXT}
          </DialogContentText>
          <TextField
            fullWidth
            id="standard-basic"
            type={"email"}
            label="Email"
            variant="standard"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleInviteDialogClose}>Close</Button>
          <Button type="submit" autoFocus>
            Send
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default InviteDialog;

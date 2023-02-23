import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { deleteUserById } from "../../services/user.service";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneUserById } from "../../app/redux/slices/userSlice";

export default function CardMenu({ userId }) {
  const { data, error, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteUser = async () => {
    handleClose();
    dispatch(deleteOneUserById(userId));
  };

  return (
    <div>
      <Tooltip title="Admin setting">
        <IconButton aria-label="settings" onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem sx={{ fontSize: "0.9rem" }} onClick={handleClose}>
          Edit user
        </MenuItem>
        <MenuItem sx={{ fontSize: "0.9rem" }} onClick={handleDeleteUser}>
          Delete User
        </MenuItem>
      </Menu>
    </div>
  );
}

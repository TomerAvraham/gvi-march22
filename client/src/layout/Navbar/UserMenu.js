import * as React from "react";
import {
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { USER_PROFILE_LINKS } from "../../constants/constants";
import authService from "../../services/auth.service";

const UserMenu = ({
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
}) => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {USER_PROFILE_LINKS.map((link, indexId) => (
          <MenuItem key={indexId}>
            <Typography align="center">{link.label}</Typography>
          </MenuItem>
        ))}
        <MenuItem onClick={() => authService.logout()}>
          <Typography align="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserMenu;

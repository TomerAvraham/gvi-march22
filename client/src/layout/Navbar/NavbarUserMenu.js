import * as React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useDispatch } from "react-redux";

import { setIsAuth } from "../../app/redux/slices/authSlice";
import { useSelector } from "react-redux";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import authService from "../../services/auth.service";

export const USER_SETTING_LINKS = [
  {
    label: "Add Account",
    path: "/",
    icon: <PersonAdd fontSize="small" sx={{ mr: "1rem", color: "grey" }} />,
  },
  {
    label: "Setting",
    path: "/",
    icon: <Settings fontSize="small" sx={{ mr: "1rem", color: "grey" }} />,
  },
];

export default function NavbarUserMenu() {
  const { isAuth, user } = useSelector((state) => state.auth);

  const USER_PROFILE_LINKS = [
    { label: "Profile", path: `/user/${user._id}`, icon: <Avatar /> },
    {
      label: "Dashboard",
      path: "/",
      icon: (
        <Avatar>
          <DashboardIcon />
        </Avatar>
      ),
    },
  ];
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const response = await authService.logout();
    if (response.ok === true) {
      dispatch(setIsAuth());
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {USER_PROFILE_LINKS.map((link, indexId) => (
          <Link key={indexId} to={link.path}>
            <MenuItem onClick={handleClose} align="center">
              {link.icon} {link.label}
            </MenuItem>
          </Link>
        ))}
        <Divider />
        {USER_SETTING_LINKS.map((link, indexId) => (
          <Link key={indexId} to={link.path}>
            <MenuItem onClick={handleClose} align="center">
              {link.icon}
              {link.label}
            </MenuItem>
          </Link>
        ))}
        <MenuItem onClick={() => handleLogout()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

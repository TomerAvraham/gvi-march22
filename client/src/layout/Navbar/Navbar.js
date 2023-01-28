import * as React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import SearchInput from "../../components/SearchInput";
import authService from "../../services/auth.service";
import { mainRoutes } from "../../app/_routes";
import { USER_PROFILE_LINKS } from "../../constants/constants";
import MobileNavbarMenu from "./MobileNavbarMenu";

import classes from "./Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to={"/"} style={{ color: "white" }}>
            <Typography
              variant="h6"
              noWrap
              component="p"
              className={classes.app_logo}
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
              }}
            >
              GVI
            </Typography>
          </Link>
          {/* Mobile Menu */}
          <MobileNavbarMenu
            handleOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
          />
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            className={classes.app_logo}
            sx={{
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
            }}
          >
            GVI
          </Typography>
          {isAuth && (
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {mainRoutes.map((link, indexId) => (
                <Link key={indexId} to={link.path}>
                  <Button
                    className="nav-buttton"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {link.linkLabel}
                  </Button>
                </Link>
              ))}
            </Box>
          )}
          {isAuth && (
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                marginRight: "1rem",
              }}
            >
              <SearchInput />
            </Box>
          )}
          {isAuth && (
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
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

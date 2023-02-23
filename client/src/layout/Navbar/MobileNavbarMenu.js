import React from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { appRoutes } from "../../app/_routes";

const MobileNavbarMenu = ({
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu,
}) => {
  return (
    <Box sx={{display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {appRoutes.map(
          (link, index) =>
            link.isNavbarLink && (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Link to={link.path} align="center">
                  {link.linkLabel}
                </Link>
              </MenuItem>
            )
        )}
      </Menu>
    </Box>
  );
};

export default MobileNavbarMenu;

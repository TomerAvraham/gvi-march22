import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavbarUserMenu from "./NavbarUserMenu";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import SearchUsersInput from "../../components/common/Search/SearchUsersInput";
import { appRoutes } from "../../app/_routes";
import MobileNavbarMenu from "./MobileNavbarMenu";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xxl" className={classes.navbar_container}>
        <Toolbar disableGutters variant="dense">
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to={"/"}>
            <Typography
              variant="h6"
              noWrap
              component="p"
              className={classes.app_logo}
              sx={{
                display: { xs: "none", md: "flex" },
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
              {appRoutes.map(
                (link, indexId) =>
                  link.isNavbarLink && (
                    <Link key={indexId} to={link.path}>
                      <Button
                        className="nav-buttton"
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {link.linkLabel}
                      </Button>
                    </Link>
                  )
              )}
            </Box>
          )}
          {isAuth && (
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                marginRight: "1rem",
              }}
            >
              <SearchUsersInput />
            </Box>
          )}
          {isAuth && (
            <>
              <NavbarUserMenu />
              {/* <UserMenu
                handleOpenUserMenu={handleOpenUserMenu}
                anchorElUser={anchorElUser}
                handleCloseUserMenu={handleCloseUserMenu}
              /> */}
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

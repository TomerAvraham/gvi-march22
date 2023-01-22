import React, { Suspense } from "react";
import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import { routes as appRoutes } from "./_routes";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import BottomNav from "../Footer/BottomNav";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);

  return isAuth ? children : <Navigate to="/login" replace />;
};

const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<NavbarLayout />}>
        {appRoutes.map((route, index) => {
          return (
            <Route
              path={route.path}
              element={
                route.isProtected ? (
                  <ProtectedRoute>
                    <route.component />
                  </ProtectedRoute>
                ) : (
                  <route.component />
                )
              }
              key={index}
            />
          );
        })}
      </Route>
    </Routes>
  );
};

const NavbarLayout = () => {
  return (
    <Box>
      <AppBar
        sx={{ display: "flex", width: "100%", height: "70px" }}
        style={{ background: "#a29bfe" }}
        position="sticky"
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={1} xl={1}>
              <>
                <IconButton size="medium">
                  <MenuIcon />
                </IconButton>
              </>
            </Grid>

            <Grid container item xl={10} xs={10}>
              <>
                {appRoutes.map((route, index) => (
                  <Grid item xs={2}>
                    <Link key={index} to={route.path}>
                      {route.linkLabel}
                    </Link>
                  </Grid>
                ))}
              </>
            </Grid>
            <Grid item xs={1} xl={1}>
              <IconButton size="medium">
                <AccountBoxIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>

        {/* <Toolbar
        // sx={{
        //   display: "flex",
        //   width: "100%",
        //   alignContent: "center",
        //   justifyContent: "space-between",
        // }}
        >
          <Container
          // sx={{
          //   display: "flex",
          //   width: "90%",
          //   alignContent: "center",
          //   justifyContent: "space-between",
          //   justifyItems: "flex-start",
          // }}
          >
            {appRoutes.map((route, index) => (
              <Link key={index} to={route.path}>
                {route.linkLabel}
              </Link>
            ))}
          </Container>
          <Container
          // sx={{
          //   display: "flex",
          //   width: "15%",
          //   alignContent: "center",
          //   justifyContent: "flex-end",
          // }}
          ></Container>
        </Toolbar> */}
      </AppBar>

      <Suspense fallback={<h1>Loading..</h1>}>
        <Outlet />
      </Suspense>
      <BottomNav />
    </Box>
  );
};

export default RouterWrapper;

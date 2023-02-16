import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Container from "@mui/material/Container";
import classes from "./Layout.module.css";
import Loader from "../../components/common/Loader/Loader";

const Layout = () => {
  const { pathname } = useLocation();
  const isAuthRoute =
    pathname === "/register" || pathname === "/login" ? true : false;
  return (
    <>
      {isAuthRoute || <Navbar />}
      <Suspense fallback={<Loader />}>
        <Container
          sx={{ padding: isAuthRoute && "0!important" }}
          maxWidth={isAuthRoute ? "xxl" : "xl"}
          className={classes.layout_container}
        >
          <Outlet />
        </Container>
      </Suspense>

      {isAuthRoute || <Footer className={classes.layout_footer} />}
    </>
  );
};

export default Layout;

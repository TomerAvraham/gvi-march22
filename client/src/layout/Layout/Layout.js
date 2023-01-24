import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Container from "@mui/material/Container";
import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1>Loading..</h1>}>
        <Container maxWidth="xl" className={classes.layout_container}>
          <Outlet />
        </Container>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;

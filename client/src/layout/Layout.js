import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Container from "@mui/material/Container";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1>Loading..</h1>}>
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;

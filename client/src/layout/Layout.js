import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Box from "@mui/material/Box";
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

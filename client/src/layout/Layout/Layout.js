import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Container from "@mui/material/Container";
import classes from "./Layout.module.css";
import Loader from "../../components/common/Loader/Loader";
import CustomBreadcrumbs from "../../components/common/Breadcrumbs/Breadcrumbs";

const Layout = () => {
  const { pathname } = useLocation();
  const isAuthRoute = pathname === "/register" || pathname === "/login";

  const containerProps = {
    sx: { padding: isAuthRoute ? "0!important" : undefined, mb: "auto" },
    maxWidth: isAuthRoute ? "xxl" : "xl",
    className: classes.layout_container,
  };

  const navbar = isAuthRoute || <Navbar />;
  const footer = isAuthRoute || <Footer />;

  return (
    <>
      {navbar}
      <Suspense fallback={<Loader />}>
        <Container {...containerProps}>
          {isAuthRoute || <CustomBreadcrumbs />}
          <Outlet />
        </Container>
      </Suspense>
      {footer}
    </>
  );
};

export default Layout;

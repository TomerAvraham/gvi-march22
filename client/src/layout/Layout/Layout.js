import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Container from "@mui/material/Container";
import Loader from "../../components/common/Loader/Loader";
import CustomBreadcrumbs from "../../components/common/Breadcrumbs/Breadcrumbs";

const Layout = React.memo(() => {
  const { pathname } = useLocation();
  const isAuthRoute = pathname === "/register" || pathname === "/login";

  const containerProps = React.useMemo(
    () => ({
      sx: { padding: isAuthRoute ? "0!important" : undefined, mb: "auto" },
      maxWidth: isAuthRoute ? "xxl" : "xl",
    }),
    [isAuthRoute]
  );

  const navbar = isAuthRoute || <Navbar />;
  const footer = isAuthRoute || <Footer />;

  const isChatPage = pathname.includes("chat");

  return (
    <>
      {navbar}
      <Suspense fallback={<Loader />}>
      {!isAuthRoute && !isChatPage && <CustomBreadcrumbs />}
        {isChatPage ? (
          <Outlet />
        ) : (
          <Container {...containerProps}>
            <Outlet />
          </Container>
        )}
      </Suspense>
      {footer}
    </>
  );
});

export default Layout;

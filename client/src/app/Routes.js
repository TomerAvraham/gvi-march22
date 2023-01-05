import React, { Suspense } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { routes as appRoutes } from "./_routes";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<NavbarLayout />}>
        {appRoutes.map((route, index) => (
          <Route path={route.path} element={<route.component />} key={index} />
        ))}
      </Route>
    </Routes>
  );
};

const NavbarLayout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
      </nav>
      <Suspense fallback={<h1>Loading..</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default routes;

import React, { Suspense } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const Index = React.lazy(() => import("../pages/Index"));
const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<NavbarLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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

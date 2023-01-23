import React, { Suspense } from "react";
import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import { routes as appRoutes } from "./_routes";
import { useSelector } from "react-redux";

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
    <>
      <nav>
        {appRoutes.map((route, index) => (
          <Link key={index} to={route.path}>
            {route.linkLabel}
          </Link>
        ))}
      </nav>
      <Suspense fallback={<h1>Loading..</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RouterWrapper;

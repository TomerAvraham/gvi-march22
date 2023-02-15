import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { mainRoutes, footerRoutes } from "./_routes";
import { useSelector } from "react-redux";
import Layout from "../layout/Layout/Layout";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? children : <Navigate to="/login" replace />;
};

const RouterWrapper = ({ children }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {mainRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.isProtected ? (
              <ProtectedRoute>
                <route.component />
              </ProtectedRoute>
            ) : (
              <route.component />
            )}
          />
        ))}
        {footerRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.isProtected ? (
              <ProtectedRoute>
                <route.component />
              </ProtectedRoute>
            ) : (
              <route.component />
            )}
          />
        ))}
      </Route>
    </Routes>
  );
};
export default RouterWrapper;



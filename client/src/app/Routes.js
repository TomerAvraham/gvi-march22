import React, { useCallback } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { appRoutes } from "./_routes";
import { useSelector } from "react-redux";
import Layout from "../layout/Layout/Layout";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? children : <Navigate to="/login" replace />;
};

const RouterWrapper = () => {
  const renderRoutes = useCallback(
    () =>
      appRoutes.map((route, index) => (
        <Route
          key={index}
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
        />
      )),
    []
  );
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {renderRoutes()}
      </Route>
    </Routes>
  );
};

export default RouterWrapper;

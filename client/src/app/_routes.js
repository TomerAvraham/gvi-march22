import React from "react";

const Index = React.lazy(() => import("../pages/Index"));
const Login = React.lazy(() => import("../pages/Login/Login"));
const Register = React.lazy(() => import("../pages/Register"));

export const routes = [
  { path: "/", component: Index },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

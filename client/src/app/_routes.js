import React from "react";

const Index = React.lazy(() => import("../pages/Home/Index"));
const Login = React.lazy(() => import("../pages/Login/Login"));
const Register = React.lazy(() => import("../pages/Register/Register"));
const Chat = React.lazy(() => import("../pages/Chat"));
const User = React.lazy(() => import("../pages/User/User"));
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy"));

const appRoutes = [
  // Main Routes
  {
    linkLabel: "Home",
    path: "/",
    component: Index,
    isProtected: true,
    isNavbarLink: true,
  },
  {
    linkLabel: "Chat",
    path: "/chat",
    component: Chat,
    isProtected: false,
    isNavbarLink: true,
  },

  // Auth Routes
  { linkLabel: "Login", path: "/login", component: Login },
  { linkLabel: "Register", path: "/register", component: Register },

  // User Routes
  { linkLabel: "User", path: "/user/:userId", component: User,isProtected: true },

  // Footer Routes
  {
    linkLabel: "Privacy Policy",
    path: "/privacyPolicy",
    component: PrivacyPolicy,
    isFooterLink: true,
  },
  { linkLabel: "Contact", path: "/contact", isFooterLink: true },
  { linkLabel: "Copy Rights", path: "/copyRights", isFooterLink: true },
];

export { appRoutes };

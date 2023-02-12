import React from "react";

const Index = React.lazy(() => import("../pages/Home/Index"));
const Login = React.lazy(() => import("../pages/Login/Login"));
const Register = React.lazy(() => import("../pages/Register/Register"));
const Chat = React.lazy(() => import("../pages/Chat"));
const Profile = React.lazy(() => import("../pages/Profile/Profile"));

const mainRoutes = [
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
  { linkLabel: "Login", path: "/login", component: Login },
  { linkLabel: "Register", path: "/register", component: Register },
];

const footerRoutes = [
  { linkLabel: "Privacy Policy", path: "/privacyPolicy" },
  { linkLabel: "Contact", path: "/contact" },
  { linkLabel: "Copy Rights", path: "/copyRights" },
];

const ProfileRoutes = [
  { linkLabel: "Profile", path: "/profile", component: Profile },
];

export { mainRoutes, footerRoutes, ProfileRoutes };

import React from "react";

const Index = React.lazy(() => import("../pages/Home/Index"));
const Login = React.lazy(() => import("../pages/Login/Login"));
const Register = React.lazy(() => import("../pages/Register/Register"));
const Chat = React.lazy(() => import("../pages/Chat"));
const User = React.lazy(() => import("../pages/User/User"));
const PrivacyPolicy = React.lazy(() =>
  import("../pages/PrivacyPolicy/PrivacyPolicy")
);
const ContactUs = React.lazy(() => import("../pages/ContactUs/ContactUs"));
const Profile = React.lazy(() => import("../pages/Profile/Profile"));

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
  {
    linkLabel: "Chat User ID",
    path: "/chat/:userId",
    component: Chat,
    isProtected: true,
    isNavbarLink: false,
  },
  { linkLabel: "Login", path: "/login", component: Login },
  { linkLabel: "Register", path: "/register", component: Register },

  // User Routes
  {
    linkLabel: "User",
    path: "/user/:userId",
    component: User,
    isProtected: true,
  },
  // profile routes
  { linkLabel: "Profile", path: "/profile", component: Profile },

  // Footer Routes
  {
    linkLabel: "Privacy Policy",
    path: "/privacyPolicy",
    component: PrivacyPolicy,
    isFooterLink: true,
  },
  {
    linkLabel: "Contact Us",
    path: "/contactUs",
    isFooterLink: true,
    component: ContactUs,
  },
  { linkLabel: "Copy Rights", path: "/copyRights", isFooterLink: true },
];

export { appRoutes };

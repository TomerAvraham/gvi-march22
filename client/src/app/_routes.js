import React from "react";

const Index = React.lazy(() => import("../pages/Home/Index"));
const Login = React.lazy(() => import("../pages/Login/Login"));
const Register = React.lazy(() => import("../pages/Register"));
const Chat = React.lazy(() => import("../pages/Chat"));
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy"));
const Contact = React.lazy(() => import("../pages/Contact"));
const CopyRights = React.lazy(() => import("../pages/CopyRights"));

export const routes = [
  { linkLabel: "LOGO(home)", path: "/", component: Index, isProtected: true },
  { linkLabel: "Chat", path: "/chat", component: Chat, isProtected: true },
  { linkLabel: "Login", path: "/login", component: Login },
  { linkLabel: "Register", path: "/register", component: Register },
];

export const footerRoutes = [
  { linkLabel: "(home)", path: "/", component: Index, isProtected: true },
  {
    linkLabel: "PrivacyPolicy",
    path: "/PrivacyPolicy",
    component: PrivacyPolicy,
  },
  { linkLabel: "Contact", path: "/Contact", component: Contact },
  { linkLabel: "CopyRights", path: "/CopyRights", component: CopyRights },
];

export const SOCKET_URL = "http://localhost:9001";

export const USER_ROLE = {
  ENTREPRENEUR: "ENTREPRENEUR",
  CONSULTANT: "CONSULTANT",
  ADMIN: "ADMIN",
};

export const USER_PROFILE_LINKS = [
  { label: "Profile", path: "/profile" },
  { label: "Account", path: "/" },
  { label: "Dashboard", path: "/" },
];
export const emailRegex = /^[-\w.]+@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,}$/;
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

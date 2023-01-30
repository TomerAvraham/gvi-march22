export const SOCKET_URL = "http://localhost:9001";

export const USER_ROLE = {
  ENTREPRENEUR: "ENTREPRENEUR",
  CONSULTANT: "CONSULTANT",
  ADMIN: "ADMIN",
};

export const USER_PROFILE_LINKS = [
  { label: "Profile", path: "/" },
  { label: "Account", path: "/" },
  { label: "Dashboard", path: "/" },
];
export const emailRegex =
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

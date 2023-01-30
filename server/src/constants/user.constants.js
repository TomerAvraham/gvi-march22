const USER_ROLE = {
  ENTREPRENEUR: "ENTREPRENEUR",
  CONSULTANT: "CONSULTANT",
  ADMIN: "ADMIN",
};

const EXPERTISE = {
  FULLSTACK_DEVELOPER: "FULLSTACK_DEVELOPER",
  BACKEND_DEVELOPER: "BACKEND_DEVELOPER",
  FRONTEND_DEVELOPER: "FRONTEND_DEVELOPER",
  UX_DESIGNER: "UX_DESIGNER",
};

const SELECTED_USER_FIELDS = [
  "_id",
  "email",
  "firstName",
  "lastName",
  "startup",
  "role",
  "location",
  "linksView",
  "expertise",
  "phoneNumber",
  "about",
  "imgSRC",
].join(" ");

module.exports = {
  USER_ROLE,
  EXPERTISE,
  SELECTED_USER_FIELDS,
};

import * as React from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Box role="presentation" onClick={handleClick} sx={{ mt: 3 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/">
          Home
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography color="text.primary" key={name}>
              {name}
            </Typography>
          ) : (
            <Link underline="hover" color="inherit" to={routeTo} key={name}>
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}

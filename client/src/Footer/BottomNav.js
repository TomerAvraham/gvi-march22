import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Paper } from "@mui/material";
import { footerRoutes } from "../app/_routes";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <Paper>
      <BottomNavigation
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        style={{ background: "#a29bfe" }}
      >
        <div>
          {footerRoutes.map((route, index) => (
            <Link key={index} to={route.path}>
              {route.linkLabel}
            </Link>
          ))}
        </div>
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BoxMessageActive = styled(Box)(({ theme }) => ({
  height: "90px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#0071ff",
  color: "#ffffff",
  cursor: "pointer",
  transition: "0.10s ease-in-out",
  boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.4)",
  zIndex: 1,

  "&:active": {
    transition: "0.10s ease-in-out",
    backgroundColor: "#2986e3"
  }
}));

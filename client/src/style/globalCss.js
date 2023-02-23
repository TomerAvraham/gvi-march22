import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";

export const MainContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: "100vh"
}));

// export const Sidebar = styled(Stack)(({ theme }) => ({
//   // width: "400px",
//   height: "100%",
//   minHeight: "100vh",
//   backgroundColor: "#ffffff",
//   borderRadius: "0 28px 0 0",
//   overflow: "hidden",
//   boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.4)",
//   zIndex: 1
// }));

// export const Main = styled(Stack)(({ theme }) => ({
//   width: "100%",
//   height: "100%",
//   minHeight: "100vh",
//   backgroundColor: "#ffffff"
// }));

export const TypographyStyle = styled(Typography)(({ theme, props }) => ({
  "&.MuiTypography-h1": {
    fontFamily: "Inter, sans-serif",
    fontSize: "20px",
    fontWeight: 700
  },

  "&.MuiTypography-h2": {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "15px"
  },

  "&.MuiTypography-h3": {
    fontFamily: "Inter, sans-serif",
    fontSize: "13px",
    fontWeight: 500
  },

  "&.MuiTypography-h4": {
    fontFamily: "Inter, sans-serif",
    fontSize: "12px",
    fontWeight: 400
  },

  "&.MuiTypography-h5": {
    fontFamily: "Inter, sans-serif",
    fontSize: "11px",
    fontWeight: 300
  },

  "&.MuiTypography-paragraph": {
    fontFamily: "Inter, sans-serif",
    fontSize: "11px",
    fontWeight: 400,
    color: "#bcbcbc"
  }
}));

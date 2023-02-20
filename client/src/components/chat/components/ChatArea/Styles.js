import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BoxChatArea = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#ffffff"
}));

export const BoxTopChat = styled(Box)(({ theme }) => ({
  width: "95%",
  height: "15%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 30px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)"
}));

export const LeftTopChat = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  "& .MuiAvatar-root": {
    width: "60px",
    height: "60px",
    marginRight: "10px"
  }
}));

export const RightTopChat = styled(Box)(({ theme }) => ({
  width: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 30px"
}));

export const BoxBottomChat = styled(Box)(({ theme }) => ({
  width: "70%",
  maxHeight: "700px",
  margin: "0 auto",
  marginTop: "20px",
  padding: "30px",
  backgroundColor: "#ffffff",
  overflowY: "scroll"
}));

export const ReceiverMessage = styled(Box)(({ theme }) => ({
  width: "30%",
  // height: "60px",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "center",
  color: "#ffffff",
  backgroundColor: "#0071ff",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",

  "& .MuiTypography-h2": {
    marginBottom: "10px"
  }
}));

export const SenderMessage = styled(Box)(({ theme }) => ({
  float: "right",
  width: "30%",
  // height: "60px",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "center",
  color: "#000000",
  backgroundColor: "#ffffff",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",

  "& .MuiTypography-h2": {
    marginBottom: "10px"
  }
}));

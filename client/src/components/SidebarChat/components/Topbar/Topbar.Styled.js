import { styled } from "@mui/material/styles";
import { Box, Badge, MenuItem, TextField } from "@mui/material";
import {
  MenuOutlined,
  MailOutlineOutlined,
  SearchOutlined,
  AddCircle,
  KeyboardArrowDown
} from "@mui/icons-material";

export const BoxMain = styled(Box)(({ theme }) => ({
  height: "270px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#ffffff",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
  zIndex: 1,

  form: {
    width: "100%",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px"
  }
}));

// Box Top (IconMenu, ProfileImage, IconNotification)
export const BoxTop = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginBottom: "10px"
}));

export const IconMenu = styled(MenuOutlined)(({ theme }) => ({
  color: "#585858",
  cursor: "pointer",
  transition: "0.55s ease-in-out",

  "&:hover": {
    color: "#292929"
  }
}));

export const ProfileTopbar = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  img: {
    width: "50px",
    height: "50px",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"
  }
}));

export const BadgeNotification = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    fontSize: "13px",
    fontWeight: "600",
    color: "#ffffff",
    backgroundColor: "#F55050"
  }
}));

export const IconNotification = styled(MailOutlineOutlined)(({ theme }) => ({
  color: "#585858",
  cursor: "pointer",
  transition: "0.55s ease-in-out",

  "&:hover": {
    color: "#292929"
  }
}));

export const MenuItemNotificationAndMessage = styled(MenuItem)(({ theme }) => ({
  "&.MuiMenuItem-root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    color: "#000",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000"
    }
  },

  h4: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#585858"
  },

  p: {
    fontSize: "12px",
    fontWeight: "400",
    color: "#585858"
  }
}));

// Box Search
export const TextFieldSearch = styled(TextField)(({ theme }) => ({
  "&.MuiTextField-root": {
    width: "70%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
    padding: "0 10px",
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #d8d8d8",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "15px",
    transition: "0.55s ease-in-out",

    "&:hover": {
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)"
    }
  }
}));

export const IconSearch = styled(SearchOutlined)(({ theme }) => ({
  color: "#A2A2A2",
  cursor: "pointer",
  transition: "0.55s ease-in-out",

  "&:hover": {
    color: "#6f6f6f"
  }
}));

// Box Bottom
export const BoxBottom = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "20px",
  padding: "0 30px"
}));

export const BoxInbox = styled(Box)(({ theme }) => ({
  margin: "15px 0"
}));

export const ArrowDownIcon = styled(KeyboardArrowDown)(({ theme }) => ({
  width: "20px",
  height: "20px"
}));

export const AddNewChatIcon = styled(AddCircle)(({ theme }) => ({
  width: "40px",
  height: "40px",
  cursor: "pointer",
  color: "#0071ff",

  "&:hover": {
    color: "#2986e3"
  }
}));

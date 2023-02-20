import { styled } from "@mui/material/styles";
import { Box, TextField } from "@mui/material";

export const BoxInputAddMessage = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "40px",
  display: "flex",
  alignItems: "center",
  padding: "2px 30px",
  margin: "0 auto",

  form: {
    width: "100%",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

export const TextFieldAddMessage = styled(TextField)(({ theme }) => ({
  "&.MuiTextField-root": {
    width: "100%",
    padding: "5px 10px",
    color: "#000",
    backgroundColor: "#fff",
    border: "1px solid #d8d8d8",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "10px",
    transition: "0.55s ease-in-out",

    "&:hover": {
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)"
    }
  }
}));

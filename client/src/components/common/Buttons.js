import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { Button } from "@mui/material";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#0071ff",
  "&:hover": {
    backgroundColor: "#0062ff",
  },
}));

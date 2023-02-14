import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { Button } from "@mui/material";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  color: !theme.palette.getContrastText(blue[900]),
  // padding:'8px 18px',
  borderRadius: "35px",
  backgroundColor: "ffff",
  border: "1px solid #0071ff",
  "&:hover": {
    backgroundColor: "#0062ff",
    color: "white",
  },
}));

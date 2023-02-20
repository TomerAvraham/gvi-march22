import React from "react";
import { InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";

// Styled Components - With MUI
import { BoxInputAddMessage, TextFieldAddMessage } from "./Styles";

export default function InputAddMessage() {
  return (
    <BoxInputAddMessage component="form">
      <TextFieldAddMessage
        placeholder="Type your message here..."
        variant="standard"
        fullWidth
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="start">
              <Send />
            </InputAdornment>
          )
        }}
      />
    </BoxInputAddMessage>
  );
}

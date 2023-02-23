import React from "react";
import { InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useChat } from "../../../../context/Chat.context";

// Styled Components - With MUI
import { BoxInputAddMessage, TextFieldAddMessage } from "./Styles";

export default function InputAddMessage() {
  const { socket } = useChat();

  function handleInputTyping() {
    socket.emit("user-typing");
  }

  return (
    <BoxInputAddMessage component="form">
      <TextFieldAddMessage
        placeholder="Type your message here..."
        variant="standard"
        fullWidth
        onChange={handleInputTyping}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="start">
              <Send />
            </InputAdornment>
          ),
        }}
      />
    </BoxInputAddMessage>
  );
}

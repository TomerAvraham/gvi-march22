import React, { useState } from "react";

// Styled Components - With MUI
import {
  BadgeMessageNoRead,
  BoxLastMessageTime,
  BoxMessage,
  BoxMessageContent,
  BoxMessageUser,
} from "./CardMessageBox.Styled";
import { TypographyStyle } from "../../../../style/globalCss";

const CardMessageBox = ({ chat }) => {
  const { consultantId } = chat;
  const {
    imgSRC: image,
    firstName: name,
    lastMessage,
    lastMessageTime,
    noReadMessage,
  } = consultantId;

  const [noReadMessages, setNoReadMessages] = useState(noReadMessage);

  const handleNoReadMessages = (noReadMessages) => {
    setNoReadMessages((noReadMessages = 0));
  };

  return (
    <BoxMessage onClick={handleNoReadMessages}>
      {/*  */}
      <BoxMessageContent>
        <img src={image} alt={`Image${" "}Profile-${name}`} />
        <BoxMessageUser>
          <TypographyStyle variant="h2" sx={{ mb: "5px" }}>
            {name}
          </TypographyStyle>
          <TypographyStyle paragraph={true}>{lastMessage}</TypographyStyle>
        </BoxMessageUser>
      </BoxMessageContent>

      <BoxLastMessageTime>
        <BadgeMessageNoRead
          badgeContent={noReadMessages}
          color="primary"
        ></BadgeMessageNoRead>
        <TypographyStyle variant="h5">{lastMessageTime}</TypographyStyle>
      </BoxLastMessageTime>
      {/*  */}
    </BoxMessage>
  );
};

export default CardMessageBox;

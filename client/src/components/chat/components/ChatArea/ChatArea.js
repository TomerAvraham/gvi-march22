import React, { useEffect, useState } from "react";
import { getUserById } from "../../../../services/user.service";
import { useParams } from "react-router-dom";
import {
  BoxBottomChat,
  BoxChatArea,
  BoxTopChat,
  LeftTopChat,
  ReceiverMessage,
  RightTopChat,
  SenderMessage
} from "./Styles";
import { Avatar, Divider } from "@mui/material";
import { TypographyStyle } from "../../../../style/globalCss";
import { IconSearch } from "../../../SidebarChat/components/Topbar/Topbar.Styled";

export default function ChatArea() {
  const { userId } = useParams();

  const [userIdInformation, setUserIdInformation] = useState({});

  useEffect(() => {
    if (userId) {
      getUserById(userId).then(setUserIdInformation);
    }
  }, [userId]);

  const { firstName, lastName, imgSRC, role } = userIdInformation;

  return (
    <BoxChatArea>
      {/* BoxTopChat */}
      <BoxTopChat>
        <LeftTopChat>
          <Avatar alt="Image Profile" src={imgSRC} />
          <TypographyStyle variant="h1">
            {firstName} {lastName} - {role}
          </TypographyStyle>
        </LeftTopChat>

        <RightTopChat>
          <Divider orientation="vertical" flexItem />
          <IconSearch />
        </RightTopChat>
      </BoxTopChat>

      {/* BoxBottomChat */}
      <BoxBottomChat>
        <ReceiverMessage>
          <TypographyStyle variant="h2">John Doe</TypographyStyle>
          <TypographyStyle paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </TypographyStyle>
        </ReceiverMessage>

        <SenderMessage>
          <TypographyStyle variant="h2">Tom Collins</TypographyStyle>
          <TypographyStyle paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </TypographyStyle>
        </SenderMessage>
      </BoxBottomChat>
    </BoxChatArea>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Text Functions
import { capitalizeFirstLetter } from "../../../../utils/capitalize.utils";

// Styled Components - With MUI
import {
  BadgeMessageNoRead,
  BoxLastMessageTime,
  BoxMessage,
  BoxMessageContent,
  BoxMessageUser
} from "./CardMessageBox.Styled";
import { TypographyStyle } from "../../../../style/globalCss";

const CardMessageBox = ({ chat }) => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);

  const { _id, firstName, lastName, imgSRC } =
    user.role === "CONSULTANT" ? chat.entrepreneurId : chat.consultantId;

  // const [noReadMessages, setNoReadMessages] = useState(noReadMessage);

  const handleNoReadMessages = async (noReadMessages) => {
    // setNoReadMessages((noReadMessages = 0));
    // await fetch(
    //   `http://localhost:3000/api/messages/updateNoReadMessages/${chat.id}`,
    //   {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${localStorage.getItem("token")}`
    //     },
    //     body: JSON.stringify({ noReadMessages })
    //   }
    // );
    navigate(`/chat/${_id}`, { replace: true });
  };

  return (
    <>
      <BoxMessage onClick={handleNoReadMessages}>
        {/*  */}
        <BoxMessageContent>
          <img
            src={imgSRC}
            alt={`Image${" "}Profile ${firstName}-${lastName}`}
          />
          <BoxMessageUser>
            <TypographyStyle variant="h2" sx={{ mb: "5px" }}>
              {capitalizeFirstLetter(firstName)}{" "}
              {capitalizeFirstLetter(lastName)}
            </TypographyStyle>
            <TypographyStyle paragraph={true}>Last Message</TypographyStyle>
          </BoxMessageUser>
        </BoxMessageContent>

        <BoxLastMessageTime>
          <BadgeMessageNoRead
            badgeContent={1}
            color="primary"
          ></BadgeMessageNoRead>
          <TypographyStyle variant="h5">Just now</TypographyStyle>
        </BoxLastMessageTime>
        {/*  */}
      </BoxMessage>
      {/* <Chat /> */}
    </>
  );
};

export default CardMessageBox;

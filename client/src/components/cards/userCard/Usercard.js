import React, { useState } from "react";

import CardComponent from "../../common/card/Card.js"
import { sentConnectionRequestById } from "../../../services/connection.service";
import ErrorMessagePop from "../../common/ErrorMessagePop";
const ERROR_MESSAGE_AUTO_HIDE_TIME = 3000;


// Things to delete

// import { CardStyle, TopBackgroundImg,  UserImage, UsernameParagraph, UserAboutParagraph } from "./UserCard.style";
// import { LocationOn, Phone, Person, Email } from "@mui/icons-material";
// import "./UserCard.css";
// import UserCardDetails from "./UserCardDetails";
// import { PrimaryButton } from "../../common/Buttons";





const UserCard = ({ user, dispatch }) => {
  const [error, setError] = useState("");

  const handleConnectClick = () => {
    sentConnectionRequestById(user._id)
      .then((data) => {
        dispatch({
          type: "connect_request",
          payload: {
            connect: data,
            userId: user._id,
          },
        });
      })
      .catch((error) => {
        setError(error.message);
        setTimeout(() => {
          setError("");
        }, ERROR_MESSAGE_AUTO_HIDE_TIME);
      });
  };

  return (
    <>
      <ErrorMessagePop
        isOpen={Boolean(error)}
        errorMessage={error}
        hideDuration={ERROR_MESSAGE_AUTO_HIDE_TIME}
      />
      <CardComponent user={user} onClick={handleConnectClick}/>asd
    </>
  );
};

export default UserCard;

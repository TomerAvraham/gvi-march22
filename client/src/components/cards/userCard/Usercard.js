import React, { useState } from "react";
import {
  CardMedia,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Stack,
  Chip,
  Avatar,
  Box,
} from "@mui/material";


import { CardStyle, TopBackgroundImg,  UserImage, UsernameParagraph, UserAboutParagraph } from "./UserCard.style";




import { LocationOn, Phone, Person, Email } from "@mui/icons-material";
import "./UserCard.css";
// import * as UserCardStyle from "./UserCard.style";
import UserCardDetails from "./UserCardDetails";
import { PrimaryButton } from "../../common/Buttons";
import { sentConnectionRequestById } from "../../../services/connection.service";
import ErrorMessagePop from "../../common/ErrorMessagePop";

const ERROR_MESSAGE_AUTO_HIDE_TIME = 3000;





const CardComponent = ({backgroundSrc, userSrc, username, about})=> {
  return(
  <>
    <TopBackgroundImg src={backgroundSrc ? backgroundSrc : undefined}/>
    <UserImage src={userSrc? userSrc : undefined}/>
    <UsernameParagraph>{username}</UsernameParagraph>
    <UserAboutParagraph>  
     {about}
    </UserAboutParagraph>
  </>
  )
}




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
      <CardStyle>
       <CardComponent username={user.firstName}/>
        <UserCardDetails user={user} />
        <CardActions>
          <PrimaryButton onClick={handleConnectClick}>
            {user.connect ? user.connect.status : "Request"}
          </PrimaryButton>
        </CardActions>
      </CardStyle>
    </>
  );
};

export default UserCard;

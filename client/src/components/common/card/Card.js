import React from 'react'
import { CardStyle,
    TopBackgroundImg,
    UserImage,
    UsernameParagraph,
    UserAboutParagraph,
         } from "./Card.style";
// import {
//    CardActions,
// } from "@mui/material";
// import { PrimaryButton } from "../Buttons";

import { PrimaryButton } from "../test/Buttons";

const aboutDemo = "6+ Years of Front End Engineering, Former Amazonian, and Top Rated Educator / Mentor";



const CardComponent = ({backgroundSrc, user, onClick}) => {
  return (
    <>
    <CardStyle>
    <TopBackgroundImg src={backgroundSrc ? backgroundSrc : undefined}/>
    <UserImage src={user.imgSRC ? user.imgSRC : undefined}/>
    <UsernameParagraph>{user.firstName}</UsernameParagraph>
    <UserAboutParagraph>  
     {`${(user.about || aboutDemo).slice(0, 60)}....` }
    </UserAboutParagraph>
    <PrimaryButton onClick={onClick} status={user.connect?.status}>
            {user.connect ? user.connect.status : "Request"}
    </PrimaryButton>

    </CardStyle>
  </>
  )
}

export default CardComponent
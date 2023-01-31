import React from "react";

// Styled Components - With MUI
import {
  BoxLastMessageTime,
  BoxMessageContent,
  BoxMessageUser
} from "../CardMessageBox/CardMessageBox.Styled";
import { BoxMessageActive } from "./ActiveCardMessageBox.Styled";
import { TypographyStyle } from "../../../../style/globalCss";

// Demo Data
const profileDemo = "http://localhost/MessageBox/1.png";

const ActiveCardMessageBox = () => {
  return (
    <BoxMessageActive>
      {/*  */}
      <BoxMessageContent>
        <img src={profileDemo} alt="Profile" />
        <BoxMessageUser>
          <TypographyStyle variant="h2" sx={{ mb: "5px" }}>
            Jane Rogers
          </TypographyStyle>
          <TypographyStyle paragraph={true} style={{ color: "#ffffff" }}>
            Hello John
          </TypographyStyle>
        </BoxMessageUser>
      </BoxMessageContent>

      <BoxLastMessageTime>
        <TypographyStyle variant="h5">Just now</TypographyStyle>
      </BoxLastMessageTime>
      {/*  */}
    </BoxMessageActive>
  );
};

export default ActiveCardMessageBox;

import React, { Fragment } from "react";
import { useSidebarContext } from "../../../../context/Sidebar.context";

import { Divider } from "@mui/material";

// Components Card
import CardMessageBox from "../CardMessageBox/CardMessageBox";
// import ActiveCardMessageBox from "../ActiveCardMessageBox/ActiveCardMessageBox";
import { useSelector } from "react-redux";
import { useChat } from "../../../../context/Chat.context";

const MessageBox = () => {
  const { searchFiled } = useSidebarContext();
  const { user } = useSelector((store) => store.auth);
  const { conversations } = useChat();

  return (
    <Fragment>
      {/* <ActiveCardMessageBox />
      <Divider variant="fullWidth" orientation="horizontal" /> */}
      {conversations
        .filter((item, index) => {
          const isConsultant = user.role === "CONSULTANT";
          return isConsultant
            ? item.entrepreneurId.firstName
                .toLowerCase()
                .includes(searchFiled.toLowerCase())
            : item.consultantId.firstName
                .toLowerCase()
                .includes(searchFiled.toLowerCase());
        })
        .map((item, index) => (
          <Fragment key={index}>
            <CardMessageBox chat={item} />
            <Divider variant="fullWidth" orientation="horizontal" />
          </Fragment>
        ))}
    </Fragment>
  );
};

export default MessageBox;

import React, { Fragment } from "react";
import { useSidebarContext } from "../../../../context/Sidebar.context";
import { Divider } from "@mui/material";

// Components Card
import CardMessageBox from "../CardMessageBox/CardMessageBox";
import ActiveCardMessageBox from "../ActiveCardMessageBox/ActiveCardMessageBox";
import { useSelector } from "react-redux";

// Demo Data
const MessageBox = () => {
  const { searchFiled } = useSidebarContext();
  const { conversations } = useSelector((store) => store.messages);

  return (
    <Fragment>
      <ActiveCardMessageBox />
      <Divider variant="fullWidth" orientation="horizontal" />
      {conversations
        .filter((item, index) => {
          return searchFiled.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(searchFiled.toLowerCase());
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
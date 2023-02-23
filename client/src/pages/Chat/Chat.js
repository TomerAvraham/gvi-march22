import React, { useEffect, useState } from "react";
import SidebarProvider from "../../context/Sidebar.context";

import { MainContainer } from "../../style/globalCss";
import Grid from "@mui/material/Unstable_Grid2";

import SidebarChat from "../../components/SidebarChat/SidebarChat";
import ChatBox from "../../components/chat/ChatComponents";
import { useDispatch } from "react-redux";
import { getAllConversations } from "../../app/redux/slices/messageSlice";
import ChatProvider from "../../context/Chat.context";

const Chat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllConversations());
  }, [dispatch]);

  return (
    <ChatProvider>
      <SidebarProvider>
        <MainContainer>
          <Grid container>
            <Grid item xs={12} sm={5} md={4} lg={3}>
              <SidebarChat />
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              md={8}
              lg={9}
              sx={{ display: { xs: "none", sm: "grid" } }}
            >
              <ChatBox />
            </Grid>
          </Grid>
        </MainContainer>
      </SidebarProvider>
    </ChatProvider>
  );
};

export default Chat;

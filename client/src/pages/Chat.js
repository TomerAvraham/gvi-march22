import React, { useEffect } from "react";
import SidebarProvider from "../context/Sidebar.context";

// Styled Components - With MUI
import { Main, MainContainer, Sidebar } from "../style/globalCss";
import Grid from "@mui/material/Unstable_Grid2";

// Components
import SidebarChat from "../components/SidebarChat/SidebarChat";
import { useDispatch } from "react-redux";
import { getAllConversations } from "../app/redux/slices/messageSlice";

// Xs - Phone
// Sm - Tablet
// Md - Laptop
// Lg - Desktop

const Chat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllConversations());
  }, [dispatch]);

  return (
    <SidebarProvider>
      <MainContainer>
        <Grid container>
          {/* Sidebar */}
          <Grid item xs={12} sm={5} md={4} lg={3}>
            <SidebarChat />
          </Grid>
          {/* End */}

          {/* Main */}
          <Grid
            item
            xs={12}
            sm={7}
            md={8}
            lg={9}
            sx={{ display: { xs: "none", sm: "grid" } }}
          >
            Main
          </Grid>
          {/* End */}
        </Grid>
      </MainContainer>
    </SidebarProvider>
  );
};

export default Chat;

import React, { useEffect, useState, useReducer } from "react";
import { getAllUsersByRole } from "../../services/user.service";
import { Container, Grid } from "@mui/material";
import UserCard from "../../components/cards/userCard/UserCard";

import useRequest from "../../hooks/useRequestByCallBack";

import { ContainerHome, ContainerHomeMain, BoxPendingInvitations, BoxAddPersonalContacts, ImageBookIcon, DivParagraph, NoteParagraph, InputBoxAddPersonal} from "./index.style"
import SidebarHome from "../../components/SidebarHome/SidebarHome";

function userReducer(state, action) {
  if (action.type === "initial_users") {
    return action.payload.users;
  }

  if (action.type === "connect_request") {
    const { connect, userId } = action.payload;
    const stateCopy = [...state];
    const userToAddConnectIndex = stateCopy.findIndex(
      (user) => user._id === userId
    );
    stateCopy[userToAddConnectIndex] = {
      ...stateCopy[userToAddConnectIndex],
      connect,
    };
    return stateCopy;
  }

  return state;
}

const Index = () => {
  const [users, dispatch] = useReducer(userReducer, []);

  const fetchUsers = async () => {
    const data = await getAllUsersByRole();
    return data;
  };

  useEffect(() => {
    fetchUsers().then((data) =>
      dispatch({
        type: "initial_users",
        payload: {
          users: data,
        },
      })
    );
  }, []);

  return (
    <ContainerHome>
      <SidebarHome/>
      <ContainerHomeMain>
        <BoxPendingInvitations>
          <p>No pending invitations</p>
          <p>Manage</p>
        </BoxPendingInvitations>
        <BoxAddPersonalContacts>
          <DivParagraph>
         <ImageBookIcon/>
         <p style={{paddingLeft: "20px"}}>Add personal contacts</p>
          </DivParagraph>
         <NoteParagraph>We’ll periodically import and store your contacts to help you and others connect. You choose who to connect to and who to invite.</NoteParagraph>
         <InputBoxAddPersonal/>
        </BoxAddPersonalContacts>
      <Grid container spacing={2}>
        {users &&
          users.map((user) => (
            <Grid key={user._id} item xs={12} sm={6} md={4}>
              <UserCard dispatch={dispatch} key={user._id} user={user} />
            </Grid>
          ))}
      </Grid>
      </ContainerHomeMain>
    </ContainerHome>
  );
};

export default Index;

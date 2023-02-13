import React, { useEffect, useState, useReducer } from "react";
import { getAllUsersByRole } from "../../services/user.service";
import { Container, Grid } from "@mui/material";
import UserCard from "../../components/cards/UserCard/UserCard";
import useRequest from "../../hooks/useRequestByCallBack";

import ButtonReturnTop from "../../components/ButtonGeneric/ButtonReturnTop";

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
    <Container>
      <Grid container spacing={2}>
        {users &&
          users.map((user) => (
            <Grid key={user._id} item xs={12} sm={6} md={4}>
              <UserCard dispatch={dispatch} key={user._id} user={user} />
            </Grid>
          ))}
      </Grid>
      <ButtonReturnTop />
    </Container>
  );
};

export default Index;

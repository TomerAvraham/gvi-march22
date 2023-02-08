import React, { useEffect, useState } from "react";
import { getAllUsersByRole } from "../../services/user.service";
import {sentConnectionRequestById} from "../../services/connection.service";
import { Container, Grid } from "@mui/material";
import UserCard from "../../components/cards/userCard/UserCard";
import useRequest from "../../hooks/useRequestByCallBack";

const Index = () => {
  const [users, isLoadingUsers, errorUsers] = useRequest(getAllUsersByRole);
  const [connections, isLoadingConnections, errorConnections] = useRequest(sentConnectionRequestById);

  console.log(users);
  console.log(connections)

  return isLoadingUsers||isLoadingConnections ? (
    <h1>Loading...</h1>
  ) : (
    <Container>
      <Grid container spacing={2}>
        {users &&
          users.map((user) => (
          connections.map((connection)=>(
            <Grid key={user._id} item xs={12} sm={6} md={4}>
              <UserCard key={user._id} user={user} connection={connection} />
            </Grid>
          ))
          ))}
      </Grid>
    </Container>
  );
};

export default Index;

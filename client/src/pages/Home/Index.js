import React, { useEffect, useState } from "react";
import { getAllUsersByRole } from "../../services/user.service";
import { Container, Grid } from "@mui/material";
import UserCard from "../../components/cards/userCard/UserCard";
import useRequest from "../../hooks/useRequestByCallBack";

const Index = () => {
  const [users, isLoading, error] = useRequest(getAllUsersByRole);

  console.log(users);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Container>
      <Grid container spacing={2}>
        {users &&
          users.map((user) => (
            <Grid key={user._id} item xs={12} sm={6} md={4}>
              <UserCard key={user._id} user={user} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Index;

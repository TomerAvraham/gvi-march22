import React, { useEffect, useState } from "react";
import { getAllUsersByRole } from "../../services/user.service";
import { Container, Grid } from "@mui/material";
import UserCard from "../../components/cards/userCard/UserCard";

const Index = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const data = await getAllUsersByRole({ signal: controller.signal });
      setUsers(data);
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return (
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

import React, { useEffect, useReducer } from "react";
import { getAllUsersByRole } from "../../services/user.service";
import { Grid, Box } from "@mui/material";

import ReviewCard from "../../components/ReviewCard/ReviewCard";
import classess from "./index.module.css";
import { useSelector } from "react-redux";

import SearchInput from "../../components/SearchInput";
import Typography from "@mui/material/Typography";

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
  const { user } = useSelector((state) => state.auth);
  const pageTitle =
    user.role === "ENTREPRENEUR" ? "Find Consultent" : "Find Entrepreneur";

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
    <Box component={"section"} sx={{ my: 1 }}>
      <div className={classess.search_container}>
        <Typography variant="h5" paddingY={3}>
          {pageTitle}
        </Typography>
        <SearchInput />
      </div>
      <br></br>
      <Grid container spacing={4}>
        {users.length ? (
          users.map((user) => (
            <Grid key={user._id} item xs={12} sm={6} md={4} lg={3}>
              <ReviewCard user={user} dispatch={dispatch} />
            </Grid>
          ))
        ) : (
          <Grid item>
            <Typography variant="p">Not Found</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Index;

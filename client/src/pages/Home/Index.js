import React, { useEffect, useReducer, useState, useMemo } from "react";
import { getAllUsersByRole } from "../../services/user.service";
import { Grid, Box } from "@mui/material";

import ReviewCard from "../../components/ReviewCard/ReviewCard";
import classess from "./index.module.css";
import { useSelector } from "react-redux";

import SearchInput from "../../components/common/Search/SearchUsersInput";
import Typography from "@mui/material/Typography";
import SkeletonLoader from "../../components/common/Skeleton/SkeletonLoader";
import useUserSearch from "../../hooks/useUserSearch";

function userReducer(state, action) {
  switch (action.type) {
    case "initial_users":
      return action.payload.users;
    case "connect_request":
      const { connect, userId } = action.payload;
      return state.map((user) =>
        user._id === userId ? { ...user, connect } : user
      );
    default:
      return state;
  }
}

const Index = () => {
  const { user } = useSelector((state) => state.auth);
  const pageTitle = useMemo(
    () =>
      user.role === "ENTREPRENEUR" ? "Find Consultent" : "Find Entrepreneur",
    [user.role]
  );

  const [users, dispatch] = useReducer(userReducer, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllUsersByRole().then((data) => {
      if (data.length > 0) {
        dispatch({
          type: "initial_users",
          payload: {
            users: data,
          },
        });
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const { filteredUsers, isFiltering, searchUsers } = useUserSearch(users);

  return (
    <Box component={"section"} sx={{ my: 1 }}>
      <div className={classess.search_container}>
        <Typography variant="h5" paddingY={3}>
          {pageTitle}
        </Typography>
        <SearchInput onSearch={searchUsers} />
      </div>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <Grid container spacing={4}>
          {isFiltering && filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <Grid key={user._id} item xs={12} sm={6} md={4} lg={3}>
                <ReviewCard user={user} dispatch={dispatch} />
              </Grid>
            ))
          ) : users.length > 0 && !isFiltering ? (
            users.map((user) => (
              <Grid key={user._id} item xs={12} sm={6} md={4} lg={3}>
                <ReviewCard user={user} dispatch={dispatch} />
              </Grid>
            ))
          ) : (
            <Grid item>
              <Typography variant="p">No users found</Typography>
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default Index;

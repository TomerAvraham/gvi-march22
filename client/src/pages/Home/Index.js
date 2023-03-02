import React, {
  useEffect,
  useReducer,
  useState,
  useMemo,
  useCallback,
} from "react";
import {
  getAllUsersByRole,
  getCountryList,
  getExpertisesList,
} from "../../services/user.service";
import { Grid, Box } from "@mui/material";
import CountrySelectField from "./components/CountrySelectField";
import ExpertiseSelectField from "./components/ExpertiseSelectField";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import classess from "./index.module.css";
import { useSelector } from "react-redux";

import SearchInput from "../../components/common/Search/SearchUsersInput";
import Typography from "@mui/material/Typography";
import SkeletonLoader from "../../components/common/Skeleton/SkeletonLoader";
import useUserSearch from "../../hooks/useUserSearch";
import useUserCountrySelect from "../../hooks/useUserCountrySelect";
import useUserExpertiseSelect from "../../hooks/useUserExpertiseSelect";
import ButtonReturnTop from "../../components/ButtonGeneric/ButtonReturnTop";
import ToggleCardsLayout from "./components/ToggleCardsLayout";

import InviteDialog from "./components/InviteDialog";

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
  const currentUser = useSelector((state) => state.auth?.user);
  const pageTitle = useMemo(() => {
    if (currentUser.role === "ADMIN") {
      return "Find Consultant & Entrepreneur";
    } else if (currentUser.role === "ENTREPRENEUR") {
      return "Find Consultant";
    } else {
      return "Find Entrepreneur";
    }
  }, [currentUser.role]);

  const [users, dispatch] = useReducer(userReducer, []);
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [expertises, setExpertises] = useState([]);
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);

  const handleInviteDialogClickOpen = () => {
    setIsInviteDialogOpen(true);
  };

  const handleInviteDialogClose = () => {
    setIsInviteDialogOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      const users = await getAllUsersByRole();
      if (users.length > 0) {
        dispatch({
          type: "initial_users",
          payload: {
            users: users,
          },
        });
        setIsLoading(false);
      }
    }
    fetchData();
  }, [currentUser]);
  
  useEffect(() => {
    async function fetchData() {
      const [countries, expertises] = await Promise.all([
        getCountryList(),
        getExpertisesList(),
      ]);
      setCountries(countries);
      setExpertises(expertises);
    }
    fetchData();
  }, [users]);

  const { filteredUsers, isFiltering, searchUsers } = useUserSearch(users);
  const {
    filteredByCountry,
    isFilteringByCountry,
    country,
    handleCountryChange,
  } = useUserCountrySelect(users);

  const {
    filteredByExpertise,
    isFilteringByExpertise,
    expertise,
    handleExpertiseChange,
  } = useUserExpertiseSelect(users);

  const [isLayoutToggeld, setIsToggle] = useState(false);

  const handleIsLayoutToggeld = useCallback(() => {
    setIsToggle((prev) => !prev);
  }, []);

  const renderUser = (user) =>
    user._id !== currentUser._id && (
      <Grid
        key={user._id}
        item
        xs={12}
        sm={10}
        md={6}
        lg={4}
        xl={isLayoutToggeld ? 12 : 3}
      >
        <ReviewCard
          isLayoutToggeld={isLayoutToggeld}
          user={user}
          dispatch={dispatch}
        />
      </Grid>
    );

  return (
    <Box component={"section"} sx={{ my: 1 }}>
      <div className={classess.search_container}>
        <Box className={classess.search_container}>
          <Typography variant="h5" paddingY={3}>
            {pageTitle}
          </Typography>
          <SearchInput onSearch={searchUsers} />
        </Box>
        <Box sx={{ ml: "auto" }}>
          <div className={classess.search_container}>
            <InviteDialog
              isInviteDialogOpen={isInviteDialogOpen}
              handleInviteDialogClickOpen={handleInviteDialogClickOpen}
              handleInviteDialogClose={handleInviteDialogClose}
            />
            <ToggleCardsLayout
              handleInviteDialogClickOpen={handleInviteDialogClickOpen}
              isLayoutToggeld={isLayoutToggeld}
              handleIsLayoutToggeld={handleIsLayoutToggeld}
            />
            <ExpertiseSelectField
              expertises={expertises}
              expertise={expertise}
              handleExpertiseChange={handleExpertiseChange}
            />
            <CountrySelectField
              countries={countries}
              country={country}
              handleCountryChange={handleCountryChange}
            />
          </div>
        </Box>
      </div>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <Grid container spacing={2}>
          {isFilteringByExpertise && !isFiltering && !isFilteringByCountry ? (
            filteredByExpertise.map(renderUser)
          ) : isFilteringByCountry && !isFiltering ? (
            filteredByCountry.map(renderUser)
          ) : isFiltering && filteredUsers.length > 0 ? (
            filteredUsers.map(renderUser)
          ) : users.length > 0 && !isFiltering ? (
            users.map(renderUser)
          ) : (
            <Grid item>
              <Typography variant="p">No users found</Typography>
            </Grid>
          )}
        </Grid>
      )}

      <ButtonReturnTop />
    </Box>
  );
};

export default Index;

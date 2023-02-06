import React from "react";
import {
  CardMedia,
  Card,
  CardActions,
  CardContent,
  Typography,
  Divider,
  Stack,
  Switch,
  Chip,
  Avatar,
  Box,
} from "@mui/material";
import { LocationOn, Phone, Person, Email } from "@mui/icons-material";
import "./UserCard.css";
import * as UserCardStyle from "./UserCard.style";
import UserCardDetails from "./UserCardDetails";

const UserCard = ({ user }) => {
  return (
    <Card sx={{ margin: 4, color: "var(--text--color)" ,border: "3px solid #000" , 
    maxHeight:{xs: 500, sm: 400, md: 600 },
    maxWidth: 340,
  }}
    
    >
      <CardMedia
        sx={UserCardStyle.cardMediaStyle}
        image={
          "https://www.realco.co.il/wp-content/uploads/2020/01/%D7%A8%D7%A7%D7%A2-%D7%9E%D7%95%D7%91%D7%99%D7%99%D7%9C-min.jpg"
        }
        title="green iguana"
      >
        <Avatar
          alt="Remy Sharp"
          src="https://cdnb.artstation.com/p/assets/images/images/039/196/767/20210702010025/smaller_square/beomjun-baek-face-work.jpg?1625205625"
          sx={{
            width: 86,
            height: 86,
            // position: "absolute",
            top: 180,
            ml: 2,
          }}
        ></Avatar>

        <Typography
          sx={{
            // position: "absolute",
            top: 230,
            ml: 18,
            fontWeight: "bold",
            fontSize: 19,
            fontFamily: "var(--title--font)",
            color: "var(--text--color)",
          }}
        >
          {user.first_name}
          <Typography sx={{ fontSize: 12, color: "var(--text--color)" }}>
            <LocationOn sx={{ ml: -0.5, fontSize: 12 }} />
            {user.country}
          </Typography>
        </Typography>
      </CardMedia>

      <Box>
        <CardContent
          sx={{
            mt: 5,
          }}
        >
          <Divider />
          <Typography
            variant="body2"
            color="var(--text--color)"
            fontFamily="var(--title--font)"
            sx={{
              padding: 2,
              height: 0,
              color: "transparent",
              "&:hover": {
                color: "black",
                height: 50,
                transitionDelay: "100ms",
              },
            }}
          >
           <h4>{user.role}</h4>
          </Typography>
        </CardContent>
      </Box>

      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <UserCardDetails user={user} />
      </CardActions>

      <Divider />

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 1, bgcolor: "background.default", p: 2 }}
      >
        <Chip label="chat" color="primary" onClick={function () {}}></Chip>
        <Chip label="Online" color="success" onClick={function () {}}></Chip>

        <Chip
          label="link"
          variant="outlined"
          color="primary"
          onClick={function () {}}
        ></Chip>
      </Stack>
    </Card>
  );
};

export default UserCard;

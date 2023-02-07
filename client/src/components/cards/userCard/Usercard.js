import React from "react";
import {
  CardMedia,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Avatar,
  Box,
} from "@mui/material";
import { LocationOn, Phone, Person, Email } from "@mui/icons-material";
import "./UserCard.css";
import * as UserCardStyle from "./UserCard.style";
import UserCardDetails from "./UserCardDetails";
import { PrimaryButton } from "../../common/Buttons";
import { sentConnectionRequestById } from "../../../services/connection.service";

const UserCard = ({ user }) => {
  // const [] = useRequest()

  return (
    <Card sx={{ maxWidth: 305, margin: 4, color: "var(--text--color)" }}>
      <CardMedia
        sx={UserCardStyle.cardMediaStyle}
        image={
          "https://www.realco.co.il/wp-content/uploads/2020/01/%D7%A8%D7%A7%D7%A2-%D7%9E%D7%95%D7%91%D7%99%D7%99%D7%9C-min.jpg"
        }
        title="green iguana"
      ></CardMedia>
      <CardHeader
        sx={UserCardStyle.CardHeader}
        avatar={
          <Avatar
            alt="Remy Sharp"
            src="https://cdnb.artstation.com/p/assets/images/images/039/196/767/20210702010025/smaller_square/beomjun-baek-face-work.jpg?1625205625"
            sx={{
              width: 86,
              height: 86,
              ml: 2,
            }}
          ></Avatar>
        }
        title="Lizard"
        subheader="Tel aviv"
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 19,
            fontFamily: "var(--title--font)",
            color: "var(--title--color)",
          }}
        >
          Lizard
          <Typography
            sx={{ fontSize: 12, color: "var(--text--color)" }}
          ></Typography>
        </Typography>
      </CardHeader>

      <Box>
        <CardContent>
          <Divider />
          <Typography
            variant="body2"
            color="var(--text--color)"
            fontFamily="var(--title--font)"
            sx={UserCardStyle.cardAboutStyle}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Box>
      <UserCardDetails user={user} />

      <CardActions sx={UserCardStyle.cardActionStyle}>
        <PrimaryButton
          onClick={() => {
            sentConnectionRequestById(user._id);
          }}
        >
          {user.connect ? user.connect.status : "Request"}
        </PrimaryButton>
      </CardActions>

      <Divider />
    </Card>
  );
};

export default UserCard;

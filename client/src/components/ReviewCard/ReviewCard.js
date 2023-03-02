import React from "react";
import ErrorMessagePop from "../common/ErrorMessagePop";
import {
  getConnectionStatusColor,
  getUserStatusConnection,
} from "../../utils/connection.util";
import { addLikeToUser } from "../../app/redux/slices/userSlice";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CardMenu from "./CardMenu";
import ConnectStatusChip from "./ConnectStatusChip";
import { sentConnectionRequestById } from "../../services/connection.service";
import classess from "./reviewCard.module.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from "@mui/icons-material/Send";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const ERROR_MESSAGE_AUTO_HIDE_TIME = 3000;

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ReviewCard({ user, dispatch, isLayoutToggeld }) {
  const { role } = useSelector((store) => store.auth.user);


  const isAdmin = role === "ADMIN";

  const reduxDispatch = useDispatch();

  const [expanded, setExpanded] = React.useState(false);
  const userUrl = `/user/${user._id}`;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [error, setError] = React.useState("");

  const handleConnectClick = () => {
    sentConnectionRequestById(user._id)
      .then((data) => {
        dispatch({
          type: "connect_request",
          payload: {
            connect: data,
            userId: user._id,
          },
        });
      })
      .catch((error) => {
        setError(error.message);
        setTimeout(() => {
          setError("");
        }, ERROR_MESSAGE_AUTO_HIDE_TIME);
      });
  };

  const handleAddLikeToUser = async () => {
    reduxDispatch(addLikeToUser(user._id));
  };

  const status = getUserStatusConnection(user);
  const color = getConnectionStatusColor(status);

  return (
    <Card sx={{ maxWidth: "100%" }} className={classess.card_container}>
      <ErrorMessagePop
        isOpen={Boolean(error)}
        errorMessage={error}
        hideDuration={ERROR_MESSAGE_AUTO_HIDE_TIME}
      />

      <CardMedia
        sx={{ height: isLayoutToggeld || 85 }}
        image="https://media.istockphoto.com/id/1390650720/photo/digital-network-connection-abstract-connection-of-dots-and-lines-technology-background-plexus.jpg?b=1&s=170667a&w=0&k=20&c=SUkUz3EzbbcC25vGSHdV_9MxR0Mun8giVcuHoyOKwDo="
        title={`${user.firstName} ${user.lastName}`}
      >
        <ConnectStatusChip sx={{ m: 10 }} user={user} />
      </CardMedia>
      <CardHeader
        avatar={
          <Link to={{ pathname: userUrl, state: `?id=${user._id}` }}>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {user.imgSRC ? (
                <img width={75} src={user.imgSRC} alt=""></img>
              ) : (
                "R"
              )}
            </Avatar>
          </Link>
        }
        action={isAdmin ? <CardMenu userId={user._id} /> : <></>}
        title={`${user.firstName}  ${user.lastName}`}
        subheader={user.email}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: isLayoutToggeld ? "row" : "column",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Role: {user.role}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          phoneNumber: {user.phoneNumber || "048745978"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mentoring: {user.mentoring || "mentoring"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Expertise: {user.expertise}
        </Typography>
        Country: {user.location && user.location.country}
        {/* <br />
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like. */}
      </CardContent>

      <CardActions disableSpacing>
        <Tooltip title={user.connect ? "Cancel Request" : "Request"}>
          <IconButton
            aria-label="Request"
            color={color}
            onClick={handleConnectClick}
          >
            {/* <PrimaryButton>Request</PrimaryButton> */}
            <GroupAddIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Like">
          <IconButton onClick={handleAddLikeToUser} aria-label="Like">
            <ThumbUpIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Send Message">
          <Link to="/chat">
            <IconButton aria-label="Send Message">
              <SendIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>About:</Typography>

          {user.about ? (
            <Typography variant="body2" color="text.secondary">
              {user.about}
            </Typography>
          ) : (
            <Typography variant="body2" color="text.secondary">
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
              cups chicken broth; bring to a boil.
            </Typography>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default React.memo(ReviewCard);
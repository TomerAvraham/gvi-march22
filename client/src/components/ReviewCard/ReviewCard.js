import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PrimaryButton } from "../common/Buttons";
import classess from "./reviewCard.module.css";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Tooltip from "@mui/material/Tooltip";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import ErrorMessagePop from "../common/ErrorMessagePop";
import { getConnectionStatusColor } from "../../utils/connection.util";
import ConnectStatusChip from "./ConnectStatusChip";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { getUserStatusConnection } from "../../utils/connection.util";
import CardMenu from "./CardMenu";
import { useSelector } from "react-redux";

import { sentConnectionRequestById } from "../../services/connection.service";
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

export default function ReviewCard({ user, dispatch }) {
  const { role } = useSelector((store) => store.auth.user);
  const isAdmin = role === "ADMIN";

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

  const status = getUserStatusConnection(user);
  const color = getConnectionStatusColor(status);

  return (
    <Card sx={{ maxWidth: 345 }} className={classess.card_container}>
      <ErrorMessagePop
        isOpen={Boolean(error)}
        errorMessage={error}
        hideDuration={ERROR_MESSAGE_AUTO_HIDE_TIME}
      />

      <CardMedia
        sx={{ height: 85 }}
        image="https://media.istockphoto.com/id/1390650720/photo/digital-network-connection-abstract-connection-of-dots-and-lines-technology-background-plexus.jpg?b=1&s=170667a&w=0&k=20&c=SUkUz3EzbbcC25vGSHdV_9MxR0Mun8giVcuHoyOKwDo="
        title="green iguana"
      >
        <ConnectStatusChip sx={{ m: 10 }} user={user} />
      </CardMedia>
      <CardHeader
        avatar={
          <Link to={{ pathname: userUrl, state: `?id=${user._id}` }}>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src="/demoProfile/profile.png" alt=""></img>
            </Avatar>
          </Link>
        }
        action={isAdmin ? <CardMenu userId={user._id} /> : <></>}
        title={`${user.firstName}  ${user.lastName}`}
        subheader={user.email}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
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

        <Tooltip title="Add to favorites">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
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

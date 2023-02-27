import React from "react";
import {Button,ButtonGroup,Tooltip} from "@mui/material";



import ViewStreamIcon from "@mui/icons-material/ViewStream";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";



const ToggleCardsLayout = ({
  isLayoutToggeld,
  handleIsLayoutToggeld,
  handleInviteDialogClickOpen,
}) => {
  return (
    <>
      <ButtonGroup
        color="primary"
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Tooltip
          placement="top"
          arrow
          title={isLayoutToggeld ? "Card View" : "List View"}
        >
          <Button onClick={handleIsLayoutToggeld}>
            {isLayoutToggeld ? <ViewWeekIcon /> : <ViewStreamIcon />}
          </Button>
        </Tooltip>
      </ButtonGroup>
      <Tooltip placement="top" arrow title="Invite Friend's to connect">
        <Button
          variant="outlined"
          onClick={handleInviteDialogClickOpen}
          endIcon={<ForwardToInboxIcon />}
        >
          Invite Connection
        </Button>
      </Tooltip>
    </>
  );
};

export default ToggleCardsLayout;

import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import Tooltip from "@mui/material/Tooltip";

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

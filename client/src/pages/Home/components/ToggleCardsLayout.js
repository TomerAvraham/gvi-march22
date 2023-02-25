import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import Tooltip from "@mui/material/Tooltip";

const ToggleCardsLayout = ({ isLayoutToggeld, handleIsLayoutToggeld }) => {
  return (
    <>
      <ButtonGroup
        color="primary"
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Tooltip placement="top" arrow  title="Toggle Cards layout">
          <Button onClick={handleIsLayoutToggeld}>
            {isLayoutToggeld ? <ViewStreamIcon /> : <ViewWeekIcon />}
          </Button>
        </Tooltip>
      </ButtonGroup>
      <Tooltip placement="top" arrow  title="Invite Friend's to connect">

      <Button variant="outlined" endIcon={<ForwardToInboxIcon />}>
        Invite
      </Button>
      </Tooltip>
    </>
  );
};

export default ToggleCardsLayout;

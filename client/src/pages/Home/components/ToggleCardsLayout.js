import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
const ToggleCardsLayout = () => {
  return (
     <ButtonGroup
     color='info'
     variant="text"
     aria-label="outlined primary button group"
   >
     <Button><ViewStreamIcon/></Button>
     <Button><ViewWeekIcon/></Button>
   </ButtonGroup>
  )
}

export default ToggleCardsLayout
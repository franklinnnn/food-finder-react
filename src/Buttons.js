import React from 'react';
import './Buttons.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';


function Buttons() {
  return (
  <div className="buttons">
      <IconButton className="buttons__replay">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="buttons__close">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="buttons__favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="buttons__location">
         <LocationOnIcon fontSize="large" />
      </IconButton>
  </div>
  );
}

export default Buttons;

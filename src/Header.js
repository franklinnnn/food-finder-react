import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import IconButton from '@mui/material/IconButton';


function Header() {
  return (
      <div className="header">
        <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
        <h1 className="header__logo" alt="logo">🍽️</h1>
        <IconButton>
            <HistoryIcon className="header__icon" fontSize="large" />
        </IconButton>
      </div>   
  );
}

export default Header;

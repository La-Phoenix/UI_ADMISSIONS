import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeAnchor = () => {
    setAnchorEl(null);
  }
  const handleClose = () => {
    closeAnchor()
    localStorage.clear()

    navigate("/auth")
  };

  return (
    <div>
      <Avatar sx={{ bgcolor: deepOrange[500], cursor: "pointer" }} onClick={handleClick}>N</Avatar>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={closeAnchor}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default Dropdown;
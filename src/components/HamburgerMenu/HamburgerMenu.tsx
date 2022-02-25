import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Tooltip, IconButton, Avatar, Menu, MenuItem,
} from '@mui/material';
import './HamburgerMenu.scss';

const HamburgerMenu = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px', textAlign: 'left' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu} className="forum__hamburger-menu">
          <Link to="/registration" className="forum__hamburger-menu-link-item">Registration</Link>
          <Link to="/im" className="forum__hamburger-menu-link-item">Current User</Link>
        </MenuItem>

      </Menu>
    </Box>
  );
};

export default HamburgerMenu;

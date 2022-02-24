import {
  AppBar, Container, Toolbar, Typography, Box,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import HeaderSearch from '../HeaderSearch/HeaderSearch';

import './Header.scss';

const HeaderComponent = () => (
  <div className="">
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to="/"><img src={logo} className="forum__header-logo" alt="logo" /></Link>
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link to="/"><img src={logo} className="forum__header-logo" alt="logo" /></Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Link to="/posts" className="forum__header-link-item">Posts</Link>
            <Link to="/users" className="forum__header-link-item">Users</Link>
            <Link to="/registration" className="forum__header-link-item">Sign In</Link>
          </Box>
          <HeaderSearch />
          <HamburgerMenu />
        </Toolbar>
      </Container>
    </AppBar>
  </div>
);

export default HeaderComponent;

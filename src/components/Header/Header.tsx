import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';

import './Header.scss';

const HeaderComponent = () => (
  <div className="forum__header">
    <div>
      <Link to="/"><img alt="logo" src={logo} className="forum__header-logo" /></Link>
    </div>
    <div className="forum__header-link">
      <Link to="/posts" className="forum__header-link-item">Posts</Link>
      <Link to="/users" className="forum__header-link-item">Users</Link>
    </div>
  </div>
);

export default HeaderComponent;

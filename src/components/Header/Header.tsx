import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';

import './Header.scss';

const HeaderComponent = () => (
  <div className="forum__header">
    <div>
      <Link to="/"><img alt="logo" src={logo} className="forum__header-logo" /></Link>
    </div>
    <div>
      <nav>
        <Link to="/posts">Posts</Link>
        <Link to="/users">Posts</Link>
      </nav>
    </div>
  </div>
);

export default HeaderComponent;

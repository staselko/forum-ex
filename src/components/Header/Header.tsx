import React from 'react';
import logo from '../../assets/images/Logo.png';

import './Header.scss';

const HeaderComponent = () => (
  <div className="forum__header">
    <div>
      <img alt="logo" src={logo} className="forum__header-logo" />
    </div>
    <div>
      <div>Posts</div>
      <div>Users</div>
    </div>
  </div>
);

export default HeaderComponent;

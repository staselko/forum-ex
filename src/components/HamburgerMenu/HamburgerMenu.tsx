import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../../assets/images/Hamburger.png';
import Cross from '../../assets/images/Cross.png';
import './HamburgerMenu.scss';

const HamburgerMenu = () => {
  const [styles, setStyles] = useState('');
  const [isOpened, setIsOpened] = useState(false);
  const onOpenMenu = () => {
    if (!isOpened) {
      setStyles('opened');
      setIsOpened(true);
    } else {
      setStyles('');
      setIsOpened(false);
    }
  };
  return (
    <div onClick={onOpenMenu}>
      <img src={isOpened ? Cross : Hamburger} alt="menu" className="forum__hamburger-menu" />
      <div className={`forum__hamburger-menu-link forum__hamburger-menu-link-${styles}`}>
        <Link to="/posts" className="forum__hamburger-menu-link-item">Posts</Link>
        <Link to="/users" className="forum__hamburger-menu-link-item">Users</Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;

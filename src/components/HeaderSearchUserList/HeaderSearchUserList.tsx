import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../redux/Users/UsersInterfaces';

import './HeaderSearchUserList.scss';

const HeaderSearchUserList = ({ name, imageUrl, id }: IUser) => (
  <div className="forum__header-user-search">
    <Link to={`users/${id}`} className="forum__header-user-search-item">
      <img src={imageUrl} alt="dsaf" className="forum__header-user-search-item-image" />
      <div className="forum__header-user-search-item-name">
        {name}
      </div>
    </Link>
  </div>
);

export default HeaderSearchUserList;

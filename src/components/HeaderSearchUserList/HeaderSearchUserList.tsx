import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../redux/Users/UsersInterfaces';

const HeaderSearchUserList = ({ name, imageUrl, id }: IUser) => {
  console.log('das');

  return (
    <div className="forum__header-user-search">
      <Link to={`users/${id}`}>
        <div>
          {name}
        </div>
        <img src={imageUrl} alt="dsaf" />
      </Link>
    </div>
  );
};

export default HeaderSearchUserList;

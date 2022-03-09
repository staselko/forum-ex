/* eslint-disable no-underscore-dangle */
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IRootReducer } from '../../redux/RootReducer';
import { IUser } from '../../redux/Users/UsersInterfaces';
import UserItem from '../UserItem/UserItem';

import './UserOverview.scss';

const UsersOverview: FC = () => {
  const users: IUser[] = useSelector((store: IRootReducer) => store.users.usersList);
  return (
    <div className="forum__users-field">
      <div className="forum__users-field-greet">Users you should enjoy</div>
      {users.map((item: IUser) => <UserItem key={item._id} {...item} />)}
    </div>
  );
};

export default UsersOverview;

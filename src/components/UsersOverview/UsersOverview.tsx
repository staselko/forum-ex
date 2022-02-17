import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IRootReducer } from '../../redux/RootReducer';
import { IUser } from '../../redux/Users/UsersInterfaces';
// import Spinner from '../Spinner/Spinner';
import UserItem from '../UserItem/UserItem';

import './UserOverview.scss';

const UsersOverview: FC = () => {
  const users: IUser[] = useSelector((store: IRootReducer) => store.users.usersList);
  // const isLoaded = useSelector((store: IRootReducer) => store.users.isLoading);
  return (
    <div className="forum__users-field">
      {users.map((item: IUser) => <UserItem key={item.id} {...item} />)}
    </div>
  );
};

export default UsersOverview;

/* eslint-disable no-underscore-dangle */
import Collapse from '@mui/material/Collapse';
import React, {
  FC, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { IRootReducer } from '../../redux/RootReducer';
import { IUser } from '../../redux/Users/UsersInterfaces';
import UserItem from '../UserItem/UserItem';

import './UserOverview.scss';

const UsersOverview: FC = () => {
  const users: IUser[] = useSelector((store: IRootReducer) => store.users.usersList);
  const [collapse, setCollapse] = useState(false);
  const [page, setPage] = useState(1);
  const handleScroll = (event: any) => {
    const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if (bottom) {
      console.log(page);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    setCollapse(true);
    return () => setCollapse(false);
  }, []);

  return (
    <div className="forum__users-field" onScroll={handleScroll}>
      {
        users
          .map((item: IUser) => (
            <Collapse key={item._id} in={collapse}>
              <UserItem key={item._id} {...item} />
            </Collapse>
          ))
      }
    </div>
  );
};

export default UsersOverview;

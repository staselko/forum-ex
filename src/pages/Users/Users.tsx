import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UsersOverview from '../../components/UsersOverview/UsersOverview';
import { getUsersStart } from '../../redux/Users/UsersActions';

import './Users.scss';

const Users: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersStart());
  }, []);

  return (
    <div className="forum__users">
      <UsersOverview />
    </div>
  );
};

export default Users;

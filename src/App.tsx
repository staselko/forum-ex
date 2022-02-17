import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Outlet } from 'react-router-dom';
import { getUsersStart } from './redux/Users/UsersActions';
import { IRootReducer } from './redux/RootReducer';
import { getPostsStart } from './redux/Posts/PostsActions';

import HeaderComponent from './components/Header/Header';
import Home from './pages/Home/Home';
import PostsOverview from './pages/PostsOverview/PostsOverview';
import Users from './pages/UsersList/Users';
import UserPageContainer from './pages/User/UserContainer';
import './App.scss';

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const posts = useSelector((store: IRootReducer) => store.posts.postsListToShow);

  useLayoutEffect(() => {
    dispatch(getPostsStart());
  }, []);

  useEffect(() => {
    if (posts.length !== 0) {
      dispatch(getUsersStart(posts));
    }
  }, [posts]);

  return (
    <div className="forum">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsOverview />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserPageContainer />} />
      </Routes>
      <Outlet />
    </div>

  );
};

export default App;

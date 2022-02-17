import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Outlet } from 'react-router-dom';

import HeaderComponent from './components/Header/Header';
import Home from './pages/Home/Home';
import './App.scss';
import { getPostsStart } from './redux/Posts/PostsActions';
import PostsOverview from './pages/PostsOverview/PostsOverview';
import Users from './pages/Users/Users';
import { getUsersStart } from './redux/Users/UsersActions';
import { IRootReducer } from './redux/RootReducer';

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getPostsStart());
  }, []);

  const posts = useSelector((store: IRootReducer) => store.posts.postsListToShow);

  useEffect(() => {
    dispatch(getUsersStart());
  }, [posts]);

  return (
    <div className="forum">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsOverview />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Outlet />
    </div>

  );
};

export default App;

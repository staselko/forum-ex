import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Outlet } from 'react-router-dom';
import { getUsersStart } from './redux/Users/UsersActions';
import { IRootReducer } from './redux/RootReducer';
import { getPostsStart } from './redux/Posts/PostsActions';

import HeaderComponent from './components/Header/Header';
import HomePageContainer from './pages/Home/HomeContainer';
import PostsOverviewContainer from './pages/PostsOverview/PostOverviewContainer';
import UsersContainer from './pages/UsersList/UsersContainer';
import UserPageContainer from './pages/User/UserContainer';
import './App.scss';
import PostViewContainer from './pages/PostView/PostViewContainer';
import Authorisation from './components/Authorisation/Authorisation';

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
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/posts" element={<PostsOverviewContainer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/users/:userId" element={<UserPageContainer />} />
        <Route path="/posts/:postId" element={<PostViewContainer />} />
        <Route path="/registration" element={<Authorisation />} />
      </Routes>
      <Outlet />
    </div>

  );
};

export default App;

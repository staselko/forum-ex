import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Routes, Route, Outlet, useLocation,
} from 'react-router-dom';
import { checkUserAuth, getTargetUserStart, getUsersStart } from './redux/Users/UsersActions';
import { getPostsStart, getTargetPostStart } from './redux/Posts/PostsActions';
import HeaderComponent from './components/Header/Header';
import PostsOverviewContainer from './pages/PostsOverview/PostOverviewContainer';
import UsersContainer from './pages/UsersList/UsersContainer';
import UserPageContainer from './pages/User/UserContainer';
import './App.scss';
import PostViewContainer from './pages/PostView/PostViewContainer';
import Authorization from './pages/Authorization/Authorization';
import RegistrationContainer from './pages/Registration/RegistrationContainer';
import CurrentUserContainer from './pages/CurrentUser/CurrentUserContainer';

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const href = useLocation();
  const params = href.pathname.split('/')[2];
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkUserAuth());
    }

    if (href.pathname === ('/users')) {
      dispatch(getUsersStart());
    }

    if (href.pathname === (`/users/${params}`)) {
      dispatch(getTargetUserStart(params as string));
    }

    if (href.pathname === (`/posts/${params}`)) {
      dispatch(getTargetPostStart(params as string));
    }

    if (href.pathname === ('/posts')) {
      dispatch(getPostsStart());
    }
  }, [href]);

  return (
    <div className="forum">
      <HeaderComponent />
      <Routes>
        <Route path="/posts" element={<PostsOverviewContainer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/users/:userId" element={<UserPageContainer />} />
        <Route path="/posts/:postId" element={<PostViewContainer />} />
        <Route path="/signin" element={<Authorization />} />
        <Route path="/reg" element={<RegistrationContainer />} />
        <Route path="/" element={<CurrentUserContainer />} />
      </Routes>
      <Outlet />
    </div>

  );
};

export default App;

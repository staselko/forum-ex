import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Outlet } from 'react-router-dom';

import HeaderComponent from './components/Header/Header';
import Home from './pages/Home/Home';
import './App.scss';
import { getPostsStart } from './redux/Posts/PostsActions';
import PostsOverview from './pages/PostsOverview/PostsOverview';

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsStart());
  }, []);

  return (
    <div className="forum">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsOverview />} />
      </Routes>
      <Outlet />
    </div>

  );
};

export default App;

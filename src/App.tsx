import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import HeaderComponent from './components/Header/Header';
import './App.scss';
import { getPostsStart } from './redux/Posts/PostsActions';

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(():void => {
    dispatch(getPostsStart('asdasd'));
  }, []);

  return (
    <div>
      <HeaderComponent />
    </div>
  );
};

export default App;

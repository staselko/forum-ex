import React, { FC } from 'react';
import PostsPreview from '../../components/PostsPreview/PostsPreview';

import './Home.scss';

const Home: FC = () => (
  <div className="forum__home">
    <h1 className="forum__home-greet">Welcome, to the forum</h1>
    <PostsPreview />
  </div>
);

export default Home;

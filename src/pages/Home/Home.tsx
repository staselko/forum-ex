import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import PostsPreview from '../../components/PostsPreview/PostsPreview';
import { IRootReducer } from '../../redux/RootReducer';

const Home: FC = () => {
  const { postsList } = useSelector((strate: IRootReducer) => strate.posts);
  console.log(postsList);
  return (
    <div>
      <PostsPreview />
    </div>
  );
};

export default Home;

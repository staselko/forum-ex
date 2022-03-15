import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from '../../components/PostItem/PostItem';
import { IRootReducer } from '../../redux/RootReducer';

const PostsOverview = () => {
  const { postsListToShow } = useSelector((state: IRootReducer) => state.posts);
  return (
    <div className="forum__post-page">
      {
        postsListToShow
          .map((item) => <PostItem key={item.id} {...item} />)
      }
    </div>

  );
};

export default PostsOverview;

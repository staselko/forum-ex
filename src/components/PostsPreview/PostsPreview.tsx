import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IPost } from '../../redux/Posts/PostsReducer';
import { IRootReducer } from '../../redux/RootReducer';
import PostItem from '../PostItem/PostItem';

import './PostsPreview.scss';

const PostsPreview: FC = () => {
  const { postsList } = useSelector((state: IRootReducer) => state.posts);
  return (
    <div className="forum_home-data-field">
      {postsList.map((item: IPost) => <PostItem key={item.id} {...item} />)}
    </div>
  );
};

export default PostsPreview;

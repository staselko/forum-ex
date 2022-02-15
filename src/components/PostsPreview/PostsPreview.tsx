import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IPost } from '../../redux/Posts/PostsReducer';
import { IRootReducer } from '../../redux/RootReducer';
import PostItem from '../PostItem/PostItem';

const PostsPreview: FC = () => {
  const { postsList } = useSelector((strate: IRootReducer) => strate.posts);
  console.log(postsList);

  return (
    <div>
      {postsList.map((item: IPost) => <PostItem key={item.id} {...item} />)}
    </div>
  );
};

export default PostsPreview;

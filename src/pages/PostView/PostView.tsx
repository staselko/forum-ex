import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { IPost } from '../../redux/Posts/PostsIntefaces';
import { selectCurrentPost } from '../../redux/Posts/PostsSelector';
import Comment from '../../components/Comment/Comment';

import './PostView.scss';

const PostView = () => {
  const { postId } = useParams();
  const {
    userId,
    body,
    comments,
    title,
  } = useSelector(selectCurrentPost(Number(postId)));
  return (
    <div>
      <div>{body}</div>
      <div>{title}</div>
      <div>{userId}</div>
      {
        comments.map((item) => <Comment key={item.id} {...item} />)
      }
    </div>
  );
};

export default PostView;

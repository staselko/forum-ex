import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCurrentPost } from '../../redux/Posts/PostsSelector';
import Comment from '../../components/Comment/Comment';

import './PostView.scss';
import { selectCurrentUser } from '../../redux/Users/UserSelector';

const PostView = () => {
  const { postId } = useParams();
  const {
    userId,
    body,
    comments,
    title,
  } = useSelector(selectCurrentPost(Number(postId)));

  const { name, email } = useSelector(selectCurrentUser(Number(userId)));

  return (
    <div className="forum__post-page">
      <div className="forum__post-page-user">
        <div className="forum__post-page-user-name">{name}</div>
        <div className="forum__post-page-user-email">{email}</div>
      </div>
      <div className="forum__post-page-post">
        <div className="forum__post-page-post-title">{title}</div>
        <div className="forum__post-page-post-body">{body}</div>
        <div className="forum__post-page-post-comments">
          <h1>
            Commetns
          </h1>
          {
            comments.map((item) => <Comment key={item.id} {...item} />)
          }
        </div>
      </div>
    </div>
  );
};

export default PostView;

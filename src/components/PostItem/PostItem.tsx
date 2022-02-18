import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useMatch } from 'react-router-dom';
import './PostItem.scss';
import { IRootReducer } from '../../redux/RootReducer';
import { IPost } from '../../redux/Posts/PostsIntefaces';

const PostItem = ({
  title,
  body,
  comments,
  id,
  userId,
}: IPost) => {
  const currentUser = useSelector((state:IRootReducer) => state.users.usersList
    .find((item) => item.id === userId));
  const match = useMatch(`users/${userId}`);
  return (
    <div className="forum__home-data-field-item">
      <Link to={`/posts/${id}`}>
        <div className="forum__home-data-field-item-title">{title}</div>
        <div className="forum__home-data-field-item-body">{body}</div>
        <div className="forum__home-data-field-item-info">
          <div className="forum__home-data-field-item-info">
            Comments:
            {' '}
            {comments.length}
          </div>
          {
          match?.pattern.end
            ? null : (
              <Link to={`users/${userId}`}>
                <div className="forum__home-data-field-item-info">{currentUser?.name}</div>
              </Link>
            )
        }
        </div>
      </Link>
    </div>
  );
};

export default PostItem;

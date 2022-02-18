import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
  // const match = useMatch(`users/${userId}`);
  return (
    <div className="forum__home-data-field-item">
      <Link to={`/posts/${id}`} className="forum__home-data-field-item_link">
        <div className="forum__home-data-field-item-title">{title}</div>
        <div className="forum__home-data-field-item-body">{body}</div>
        <div className="forum__home-data-field-item-info">
          <div className="forum__home-data-field-item-info">
            Comments:
            {' '}
            {comments.length}
          </div>
          <div className="forum__home-data-field-item-info-name">{currentUser?.name}</div>
          {/* {
          match?.pattern.end
            ? null : (
              <Link to={`users/${userId}`} className="forum__home-data-field-item-info-name_link">
                <div className="forum__home-data-field-item-info-name">{currentUser?.name}</div>
              </Link>
            )
        } */}
        </div>
      </Link>
    </div>
  );
};

export default PostItem;

import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../../assets/images/Post.jpg';
import { IPost } from '../../redux/Posts/PostsInterfaces';

const PostItemUser = ({
  title,
  id,
}: IPost) => (
  <div>
    <Link to={`/posts/${id}`} className="forum__user-data-field-item_link">
      <div className="forum__user-data-field-item">
        <img src={Post} alt="post preview" className="forum__user-data-field-item-image" />
        <div className="forum__user-data-field-item-title">{title}</div>
      </div>
    </Link>
  </div>
);

export default PostItemUser;

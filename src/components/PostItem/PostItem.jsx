import React from 'react';
import './PostItem.scss';

const PostItem = ({ title, body }) => (
  <div className="forum__home-data-field-item">
    <div className="forum__home-data-field-item-title">{title}</div>
    <div className="forum__home-data-field-item-body">{body}</div>
  </div>
);

export default PostItem;

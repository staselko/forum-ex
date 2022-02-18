import React from 'react';
import { IComments } from '../../redux/Posts/PostsIntefaces';

import './Comment.scss';

const Comment = ({ name, email, body }: IComments) => (
  <div className="forum__comment">
    <div className="forum__comment-item forum__comment-item_name">
      {name}
    </div>
    <div className="forum__comment-item">
      {email}
    </div>
    <div className="forum__comment-item">
      {body}
    </div>
  </div>
);

export default Comment;

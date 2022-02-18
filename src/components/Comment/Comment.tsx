import React from 'react';
import { IComments } from '../../redux/Posts/PostsIntefaces';

const Comment = ({ name, email, body }: IComments) => (
  <div>
    <div>
      {name}
    </div>
    <div>
      {email}
    </div>
    <div>
      {body}
    </div>
  </div>
);

export default Comment;

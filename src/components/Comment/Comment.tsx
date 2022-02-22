/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import { Card, Typography } from '@mui/material';
import React from 'react';
import { IComments } from '../../redux/Posts/PostsInterfaces';

import './Comment.scss';

const Comment = ({ email, body }: IComments) => (
  <div className="forum__comment">
    <Card className="forum__comment-item" sx={{ borderRadius: 0, borderTop: 'none' }}>
      <Typography className="forum__comment-item_name" fontWeight={700}>
        {email}
      </Typography>
      <Typography className="forum__comment-item_text" fontSize="0.8em">
        {body}
      </Typography>
    </Card>
  </div>
);

export default Comment;

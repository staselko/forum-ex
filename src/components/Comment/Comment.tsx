import React from 'react';
import {
  Avatar, Box, Card, CardContent, Typography,
} from '@mui/material';
import { IComments } from '../../redux/Posts/PostsInterfaces';

import './Comment.scss';

const Comment = ({ email, body }: IComments) => (
  <div className="forum__comment">
    <Card
      className="forum__comment-item"
      sx={{
        boxShadow: 'none', borderRadius: 0, borderBottom: '1px solid #e6e6e6', padding: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex', alignItems: 'center', padding: '10px',
        }}
        className="forum__post-page-profile"
      >
        <Avatar
          className="forum__post-page-profile-avatar"
          alt="users avatar"
          sx={{ height: 45, width: 45, marginRight: '20px' }}
        />
        <CardContent sx={{
          '&:last-child': { paddingBottom: 0 }, padding: 0, color: '#000', lineHeight: 1,
        }}
        >
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            fontWeight={500}
            sx={{ marginBottom: 0 }}
            className="forum__post-page-profile-user-name"
          >
            {email}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div" fontWeight={500} sx={{ paddingBottom: 0, lineHeight: 1 }}>
            {body}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  </div>
);

export default Comment;

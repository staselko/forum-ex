import React from 'react';
import {
  Card, CardMedia, CardContent, Typography, Avatar, Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UserBG from '../../assets/images/UsersBG.png';
import PostItem from '../../components/PostItem/PostItem';
import { selectCurrentUser } from '../../redux/Users/UserSelector';

import './User.scss';

const User = () => {
  const { userId } = useParams();
  const {
    email,
    name,
    posts,
    imageUrl,
  } = useSelector(selectCurrentUser(Number(userId)));

  return (
    <div className="forum__user-page">
      <Card sx={{ maxWidth: 655 }}>
        <Box className="forum__user-page-profile">
          <CardMedia
            component="img"
            height="240"
            image={UserBG}
            alt="users background"
          />
          <Box sx={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 30px',
          }}
          >
            <Avatar
              className="forum__user-page-profile-avatar"
              alt="users avatar"
              src={imageUrl}
              sx={{ height: 100, width: 100 }}
            />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontWeight={700}>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
          </CardContent>
        </Box>
        <Box className="forum__user-page-posts">
          {
            posts?.map((post) => <PostItem key={post.id} {...post} />)
          }
        </Box>
      </Card>
    </div>
  );
};

export default (User);

/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Card, CardMedia, CardContent, Typography, Avatar, Box, CardActions, Button,
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
    mail,
    name,
    website,
    phone,
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
            <CardActions>
              <Button variant="outlined" sx={{ borderRadius: 7 }}>Edit Profile</Button>
            </CardActions>
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontWeight={700}>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
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

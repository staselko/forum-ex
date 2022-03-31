import React from 'react';
import {
  Card, CardMedia, CardContent, Typography, Avatar, Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import UserBG from '../../assets/images/UsersBG.png';
import PostItem from '../../components/PostItem/PostItem';
import './User.scss';
import { IRootReducer } from '../../redux/RootReducer';

const User = () => {
  const {
    email,
    firstName,
    secondName,
    imageUrl,
    posts,
  } = useSelector((state: IRootReducer) => state.users.targetUser);
  return (
    <div className="forum__user-page">
      <Card sx={{ maxWidth: 500, width: [300, 400] }}>
        <Box
          className="forum__user-page-profile"
        >
          <CardMedia
            component="img"
            image={UserBG}
            alt="users background"
            sx={{
              height: [150, 200],
            }}
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
              {`${firstName} ${secondName}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
          </CardContent>
        </Box>
        <Box className="forum__user-page-posts">
          {
            posts?.map((post) => <PostItem key={post._id} {...post} />)
          }
        </Box>
      </Card>
    </div>
  );
};

export default (User);

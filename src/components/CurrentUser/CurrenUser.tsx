/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {
  Card, Box, CardMedia, Avatar, CardActions, CardContent, Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { IRootReducer } from '../../redux/RootReducer';
import PostCreateModal from '../PostCreateModal/PostCreateModal';
// import PostItem from '../PostItem/PostItem';
import ProfileEditModal from '../ProfileEditModal/ProfileEditModal';
import UserBG from '../../assets/images/Background.jpg';

const CurrentUser = () => {
  const currentUser = useSelector((store: IRootReducer): any => store.users.currentUser);
  console.log(currentUser);
  return (
    <div>
      sda
      {/* <Card sx={{ maxWidth: 655 }}>
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
              <ProfileEditModal />
            </CardActions>
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontWeight={700}>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
          </CardContent>
          <CardActions>
            <PostCreateModal />
          </CardActions>
        </Box>
        <Box className="forum__user-page-posts">
          {/* {
            posts?.map((post) => <PostItem key={post.id} {...post} />)
          }
        </Box>
      </Card> */}
    </div>
  );
};

export default CurrentUser;

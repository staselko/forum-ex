import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card, CardActionArea, CardMedia, CardContent, Typography,
} from '@mui/material';
import { IRootReducer } from '../../redux/RootReducer';
import { IPost } from '../../redux/Posts/PostsIntefaces';
import Post from '../../assets/images/Post.jpg';
import './PostItem.scss';

const PostItem = ({
  title,
  id,
  userId,
}: IPost) => {
  const currentUser = useSelector((state:IRootReducer) => state.users.usersList
    .find((item) => item.id === userId));
  return (
    <div className="forum__home-data-field-item">
      <Link to={`/posts/${id}`} className="forum__home-data-field-item_link">
        <Card sx={{ maxWidth: 400, height: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={Post}
              alt="green iguana"
            />
            <CardContent className="forum__home-data-field-item">
              <Typography gutterBottom variant="h5" component="div" className="forum__home-data-field-item-title">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                by:
                {' '}
                {currentUser?.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default PostItem;

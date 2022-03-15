import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Card, CardActionArea, CardMedia, CardContent, Typography,
} from '@mui/material';
import { IPost } from '../../redux/Posts/PostsInterfaces';
import Post from '../../assets/images/Post.jpg';
import './PostItem.scss';
import PostItemUser from './PostItemUser';

const PostItem = (post: IPost) => {
  const { title, _id } = post;
  const path = useLocation();
  return (
    <div className="forum__home-data-field-item">
      {
        path.pathname.includes('/posts') ? (
          <Link to={`/posts/${_id}`} className="forum__home-data-field-item_link">
            <Card sx={{ maxWidth: 400, height: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={Post}
                  alt="green iguana"
                />
                <CardContent className="forum__home-data-field-item">
                  <Typography gutterBottom variant="h5" component="div" className="forum__home-data-field-item-title">
                    {title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ) : <PostItemUser {...post} />
      }
    </div>
  );
};

export default PostItem;

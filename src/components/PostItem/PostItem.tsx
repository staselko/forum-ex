import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Card, CardActionArea, CardMedia, CardContent, Typography,
} from '@mui/material';
import { IPost } from '../../redux/Posts/PostsInterfaces';
import './PostItem.scss';
import PostItemUser from './PostItemUser';

const PostItem = (post: IPost) => {
  const { title, _id, imageUrl } = post;
  const path = useLocation();

  return (
    <div className="forum__home-data-field-item">
      {
        path.pathname.includes('/posts') ? (
          <Link to={`/posts/${_id}`} className="forum__home-data-field-item_link">
            <Card sx={{
              maxWidth: 400,
              width: ['170px', '250px', '300px', '400px'],
              height: ['150px', '250px', '300px'],
            }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{
                    width: ['100%'],
                    height: ['80px', '180px', '230px'],
                  }}
                  image={(imageUrl as string)}
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

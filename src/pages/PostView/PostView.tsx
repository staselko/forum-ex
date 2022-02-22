import React, { useEffect } from 'react';
import {
  Avatar, Box, Card, CardContent, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHref } from 'react-router-dom';
import { selectCurrentPost } from '../../redux/Posts/PostsSelector';
import Post from '../../assets/images/Post.jpg';
import Comment from '../../components/Comment/Comment';

import './PostView.scss';
import { selectCurrentUser } from '../../redux/Users/UserSelector';
import { getCommentsStart } from '../../redux/Posts/PostsActions';
import { IRootReducer } from '../../redux/RootReducer';

const PostView = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const {
    userId,
    body,
    title,
  } = useSelector(selectCurrentPost(Number(postId)));

  const comments = useSelector((store: IRootReducer) => store.posts.comments);

  useEffect(() => {
    dispatch(getCommentsStart(postId));
  }, []);

  const location = useHref(`/users/${userId}`);
  const { name, email, imageUrl } = useSelector(selectCurrentUser(Number(userId)));
  return (
    <div className="forum__post-page">
      <Card>
        <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #000' }} className="forum__post-page-profile">
          <Avatar
            className="forum__post-page-profile-avatar"
            alt="users avatar"
            src={imageUrl}
            sx={{ height: 50, width: 50 }}
          />
          <Link to={location} className="forum__post-page-page-profile">
            <CardContent sx={{ '&:last-child': { paddingBottom: 0 }, padding: 0, color: '#000' }}>
              <Typography
                gutterBottom
                className="forum__post-page-profile-user-name"
                variant="subtitle1"
                component="div"
                fontWeight={700}
                sx={{ marginBottom: 0 }}
              >
                {name}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="div" fontWeight={500} sx={{ paddingBottom: 0 }}>
                {email}
              </Typography>
            </CardContent>
          </Link>
        </Box>
        <Box className="forum__post-page-post">
          <Typography gutterBottom variant="subtitle1" component="div" fontWeight={700}>
            {title}
          </Typography>
          <img src={Post} alt="post view" className="forum__post-page-post-image" />
          <Typography gutterBottom variant="subtitle1" component="div" fontWeight={500}>
            {body}
          </Typography>
        </Box>
        {
          comments?.map((item) => <Comment key={item.id} {...item} />)
        }

      </Card>
    </div>
  );
};

export default PostView;

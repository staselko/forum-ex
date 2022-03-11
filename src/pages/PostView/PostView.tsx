import React, { useEffect } from 'react';
import {
  Avatar, Box, Card, CardContent, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHref } from 'react-router-dom';
import { v4 as uid } from 'uuid';
import { selectCurrentPost } from '../../redux/Posts/PostsSelector';
import Post from '../../assets/images/Post.jpg';
import CommentContainer from '../../components/Comment/CommentContainer';

import './PostView.scss';
import { selectCurrentUser } from '../../redux/Users/UserSelector';
import { getCommentsStart } from '../../redux/Posts/PostsActions';
import { IRootReducer } from '../../redux/RootReducer';
import CommetnCreateFormContainer from '../../components/CommentCreateForm/CommentCreateForm';

const PostView = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const {
    userId,
    body,
  } = useSelector(selectCurrentPost(postId));
  const comments = useSelector((store: IRootReducer) => store.posts.comments);
  useEffect(() => {
    dispatch(getCommentsStart(postId));
  }, []);

  const location = useHref(`/users/${userId}`);
  const {
    firstName, secondName, email, imageUrl,
  } = useSelector(selectCurrentUser(userId));

  return (
    <div className="forum__post-page">
      <Card sx={{ boxShadow: '0px 0px 10px 5px #dbdbdb69', padding: '20px' }}>
        <Box
          sx={{
            display: 'flex', alignItems: 'center', padding: '10px',
          }}
          className="forum__post-page-profile"
        >
          <Avatar
            className="forum__post-page-profile-avatar"
            alt="users avatar"
            src={imageUrl}
            sx={{ height: 45, width: 45 }}
          />
          <Link to={location} className="forum__post-page-page-profile">
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
                {`${firstName} ${secondName}`}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="div" fontWeight={500} sx={{ paddingBottom: 0, lineHeight: 1 }}>
                {email}
              </Typography>
            </CardContent>
          </Link>
        </Box>
        <Box className="forum__post-page-post" sx={{ borderBottom: '1px solid #e6e6e6', paddingBottom: '20px' }}>
          <Typography className="forum__post-page-post-value" gutterBottom variant="subtitle1" fontSize={20} component="div" fontWeight={700}>
            {body.charAt(0).toUpperCase() + body.slice(1)}
          </Typography>
          <img src={Post} alt="post view" className="forum__post-page-post-image" />
          <div className="forum__post-page-created">
            <div>1.36 PM</div>
            <div>Feb 24, 2022</div>
          </div>
        </Box>
        <Box>
          <CommetnCreateFormContainer />
        </Box>
        {
          comments?.map((item) => <CommentContainer key={uid()} {...item} />).reverse()
        }
      </Card>
    </div>
  );
};

export default PostView;

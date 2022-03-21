import React from 'react';
import {
  Avatar, Box, Card, CardContent, CardMedia, Typography, Zoom,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Link, useParams, useHref } from 'react-router-dom';
import { v4 as uid } from 'uuid';
import { selectCurrentPost } from '../../redux/Posts/PostsSelector';
import Post from '../../assets/images/Post.jpg';
import CommentContainer from '../../components/Comment/CommentContainer';

import './PostView.scss';
import CommetnCreateFormContainer from '../../components/CommentCreateForm/CommentCreateForm';
import { IRootReducer } from '../../redux/RootReducer';

const PostView = () => {
  const { postId } = useParams();
  const {
    user,
    title,
  } = useSelector(selectCurrentPost(postId));
  const checked = true;
  const location = useHref(`/users/${user._id}`);
  const comments = useSelector((state: IRootReducer) => state.posts.comments);
  return (
    <div className="forum__post-page">
      <Zoom in={checked} style={{ transitionDelay: '200ms' }}>
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
                  sx={{
                    marginBottom: 0,
                  }}
                  className="forum__post-page-profile-user-name"
                >
                  {`${user.firstName} ${user.secondName}`}
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div" fontWeight={500} sx={{ paddingBottom: 0, lineHeight: 1 }}>
                  {user.email}
                </Typography>
              </CardContent>
            </Link>
          </Box>
          <Box className="forum__post-page-post" sx={{ borderBottom: '1px solid #e6e6e6', paddingBottom: '20px' }}>
            <Typography className="forum__post-page-post-value" gutterBottom variant="subtitle1" fontSize={20} component="div" fontWeight={700}>
              {title.charAt(0).toUpperCase() + title.slice(1)}
            </Typography>
            <CardMedia
              component="img"
              sx={{
                width: ['100%'],
                height: ['180px', '260px', '340px'],
              }}
              image={Post}
              alt="green iguana"
            />
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
      </Zoom>
    </div>
  );
};

export default PostView;

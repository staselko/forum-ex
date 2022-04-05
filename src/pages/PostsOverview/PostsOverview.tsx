import React, { useEffect, useState } from 'react';
import { Typography, Collapse } from '@mui/material';
import { useSelector } from 'react-redux';
import PostItem from '../../components/PostItem/PostItem';
import { IRootReducer } from '../../redux/RootReducer';

const PostsOverview = () => {
  const { postsListToShow } = useSelector((state: IRootReducer) => state.posts);
  const [collapse, setCollapse] = useState(false);
  useEffect(() => {
    setCollapse(true);
    return () => setCollapse(false);
  }, []);
  return (
    <div className="forum__post-page">
      {
        postsListToShow.length
          ? postsListToShow
            .map((item) => (
              <Collapse key={item._id} in={collapse}>
                <PostItem key={item._id} {...item} />
              </Collapse>
            ))
          : <Typography>You can be first owner of the first post</Typography>
      }
    </div>

  );
};

export default PostsOverview;

import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showNextPage } from '../../redux/Posts/PostsActions';
import { IRootReducer } from '../../redux/RootReducer';
import Button from '../Button/Button';
import PostItem from '../PostItem/PostItem';

import './PostsPreview.scss';

const PostsPreview: FC = () => {
  const { postsListToShow } = useSelector((state: IRootReducer) => state.posts);
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(10);
  const nextPage = () => {
    setPageNum(pageNum + 10);
    dispatch(showNextPage(pageNum));
  };

  return (
    <div className="forum_home-data-field">
      {
        postsListToShow.filter((item) => item.id < pageNum)
          .map((item) => <PostItem key={item.id} {...item} />)
      }
      <Button onClick={nextPage}>Next Page</Button>
    </div>
  );
};

export default PostsPreview;

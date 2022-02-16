import { createSelector } from 'reselect';
import { IPost } from './PostsReducer';

const selectPosts = (posts: IPost[]) => posts;

export const selectPostPage = createSelector(
  [selectPosts],
  (postsListToShow) => postsListToShow.filter((post) => post.id <= 10),
);

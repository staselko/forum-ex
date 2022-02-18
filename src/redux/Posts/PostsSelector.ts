import { createSelector } from 'reselect';
import { IRootReducer } from '../RootReducer';
import { IPost } from './PostsIntefaces';

const selectPosts = (posts: IPost[]) => posts;
const selestIsPostsLoading = (state: IRootReducer) => state.posts.isLoading;

export const selectPostPage = createSelector(
  [selectPosts],
  (postsListToShow): IPost[] => postsListToShow,
);

export const selectIsPostsLoading = createSelector(
  [selestIsPostsLoading],
  (isLoading) => isLoading,
);

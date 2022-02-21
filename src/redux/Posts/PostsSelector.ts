import { createSelector } from 'reselect';
import { IRootReducer } from '../RootReducer';
import { IPost } from './PostsInterfaces';

const selectPosts = (posts: IPost[]) => posts;
const selectPostsList = ((state: IRootReducer) => state.posts.postsListToShow);
const selestIsPostsLoading = (state: IRootReducer) => state.posts.isLoading;

export const selectPostPage = createSelector(
  [selectPosts],
  (postsListToShow): IPost[] => postsListToShow,
);

export const selectIsPostsLoading = createSelector(
  [selestIsPostsLoading],
  (isLoading) => isLoading,
);

export const selectCurrentPost = (postId: number) => createSelector(
  [selectPostsList],
  (postsListToShow): IPost => postsListToShow.filter((item) => item.id === postId)[0],
);

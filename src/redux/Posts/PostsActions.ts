import PostsActionsTypes from './PostsTypes';

export type ActionsTypes = {
  type: string,
  payload?: {} | string,
}

export const getPostsStart = (url: string):ActionsTypes => ({
  type: PostsActionsTypes.GET_POSTS_START,
  payload: url,
});

export const getPostsSuccess = (posts: Array<Object>):ActionsTypes => ({
  type: PostsActionsTypes.GET_POSTS_START,
  payload: posts,
});

export const getPostsFailure = (error: Error):ActionsTypes => ({
  type: PostsActionsTypes.GET_POSTS_START,
  payload: error,
});

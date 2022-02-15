import PostsActionsTypes from './PostsTypes';
import { IPost } from './PostsReducer';

export type ActionsTypes = {
  type: string,
  payload?: any;
}

export const getPostsStart = ():ActionsTypes => ({
  type: PostsActionsTypes.GET_POSTS_START,

});

export const getPostsSuccess = (posts: IPost[]):ActionsTypes => ({
  type: PostsActionsTypes.GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = (error: unknown):ActionsTypes => ({
  type: PostsActionsTypes.GET_POSTS_FAILURE,
  payload: error,
});

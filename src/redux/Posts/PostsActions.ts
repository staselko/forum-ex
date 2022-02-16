import postsActionsTypes from './PostsTypes';
import { ActionsTypes } from '../Interfaces';
import { IPost } from './PostsReducer';

export const getPostsStart = ():ActionsTypes => ({
  type: postsActionsTypes.GET_POSTS_START,

});

export const getPostsSuccess = (posts: IPost[]):ActionsTypes => ({
  type: postsActionsTypes.GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = (error: unknown):ActionsTypes => ({
  type: postsActionsTypes.GET_POSTS_FAILURE,
  payload: error,
});

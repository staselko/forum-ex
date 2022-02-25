import postsActionsTypes from './PostsTypes';
import { ActionsTypes } from '../Interfaces';
import { IComments, IPost } from './PostsInterfaces';

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

export const showNextPage = (pageNum: Number): ActionsTypes => ({
  type: postsActionsTypes.SHOW_NEXT_PAGE,
  payload: pageNum,
});

export const showPreviosPage = (): ActionsTypes => ({
  type: postsActionsTypes.SHOW_PREVIOS_PAGE,
});

export const getCommentsStart = (postId: string | undefined): ActionsTypes => ({
  type: postsActionsTypes.GET_COMMENTS_START,
  payload: postId,
});

export const getCommentsSuccess = (comments: IComments[]): ActionsTypes => ({
  type: postsActionsTypes.GET_COMMENTS_SUCCESS,
  payload: comments,
});

export const getCommentsFailure = (error: unknown): ActionsTypes => ({
  type: postsActionsTypes.GET_COMMENTS_FAILURE,
  payload: error,
});

export const createCommentStart = (post: IComments) => ({
  type: postsActionsTypes.CREATE_COMMENT_START,
  payload: post,
});

export const createCommentSuccess = (posts: IPost[]) => ({
  type: postsActionsTypes.CREATE_COMMENT_SUCCESS,
  payload: posts,
});

export const createCommentFailure = (error: unknown) => ({
  type: postsActionsTypes.CREATE_COMMENT_FAILURE,
  payload: error,
});

export const createPostStart = (post: IPost): ActionsTypes => ({
  type: postsActionsTypes.CREATE_POST_START,
  payload: post,
});

export const createPostSuccess = (post: IPost): ActionsTypes => ({
  type: postsActionsTypes.CREATE_POST_SUCCESS,
  payload: post,
});

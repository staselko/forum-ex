import { ActionsTypes } from '../Interfaces';
import allUsersActionTypes from './UsersTypes';
import { IUser } from './UsersInterfaces';
import { IPost } from '../Posts/PostsIntefaces';

export const getUsersStart = (posts: IPost[]): ActionsTypes => ({
  type: allUsersActionTypes.GET_USERS_START,
  payload: posts,
});

export const getUsersSuccess = (users: IUser[]): ActionsTypes => ({
  type: allUsersActionTypes.GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailure = (error: unknown): ActionsTypes => ({
  type: allUsersActionTypes.GET_USERS_FAILURE,
  payload: error,
});

export const mergePostsToUser = (users: IUser[]): ActionsTypes => ({
  type: allUsersActionTypes.MERGE_POSTS_TO_USER,
  payload: users,
});

import { ActionsTypes } from '../Interfaces';
import allUsersActionTypes from './UsersTypes';
import { IUser } from './UsersInterfaces';
import { IPost } from '../Posts/PostsInterfaces';

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

export const changeUserProfileStart = (changedUser: IUser): ActionsTypes => ({
  type: allUsersActionTypes.CHANGE_USER_PROFILE_START,
  payload: changedUser,
});

export const changeUserProfileSuccess = (changedUser: IUser): ActionsTypes => ({
  type: allUsersActionTypes.CHANGE_USER_PROFILE_SUCCESS,
  payload: changedUser,
});

export const changeUserProfileFailure = (error: unknown): ActionsTypes => ({
  type: allUsersActionTypes.CHANGE_USER_PROFILE_FAILURE,
  payload: error,
});

/* eslint-disable max-len */
import allUsersActionTypes from './UsersTypes';
import { IUserInitialState } from './UsersInterfaces';
import { ActionsTypes } from '../Interfaces';
import postsActionsTypes from '../Posts/PostsTypes';
import { IPost } from '../Posts/PostsInterfaces';

const INITIAL_STATE: IUserInitialState = {
  usersList: [],
  changedUser: {},
  errorMessage: '',
  isLoading: true,
  isCreating: false,
  isSearching: false,
  isGettingCurrentUser: true,
  currentUser: {},
};

const usersReducer = (
  state = INITIAL_STATE,
  action: ActionsTypes,
): IUserInitialState => {
  switch (action.type) {
    case allUsersActionTypes.GET_USERS_START:
      return {
        ...state,
        isLoading: true,
      };

    case allUsersActionTypes.CHECK_USER_AUTH:
      return {
        ...state,
        isGettingCurrentUser: true,
      };

    case allUsersActionTypes.LOGIN_USER_START:
    case allUsersActionTypes.CREATE_USER_START:
      return {
        ...state,
        isCreating: true,
        isLoading: true,
        isGettingCurrentUser: true,
      };

    case allUsersActionTypes.GET_USERS_SUCCESS:
    case allUsersActionTypes.GET_TARGET_USER_SUCCESS:
      return {
        ...state,
        usersList: action.payload,
        isLoading: false,
      };

    case allUsersActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isCreating: false,
        isGettingCurrentUser: false,
        errorMessage: '',
      };

    case postsActionsTypes.EDIT_POST_START:
      return {
        ...state,
        isGettingCurrentUser: true,
      };

    case postsActionsTypes.EDIT_POST_SUCCESS:
      return {
        ...state,
        currentUser: { ...state.currentUser, posts: action.payload },
        isGettingCurrentUser: false,
      };

    case postsActionsTypes.CREATE_POST_START:
      return {
        ...state,
        isGettingCurrentUser: true,
      };

    case postsActionsTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        currentUser: { ...state.currentUser, posts: [...state.currentUser.posts as IPost[], action.payload] },
        isGettingCurrentUser: false,
      };

    case postsActionsTypes.DELETE_POST_START:
      return {
        ...state,
        isGettingCurrentUser: true,
      };

    case postsActionsTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        currentUser: { ...state.currentUser, posts: action.payload },
        isGettingCurrentUser: false,
      };

    case allUsersActionTypes.GET_USERS_FAILURE:
    case allUsersActionTypes.CHANGE_USER_PROFILE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case allUsersActionTypes.CHANGE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        usersList: [...state.usersList
          .filter((user) => user.id !== action.payload.id), action.payload],
        currentUser: action.payload,
      };

    case allUsersActionTypes.TOGGLE_SEARCHING_FIELD:
      return {
        ...state,
        isSearching: !state.isSearching,
      };

    case allUsersActionTypes.CLOSE_SEARCHING_FIELD:
      return {
        ...state,
        isSearching: false,
      };

    case allUsersActionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        usersList: [...state.usersList, action.payload],
        isCreating: false,
        isGettingCurrentUser: false,
        isLoading: false,
        errorMessage: '',
      };

    case allUsersActionTypes.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        currentUser: {},
      };

    case allUsersActionTypes.LOGIN_USER_FAILURE:
    case allUsersActionTypes.CREATE_USER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case allUsersActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        currentUser: {},
        usersList: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;

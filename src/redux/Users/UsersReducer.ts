import allUsersActionTypes from './UsersTypes';
import { IUserInitialState } from './UsersInterfaces';
import { ActionsTypes } from '../Interfaces';

const INITIAL_STATE: IUserInitialState = {
  usersList: [],
  errorMessage: '',
  userWithPosts: [],
};

const usersReducer = (
  state = INITIAL_STATE,
  action: ActionsTypes,
): IUserInitialState => {
  switch (action.type) {
    case allUsersActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        usersList: action.payload,
      };

    case allUsersActionTypes.GET_USERS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case allUsersActionTypes.MERGE_POSTS_TO_USER:
      return {
        ...state,
        userWithPosts: [...state.userWithPosts, action.payload],
      };

    default:
      return state;
  }
};

export default usersReducer;

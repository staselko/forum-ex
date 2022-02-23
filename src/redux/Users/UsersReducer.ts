import allUsersActionTypes from './UsersTypes';
import { IUserInitialState } from './UsersInterfaces';
import { ActionsTypes } from '../Interfaces';

const INITIAL_STATE: IUserInitialState = {
  usersList: [],
  changedUser: {},
  errorMessage: '',
  isLoading: true,
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

    case allUsersActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        usersList: action.payload,
        isLoading: false,
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
        changedUser: action.payload,
        usersList: [...state.usersList
          .filter((user) => user.id !== action.payload.id), action.payload],
      };

    case allUsersActionTypes.MERGE_POSTS_TO_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      };

    default:
      return state;
  }
};

export default usersReducer;

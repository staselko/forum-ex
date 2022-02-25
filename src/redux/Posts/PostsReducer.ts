import postsActionsTypes from './PostsTypes';
import { ActionsTypes } from '../Interfaces';
import { PostsInitialState } from './PostsInterfaces';

const INITIAL_STATE:PostsInitialState = {
  postsListToShow: [],
  comments: [],
  errorMessage: null,
  isLoading: true,
};

const postsReducer = (
  state = INITIAL_STATE,
  action: ActionsTypes,
): PostsInitialState => {
  switch (action.type) {
    case postsActionsTypes.GET_POSTS_START:
    case postsActionsTypes.CREATE_POST_START:
      return {
        ...state,
        isLoading: true,
      };

    case postsActionsTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        postsListToShow: action.payload,
        isLoading: false,
      };

    case postsActionsTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        postsListToShow: [action.payload, ...state.postsListToShow],
        isLoading: false,
      };

    case postsActionsTypes.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        isLoading: false,
      };

    case postsActionsTypes.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        isLoading: false,
      };

    case postsActionsTypes.GET_POSTS_FAILURE:
    case postsActionsTypes.GET_COMMENTS_FAILURE:
    case postsActionsTypes.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default postsReducer;

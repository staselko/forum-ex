import postsActionsTypes from './PostsTypes';
import { ActionsTypes } from '../Interfaces';
import { selectPostPage } from './PostsSelector';
import { PostsInitialState } from './PostsIntefaces';

const INITIAL_STATE:PostsInitialState = {
  postsListToShow: [],
  errorMessage: null,
  isLoading: true,
};

const postsReducer = (
  state = INITIAL_STATE,
  action: ActionsTypes,
): PostsInitialState => {
  switch (action.type) {
    case postsActionsTypes.GET_POSTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case postsActionsTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        postsListToShow: selectPostPage(action.payload),
        isLoading: false,
      };

    case postsActionsTypes.GET_POSTS_FAILURE:
      return {
        ...state,
        postsListToShow: [],
        errorMessage: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default postsReducer;

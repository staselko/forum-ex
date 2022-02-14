import PostsActionsTypes from './PostsTypes';
import { ActionsTypes } from './PostsActions';

type InitialState = {
  postsList: [],
  error?: Error | null,
};

const INITIAL_STATE:InitialState = {
  postsList: [],
  error: null,
};

const postsReducer = (state:InitialState = INITIAL_STATE, action: ActionsTypes) => {
  switch (action.type) {
    case PostsActionsTypes.GET_POSTS_START:
      return {
        ...state,
        postsList: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;

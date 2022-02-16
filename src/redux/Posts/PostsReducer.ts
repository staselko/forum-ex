import postsActionsTypes from './PostsTypes';
import { ActionsTypes } from '../Interfaces';
import { selectPostPage } from './PostsSelector';

export interface IPost {
  userId: number,
  id: number,
  title: String,
  body: String,
}

export interface PostsInitialState {
  postsList: IPost[],
  errorMessage?: unknown,
}

const INITIAL_STATE:PostsInitialState = {
  postsList: [],
  errorMessage: null,
};

const postsReducer = (
  state = INITIAL_STATE,
  action: ActionsTypes,
): PostsInitialState => {
  switch (action.type) {
    case postsActionsTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        postsList: selectPostPage(action.payload),
      };

    case postsActionsTypes.GET_POSTS_FAILURE:
      return {
        ...state,
        postsList: [],
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;

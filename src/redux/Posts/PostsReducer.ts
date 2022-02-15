import PostsActionsTypes from './PostsTypes';
import { ActionsTypes } from './PostsActions';
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

const postsReducer: any = (
  state = INITIAL_STATE,
  action: ActionsTypes,
) => {
  switch (action.type) {
    case PostsActionsTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        postsList: selectPostPage(action.payload),
      };

    case PostsActionsTypes.GET_POSTS_FAILURE:
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

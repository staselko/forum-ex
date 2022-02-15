import { combineReducers } from 'redux';
import postsReducer, { PostsInitialState } from './Posts/PostsReducer';

export interface IRootReducer {
  posts: PostsInitialState,
}

const rootReducer = combineReducers<IRootReducer>({
  posts: postsReducer,
});

export default rootReducer;

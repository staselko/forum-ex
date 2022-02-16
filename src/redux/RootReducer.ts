import { combineReducers } from 'redux';
import postsReducer, { PostsInitialState } from './Posts/PostsReducer';
import { IUserInitialState } from './Users/UsersInterfaces';
import usersReducer from './Users/UsersReducer';

export interface IRootReducer {
  posts: PostsInitialState,
  users: IUserInitialState
}

const rootReducer = combineReducers<IRootReducer>({
  posts: postsReducer,
  users: usersReducer,
});

export default rootReducer;

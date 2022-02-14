import { combineReducers } from 'redux';

import postsReducer from './Posts/PostsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;

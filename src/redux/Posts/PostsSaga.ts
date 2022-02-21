import {
  takeLatest, call, all, put,
} from 'redux-saga/effects';
import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import postsActionsTypes from './PostsTypes';

import { getPostsFailure, getPostsSuccess } from './PostsActions';
import { mergePostsAndComments } from '../../utils/api/PostsComments';

export function* getPosts(): SagaIterator {
  try {
    const postsList = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    const newPostsList = yield call(mergePostsAndComments, postsList.data);
    yield put(
      getPostsSuccess(newPostsList),
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(getPostsFailure(error.message));
    }
  }
}

export function* onGetPostsStart() {
  yield takeLatest(postsActionsTypes.GET_POSTS_START, getPosts);
}

export function* postsSaga() {
  yield all([
    call(onGetPostsStart),
  ]);
}

import {
  takeLatest, call, all, put,
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import PostsActionsTypes from './PostsTypes';

import { getPostsFailure, getPostsSuccess } from './PostsActions';
import { IPost } from './PostsReducer';

export function* getPosts(): SagaIterator {
  try {
    const apiFetch = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
    const postsData: IPost[] = yield apiFetch.json();
    yield put(
      getPostsSuccess(postsData),
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(getPostsFailure(error.message));
    }
  }
}

export function* onGetPostsStart() {
  yield takeLatest(PostsActionsTypes.GET_POSTS_START, getPosts);
}

export function* postsSaga() {
  yield all([
    call(onGetPostsStart),
  ]);
}

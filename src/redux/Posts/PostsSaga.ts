import {
  takeLatest, call, all, put,
} from 'redux-saga/effects';
import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import postsActionsTypes from './PostsTypes';

import {
  createCommentFailure, createCommentSuccess, createPostSuccess,
  getCommentsSuccess, getPostsFailure, getPostsSuccess,
} from './PostsActions';
import { ActionsTypes } from '../Interfaces';

export function* getPosts(): SagaIterator {
  try {
    const postsList = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put(
      getPostsSuccess(postsList.data),
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(getPostsFailure(error.message));
    }
  }
}

export function* getComments({ payload }: ActionsTypes): SagaIterator {
  try {
    const comments = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts/${payload}/comments`);
    yield put(
      getCommentsSuccess(comments.data),
    );
  } catch (error) {
    yield put(
      getPostsFailure(error),
    );
  }
}

export function* createComment({ payload }: ActionsTypes): SagaIterator {
  try {
    const newComment = yield call(axios.post, 'https://jsonplaceholder.typicode.com/comments', payload);
    yield put(
      createCommentSuccess(newComment.data),
    );
  } catch (error) {
    yield put(
      createCommentFailure(error),
    );
  }
}

export function* createPost({ payload }: ActionsTypes): SagaIterator {
  try {
    const newPosts = yield call(axios.post, 'https://jsonplaceholder.typicode.com/posts', payload);
    yield put(
      createPostSuccess(newPosts.data),
    );
  } catch (error) {
    yield put(
      getPostsFailure(error),
    );
  }
}

export function* onGetPostsStart() {
  yield takeLatest(postsActionsTypes.GET_POSTS_START, getPosts);
}

export function* onGetCommentsStart() {
  yield takeLatest(postsActionsTypes.GET_COMMENTS_START, getComments);
}

export function* onCreateCommentStart() {
  yield takeLatest(postsActionsTypes.CREATE_COMMENT_START, createComment);
}

export function* onCreatePostStart() {
  yield takeLatest(postsActionsTypes.CREATE_POST_START, createPost);
}

export function* postsSaga() {
  yield all([
    call(onGetPostsStart),
    call(onGetCommentsStart),
    call(onCreateCommentStart),
    call(onCreatePostStart),
  ]);
}

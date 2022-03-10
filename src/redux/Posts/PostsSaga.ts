import {
  takeLatest, call, all, put,
} from 'redux-saga/effects';
import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import postsActionsTypes from './PostsTypes';

import {
  changeCommentFailure,
  createCommentFailure, createCommentSuccess, createPostSuccess,
  getCommentsSuccess, getPostsFailure, getPostsSuccess,
} from './PostsActions';
import { ActionsTypes } from '../Interfaces';
import $api from '../../http';

export function* getPosts(): SagaIterator {
  try {
    const postFromServer = yield call(axios.get, 'http://localhost:5000/posts');
    yield put(
      getPostsSuccess(postFromServer.data),
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(getPostsFailure(error.message));
    }
  }
}

export function* getComments({ payload }: ActionsTypes): SagaIterator {
  try {
    const comments = yield call($api.get, `/comments/${payload}`);
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
    const newComment = yield call($api.post, '/comments', payload);
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
    const newPosts = yield call($api.post, '/posts', payload);
    yield put(
      createPostSuccess(newPosts.data),
    );
  } catch (error) {
    yield put(
      getPostsFailure(error),
    );
  }
}

export function* changeComment({ payload }: ActionsTypes): SagaIterator {
  try {
    console.log(payload);
    const changedComment = yield call($api.patch, '/comments', payload);
    console.log(changedComment.data);
  } catch (error) {
    yield put(
      changeCommentFailure(error),
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

export function* onChangeCommentStart() {
  yield takeLatest(postsActionsTypes.CHANGE_COMMENT_START, changeComment);
}

export function* postsSaga() {
  yield all([
    call(onGetPostsStart),
    call(onGetCommentsStart),
    call(onCreateCommentStart),
    call(onCreatePostStart),
    call(onChangeCommentStart),
  ]);
}

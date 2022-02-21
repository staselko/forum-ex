import {
  takeLatest, call, all, put,
} from 'redux-saga/effects';
import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import { allUsersActionTypes } from './UsersTypes';
import { getUsersFailure, getUsersSuccess } from './UsersActions';
import { mergeUserAndPosts } from '../../utils/api/UserPosts';
import { ActionsTypes } from '../Interfaces';

export function* getUsersList({ payload }: ActionsTypes): SagaIterator {
  try {
    const usersRef = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
    const newUser = mergeUserAndPosts(usersRef.data, payload);
    yield put(
      getUsersSuccess(newUser),
    );
  } catch (error) {
    if (error instanceof Error) {
      getUsersFailure(error.message);
    }
  }
}

export function* onGetUsersStart() {
  yield takeLatest(allUsersActionTypes.GET_USERS_START, getUsersList);
}

export function* usersSaga() {
  yield all([
    call(onGetUsersStart),
  ]);
}

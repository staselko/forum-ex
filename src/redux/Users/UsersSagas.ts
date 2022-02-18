import {
  takeLatest, call, all, put,
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { allUsersActionTypes } from './UsersTypes';
import { getUsersFailure, getUsersSuccess } from './UsersActions';
import { IUser } from './UsersInterfaces';
import { mergeUserAndPosts } from '../../ApiUtils/UserPosts';
import { ActionsTypes } from '../Interfaces';

export function* getUsersList({ payload }: ActionsTypes): SagaIterator {
  try {
    const usersRef = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
    const usersList: IUser[] = yield usersRef.json();
    const newUser = mergeUserAndPosts(usersList, payload);
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

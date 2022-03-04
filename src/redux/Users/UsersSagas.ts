import {
  takeLatest, call, all, put,
} from 'redux-saga/effects';
import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import { allUsersActionTypes } from './UsersTypes';
import {
  getUsersFailure, getUsersSuccess,
  changeUserProfileFailure, changeUserProfileSuccess,
  createUserFailure, createUserSuccess, loginUserFailure, loginUserSuccess,
} from './UsersActions';
import { ActionsTypes } from '../Interfaces';
import { IPost } from '../Posts/PostsInterfaces';
import { IUser } from './UsersInterfaces';

export function* getUsersList(): SagaIterator {
  try {
    const usersRef = yield call(axios.get, 'http://localhost:5000/users');
    yield put(
      getUsersSuccess(usersRef.data),
    );
  } catch (error) {
    if (error instanceof Error) {
      getUsersFailure(error.message);
    }
  }
}

export function* changeProfile({ payload }: ActionsTypes): SagaIterator {
  try {
    const changeUser = yield call(axios.patch, `http://localhost:5000/users/${payload?.id}`, payload);
    const posts = yield call(axios.get, 'http://localhost:5000/posts');
    const user: IUser = {
      ...changeUser.data,
      posts: [...posts.data.filter((post: IPost) => post.userId === changeUser.data.id)],
    };
    yield put(
      changeUserProfileSuccess(user),
    );
  } catch (error) {
    yield put(
      changeUserProfileFailure(error),
    );
  }
}

export function* createUser({ payload }: ActionsTypes): SagaIterator {
  try {
    const newUser = yield call(axios.post, 'http://localhost:5000/registration', payload);
    const currentUser = yield call(axios.post, 'http://localhost:5000/login', { email: payload.email, password: payload.password });
    yield put(
      createUserSuccess(newUser.data.user),
    );
    yield put(
      loginUserSuccess(currentUser.data.user),
    );
  } catch (error) {
    yield put(
      createUserFailure(error),
    );
  }
}

export function* loginUser({ payload }: ActionsTypes): SagaIterator {
  try {
    const verifideUser = yield call(axios.post, 'http://localhost:5000/login', payload);
    yield put(
      loginUserSuccess(verifideUser.data.user),
    );
  } catch (error) {
    yield put(
      loginUserFailure(error),
    );
  }
}

export function* onChangeUserProfileStart() {
  yield takeLatest(allUsersActionTypes.CHANGE_USER_PROFILE_START, changeProfile);
}

export function* onGetUsersStart() {
  yield takeLatest(allUsersActionTypes.GET_USERS_START, getUsersList);
}

export function* onCrateUserStart() {
  yield takeLatest(allUsersActionTypes.CREATE_USER_START, createUser);
}

export function* onLoginUserStart() {
  yield takeLatest(allUsersActionTypes.LOGIN_USER_START, loginUser);
}

export function* usersSaga() {
  yield all([
    call(onGetUsersStart),
    call(onChangeUserProfileStart),
    call(onCrateUserStart),
    call(onLoginUserStart),
  ]);
}

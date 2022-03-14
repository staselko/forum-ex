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
  logoutUserSuccess,
  deleteUserFailure,
  deleteUserSuccess,
} from './UsersActions';
import { ActionsTypes } from '../Interfaces';
import { IPost } from '../Posts/PostsInterfaces';
import { IUser } from './UsersInterfaces';
import $api from '../../http';

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
    const newUser = yield call($api.post, '/registration', payload);
    const currentUser = yield call($api.post, '/login', { email: payload.email, password: payload.password });
    localStorage.setItem('token', currentUser.data.accessToken);
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
    const verifiedUser = yield call($api.post, '/login', payload);
    localStorage.setItem('token', verifiedUser.data.accessToken);
    yield put(
      loginUserSuccess(verifiedUser.data.user),
    );
  } catch (error: any) {
    yield put(
      loginUserFailure(error.message),
    );
  }
}

export function* checkUser(): SagaIterator {
  try {
    const response = yield call($api.get, '/refresh');
    localStorage.setItem('token', response.data.accessToken);
    yield put(
      loginUserSuccess(response.data.user),
    );
  } catch (error) {
    loginUserFailure(error);
  }
}

export function* logoutUser(): SagaIterator {
  try {
    yield call($api.post, '/logout');
    localStorage.clear();
    yield put(
      logoutUserSuccess(),
    );
  } catch (error) {
    yield put(
      loginUserFailure(error),
    );
  }
}

export function* deleteUser({ payload }: ActionsTypes): SagaIterator {
  try {
    const users = yield call($api.delete, `/users/${payload}`);
    localStorage.clear();
    yield put(
      deleteUserSuccess(users),
    );
  } catch (error) {
    yield put(
      deleteUserFailure(error),
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

export function* onCheckUserAuth() {
  yield takeLatest(allUsersActionTypes.CHECK_USER_AUTH, checkUser);
}

export function* onLogoutUser() {
  yield takeLatest(allUsersActionTypes.LOGOUT_USER_START, logoutUser);
}

export function* onDeleteUserStart() {
  yield takeLatest(allUsersActionTypes.DELETE_USER_START, deleteUser);
}

export function* usersSaga() {
  yield all([
    call(onGetUsersStart),
    call(onChangeUserProfileStart),
    call(onCrateUserStart),
    call(onLoginUserStart),
    call(onCheckUserAuth),
    call(onLogoutUser),
    call(onDeleteUserStart),
  ]);
}

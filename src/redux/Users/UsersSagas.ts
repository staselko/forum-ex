import {
  takeLatest, call, all, put,
} from 'redux-saga/effects';
import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import { allUsersActionTypes } from './UsersTypes';
import {
  getUsersFailure, getUsersSuccess,
  changeUserProfileFailure, changeUserProfileSuccess, createUserFailure, createUserSuccess,
} from './UsersActions';
import { mergeUserAndPosts } from '../../utils/api/UserPosts';
import { ActionsTypes } from '../Interfaces';
import { IPost } from '../Posts/PostsInterfaces';
import { IUser } from './UsersInterfaces';

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

export function* changeProfile({ payload }: ActionsTypes): SagaIterator {
  try {
    const changeUser = yield call(axios.patch, `https://jsonplaceholder.typicode.com/users/${payload?.id}`, payload);
    const posts = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
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
    const newUser = yield call(axios.post, 'https://jsonplaceholder.typicode.com/users', payload);
    console.log(newUser.data);
    yield put(
      createUserSuccess(newUser.data),
    );
  } catch (error) {
    yield put(
      createUserFailure(error),
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

export function* usersSaga() {
  yield all([
    call(onGetUsersStart),
    call(onChangeUserProfileStart),
    call(onCrateUserStart),
  ]);
}

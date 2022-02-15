import { all, call } from 'redux-saga/effects';
import { postsSaga } from './Posts/PostsSaga';

export default function* rootSaga() {
  yield all([
    call(postsSaga),
  ]);
}

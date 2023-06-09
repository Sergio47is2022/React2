// eslint-disable-next-line import/no-extraneous-dependencies
import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([auth]);
}

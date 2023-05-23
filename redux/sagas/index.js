import { takeLatest } from 'redux-saga/effects'

import { FETCH_REGISTER, FETCH_LOGIN, FETCH_SIGNOUT } from '../actions/auth.actions'
import { login, logout} from './auth.sagas';

export default function* sagas() {
    yield takeLatest(FETCH_LOGIN, login);
    // yield takeLatest(FETCH_REGISTER, register);
    yield takeLatest(FETCH_SIGNOUT, logout);
}
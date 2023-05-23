import {put} from 'redux-saga/effects';
import {signin, signup} from '../../src/Services/auth.services';
// import { decode } from 'react-native-pure-jwt';

import {
  response_register,
  respones_login,
  respones_signout,
  error,
} from '../actions/auth.actions';

function* login({payload}) {
  try {
    const response = yield signin(payload);

    yield put(respones_login(response.data));
  } catch (err) {
    console.log(err.response);
    yield put(error(err.response.data));
  }
}

function* logout({payload}) {
  try {
    yield put(respones_signout(payload));
  } catch (error) {
    yield put(error(error));
  }
}

export {login, logout};

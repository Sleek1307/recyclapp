import { FETCH_LOGIN, RESPONSE_LOGIN, FETCH_REGISTER, RESPONSE_REGISTER, FETCH_SIGNOUT, RESPONSE_SIGNOUT, ERROR } from '../actions/auth.actions.js';

const init = {
    response_login:null,
    response_register:null,
    loading: false,
    error: null,   
}

export default (state = init, action) => {
    switch (action.type) {
        case FETCH_LOGIN:
            return { ...state, loading: true }
        case RESPONSE_LOGIN:
            return { ...state, response_login: action.data, loading: false, error: null }
        case FETCH_REGISTER:
            return { ...state, loading: true }
        case RESPONSE_REGISTER:
            return { ...state, response_register: action.data, loading: false, error: null }
        case FETCH_SIGNOUT:
            return { ...state, loading: true }
        case RESPONSE_SIGNOUT:
            return { ...state, response_login: action.data, loading: false, error: null }
        case ERROR:
            return { ...state, error: action.data, loading: false, response: null }
        default:
            return { ...state };
    }
}
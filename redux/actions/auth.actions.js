export const FETCH_LOGIN = "FETCH_LOGIN";
export const RESPONSE_LOGIN = "RESPONSE_LOGIN";
export const FETCH_REGISTER = "FETCH_REGISTER";
export const RESPONSE_REGISTER = "RESPONSE_REGISTER";
export const FETCH_SIGNOUT = "FETCH_SIGNOUT";
export const RESPONSE_SIGNOUT = "RESPONSE_SIGNOUT";
export const ERROR = "ERROR";

export const fetch_login = (payload) => {
    return { type: FETCH_LOGIN, payload }
}

export const respones_login = (data) => {
    return { type: RESPONSE_LOGIN, data }
}

export const fetch_register = (payload) => {

    return { type: FETCH_REGISTER, payload }
}

export const response_register = (data) => {

    return { type: RESPONSE_REGISTER, data }
}

export const fetch_signout = (payload) => {
    return { type: FETCH_SIGNOUT, payload }
}

export const respones_signout = (data) => {
    return { type: RESPONSE_SIGNOUT, data }
}

export const error = (data) => {
    return { type: ERROR, data }
}
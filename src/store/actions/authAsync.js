import * as actionTypes from './actionTypes';

import { signUp, logIn, verifyToken } from '../../utils/services';

export function signUpAsync(username, password) {

    return async function (dispatch) {
        dispatch(authStart());

        const token = await signUp(username, password);

        if (token) {

            localStorage.setItem("accessToken", token);
            dispatch(authSuccess(token));
        } else {
            dispatch(authFailure())
        }
    }

}

export function logInAsync(username, password) {

    return async function (dispatch) {
        dispatch(authStart());

        const token = await logIn(username, password);

        if (token) {

            localStorage.setItem("accessToken", token);
            dispatch(authSuccess(token));
        } else {
            dispatch(authFailure())
        }
    }
}

export function verifyTokenAsync(token) {
    return async function (dispatch) {
        dispatch(authStart());

        const token = verifyToken(token)
    }
}

function authStart() {
    return {type: actionTypes.AUTH_START}
}

function authSuccess(accessToken) {
    return {type: actionTypes.AUTH_SUCCESS, accessToken}
}

function authFailure() {
    return {type: actionTypes.AUTH_FAILURE}
}
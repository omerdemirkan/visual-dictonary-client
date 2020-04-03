import * as actionTypes from '../actions/actionTypes';

const initialState = {
    accessToken: null,
    loading: false
}

export default function (state = initialState, action) {
    switch(action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                accessToken: action.accessToken,
                loading: false
            }
        case actionTypes.AUTH_FAILURE:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}
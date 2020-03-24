import * as actionTypes from '../actions/actionTypes';

const initialState = {
    snackbarOpen: false,
    snackbarMessage: null
}

export default function notificationReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.OPEN_SNACKBAR:
            return {
                ...state,
                snackbarMessage: action.message,
                snackbarOpen: true
            }
        case actionTypes.CLOSE_SNACKBAR:
            return {
                ...state,
                snackbarOpen: false
            }
        default: 
            return state;
    }
}
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    text: '',
    loading: false,
    video: null
}

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_SEARCH_TEXT:
            return {
                ...state,
                text: action.text
            }
        default:
            return state;
    }
}

export default searchReducer;
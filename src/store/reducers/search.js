import * as actionTypes from '../actions/actionTypes';

const initialState = {
    text: '',
    loading: false,
    video: null,
    lastSearchedWord: null
}

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_SEARCH_TEXT:
            return {
                ...state,
                text: action.text
            }
        case actionTypes.SEARCH_VIDEO_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.SEARCH_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                video: action.video,
                lastSearchedWord: action.word
            }
        default:
            return state;
    }
}

export default searchReducer;
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    text: '',
    submitButtonClicked: false,
    loading: false,
    video: null,
    lastSearchedWord: null,
    lastSearchSuccessful: null
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
                loading: true,
                submitButtonClicked: true
            }
        case actionTypes.SEARCH_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                video: action.video,
                lastSearchedWord: action.word,
                lastSearchSuccessful: true
            }
        case actionTypes.SEARCH_VIDEO_FAILURE:
            return {
                ...state,
                video: null,
                loading: false,
                lastSearchedWord: action.word,
                lastSearchSuccessful: false
            }
        default:
            return state;
    }
}

export default searchReducer;
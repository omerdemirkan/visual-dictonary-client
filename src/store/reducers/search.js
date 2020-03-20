import * as actionTypes from '../actions/actionTypes';

const initialState = {
    text: '',
    loading: false,
    videos: [],
    inspectedVideoIndex: null,
    inspectedVideo: null,
    lastSearchedWord: null,
    lastSearchSuccessful: null
}

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_SEARCH_TEXT:

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
                videos: action.videos,
                inspectedVideoIndex: 0,
                inspectedVideo: action.videos[0],
                lastSearchedWord: action.word,
                lastSearchSuccessful: true
            }

        case actionTypes.SEARCH_VIDEO_FAILURE:

            return {
                ...state,
                videos: [],
                loading: false,
                lastSearchedWord: action.word,
                lastSearchSuccessful: false
            }

        case actionTypes.SET_INSPECTED_VIDEO_INDEX:
            return {
                ...state,
                inspectedVideoIndex: action.index,
                inspectedVideo: state.videos[action.index]
            }

        default:
            return state;
    }
}

export default searchReducer;
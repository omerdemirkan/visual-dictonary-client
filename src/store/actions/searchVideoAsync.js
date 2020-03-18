import * as actionTypes from './actionTypes';

export default word => {
    return dispatch => {
        dispatch(searchVideoStart());

        // To Imitate api calls
        setTimeout(() => {
            const video = {
                id: 'c7cYON3uVZo',
                startTime: '00:00:05.942',
                endTime: '00:00:10.475'
            }
            dispatch(searchVideoSuccess(video, word))
        }, 1000);
    }
}


const searchVideoStart = () => {
    return {type: actionTypes.SEARCH_VIDEO_START};
}

const searchVideoSuccess = (video, word) => {
    return {type: actionTypes.SEARCH_VIDEO_SUCCESS, video, word};
}

const searchVideoFailure = () => {
    return {type: actionTypes.SEARCH_VIDEO_FAILURE};
}
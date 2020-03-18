import * as actionTypes from './actionTypes';

export default word => {
    return dispatch => {
        dispatch(searchVideoStart());

        // To Imitate api calls
        setTimeout(() => {
            if (Math.random() > .5) {
                const video = {
                    id: 'c7cYON3uVZo',
                    startTime: '00:00:05.942',
                    endTime: '00:00:10.475'
                }
                dispatch(searchVideoSuccess(video, word))
            } else {
                dispatch(searchVideoFailure(word));
            }
            
        }, 1000);
    }
}


const searchVideoStart = () => {
    return {type: actionTypes.SEARCH_VIDEO_START};
}

const searchVideoSuccess = (video, word) => {
    return {type: actionTypes.SEARCH_VIDEO_SUCCESS, video, word};
}

const searchVideoFailure = word => {
    return {type: actionTypes.SEARCH_VIDEO_FAILURE, word};
}
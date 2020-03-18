import * as actionTypes from './actionTypes';

export default searchWord => {
    return dispatch => {
        dispatch(searchVideoStart());

        // To Imitate api calls
        setTimeout(() => {
            const video = {
                id: 'ihlaiuhf43',
                startTime: '00:00:05.942',
                endTime: '00:00:10.475'
            }
            dispatch(searchVideoSuccess(video))
        }, 1000);
    }
}


const searchVideoStart = () => {
    return {type: actionTypes.SEARCH_VIDEO_START};
}

const searchVideoSuccess = video => {
    return {type: actionTypes.SEARCH_VIDEO_SUCCESS, video};
}

const searchVideoFailure = () => {
    return {type: actionTypes.SEARCH_VIDEO_FAILURE};
}
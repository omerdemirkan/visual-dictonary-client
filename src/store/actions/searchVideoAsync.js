import * as actionTypes from './actionTypes';
// import stringToSeconds from '../../utils/stringToSeconds';
import {decodeHtml} from '../../utils/helpers';

import axios from '../../axios';

export default word => {
    return dispatch => {
        dispatch(searchVideoStart());

        axios.get('/captions?search=' + word)
        .then(res => {
            console.log(res.data);
            const videos = res.data.map(video => {
                return {
                    id: video.videoId,
                    start: Math.floor(video.start),
                    end: Math.ceil(video.start + video.duration),
                    sentence: decodeHtml(video.caption)
                }
            });

            console.log(videos);

            if (videos.length > 0) {
                dispatch(searchVideoSuccess(videos, word));
            } else {
                dispatch(searchVideoFailure(word));
            }
            
        })
        .catch(err => {
            dispatch(searchVideoFailure(word));
        });

        // Simulates request, Just so hot reloading doesn't bombard the api
        // setTimeout(() => {
        //     dispatch(searchVideoSuccess([{id: 'arj7oStGLkU', start: 589, end: 592, sentence: 'and then miraculously find↵the unbelievable work ethic'}], word));
        // }, 400);
        
    }
}


const searchVideoStart = () => {
    return {type: actionTypes.SEARCH_VIDEO_START};
}

const searchVideoSuccess = (videos, word) => {
    return {type: actionTypes.SEARCH_VIDEO_SUCCESS, videos, word};
}

const searchVideoFailure = word => {
    return {type: actionTypes.SEARCH_VIDEO_FAILURE, word};
}
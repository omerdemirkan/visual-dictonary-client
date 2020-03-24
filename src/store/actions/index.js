import * as actionTypes from './actionTypes';

export {default as searchVideoAsync} from './searchVideoAsync';

export function setSearchText(text) {
    return {type: actionTypes.SET_SEARCH_TEXT, text}
};

export function setInspectedVideoIndex(index) {
    return {type: actionTypes.SET_INSPECTED_VIDEO_INDEX, index}
}

export function incrementInspectedVideo(oldIndex, numVideos) {
    return setInspectedVideoIndex(oldIndex < (numVideos - 1) ? oldIndex + 1 : 0)
}

export function decrementInspectedVideo(oldIndex, numVideos) {
    return setInspectedVideoIndex(oldIndex > 0 ? oldIndex - 1 : numVideos - 1)
}

export function openSnackbar(message) {
    return {type: actionTypes.OPEN_SNACKBAR, message}
}

export function closeSnackbar() {
    return {type: actionTypes.CLOSE_SNACKBAR}
}
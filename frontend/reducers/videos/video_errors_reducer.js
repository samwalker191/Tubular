import merge from 'lodash/merge';

import { RECEIVE_VIDEO, RECEIVE_ERRORS, CLEAR_ERRORS } from '../videos/videos_reducer';

const VideoErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors.responseJSON;
        case RECEIVE_VIDEO:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default VideoErrorsReducer;
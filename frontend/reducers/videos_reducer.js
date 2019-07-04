import merge from 'lodash/merge';

import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../actions/videos_actions';

const VideosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return merge({}, oldState, action.videos);
        case RECEIVE_VIDEO:
            return merge({}, oldState, { [action.video.id]: action.video })
        case REMOVE_VIDEO:
            let newState = merge({}, oldState);
            delete newState[action.videoId];
            return newState;
        default:
            return oldState;
    }
};

export default VideosReducer;
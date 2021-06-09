import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../../actions/videos_actions';

const videosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            return Object.assign({}, oldState, { [action.payload.video.id]: action.payload.video })
        case REMOVE_VIDEO:
            let newState = Object.assign({}, oldState);
            delete newState[action.videoId];
            return newState;
        default:
            return oldState;
    }
};

export default videosReducer;
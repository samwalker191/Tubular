import { RECEIVE_VIDEO, RECEIVE_VIDEO_ERRORS, CLEAR_ERRORS } from '../../actions/videos_actions';

const videoErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_VIDEO_ERRORS:
            return action.errors.responseJSON;
        case RECEIVE_VIDEO:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default videoErrorsReducer;
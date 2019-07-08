import merge from 'lodash/merge';

import { RECEIVE_LIKE, DELETE_LIKE } from '../../actions/likes_actions';
import { RECEIVE_VIDEO } from '../../actions/videos_actions';

const LikesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_LIKE:
            return merge({}, oldState, { [action.like.id]: action.like });
        case RECEIVE_VIDEO:
            return merge({}, oldState, { [action.payload.like.id]: action.payload.like })
        case DELETE_LIKE:
            let newState = merge({}, oldState);
            delete newState[action.likeId];
            return newState;
        default:
            return oldState;    
    }
};

export default LikesReducer
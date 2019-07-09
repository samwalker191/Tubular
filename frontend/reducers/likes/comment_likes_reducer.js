import merge from 'lodash/merge';

import { RECEIVE_LIKE, DELETE_LIKE } from '../../actions/likes_actions';
import { RECEIVE_VIDEO } from '../../actions/videos_actions';

const CommentLikesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    
    switch (action.type) {
        case RECEIVE_LIKE:
            return action.like;
        case RECEIVE_VIDEO:
            if (action.payload.commentLikes) {
                return action.payload.commentLikes;
            } else {
                return {};
            }
        case DELETE_LIKE:
            return {};
        default:
            return oldState;
    }
};

export default CommentLikesReducer
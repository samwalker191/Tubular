import merge from 'lodash/merge';

import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../../actions/comments_actions';
import { RECEIVE_VIDEO } from '../../actions/videos_actions';

const CommentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_COMMENT:
            return merge({}, oldState, { [action.comment.id]: action.comment });
        case RECEIVE_VIDEO:
            return action.payload.comments; 
        case REMOVE_COMMENT:
            let newState = merge({}, oldState);
            delete newState[action.commentId];
            return newState;
        default:
            return oldState;
    }
};

export default CommentsReducer;

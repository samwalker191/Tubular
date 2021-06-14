import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../../actions/comments_actions';
import { RECEIVE_VIDEO } from '../../actions/videos_actions';
import { RECEIVE_LIKE, DELETE_LIKE } from '../../actions/likes_actions';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_COMMENT:
            return Object.assign({}, oldState, { [action.comment.id]: action.comment });
        case RECEIVE_VIDEO:
            if (action.payload.comments) {
                return action.payload.comments; 
            } else {
                return {};
            }
        case REMOVE_COMMENT:
            let newState = Object.assign({}, oldState);
            delete newState[action.commentId];
            return newState;
        case DELETE_LIKE:
        case RECEIVE_LIKE:
            return action.comment ? Object.assign({}, oldState, { [action.comment.id]: action.comment }) : oldState;
        default:
            return oldState;
    }
};

export default commentsReducer;

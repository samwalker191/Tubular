import { RECEIVE_LIKE, DELETE_LIKE } from '../../actions/likes_actions';
import { RECEIVE_VIDEO } from '../../actions/videos_actions';

const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_LIKE:
            return Object.assign({}, oldState, { [action.like.id]: action.like });
        case RECEIVE_VIDEO:
            if (action.payload.like) {
                return Object.assign({}, oldState, { [action.payload.like.id]: action.payload.like });;
            } else {
                return {};
            }
        case DELETE_LIKE:
            return {};
        default:
            return oldState;    
    }
};

export default likesReducer
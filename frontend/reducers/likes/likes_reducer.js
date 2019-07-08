import merge from 'lodash/merge';

import { RECEIVE_LIKE, DELETE_LIKE } from '../../actions/likes_actions';

const LikesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_LIKE:
            return merge({}, oldState, { [action.like.id]: action.like })
        case DELETE_LIKE:

        default:
            return oldState;    
    }
};

export default LikesReducer
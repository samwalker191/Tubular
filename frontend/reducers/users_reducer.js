import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UserReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            return merge({}, oldState, { [action.currentUser.id]: action.currentUser })
        default:
            return oldState;
    }
};

export default UserReducer;
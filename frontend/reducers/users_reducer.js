import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const UserReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, { [action.currentUser.id]: action.currentUser })
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return oldState;
    }
};

export default UserReducer;
import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';

const _nullSession = {
    currentUser: null
};

const SessionReducer = (oldState = _nullSession, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, { id: action.user.id })
        case REMOVE_CURRENT_USER:
            return merge({}, oldState, { id: null })
        default:
            return oldState;
    }
};

export default SessionReducer;
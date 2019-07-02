import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const SessionErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return merge({}, oldState, action.errors);
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, []);
        default:
            return oldState;
    }
};

export default SessionErrorsReducer;
import merge from 'lodash/merge';
import { TOGGLE_SIDEBAR, TOGGLE_SHOW_PAGE, ADD_TO_HISTORY } from '../actions/ui_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const defaultUI = {
    sidebarSmall: true,
    showPage: false,
    history: []
};

const UIReducer = (oldState = defaultUI, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            let toggledSide = !newState.sidebarSmall;
            return merge(newState, { sidebarSmall: toggledSide });
        case TOGGLE_SHOW_PAGE:
            let toggledShow = !newState.showPage;
            return merge(newState, { showPage: toggledShow })
        // case ADD_TO_HISTORY:
        //     return newState.history.push(action.video.id);
        case LOGOUT_CURRENT_USER:
            return merge(newState, { history: [] });
        default: 
            return oldState;
    }
};

export default UIReducer;
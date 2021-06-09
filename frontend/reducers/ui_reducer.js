import merge from 'lodash/merge';
import { TOGGLE_SIDEBAR, TOGGLE_SHOW_PAGE, ADD_TO_HISTORY } from '../actions/ui_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const defaultUI = {
    sidebarSmall: true,
    showPage: false,
    history: []
};

const uiReducer = (oldState = defaultUI, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case TOGGLE_SIDEBAR:
            let toggledSide = !newState.sidebarSmall;
            return Object.assign(newState, { sidebarSmall: toggledSide });
        case TOGGLE_SHOW_PAGE:
            let toggledShow = !newState.showPage;
            return Object.assign(newState, { showPage: toggledShow })
        case LOGOUT_CURRENT_USER:
            return Object.assign(newState, { history: [] });
        default: 
            return oldState;
    }
};

export default uiReducer;
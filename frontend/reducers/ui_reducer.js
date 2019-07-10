import merge from 'lodash/merge';
import { TOGGLE_SIDEBAR, TOGGLE_SHOW_PAGE } from '../actions/ui_actions';

const defaultUI = {
    sidebarSmall: true,
    showPage: false,
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
        default: 
            return oldState;
    }
};

export default UIReducer;
import merge from 'lodash/merge';
import { TOGGLE_SIDEBAR } from '../actions/ui_actions';



const UIReducer = (oldState = { sidebarSmall: true }, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            let toggled = !newState.sidebarSmall;
            return merge(newState, { sidebarSmall: toggled })
        default: 
            return oldState;
    }
};

export default UIReducer;
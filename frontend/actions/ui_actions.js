export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const TOGGLE_SHOW_PAGE = 'TOGGLE_SHOW_PAGE';
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';

export const toggleSidebar = () => ({
    type: TOGGLE_SIDEBAR
});

export const toggleShowPage = () => ({
    type: TOGGLE_SHOW_PAGE
});

export const addToHistory = video => ({
    type: ADD_TO_HISTORY,
    video
});
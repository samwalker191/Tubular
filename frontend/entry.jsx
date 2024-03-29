import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// FOR TESTING
// import { fetchVideo, fetchVideos, updateVideo } from './actions/videos_actions';
// import { toggleSidebar } from './actions/ui_actions';
// FOR TESTING


document.addEventListener("DOMContentLoaded", () => {
    let store;
    const root = document.getElementById('root');
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // FOR TESTING
    // window.store = store;
    // window.getState = store.getState;
    // window.toggleSidebar = toggleSidebar;
    // window.fetchVideo = fetchVideo;
    // window.fetchVideos = fetchVideos;
    // window.updateVideo = updateVideo;
    // FOR TESTING

    ReactDOM.render(<Root store={store}/>, root)
})
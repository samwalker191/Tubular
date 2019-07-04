import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// FOR TESTING
import { fetchVideo, fetchVideos } from './actions/videos_actions';

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
    window.store = store;
    window.getState = store.getState;
    window.fetchVideo = fetchVideo;
    window.fetchVideos = fetchVideos;
    // FOR TESTING

    ReactDOM.render(<Root store={store}/>, root)
})
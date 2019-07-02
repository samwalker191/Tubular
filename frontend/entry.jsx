import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById('root');
    window.store = store;
    window.getState = store.getState;
    ReactDOM.render(<Root store={store}/>, root)
})
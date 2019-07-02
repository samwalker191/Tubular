import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store; //testing
    window.getState = store.getState; //testing
    const root = document.getElementById('root');
    ReactDOM.render(<h1>IT BEGINS</h1>, root)
})
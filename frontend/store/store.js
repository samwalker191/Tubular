import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

let middlewares;
if (process.env.NODE_ENV === 'production') {
    middlewares = [thunk];
} else {
    middlewares = [thunk, logger];
}

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middlewares)
    )
);

export default configureStore;
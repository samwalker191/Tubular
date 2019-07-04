import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import VideosReducer from './videos/videos_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    videos: VideosReducer
});

export default EntitiesReducer;
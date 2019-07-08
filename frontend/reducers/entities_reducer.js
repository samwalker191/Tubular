import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import VideosReducer from './videos/videos_reducer';
import LikesReducer from './likes/likes_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    videos: VideosReducer,
    likes: LikesReducer
});

export default EntitiesReducer;
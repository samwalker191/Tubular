import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import VideosReducer from './videos/videos_reducer';
import LikesReducer from './likes/likes_reducer';
import CommentsReducer from './comments/comments_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    videos: VideosReducer,
    like: LikesReducer,
    comments: CommentsReducer
});

export default EntitiesReducer;
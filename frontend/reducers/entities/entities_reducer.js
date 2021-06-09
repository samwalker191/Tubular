import { combineReducers } from 'redux';
import users from './users_reducer';
import videos from './videos_reducer';
import likes from './likes_reducer';
import comments from './comments_reducer';

const entitiesReducer = combineReducers({
    users,
    videos,
    likes,
    comments
});

export default entitiesReducer;
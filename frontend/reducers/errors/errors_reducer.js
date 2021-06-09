import { combineReducers } from 'redux';
import sessionErrors from './session_errors_reducer';
import videoErrors from './video_errors_reducer';

const errorsReducer = combineReducers({
    sessionErrors,
    videoErrors
});

export default errorsReducer;
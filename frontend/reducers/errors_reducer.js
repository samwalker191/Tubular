import { combineReducers } from 'redux';
import SessionErrorsReducer from './session/session_errors_reducer';
import VideoErrorsReducer from './videos/video_errors_reducer';

const ErrorsReducer = combineReducers({
    sessionErrors: SessionErrorsReducer,
    videoErrors: VideoErrorsReducer
});

export default ErrorsReducer;
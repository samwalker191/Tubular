import { connect } from 'react-redux';
import VideoForm from './video_form';
import { createVideo } from '../../actions/videos_actions';

const mapSTP = state => {
    let currentUser = state.session.id === null ? null : state.entities.users[state.session.id];
    return ({
        video: { title: '', description: null },
        errors: state.errors.videos,
        formType: 'Upload your video',
        currentUser: currentUser
    });
};

const mapDTP = dispatch => {
    
    return ({
        action: video => dispatch(createVideo(video))
    })
};

export default connect(mapSTP, mapDTP)(VideoForm);
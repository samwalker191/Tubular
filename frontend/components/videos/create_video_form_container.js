import { connect } from 'react-redux';
import VideoForm from './video_form';
import { createVideo, deleteVideo } from '../../actions/videos_actions';

const mapSTP = state => {
    let currentUser = state.session.id === null ? null : state.entities.users[state.session.id];
    return ({
        video: { 
            title: '',
            description: '',
            videoURL: null,
            thumbnail: null
        },
        errors: state.errors.videos,
        formType: 'Upload your video',
        currentUser: currentUser,
        buttonType: 'Publish'
    });
};

const mapDTP = dispatch => {
    
    return ({
        action: video => dispatch(createVideo(video)),
        deleteVideo: videoId => dispatch(deleteVideo(videoId))
    })
};

export default connect(mapSTP, mapDTP)(VideoForm);
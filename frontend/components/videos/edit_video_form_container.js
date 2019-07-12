import React from 'react';
import { connect } from 'react-redux';
import VideoForm from './video_form';
import { fetchVideo, updateVideo, deleteVideo, clearErrors } from '../../actions/videos_actions';

const mapSTP = (state, ownProps) => {
    let currentUser = state.session.id === null ? null : state.entities.users[state.session.id];
    let defaultVideo = {
        title: '',
        description: '',
        videoURL: null,
        thumbnail: null
    };
    let video = state.entities.videos[ownProps.match.params.videoId] || defaultVideo;
    return ({
        video: video,
        errors: state.errors.videoErrors,
        formType: 'Update your video details',
        buttonType: 'Update',
        currentUser: currentUser,
    });
};

const mapDTP = dispatch => {
    return ({
        action: (video, formData) => dispatch(updateVideo(video, formData)),
        fetchVideo: videoId => dispatch(fetchVideo(videoId)),
        deleteVideo: videoId => dispatch(deleteVideo(videoId)),
        clearErrors: () => dispatch(clearErrors())
    })
};

class EditVideoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.video;
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        if (this.props.video.title === '') {
            return null;
        }
        return(
            <VideoForm
                action={this.props.action}
                formType={this.props.formType}
                video={this.props.video}
                errors={this.props.errors}
                currentUser={this.props.currentUser}
                buttonType={this.props.buttonType}
                deleteVideo={this.props.deleteVideo}
                clearErrors={this.props.clearErrors}
            />
        );
    }
}

export default connect(mapSTP, mapDTP)(EditVideoForm);
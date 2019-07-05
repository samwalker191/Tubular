import React from 'react';
import { connect } from 'react-redux';
import VideoForm from './video_form';
import { fetchVideo, updateVideo } from '../../actions/videos_actions';

const mapSTP = (state, ownProps) => {
    let currentUser = state.session.id === null ? null : state.entities.users[state.session.id];
    let defaultVideo = { title: '', description: null };
    let video = state.entities.videos[ownProps.match.params.videoId] || defaultVideo;
    return ({
        video: video,
        errors: state.errors.videos,
        formType: 'Update Your Video Details',
        buttonType: 'Update',
        currentUser: currentUser,
    });
};

const mapDTP = dispatch => {

    return ({
        action: video => dispatch(updateVideo(video)),
        fetchVideo: videoId => dispatch(fetchVideo(videoId))
    })
};

class EditVideoForm extends React.Component {
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        return(
            <VideoForm
                action={this.props.action}
                formType={this.props.formType}
                video={this.props.video}
                errors={this.props.errors}
                currentUser={this.props.currentUser}
                buttonType={this.props.buttonType}
            />
        );
    }
}

export default connect(mapSTP, mapDTP)(EditVideoForm);
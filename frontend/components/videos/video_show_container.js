import { connect } from 'react-redux';
import { fetchVideo, fetchVideos } from '../../actions/videos_actions';
import VideoShow from './video_show';

const mapSTP = (state, ownProps) => {
    return ({
        videos: Object.values(state.entities.videos),
        shownVideo: state.entities.videos[ownProps.match.params.videoId],
        
    })
};

const mapDTP = dispatch => {

};

export default connect(mapSTP, mapDTP)(VideoShow);
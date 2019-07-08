import { connect } from 'react-redux';
import { fetchVideo, fetchVideos } from '../../actions/videos_actions';
import { addLike, changeLike, removeLike } from '../../actions/likes_actions';
import VideoShow from './video_show';

const mapSTP = (state, ownProps) => {
    let currentUser = state.session.id === null ? null : state.entities.users[state.session.id];
    let currUserLike = state.entities.likes === undefined ? null : state.entities.like
    return ({
        videos: Object.values(state.entities.videos),
        shownVideo: state.entities.videos[ownProps.match.params.videoId],
        currentUser: currentUser,
    });
};

const mapDTP = dispatch => {
    return ({
        fetchVideo: videoId => dispatch(fetchVideo(videoId)),
        fetchVideos: query => dispatch(fetchVideos(query)),
        addLike: like => dispatch(addLike(like)),
        changeLike: like => dispatch(changeLike(like)),
        removeLike: likeId => dispatch(removeLike(likeId))
    });
};

export default connect(mapSTP, mapDTP)(VideoShow);
import { connect } from 'react-redux';
import { fetchVideo, fetchVideos, updateVideoSimple } from '../../actions/videos_actions';
import { addLike, changeLike, removeLike } from '../../actions/likes_actions';
import { toggleShowPage, addToHistory } from '../../actions/ui_actions';
import VideoShow from './video_show';
import { filter, shuffle } from '../../util/selectors';

const mapSTP = (state, ownProps) => {
    let currentUser = state.session.id === null ? null : state.entities.users[state.session.id];
    let currUserLike = state.entities.like === {} ? null : state.entities.like
    let videosArray = Object.values(state.entities.videos);
    let filterId = parseInt(ownProps.match.params.videoId);
    // let history = state.ui.history;
    
    return ({
        videos: filter(videosArray, filterId),
        shownVideo: state.entities.videos[ownProps.match.params.videoId],
        currentUser: currentUser,
        currUserLike: currUserLike,
        sidebarSmall: state.ui.sidebarSmall,
    });
};

const mapDTP = dispatch => {
    return ({
        fetchVideo: videoId => dispatch(fetchVideo(videoId)),
        fetchVideos: query => dispatch(fetchVideos(query)),
        addLike: like => dispatch(addLike(like)),
        changeLike: like => dispatch(changeLike(like)),
        removeLike: likeId => dispatch(removeLike(likeId)),
        toggleShowPage: () => dispatch(toggleShowPage()),
        updateVideoSimple: video => dispatch(updateVideoSimple(video)),
        addToHistory: video => dispatch(addToHistory(video))
    });
};

export default connect(mapSTP, mapDTP)(VideoShow);
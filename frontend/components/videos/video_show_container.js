import { connect } from 'react-redux';
import { fetchVideo, fetchVideos, updateVideoSimple } from '../../actions/videos_actions';
import { addLike, changeLike, removeLike } from '../../actions/likes_actions';
import { toggleShowPage, addToHistory } from '../../actions/ui_actions';
import VideoShow from './video_show';
import { filter, shuffle, likeByCurrentUserIdAndVideoId } from '../../util/selectors';
import { toggleSidebar } from '../../actions/ui_actions';

const mapSTP = (state, ownProps) => {
    let videosArray = Object.values(state.entities.videos);
    let filterId = parseInt(ownProps.match.params.videoId);
    // let history = state.ui.history;
    return ({
        videos: filter(videosArray, filterId),
        shownVideo: state.entities.videos[ownProps.match.params.videoId],
        currentUser: state.entities.users[state.session.id],
        currUserLike: likeByCurrentUserIdAndVideoId(state, ownProps.match.params.videoId),
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
        addToHistory: video => dispatch(addToHistory(video)),
        toggleSidebar: () => dispatch(toggleSidebar())
    });
};

export default connect(mapSTP, mapDTP)(VideoShow);
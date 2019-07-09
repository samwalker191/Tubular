import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/videos_actions';
import SearchVideoIndex from './search_video_index';

const mapSTP = (state, ownProps) => {
    return ({
        query: ownProps.match.params.query,
        videos: Object.values(state.entities.videos)        
    })
};

const mapDTP = dispatch => {
    return ({
        fetchVideos: (query) => dispatch(fetchVideos(query))        
    });
};

export default connect(mapSTP, mapDTP)(SearchVideoIndex);
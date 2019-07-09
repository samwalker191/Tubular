import React from 'react';
import SearchVideoIndexItem from './search_video_index_item';

class SearchVideoIndex extends React.Component {

    componentDidMount() {
        this.props.fetchVideos(this.props.match.params.query);
    }

    render() {
        let videoItems = this.props.videos.map(
            (video, idx) => <SearchVideoIndexItem video={video} key={`search-video-index-${idx}`} />
        );

        return(
            <div className='search-results-page'>
                <div className='search-results-spacer'></div>
                <ul className='search-results-list'>
                    {videoItems}
                </ul>
            </div>
        );
    }
}

export default SearchVideoIndex;
import React from 'react';
import SearchVideoIndexItem from './search_video_index_item';

class SearchVideoIndex extends React.Component {

    componentDidMount() {
        this.props.fetchVideos(this.props.match.params.query);
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {

        if (prevProps.query) {
            if (prevProps.query != this.props.match.params.query) {
                this.props.fetchVideos(this.props.match.params.query);
            }
        }
    }

    render() {
        let videoItems = this.props.videos.map(
            (video, idx) => <SearchVideoIndexItem video={video} key={`search-video-index-${idx}`} />
        );
        let searchResults;
        if (videoItems.length > 0) {
            searchResults = 'Search Results';
        } else {
            searchResults = 'No Results Found, please update search query';
        }
        return(
            <div className='search-results-page'>
                <div className='search-results-spacer'></div>
                <ul className='search-results-list'>
                    <header className='search-results-header'>
                        {searchResults}
                    </header>
                    {videoItems}
                </ul>
            </div>
        );
    }
}

export default SearchVideoIndex;
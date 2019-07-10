import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {


    componentDidMount() {
        this.props.fetchVideos('');
    }

    render() {
        let videoItems = this.props.videos.map(
            (video, idx) => <VideoIndexItem video={video} key={`video-index-${idx}`}/>
        );
        let size;
        if (this.props.sidebarSmall) {
            size = 'small-index';
        } else {
            size = 'large-index';
        }

        return (
            <div className='main-index'>
                <div className={`main-index-recommended ${size}`}>
                    <div className='main-index-spacer'></div>
                    <h3>Recommended</h3>
                    
                    <ul className="main-index-recommended-list">
                        {videoItems}
                        {videoItems}
                        {videoItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default VideoIndex;
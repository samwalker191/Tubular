import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {


    componentDidMount() {
        this.props.fetchVideos('');
    }

    render() {
        let videoItems = this.props.videos.map(
            (video, idx) => <VideoIndexItem video={video} key={`video-index-${idx}`}/>
        )

        return (
            <div className='main-index'>
                {/* <div className='main-index-trending'>
                    <ul className="main-index-recommended-list">
                        {videoItems}
                        {videoItems}
                        {videoItems}
                        {videoItems}
                        {videoItems}
                        {videoItems}
                    </ul>
                </div> */}
                <h3>Recommended</h3>
                <div className='main-index-recommended'>
                    
                    <ul className="main-index-recommended-list">
                        {videoItems}
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
import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchVideos('');
        window.scrollTo(0, 0);
    }

    shuffle(arr) {
        let array = arr.slice();
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    render() {
        // let videosShuffled = this.shuffle(this.props.videos);
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
                    </ul>
                </div>
            </div>
        )
    }
}

export default VideoIndex;
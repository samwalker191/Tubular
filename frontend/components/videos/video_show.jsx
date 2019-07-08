import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import VideoShowIndexItem from './video_show_index_item';
import { Link } from 'react-router-dom';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.shownVideo;
    }

    componentDidMount() {
        this.props.fetchVideos('');
        this.props.fetchVideo(this.props.match.params.videoId);
        
    }

    componentDidUpdate(prevProps) {
        
        if (prevProps.shownVideo) {
            if (prevProps.shownVideo.id != this.props.match.params.videoId) {
                this.props.fetchVideo(this.props.match.params.videoId)
                    .then(() => window.location.reload())
                
            }
        }
    }

    render() {
        if (this.props.shownVideo === undefined) {
            return null
        }

        let videoItems = this.props.videos.map(
            (video, idx) => <VideoShowIndexItem video={video} key={`video-show-index-${idx}`} />
        )

        let editBtn;
        if (this.props.currentUser) {
            if (this.props.currentUser.id === this.props.shownVideo.owner_id) {
                editBtn = <Link to={`/edit/${this.props.shownVideo.id}`} className='video-show-edit-btn'>Edit Video</Link>
            }
        }

        return (
            <div>
                <div className='video-show-page'>
                    <div className='video-show-container'>
                        
                            <div className='video-container'>
                                <video width="100%" height="auto" controls>
                                    <source src={this.props.shownVideo.videoURL} type="video/mp4"></source>
                                </video>
                            </div>
                            <div className='video-show-details'>
                                <div className='video-show-details-top'>
                                    <div className='video-title-edit'>
                                        <div className='video-title'>{this.props.shownVideo.title}</div>
                                        <div >{editBtn}</div>
                                    </div>

                                    <div className='video-stats'>
                                        <span>0 Views</span>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faThumbsUp}/>500</li>
                                            <li><FontAwesomeIcon icon={faThumbsDown}/>499</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='video-show-details-bottom'>
                                    <div className='video-show-details-bottom-left'>
                                        <div className="video-owner">{this.props.shownVideo.owner}</div>
                                        <div className="video-published">Published on {this.props.shownVideo.published}</div>
                                    </div>
                                    <div className='video-description'>{this.props.shownVideo.description}</div>
                                </div>
                            </div>
                        
                    </div>

                    <div className='video-show-index-container'>
                        <h3>Up Next</h3>
                        <ul className='video-show-index-list'>
                            {videoItems}
                            {videoItems}
                            {videoItems}
                            {videoItems}
                            {videoItems}
                            {videoItems}
                            {videoItems}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoShow;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';


class VideoShow extends React.Component {

    componentDidMount() {
        this.props.fetchVideos('');
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        if (this.props.shownVideo === undefined) {
            return null
        }
        return (
            <div>
                <div className='video-show-container'>
                    <div className='video-show'>
                        <div className='video-container'>
                            <video controls>
                                <source src={this.props.shownVideo.videoURL} />
                            </video>
                        </div>
                        <div className='video-show-details'>
                            <div className='video-show-details-top'>
                                <span className='video-title'>{this.props.shownVideo.title}</span>
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

                    <div className='video-index'>

                    </div>
                </div>
            </div>
        );
    }
}

export default VideoShow;
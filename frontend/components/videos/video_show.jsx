import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import VideoShowIndexItem from './video_show_index_item';
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comments/comment_index_container';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.shownVideo;
        this.handleVideoLike = this.handleVideoLike.bind(this);
        this.handleVideoDislike = this.handleVideoDislike.bind(this);
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

    handleVideoLike() {
        if (this.props.currUserLike.liked !== undefined) {
            if (this.props.currUserLike.liked === false) {
                this.props.changeLike({
                    id: this.props.currUserLike.id,
                    liked: true,
                    likeable_id: this.props.currUserLike.likeable_id,
                    likeable_type: this.props.currUserLike.likeable_type
                }).then(() => this.props.fetchVideo(this.props.match.params.videoId))
            } else {
                this.props.removeLike(this.props.currUserLike.id)
                    .then(() => this.props.fetchVideo(this.props.match.params.videoId))
            }
        } else {
            this.props.addLike({
               liked: true,
               likeable_id: this.props.shownVideo.id,
               likeable_type: 'Video'
            }).then(() => this.props.fetchVideo(this.props.match.params.videoId))
        }
    }

    handleVideoDislike() {
        if (this.props.currUserLike.liked !== undefined) {
            if (this.props.currUserLike.liked === true) {
                this.props.changeLike({
                    id: this.props.currUserLike.id,
                    liked: false,
                    likeable_id: this.props.currUserLike.likeable_id,
                    likeable_type: this.props.currUserLike.likeable_type
                }).then(() => this.props.fetchVideo(this.props.match.params.videoId))
            } else {
                this.props.removeLike(this.props.currUserLike.id)
                    .then(() => this.props.fetchVideo(this.props.match.params.videoId))
            }
        } else {
            this.props.addLike({
                liked: false,
                likeable_id: this.props.shownVideo.id,
                likeable_type: 'Video'
            }).then(() => this.props.fetchVideo(this.props.match.params.videoId))
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

        let likedActive;
        let dislikedActive;
        if (this.props.currUserLike.liked !== undefined) {
            if (this.props.currUserLike.liked === true) {
                likedActive = 'active';
                dislikedActive = null;
            } else {
                likedActive = null;
                dislikedActive = 'active';
            }
        }
        
        return (
            <div>
                <div className='video-show-page'>
                    <div className='video-show-container'>
                        
                            <div className='video-container'>
                                <video width="100%" controls>
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
                                            <li className={likedActive}>
                                                <button onClick={this.handleVideoLike} className={likedActive}>
                                                    <FontAwesomeIcon icon={faThumbsUp}/>
                                                    {this.props.shownVideo.likes}
                                                </button>
                                                
                                            </li>
                                            <li className={dislikedActive}>
                                                <button onClick={this.handleVideoDislike} className={dislikedActive}>
                                                    <FontAwesomeIcon icon={faThumbsDown}/>
                                                    {this.props.shownVideo.dislikes}    
                                                </button>
                                                
                                            </li>
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
                        <CommentIndexContainer shownVideo={this.props.shownVideo} />                        
                    </div>

                    <div className='video-show-index-container'>
                        <h3>Up Next</h3>
                        <ul className='video-show-index-list'>
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
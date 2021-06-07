import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import VideoShowIndexItem from './video_show_index_item';
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comments/comment_index_container';
import ModalSidebarContainer from '../sidebar/modal_sidebar_container';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.shownVideo;
        this.handleVideoLike = this.handleVideoLike.bind(this);
        this.handleVideoDislike = this.handleVideoDislike.bind(this);
        this.handleVideoPlay = this.handleVideoPlay.bind(this);
        this.handleUpNext = this.handleUpNext.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos('');
        this.props.fetchVideo(this.props.match.params.videoId);
        this.props.toggleShowPage();
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this.props.toggleShowPage();
    }

    componentDidUpdate(prevProps) {
        
        if (prevProps.shownVideo) {
            if (prevProps.shownVideo.id != this.props.match.params.videoId) {
                this.props.fetchVideo(this.props.match.params.videoId);
                window.scrollTo(0, 0);
            }
        }
    }

    toggleSidebar() {
        this.props.toggleSidebar();
    }

    handleVideoLike() {
        if (this.props.currUserLike) {
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
        if (this.props.currUserLike) {
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

    handleVideoPlay() {
        this.props.updateVideoSimple({ 
            views: this.props.shownVideo.views + 1,
            id: this.props.shownVideo.id
        });
    }

    // handleAutoPlay() {
    //     setTimeout(() => document.getElementById('video').play(), 1000);        
    // }

    handleUpNext(e) {
        e.preventDefault();
        this.props.history.push(`/watch/${this.props.videos[0].id}`)
    }

    removeCurrentVideo(videosArray) {
        return videosArray.filter(video => video.id !== parseInt(this.props.match.params.videoId));
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
            if (this.props.currentUser.id === this.props.shownVideo.ownerId) {
                editBtn = <Link to={`/edit/${this.props.shownVideo.id}`} className='video-show-edit-btn'>Edit Video</Link>
            }
        }

        let likedActive;
        let dislikedActive;
        console.log('showpage', this.props.currUserLike);
        if (this.props.currUserLike) {
            if (this.props.currUserLike.liked === true) {
                likedActive = 'active';
                dislikedActive = null;
            } else {
                likedActive = null;
                dislikedActive = 'active';
            }
        }

        let modal;
        let hidden;
        if (this.props.sidebarSmall) {
            modal = 'hidden';
            hidden = 'hidden';
        } else {
            modal = 'modal';
            hidden = '';
        }

        return (
            <div className='video-show-wrapper'>
                <div className='video-show-page'>
                    <div className='video-show-container'>
                        
                            <div className='video-container'>
                                <video 
                                // width="100%" 
                                // height="100"
                                controls 
                                onPlay={this.handleVideoPlay} 
                                onEnded={this.handleUpNext}
                                autoPlay
                                id='video'
                                key={this.props.shownVideo.videoUrl}
                            >
                                    <source src={this.props.shownVideo.videoUrl} type="video/mp4"></source>
                                </video>
                            </div>
                            <div className='video-show-details'>
                                <div className='video-show-details-top'>
                                    <div className='video-title-edit'>
                                        <div className='video-title'>{this.props.shownVideo.title}</div>
                                        <div >{editBtn}</div>
                                    </div>

                                    <div className='video-stats'>
                                        <span>{this.props.shownVideo.views} Views</span>
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
                        </ul>
                    </div>
                </div>
                <div className={hidden}>
                    <div className={modal} onClick={this.toggleSidebar}></div>
                    <div>
                        <ModalSidebarContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoShow;
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class VideoIndexItem extends React.Component {

    render() {

        return (
            <li className='video-list-item'>
                <Link to={`/watch/${this.props.video.id}`}>
                    <img src={this.props.video.thumbnail}></img>
                    <div className='video-details'>
                        <h3 className='video-details-title'>{this.props.video.title}</h3>
                        <p className='video-details-owner'>{this.props.video.owner}</p>
                        <div className='video-sub-details'>
                            <span className='sub-details-views'>{this.props.video.views} Views</span>
                            <FontAwesomeIcon icon={faCircle} className='sub-details-dot' />
                            <span className='sub-details-published'>{this.props.video.published}</span>
                        </div>
                    </div>
                </Link>
            </li>
        );
    }
}

export default VideoIndexItem;
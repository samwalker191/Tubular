import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


const VideoShowIndexItem = ({ video }) => {

    return (
        <Link to={`/watch/${video.id}`} className='video-show-list-link'>
            <img src={video.thumbnail} />
            <div className='video-show-index-details'>
                <h3>{video.title}</h3>
                <p>{video.owner}</p>
                <div>
                    <span>{video.views} Views</span>
                    <FontAwesomeIcon icon={faCircle} className='sub-details-dot' />
                    <span>{video.published}</span>
                </div>
            </div>
        </Link>
    );
}

export default VideoShowIndexItem;
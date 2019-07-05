import React from 'react';
import { Link } from 'react-router-dom';

class VideoShowIndexItem extends React.Component {

    render() {

        return (
            <li className='video-show-list-item'>
                <Link to={`/watch/${this.props.video.id}`} className='video-show-list-link'>
                    <img src={this.props.video.thumbnail}></img>
                    <div className='video-show-details'>
                        <h3>{this.props.video.title}</h3>
                        <p>{this.props.video.owner}</p>
                        <p>504 views</p>
                    </div>
                </Link>
            </li>
        );
    }
}

export default VideoShowIndexItem;
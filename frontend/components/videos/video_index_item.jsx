import React from 'react';
import { Link } from 'react-router-dom';

class VideoIndexItem extends React.Component {

    render() {

        return (
            <li className='video-list-item'>
                <Link to={`/watch/${this.props.video.id}`}>
                    <img src={this.props.video.thumbnail}></img>
                    <div className='video-details'>
                        <h3>{this.props.video.title}</h3>
                        <p>{this.props.video.owner}</p>
                    </div>
                </Link>
            </li>
        );
    }
}

export default VideoIndexItem;
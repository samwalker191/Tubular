import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


class SearchVideoIndexItem extends React.Component {


    render() {

        return (
            <li className='search-video-list-item'>
                <Link to={`/watch/${this.props.video.id}`}>
                    <img src={this.props.video.thumbnail}></img>
                    <div className='search-video-details'>
                        <h3>{this.props.video.title}</h3>
                        <div className='search-video-sub-details'>
                            <span className='sub-details-name'>{this.props.video.owner}</span>
                            <span className='sub-details-views'>{this.props.video.views} Views</span>
                            <FontAwesomeIcon icon={faCircle} className='sub-details-dot'/>
                            <span className='sub-details-published'>Published on {this.props.video.published}</span>
                        </div>
                        <p className='search-video-details-descrip'>{this.props.video.description}</p>
                    </div>
                </Link>
            </li>
        );
    }
}

export default SearchVideoIndexItem;
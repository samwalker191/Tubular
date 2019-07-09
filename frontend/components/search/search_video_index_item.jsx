import React from 'react';
import { Link } from 'react-router-dom';

class SearchVideoIndexItem extends React.Component {


    render() {

        return (
            <li className='search-video-list-item'>
                <Link to={`/watch/${this.props.video.id}`}>
                    <img src={this.props.video.thumbnail}></img>
                    <div className='search-video-details'>
                        <h3>{this.props.video.title}</h3>
                        <p>{this.props.video.owner}</p>
                    </div>
                </Link>
            </li>
        );
    }
}

export default SearchVideoIndexItem;
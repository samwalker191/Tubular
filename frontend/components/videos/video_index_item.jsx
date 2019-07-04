import React from 'react';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = { vidURL: '', }
    }


    componentDidMount() {

    }

    render() {

        return (
            <li className='video-list-item'>
                <img src={this.props.video.thumbnail}></img>
                <div className='video-details'>
                    <h3>{this.props.video.title}</h3>
                    <p>{this.props.video.owner}</p>
                </div>
            </li>
        );
    }
}

export default VideoIndexItem;
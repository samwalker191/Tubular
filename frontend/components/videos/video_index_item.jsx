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
            <li>
                <img src={this.props.video.thumbnail} width='210' ></img>
                <div className='vide-details'>
                    <h3>{this.props.video.title}</h3>
                    <p>{this.props.video.owner}</p>
                </div>
            </li>
        );
    }
}

export default VideoIndexItem;
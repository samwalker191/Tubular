import React from 'react';

class VideoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.video;
    }


    render() {

        return(
            <div className='video-form-page'>
                <div className='video-form-container'>
                    <h3>{this.props.formType}</h3>
                    <form className='video-form'>
                        <div className='video-form-inputs-top'>
                            <input
                                className='video-form-video-upload' 
                                type='file'
                            />

                            <input 
                                className='video-form-thumbnail-upload'
                                type='file'
                            />
                        </div>
                        <div className='video-form-inputs-bottom'>
                            <input
                                className='video-form-title' 
                                type='text'
                                placeholder='Title'
                            />

                            <textarea 
                                className='video-form-description'
                                placeholder='Description'
                            />
                        </div>
                    </form>
                    <button>{this.props.buttonType}</button>
                </div>
            </div>
        );
    }
}

export default VideoForm;
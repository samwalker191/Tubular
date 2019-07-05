import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCamera, faCheck } from '@fortawesome/free-solid-svg-icons';


class VideoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.video;
    }


    render() {

        return(
            <div className='video-form-page'>
                <div className='video-form-filler'></div>
                <div className='video-form-container'>
                    <h3>{this.props.formType}</h3>
                    <form className='video-form'>
                        <div className='video-form-inputs-top'>
                            <label htmlFor='video-form-video-upload' className='video-form-video-upload-label'>
                                <FontAwesomeIcon icon={faVideo} size='3x'/>
                                <input
                                    id='video-form-video-upload' 
                                    type='file'
                                    accept='video/*'
                                />
                            </label>

                            <label htmlFor='video-form-thumbnail-upload' >
                                <FontAwesomeIcon icon={faCamera} size='3x' />                                
                                <input 
                                    id='video-form-thumbnail-upload'
                                    type='file'
                                    accept='image/*'
                                />
                            </label>
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
                            <button className='video-form-submit-btn'>
                                {this.props.buttonType}
                            </button>
                        </div>
                    </form>
                    {/* <div className='video-form-submit-btn-container'>
                        
                    </div> */}
                </div>
            </div>
        );
    }
}

export default VideoForm;
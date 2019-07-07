import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCamera, faCheck } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router';


class VideoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.video.title,
            description: this.props.video.description,
            thumbnail: this.props.video.thumbnail,
            thumbnailFile: null,
            videoFile: null
        }
        this.handleThumbnailFile = this.handleThumbnailFile.bind(this);
        this.handleVideoFile = this.handleVideoFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleThumbnailFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {

            this.setState({ thumbnailFile: file, thumbnail: fileReader.result })
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleVideoFile(e) {
        this.setState({ videoFile: e.currentTarget.files[0] })
    }

    handleDelete() {
        
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData= new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[video]', this.state.videoFile);
        formData.append('video[thumbnail]', this.state.thumbnailFile);
        
        if (this.props.formType === 'Upload your video') {
            $.ajax({
                method: 'POST',
                url: '/api/videos',
                data: formData,
                contentType: false,
                processData: false
            }).then(() => this.props.history.push('/'));
        } else if (this.props.formType === 'Update your video details') {
            $.ajax({
                method: 'PATCH',
                url: `/api/videos/${this.props.video.id}`,
                data: formData,
                contentType: false,
                processData: false
            }).then(() => this.props.history.push(`/watch/${this.props.video.id}`));
        } 
    }

    render() {
        const thumbnailPreview = this.state.thumbnail ? <img src={this.state.thumbnail} /> : <FontAwesomeIcon icon={faCamera} size='3x' />;
        const videoAttached = this.state.videoFile ? <FontAwesomeIcon icon={faCheck} size='3x' className='video-check'/> : <FontAwesomeIcon icon={faVideo} size='3x' />
        let uploadClassname;
        if (this.props.formType === 'Update your video details') {
            uploadClassname = 'hidden'
        } else {
            uploadClassname = 'video-form-video-upload-label'
        }
        return(
            <div className='video-form-page'>
                <div className='video-form-filler'></div>
                <div className='video-form-container'>
                    <h3>{this.props.formType}</h3>
                    <form className='video-form'>
                        <div className='video-form-inputs-top'>
                            <label htmlFor='video-form-video-upload' className={uploadClassname}>
                                {videoAttached}
                                <input
                                    id='video-form-video-upload' 
                                    type='file'
                                    accept='video/*'
                                    onChange={this.handleVideoFile}
                                />
                            </label>

                            <label htmlFor='video-form-thumbnail-upload' className='video-form-thumbnail-upload-label'>
                                {thumbnailPreview}                                 
                                <input 
                                    id='video-form-thumbnail-upload'
                                    type='file'
                                    accept='image/*'
                                    onChange={this.handleThumbnailFile}
                                />
                            </label>
                        </div>
                        <div className='video-form-inputs-bottom'>
                            <input
                                className='video-form-title' 
                                type='text'
                                placeholder='Title'
                                value={this.state.title}
                                onChange={this.update('title')}
                            />

                            <textarea 
                                className='video-form-description'
                                placeholder='Description'
                                value={this.state.description}
                                onChange={this.update('description')}
                            />
                            <button className='video-form-submit-btn' onClick={this.handleSubmit}>
                                {this.props.buttonType}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(VideoForm);
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCamera, faCheck, faSync } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router';


class VideoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.video.title,
            description: this.props.video.description,
            thumbnail: this.props.video.thumbnail,
            thumbnailFile: null,
            videoFile: null,
            loading: false
        };

        this.handleThumbnailFile = this.handleThumbnailFile.bind(this);
        this.handleVideoFile = this.handleVideoFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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

            this.setState({ thumbnailFile: file, thumbnail: fileReader.result });
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleVideoFile(e) {
        this.setState({ videoFile: e.currentTarget.files[0] });
    }

    handleDelete() {
        this.props.deleteVideo(this.props.match.params.videoId);
        this.props.history.push('/');
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData= new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[video]', this.state.videoFile);
        formData.append('video[thumbnail]', this.state.thumbnailFile);

        this.setState({
            loading: true
        });

        if (this.props.formType === 'Upload your video') {
            this.props.action(formData)
                .then(() => this.props.history.push('/'),
                    () => this.setState({ loading: false })
                );
        } else if (this.props.formType === 'Update your video details') {
            this.props.action(this.props.video, formData)
                .then(() => this.props.history.push(`/watch/${this.props.video.id}`),
                    () => this.setState({ loading: false })
                );
        } 
    }

    render() {
        let errors = this.props.errors.map((error, idx) =>
            <li key={`error-${idx}`}>
                {error}
            </li>)
            
        let loading;
        if (this.state.loading) {
            loading = <FontAwesomeIcon icon={faSync} spin />
        } else {
            loading = `${this.props.buttonType}`
        }

        const thumbnailPreview = this.state.thumbnail ? <img src={this.state.thumbnail} /> : <FontAwesomeIcon icon={faCamera} size='3x' />;
        const videoAttached = this.state.videoFile ? <FontAwesomeIcon icon={faCheck} size='3x' className='video-check'/> : <FontAwesomeIcon icon={faVideo} size='3x' />

        let uploadClassname;
        let deleteBtn;
        if (this.props.formType === 'Update your video details') {
            uploadClassname = 'hidden';
            deleteBtn = <button onClick={this.handleDelete} className='video-form-edit-delete'>Delete</button>
        } else {
            uploadClassname = 'video-form-video-upload-label';
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
                            <ul className='video-form-errors'>
                                {errors}
                            </ul>
                            <div className='video-form-buttons'>
                                {deleteBtn}
                                <button className='video-form-submit-btn' onClick={this.handleSubmit}>
                                    {loading}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(VideoForm);

import * as VideosAPIUtil from '../util/videos_api_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos
});

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
});

const removeVideo = videoId => ({
    type: REMOVE_VIDEO,
    videoId
});

const receiveErrors = errors => ({
    type: RECEIVE_VIDEO_ERRORS,
    errors
});

const clearErrors = () => ({
    type: CLEAR_ERRORS
});

export const fetchVideos = query => dispatch => (
    VideosAPIUtil.fetchVideos(query)
        .then(
            videos => dispatch(receiveVideos(videos)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const fetchVideo = videoId => dispatch => (
    VideosAPIUtil.fetchVideo(videoId)
        .then(
            video => dispatch(receiveVideo(video)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const createVideo = formData => dispatch => (
    VideosAPIUtil.createVideo(formData)
        .then(
            video => dispatch(receiveVideo(video)),
            errors => dispatch(receiveErrors(errors))   
        )
);

export const updateVideo = (video, formData) => dispatch => (
    VideosAPIUtil.updateVideo(video, formData)
        .then(
            video => dispatch(receiveVideo(video)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const deleteVideo = videoId => dispatch => (
    VideosAPIUtil.deleteVideo(videoId)
        .then(
            video => dispatch(removeVideo(video.id)),
            errors => dispatch(receiveErrors(errors))
        )
);
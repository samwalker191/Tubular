import * as LikesAPIUtil from '../util/likes_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';

const receiveLike = ({ like, video, comment }) => ({
    type: RECEIVE_LIKE,
    like,
    video,
    comment
});

const deleteLike = ({ like, video, comment }) => ({
    type: DELETE_LIKE,
    likeId: like.id,
    video,
    comment
});

export const addLike = like => dispatch => (
    LikesAPIUtil.addLike(like)
        .then(payload => dispatch(receiveLike(payload)))
);

export const changeLike = like => dispatch => (
    LikesAPIUtil.changeLike(like)
        .then(payload => dispatch(receiveLike(payload)))
);

export const removeLike = likeId => dispatch => (
    LikesAPIUtil.removeLike(likeId)
        .then(payload => dispatch(deleteLike(payload)))
);

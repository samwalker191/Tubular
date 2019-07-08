import * as LikesAPIUtil from '../util/likes_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const deleteLike = likeId => ({
    type: DELETE_LIKE,
    likeId
});

export const addLike = like => dispatch => (
    LikesAPIUtil.addLike(like)
        .then(like => dispatch(receiveLike(like)))
);

export const changeLike = like => dispatch => (
    LikesAPIUtil.changeLike(like)
        .then(like => dispatch(receiveLike(like)))
);

export const removeLike = likeId => dispatch => (
    LikesAPIUtil.removeLike(likeId)
        .then(like => dispatch(deleteLike(like)))
);

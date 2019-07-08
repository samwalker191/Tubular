import * as LikesAPIUtil from '../util/likes_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = likeId => ({
    type: REMOVE_LIKE,
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
        .then(like => dispatch(removeLike(like)))
);

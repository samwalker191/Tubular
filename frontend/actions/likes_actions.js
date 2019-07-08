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
        .then(
            like => dispatch(receiveLike)
        )
)

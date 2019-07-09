import * as CommentsAPIUtil from '../util/comments_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

export const createComment = comment => dispatch => (
    CommentsAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = commentId => dispatch => (
    CommentsAPIUtil.deleteComment(commentId)
        .then(comment => dispatch(removeComment(comment.id)))
);

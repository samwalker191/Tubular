import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/comments_actions';
import CommentIndex from './comment_index';

const mapSTP = (state, ownProps) => {
    let comments = state.entities.comments === {} ? [] : Object.values(state.entities.comments);
    debugger
    return ({
        comments: comments,
        shownVideo: ownProps.shownVideo,
    });
};

const mapDTP = dispatch => {

    return ({
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId))
    });
};

export default connect(mapSTP, mapDTP)(CommentIndex);
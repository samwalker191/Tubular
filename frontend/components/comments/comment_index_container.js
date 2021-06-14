import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/comments_actions';
import CommentIndex from './comment_index';
import { fetchVideo } from '../../actions/videos_actions';
import { addLike, changeLike, removeLike } from '../../actions/likes_actions';
import { currentUserLikesByCommentId } from '../../util/selectors';


const mapSTP = (state, ownProps) => {
    let comments = Object.values(state.entities.comments);
    let currentUser = state.session.id ? state.entities.users[state.session.id] : null;
    return ({
        comments: comments,
        shownVideo: ownProps.shownVideo,
        currentUser: currentUser,
        currentUserLikes: currentUserLikesByCommentId(state)
    });
};

const mapDTP = dispatch => {

    return ({
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        fetchVideo: videoId => dispatch(fetchVideo(videoId)),     
        addLike: like => dispatch(addLike(like)),
        changeLike: like => dispatch(changeLike(like)),
        removeLike: likeId => dispatch(removeLike(likeId)),
    });
};

export default connect(mapSTP, mapDTP)(CommentIndex);
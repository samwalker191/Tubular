import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class CommentIndexItem extends React.Component{
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.deleteComment(this.props.comment.id);

    }

    handleCommentLike() {
        if (this.props.currUserLike.liked !== undefined) {
            if (this.props.currUserLike.liked === false) {
                this.props.changeLike({
                    id: this.props.currUserLike.id,
                    liked: true,
                    likeable_id: this.props.currUserLike.likeable_id,
                    likeable_type: this.props.currUserLike.likeable_type
                }).then(() => this.props.fetchVideo(this.props.match.params.videoId))
            } else {
                this.props.removeLike(this.props.currUserLike.id)
                    .then(() => this.props.fetchVideo(this.props.match.params.videoId))
            }
        } else {
            this.props.addLike({
                liked: true,
                likeable_id: this.props.shownVideo.id,
                likeable_type: 'Video'
            }).then(() => this.props.fetchVideo(this.props.match.params.videoId))
        }
    }

    render() {
        let commenterIcon;
        if (this.props.comment.commenter) {
            commenterIcon = this.props.comment.commenter.slice(0,1).toUpperCase();
        } else {
            commenterIcon = null;
        }

        let deleteBtn;
        if (this.props.currentUser) {
            if (this.props.currentUser.id === this.props.comment.user_id) {
                deleteBtn = <button className='comment-delete-button' onClick={this.handleDelete}>
                                Delete
                            </button>
            }
        }

        return(
            <li className='comment-container-item'>
                <div className='comment-styling-container'>
                    <div className='comment-user-icon-container'>
                        <i className='comment-user-icon'>{commenterIcon}</i>
                    </div>
                    <div className='comment-details-container'>
                        <span className='comment-username'>{this.props.comment.commenter}</span>
                        <span className='comment-body'>{this.props.comment.body}</span>
                        <ul className='comment-likes-container'>
                            <li className='comment-likes'>
                                <button>
                                    <FontAwesomeIcon icon={faThumbsUp}/>
                                    <span>{this.props.comment.likes}</span>
                                </button>
                            </li>

                            <li className='comment-dislikes'>
                                <button>
                                    <FontAwesomeIcon icon={faThumbsDown} />
                                    <span>{this.props.comment.dislikes}</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='comment-delete-button-container'>
                    {deleteBtn}
                </div>
            </li>
        );
    }
}

export default CommentIndexItem;
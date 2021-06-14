import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class CommentIndexItem extends React.Component{
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleCommentLike = this.handleCommentLike.bind(this);
        this.handleCommentDislike = this.handleCommentDislike.bind(this);
    }

    handleDelete() {
        this.props.deleteComment(this.props.comment.id);
    }

    handleCommentLike() {
        if (this.props.like) {
            if (this.props.like.liked === false) {
                this.props.changeLike({
                    id: this.props.like.id,
                    liked: true,
                    likeable_id: this.props.like.likeableId,
                    likeable_type: this.props.like.likeableType
                });
            } else {
                this.props.removeLike(this.props.like.id);
            }
        } else {
            this.props.addLike({
                liked: true,
                likeable_id: this.props.comment.id,
                likeable_type: 'Comment'
            })
        }
    }

    handleCommentDislike() {
        if (this.props.like) {
            if (this.props.like.liked === true) {
                this.props.changeLike({
                    id: this.props.like.id,
                    liked: false,
                    likeable_id: this.props.like.likeable_id,
                    likeable_type: this.props.like.likeable_type
                });
            } else {
                this.props.removeLike(this.props.like.id)
            }
        } else {
            this.props.addLike({
                liked: false,
                likeable_id: this.props.comment.id,
                likeable_type: 'Comment'
            });
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
            if (this.props.currentUser.id === this.props.comment.userId) {
                deleteBtn = <button className='comment-delete-button' onClick={this.handleDelete}>
                                Delete
                            </button>
            }
        }

        let likedActive;
        let dislikedActive;
        if (this.props.like) {
            if (this.props.like.liked === true) {
                likedActive = 'active';
                dislikedActive = null;
            } else {
                likedActive = null;
                dislikedActive = 'active';
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
                                <button onClick={this.handleCommentLike} className={likedActive}>
                                    <FontAwesomeIcon icon={faThumbsUp}/>
                                    <span>{this.props.comment.likes}</span>
                                </button>
                            </li>

                            <li className='comment-dislikes'>
                                <button onClick={this.handleCommentDislike} className={dislikedActive}>
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
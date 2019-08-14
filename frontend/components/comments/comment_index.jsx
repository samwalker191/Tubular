import React from 'react';
import CommentIndexItem from './comment_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUserCircle, faUser, faThumbsDown } from '@fortawesome/free-solid-svg-icons';


class CommentIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = { body: '', buttonHide: true, submitActive: false };
        this.handleInput = this.handleInput.bind(this);
        this.toggleBtns = this.toggleBtns.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        this.setState({ body: e.currentTarget.value, submitActive: true });
    }

    toggleBtns() {
        if (this.state.buttonHide) {
            this.setState({ buttonHide: !this.state.buttonHide });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment({
            body: this.state.body,
            video_id: this.props.shownVideo.id
        }).then(() => this.props.fetchVideo(this.props.shownVideo.id));
        this.setState({ body: '', buttonHide: true })
    }

    handleCancel() {
        this.setState({ body: '', buttonHide: true });
    }

    render() {
        let currentUserIcon;
        let commentFormInput;
        if (this.props.currentUser) {
            currentUserIcon = <i className='current-user-icon'>
                                  {this.props.currentUser.username.slice(0, 1).toUpperCase()}
                              </i>;
            commentFormInput = <input
                                  type='text'
                                  value={this.state.body}
                                  placeholder='Add a public comment...'
                                  onChange={this.handleInput}
                                  onFocus={this.toggleBtns}
                                  onBlur={this.toggleBtns}
                                  className='signed-in'
                                />
        } else {
            currentUserIcon = <FontAwesomeIcon icon={faUserCircle} className='comment-user-circle'/>;
            commentFormInput = <input
                                  type='text'
                                  value={this.state.body}
                                  placeholder='Please sign in to post a public comment'
                                  onChange={this.handleInput}
                                  onFocus={this.toggleBtns}
                                  onBlur={this.toggleBtns}
                                  className='signed-out'
                                  disabled
                                />
        }
        
        let buttonClass;
        if (this.state.buttonHide) {
            buttonClass = 'hidden';
        } else {
            buttonClass = '';
        }

        let active;
        if (this.state.submitActive && this.state.body !== '') {
            active = 'comment-submit-btn-active';
            setTimeout(() => {document.getElementById('comment-disable').disabled = false }, 1);
        } else {
            active = 'comment-submit-btn';
            setTimeout(() => { document.getElementById('comment-disable').disabled = true }, 1);
        }

        return(
            <div className='video-show-comments-container'>
                <h3>{this.props.comments.length} Comments</h3>
                <div className='video-show-comments-form-container'>
                    <div className='comment-form-icon-container'>
                        {currentUserIcon}
                    </div>

                    <div className='comments-form-styling-container'>
                        <div className='video-show-comments-form'>
                            
                                <form>
                                    <span className='comment-form-input-container'>
                                        {commentFormInput}
                                    </span>
                                </form>
                          
                            <div className={`comment-form-buttons ${buttonClass}`}>
                                <button className='comment-cancel-btn' onClick={this.handleCancel}>
                                    CANCEL
                                </button>
                                <button id='comment-disable' className={active} onClick={this.handleSubmit}>
                                    COMMENT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className='video-show-comments'>
                    {this.props.comments.map((comment, idx) => (
                            <CommentIndexItem 
                                comment={comment}
                                deleteComment={this.props.deleteComment}
                                currentUser={this.props.currentUser} 
                                key={`comment-${idx}`}
                            />
                        ))
                    }
                    
                </ul>
            </div>
        )
    }
}

export default CommentIndex;

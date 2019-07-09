import React from 'react';
import CommentIndexItem from './comment_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUserCircle, faUser } from '@fortawesome/free-solid-svg-icons';


class CommentIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = { body: '' };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({ body: e.currentTarget.value });
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
                                  className='signed-in'
                                />
        } else {
            currentUserIcon = <FontAwesomeIcon icon={faUserCircle} className='comment-user-circle'/>;
            commentFormInput = <input
                                  type='text'
                                  value={this.state.body}
                                  placeholder='Please signin to post a public comment'
                                  onChange={this.handleInput}
                                  className='signed-out'
                                  disabled
                                />
        }


        return(
            <div className='video-show-comments-container'>
                <h3>{this.props.comments.length} Comments</h3>
                <div className='video-show-comments-form-container'>
                    <div className='comment-form-icon-container'>
                        {currentUserIcon}
                    </div>

                    <div className='video-show-comments-form'>
                        <form>
                            {commentFormInput}
                        </form>
                        <div className='comment-form-buttons'>
                            <button className='comment-cancel-btn' onClick={this.handleCancel}>
                                CANCEL
                            </button>
                            <button className='comment-submit-btn' onClick={this.handleSubmit}>
                                COMMENT
                            </button>
                        </div>
                    </div>
                </div>

                <ul className='video-show-comments'>
                    {this.props.comments.map((comment, idx) => <CommentIndexItem comment={comment} key={`comment-${idx}`}/>)}
                </ul>
            </div>
        )
    }
}

export default CommentIndex;

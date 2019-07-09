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
        if (currentUser) {
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
                <div className='video-show-comments-form-container'>
                    <div className='comment-form-icon-container'>
                        {currentUserIcon}
                    </div>

                    <form className='video-show-comments-form'>
                        {commentFormInput}
                        
                    </form>
                </div>

                <ul className='video-show-comments'>
                    {this.props.comments.map((comment, idx) => <CommentIndexItem comment={comment} key={`comment-${idx}`}/>)}
                </ul>
            </div>
        )
    }
}

export default CommentIndex;

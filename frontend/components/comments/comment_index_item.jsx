import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class CommentIndexItem extends React.Component{

    render() {

        return(
            <li className='comment-container-item'>
                <div className='comment-user-icon-container'>
                    <i className='comment-user-icon'>{this.props.comment.commenter.slice(0,1).toUpperCase()}</i>
                </div>
                <div className='comment-details-container'>
                    <span className='comment-username'>{this.props.comment.commenter}</span>
                    <span className='comment-body'>{this.props.comment.body}</span>
                    <ul className='comment-likes-container'>
                        <li className='comment-likes'>
                            <button>
                                <FontAwesomeIcon icon={faThumbsUp}/>
                                <span>24</span>
                            </button>
                        </li>

                        <li className='comment-dislikes'>
                            <button>
                                <FontAwesomeIcon icon={faThumbsDown} />
                                <span>25</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </li>
        );
    }
}

export default CommentIndexItem;
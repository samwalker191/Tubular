import React from 'react';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class CommentIndexItem extends React.Component{

    render() {

        return(
            <li>
                <span>{this.props.comment.commenter}</span>
                <span>{this.props.comment.body}</span>
            </li>
        );
    }
}

export default CommentIndexItem;
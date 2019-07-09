import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <ul>
                    {this.props.comments.map((comment, idx) => <CommentIndexItem comment={comment} key={`comment-${idx}`}/>)}
                </ul>
            </div>
        )
    }
}

export default CommentIndex;

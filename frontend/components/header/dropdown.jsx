import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faUserCircle, faVideo, faSearch } from '@fortawesome/free-solid-svg-icons';

class Dropdown extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='dropdown-box'>
                <div className='dropdown-box-header'>
                    <div className='dropdown-box-header-icon'>
                        {this.props.users[this.props.currentUserId]
                            .username.slice(0, 1).toUpperCase()}
                    </div>
                    <div className='dropdown-box-header-user'>
                        <span>{this.props.users[this.props.currentUserId].username}</span>
                        <span>{this.props.users[this.props.currentUserId].email}</span>
                    </div>
                </div>
                
                <div className='dropdown-box-main'>

                </div>
            </div>
        );
    }
}

export default Dropdown;
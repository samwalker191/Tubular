import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faVideo, faUser, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = { dropdownHide: false }
        this.handleLogout = this.handleLogout.bind(this);
        this.handleDocClick = this.handleDocClick.bind(this);
    }

    handleLogout() {
        this.props.logout();
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleDocClick, false);
    }

    componentWillUnMount() {
        document.removeEventListener('mousedown', this.handleDocClick, false);
    }

    handleDocClick(e) {
        let dropdownBox = document.getElementsByClassName('dropdown-box')[0];
        let userIcon = document.getElementsByClassName('header-logout')[0];
        if (e.target !== dropdownBox && !dropdownBox.contains(e.target) && e.target !== userIcon && !userIcon.contains(e.target)) {
            this.setState({ dropdownHide: true });
            this.props.toggleDropdownChild(this.state.dropdownHide);
        }
    }

    render() {
        if (!this.props.currentUserId) {
            return null;
        }

        let uploadSend;
        if (this.props.currentUserId) {
            uploadSend = '/upload';
        } else {
            uploadSend = '/signin';
        }

        return (
            <div className='dropdown-box' ref={node => this.node = node}>
                <div className='dropdown-box-header'>
                    <div className='dropdown-box-header-icon'>
                        {this.props.users[this.props.currentUserId]
                            .username.slice(0, 1).toUpperCase()}
                    </div>
                    <div className='dropdown-box-header-user'>
                        <span className='dropdown-box-header-user-username'>{this.props.users[this.props.currentUserId].username}</span>
                        <span className='dropdown-box-header-user-email'>{this.props.users[this.props.currentUserId].email}</span>
                    </div>
                </div>
                
                <div className='dropdown-box-main'>
                    <Link to='/' className={`dropdown-home`}>
                        <FontAwesomeIcon icon={faHome} />
                        <span>Home</span>
                    </Link>
                    <Link to={`${uploadSend}`} className={`dropdown-upload`}>
                        <FontAwesomeIcon icon={faVideo} />
                        <span>Upload</span>
                    </Link>
                    <a href='https://github.com/samwalker191' className={`dropdown-github`} target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        <span>Github</span>
                    </a>
                    <a href='https://linkedin.com/in/samuelwalker191' className={`dropdown-linkedin`} target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className='dropdown-linkedin-icon' />
                        <span>LinkedIn</span>
                    </a>
                    <a href='https://samuelwalker.me' className={`dropdown-personal`} target="_blank">
                        <FontAwesomeIcon icon={faUser} />
                        <span>About the Author</span>
                    </a>
                    <button className='dropdown-logout' onClick={this.handleLogout}> 
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span>Sign Out</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Dropdown;
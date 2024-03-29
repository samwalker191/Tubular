import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faHome, faVideo, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class ModalSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.props.toggleSidebar();
    }

    render() {
        let uploadSend;
        if (this.props.currentUserId) {
            uploadSend = '/upload';
        } else {
            uploadSend = '/signin';
        }

        return (
            <div className='modal-sidebar-container'>
                <div className='modal-sidebar'>
                    <div className='modal-sidebar-header'>
                        <button className='header-burger-button' onClick={this.handleToggle}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <Link to='/' className='header-logo'>
                            <FontAwesomeIcon icon={faYoutube} />
                            <span>Tubular</span>
                        </Link>
                    </div>
                    <div className='modal-sidebar-main'>
                        <Link to='/' className={`modal-sidebar-home`}>
                            <FontAwesomeIcon icon={faHome} />
                            <span>Home</span>
                        </Link>
                        <Link to={`${uploadSend}`} className={`modal-sidebar-upload`}>
                            <FontAwesomeIcon icon={faVideo} />
                            <span>Upload</span>
                        </Link>
                        <a href='https://github.com/samwalker191' className={`modal-sidebar-github`} target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                            <span>Github</span>
                        </a>
                        <a href='https://linkedin.com/in/samuelwalker191' className={`modal-sidebar-linkedin`} target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                            <span>LinkedIn</span>
                        </a>
                        <a href='https://samuelwalker.me' className={`modal-sidebar-personal`} target="_blank">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Author</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalSidebar;
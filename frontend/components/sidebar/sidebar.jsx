import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

    render() {
        let size;
        let content;

        if (this.props.showPage && this.props.sidebarSmall) {
            return null;
        } else if (this.props.showPage && !this.props.sidebarSmall) {
            return null;
        } else if (!this.props.showPage && this.props.sidebarSmall) {
            size = 'small-sidebar';
            content = 'column';
        } else if (!this.props.showPage && !this.props.sidebarSmall) {
            size = 'large-sidebar';
            content = 'row';
        }

        let uploadSend;
        if (this.props.currentUserId) {
            uploadSend = '/upload';
        } else {
            uploadSend = '/signin';
        }

        return (
            <div className={`${size}`}>
                <div className='sidebar-spacer'></div>
                <div className='sidebar-main'>
                    <Link to='/' className={`sidebar-home ${content}`}>
                        <FontAwesomeIcon icon={faHome}/>
                        <span>Home</span>
                    </Link>
                    <Link to={`${uploadSend}`} className={`sidebar-upload ${content}`}>
                        <FontAwesomeIcon icon={faVideo}/>
                        <span>Upload</span>
                    </Link>
                    <a href='https://github.com/samwalker191' className={`sidebar-github ${content}`}>
                        <FontAwesomeIcon icon={faGithub}/>
                        <span>Github</span>
                    </a>
                    <a href='https://github.com/samwalker191' className={`sidebar-linkedin ${content}`}>
                        <FontAwesomeIcon icon={faLinkedin}/>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Sidebar;
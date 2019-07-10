import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
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
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalSidebar;
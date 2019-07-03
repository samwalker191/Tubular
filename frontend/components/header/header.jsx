import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faArrowCircleUp, faUserCircle } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {

    handleLogout() {
        this.props.logout();
    }

    render() {
        let authButton;
        if (this.props.currentUserId === null) {
            authButton = <Link to='/signin' className='header-signin'>
                            <FontAwesomeIcon icon={faUserCircle}/>
                            <span>Sign In</span>
                        </Link>
        } else {
            authButton = <button className='header-logout' onClick={this.handleLogout}>
                            {this.props.users[this.props.currentUserId]}
                        </button>
        }

        return (
            <div className='header'>
                <div className='header-left'>
                    <FontAwesomeIcon icon={faBars}/>
                    <Link to='/' className='header-logo'>
                        <FontAwesomeIcon icon={faYoutube} />
                        <span>YourTube</span>
                    </Link>
                </div>

                <div className='header-search'>
                    
                </div>

                <div className='header-right'>
                    <FontAwesomeIcon icon={faArrowCircleUp} />
                    {authButton}
                </div>
            </div>
        );
    }
}

export default Header;
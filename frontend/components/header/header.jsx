import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars, faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {


    handleLogout() {
        this.props.logout();
    }

    render() {
        let authButton;
        if (this.props.currentUserId === null) {
            authButton = <Link to='/signin' className='header-signin'>Sign In</Link>
        } else {
            authButton = <button className='header-logout' onClick={this.handleLogout}>
                            {this.props.users[this.props.currentUserId]}
                        </button>
        }

        return (
            <div className='header'>
                <div className='header-left'>
                    <FontAwesomeIcon icon={faBars}/>
                    <div className='header-logo'>
                        <FontAwesomeIcon icon={faPlayCircle} />
                        <span>YourTube</span>
                    </div>
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
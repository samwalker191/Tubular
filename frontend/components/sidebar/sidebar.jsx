import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {


    render() {

        return (
            <div className="sidebar-container">
                <div className='sidebar-spacer'></div>
                <div className='sidebar-main'>
                    <Link to='/' className='sidebar-home'>
                        <FontAwesomeIcon icon={faHome}/>
                        <span>Home</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Sidebar;
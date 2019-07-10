import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {


    render() {
        let size;
        if (this.props.sidebarSmall) {
            size = 'small-sidebar';
        } else {
            size = 'large-sidebar';
        }

        return (
            <div className={`sidebar-container ${size}`}>
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
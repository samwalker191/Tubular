import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
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

        return (
            <div className={`${size}`}>
                <div className='sidebar-spacer'></div>
                <div className='sidebar-main'>
                    <Link to='/' className={`sidebar-home ${content}`}>
                        <FontAwesomeIcon icon={faHome}/>
                        <span>Home</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Sidebar;
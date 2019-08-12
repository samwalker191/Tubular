import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faUserCircle, faVideo, faSearch } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './dropdown';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = { search: '', dropdownBoxClassName: 'hidden' }

        this.handleLogout = this.handleLogout.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    handleLogout() {
        this.props.logout();
    }

    handleSearch() {
        this.props.history.push(`/search/${this.state.search}`);
        this.setState({ search: '' });
    }

    handleInput(e) {
        this.setState({ search: e.currentTarget.value });
    }

    toggleSidebar() {
        this.props.toggleSidebar();
    }

    toggleDropdown() {
        if (this.state.dropdownBoxClassName === 'hidden') {
            this.setState({ dropdownBoxClassName: '' })
        } else {
            this.setState({ dropdownBoxClassName: 'hidden' })
        }
    }

    render() {
        let authButton;
        if (this.props.currentUserId === null) {
            authButton = <Link to='/signin' className='header-signin'>
                            <FontAwesomeIcon icon={faUserCircle}/>
                            <span>SIGN IN</span>
                        </Link>
        } else {
            authButton = <button className='header-logout' onClick={this.toggleDropdown}>
                            <div>
                                {this.props.users[this.props.currentUserId]
                                .username.slice(0,1).toUpperCase()}
                            </div>
                            {/* <span>LOGOUT</span> */}
                        </button>
        }

        let uploadSend;
        if (this.props.currentUserId){
            uploadSend = '/upload';
        } else {
            uploadSend= '/signin';
        }

        return (
            <div className='header'>
                <div className='header-left'>
                    <button className='header-burger-button' onClick={this.toggleSidebar}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                    <Link to='/' className='header-logo'>
                        <FontAwesomeIcon icon={faYoutube} />
                        <span>Tubular</span>
                    </Link>
                </div>

                <div className='header-search'>
                    <form className='search-bar' onSubmit={this.handleSearch}> 
                        <input 
                            type='text'
                            value={this.state.search}
                            onChange={this.handleInput}
                            placeholder='Search'
                        />
                        <input type='submit' className='hidden' />
                    </form>
                    <button className='search-button' onClick={this.handleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                <div className='header-right'>
                    <Link to={`${uploadSend}`} className='header-right-upload'>
                        <FontAwesomeIcon icon={faVideo} />
                    </Link>
                    {authButton}
                    <div className={`dropdown-box-container ${this.state.dropdownBoxClassName}`}>
                        <Dropdown 
                            logout={this.props.logout}
                            currentUserId={this.props.currentUserId}
                            users={this.props.users}    
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
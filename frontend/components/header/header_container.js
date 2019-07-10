import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { toggleSidebar } from '../../actions/ui_actions';
import { withRouter } from 'react-router';


const mapSTP = state => {
    return ({
        currentUserId: state.session.id,
        users: state.entities.users
    });
};

const mapDTP = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        toggleSidebar: () => dispatch(toggleSidebar())
    });
};

export default withRouter(connect(mapSTP, mapDTP)(Header));
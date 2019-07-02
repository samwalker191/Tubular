import { connect } from 'react-redux';
import Header from './header';
import { logoutCurrentUser } from '../../actions/session_actions';

const mapSTP = state => {
    return ({
        currentUserId: state.session.id,
        users: state.entities.users
    })
};

const mapDTP = dispatch => {
    return ({
        logout: () => dispatch(logoutCurrentUser())
    });
};

export default connect(mapSTP, mapDTP)(Header);
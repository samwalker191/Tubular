import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Sidebar from './sidebar';

const mapSTP = state => {
    return ({
        currentUserId: state.session.id,
        users: state.entities.users,
        sidebarSmall: state.ui.sidebarSmall,
        showPage: state.ui.showPage
    })
};

const mapDTP = dispatch => {
    return ({
        logout: () => dispatch(logout())
    });
};

export default withRouter(connect(mapSTP, mapDTP)(Sidebar));
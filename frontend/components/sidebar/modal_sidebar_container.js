import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ModalSidebar from './modal_sidebar';
import { toggleSidebar } from '../../actions/ui_actions';

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
        toggleSidebar: () => dispatch(toggleSidebar())
    });
};

export default withRouter(connect(mapSTP, mapDTP)(ModalSidebar));
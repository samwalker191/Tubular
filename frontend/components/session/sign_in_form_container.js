import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signin } from '../../actions/session_actions';

const mapSTP = state => {
    return ({
        errors: state.errors.session,
        formType: 'Sign In'
    });
};

const mapDTP = dispatch => {
    return ({
        action: user => dispatch(signin(user))
    });
};

export default connect(mapSTP, mapDTP)(SessionForm);
import { connect } from 'react-redux';
import SessionForm from '../session/SessionForm';
import { signup } from '../../actions/session_actions';

const mapSTP = state => {
    return ({
        errors: state.errors.session,
        formType: 'Create Your Account'
    });
};

const mapDTP = dispatch => {
    return ({
        action: user => dispatch(signup(user))
    });
};

export default connect(mapSTP, mapDTP)(SessionForm);
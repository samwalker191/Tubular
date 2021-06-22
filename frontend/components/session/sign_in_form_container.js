import { connect } from 'react-redux';
import SignInForm from './sign_in_form';
import { signin, clearErrors } from '../../actions/session_actions';

const mapSTP = state => {
    return ({
        errors: state.errors.sessionErrors,
        formType: 'Sign In'
    });
};

const mapDTP = dispatch => {
    return ({
        signin: user => dispatch(signin(user)),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mapSTP, mapDTP)(SignInForm);
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { username: '', email: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.action(this.state)
            .then(() => this.props.history.push('/'));
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    render() {
        let errors = this.props.errors.map((error, idx) => 
            <li key={`error-${idx}`}>
                {error}
            </li>)

        let toOtherForm;
        let usernameField;

        if (this.props.formType === 'Create Your Account') {
            toOtherForm = <Link to="/signin">Sign in instead</Link>;
            usernameField = <input
                type='text'
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
            />;
        } else if (this.props.formType === 'Sign In') {
            toOtherForm = <Link to="/signup">Create Account</Link>;
        }
        return (
            <div className='session-form-container'>
                <div className='session-form'>
                    <div className="session-form-content">
                        <div className='session-form-logo'>
                            <FontAwesomeIcon icon={faPlayCircle}/> 
                            <span>YourTube</span>
                        </div>

                        <header className='session-form-header'>
                            <h3>{this.props.formType}</h3>
                            <p className='session-form-sub-header'>to continue to YourTube</p>
                        </header>

                        <form className='session-form-inputs-container'>
                            {usernameField}

                            <input 
                                type='text'
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                            />

                            <input 
                                type='password'
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                        </form>
                        <div className="session-form-buttons">
                            {toOtherForm}
                            <button onClick={this.handleSubmit}>Next</button>
                        </div>
                    </div>
                </div>
                <ul className='session-form-errors'>
                    {errors}
                </ul>
            </div>
        )
    }
}

export default SessionForm;
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { username: '', email: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
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
        this.props.action(this.state)
            .then(() => this.props.history.push('/'));
    }

    handleDemo() {
        this.setState({
            username: 'DemoUser',
            email: 'demouser@demo.io',
            password: 'noseyone'
        });
        setTimeout(() => {
            this.props.action(this.state)
                .then(() => this.props.history.goBack());
        }, 0)
    }

    componentDidMount() {
        this.props.clearErrors();
        window.scrollTo(0, 0);
    }

    render() {
        let errors = this.props.errors.map((error, idx) => 
            <li key={`error-${idx}`}>
                {error}
            </li>)

        let toOtherForm;
        let usernameField;
        let demoUserButton;

        if (this.props.formType === 'Create Your Account') {
            toOtherForm = <Link to="/signin">Sign in instead</Link>;
            usernameField = 
            <div>
                <input
                    type='text'
                    value={this.state.username}
                    onChange={this.update('username')}
                    placeholder="Username"
                />;
            </div>
        } else if (this.props.formType === 'Sign In') {
            toOtherForm = <Link to="/signup">Create Account</Link>;
            demoUserButton = <button onClick={this.handleDemo} className="session-form-demo-button">
                                Demo
                            </button>
        }
        return (
            <div className='session-form-container'>
                <div className='session-form'>
                    <div className="session-form-content">
                        <div className='session-form-logo'>
                            <FontAwesomeIcon icon={faYoutube}/> 
                            <span>Tubular</span>
                        </div>

                        <header className='session-form-header'>
                            <h3>{this.props.formType}</h3>
                            <p className='session-form-sub-header'>to continue to Tubular</p>
                        </header>

                        <form className='session-form-inputs-container' onSubmit={this.handleSubmit}>
                            {usernameField}

                            <div>
                                <input 
                                    type='text'
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="Email"
                                />
                            </div>

                            <div>
                                <input 
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                />
                            </div>

                            <input type='submit' className='session-form-submit'/>
                        </form>
                        <ul className='session-form-errors'>
                            {errors}
                        </ul>
                        <div className="session-form-buttons">
                            {toOtherForm}
                            {demoUserButton}
                            <button onClick={this.handleSubmit}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;
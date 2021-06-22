import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const SignInForm = ({ errors, signin, clearErrors, history }) => {
  useEffect(() => {
    clearErrors();
  }, []);

  const [user, setUser] = useState({ email: '', password: '' });
  const [page, setPage] = useState(1);

  function update(field) {
    return e => setUser({ ...user, [field]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (page === 1) {
      setPage(2);
    } else {
      signin(user)
        .then(() => history.goBack());
    }
  }

  function handleDemo() {
    let demoUser = {
      email: 'demouser@demo.io',
      password: 'noseyone'
    }
    
    signin(demoUser)
      .then(() => history.goBack());
  }

  let input;

  if (page === 1) {
    input = <div>
      <label htmlFor="sign-in-email">Email</label>
      <input
        type='text'
        value={user.email}
        onChange={update('email')}
        id="sign-in-email"
      />
    </div>
  } else {
    input = <div>
      <label htmlFor="sign-in-password" className='password'>Enter your password</label>
      <input
        type='password'
        value={user.password}
        onChange={update('password')}
        id="sign-in-password"
      />
    </div>
  }

  return (
    <div className='session-form-container'>
      <div className='session-form'>
        <div className="session-form-content">
          <div className='session-form-logo'>
            <FontAwesomeIcon icon={faYoutube} />
            <span>Tubular</span>
          </div>

          <header className='session-form-header'>
            <h3>Sign In</h3>
            <p className='session-form-sub-header'>to continue to Tubular</p>
          </header>

          <div className="session-form-inputs-container">
            <form className='session-form-main' onSubmit={handleSubmit}>
              {input}
              <input type='submit' className='session-form-submit' />
            </form>

            <div>
              <span>Not your computer? Use Guest mode to sign in privately. </span>
              <span onClick={handleDemo}>Click here</span>
            </div>
          </div>

          <ul className='session-form-errors'>
            {errors}
          </ul>

          <div className="session-form-buttons">
            <Link to="/signup">Create Account</Link>
            {/* <button onClick={handleDemo} className="session-form-demo-button">
              Demo
            </button> */}
            <button onClick={handleSubmit}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
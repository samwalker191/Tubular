import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import SignInFormContainer from './session/sign_in_form_container';
import SignUpFormContainer from './session/sign_up_form_container';

const UserAuth = () => (
    <div>
        <h1>This is the UserAuth component</h1>
        <Route path='/signin' component={SignInFormContainer} />
        <Route path='/signup' component={SignUpFormContainer} />
    </div>
);

export default UserAuth;
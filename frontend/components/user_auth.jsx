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
import MainApp from './main_app';

const UserAuth = () => (
    <div>
        <Switch>
            <Route exact path='/signin' component={SignInFormContainer} />
            <Route exact path='/signup' component={SignUpFormContainer} />
            <Route path='/' component={MainApp}/>
        </Switch>
    </div>
);

export default UserAuth;
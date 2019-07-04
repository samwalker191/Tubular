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
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainApp from './main_app';

const UserAuth = () => (
    <div>
        <Switch>
            <AuthRoute exact path='/signin' component={SignInFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
            <Route exact path='/' component={MainApp} />
            <Redirect to='/' />
        </Switch>
    </div>
);

export default UserAuth;
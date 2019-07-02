import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';



const UserAuth = () => (
    <div>
        <Route path='/signin' component={SignInFormContainer} />
        <Route path='/signup' component={SignUpFormContainer} />

    </div>
);
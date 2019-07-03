import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import HeaderContainer from './header/header_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const MainApp = () => (
    <div>
        <HeaderContainer />
    </div>
);

export default MainApp;
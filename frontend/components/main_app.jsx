import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import HeaderContainer from './header/header_container'

const MainApp = () => (
    <div>
        <HeaderContainer />
    </div>
);

export default MainApp;
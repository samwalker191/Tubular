import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import HeaderContainer from './header/header_container';
import VideoIndexContainer from './videos/video_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const MainApp = () => (
    <div>
        <HeaderContainer />
        <VideoIndexContainer />
    </div>
);

export default MainApp;
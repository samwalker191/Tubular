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
import VideoShowContainer from './videos/video_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const MainApp = () => (
    <div>
        <HeaderContainer />
        <Switch>
            <Route exact path='/watch/:videoId' component={VideoShowContainer}/>
            <Route exact path='/' component={VideoIndexContainer}/>
            <Redirect to='/' />
        </Switch>
    </div>
);

export default MainApp;
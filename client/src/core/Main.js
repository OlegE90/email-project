import React from 'react';
import { Route } from 'react-router-dom'

import LoginPage from '../modules/Common/Pages/LoginPage';
import AboutPage from '../modules/Common/Pages/AboutPage';
import ThemePage from '../modules/Themes/Pages/ThemePage';

import {ROUTES} from './../routes';

class Main extends React.Component {

    render() {
        const {match} = this.props;
        
        return (
            <div>
                <Route exact component={AboutPage} path={`${match.url}`} />
                <Route exact component={LoginPage} path={ROUTES.LOGIN.FULL_PATH}/>
                <Route component={AboutPage} path={ROUTES.ABOUT.FULL_PATH}/>
                <Route component={ThemePage} path={ROUTES.THEMES.FULL_PATH}/>
            </div>
        );
    }
}

export default Main;

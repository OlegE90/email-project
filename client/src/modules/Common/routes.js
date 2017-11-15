import React from 'react';
import {Route} from 'react-router-dom';

import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import {ROUTES} from './../../routes';

export const AboutRoutes = () => <Route component={AboutPage} path={ROUTES.ABOUT.PATH}/>;

export const LoginRoutes = () => <Route exact children={LoginPage} path={ROUTES.LOGIN.PATH}/>;
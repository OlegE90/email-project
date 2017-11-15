import React from 'react';
import {Route} from 'react-router';

import {ThemesRoutes} from './modules/Themes/routes';
import {AboutRoutes, LoginRoutes} from './modules/Common/routes';

import Main from './core/Main'

export const ROUTES = {
    FULL_PATH: '/',
    THEMES: {
        FULL_PATH: '/theme',
        PATH: 'theme',
        EDIT: {
            FULL_PATH: '/theme/:id/edit',
            PATH: ':id/edit'
        },
        DETAILS: {
            FULL_PATH: '/theme/:id',
            PATH: ':id'
        }
    },
    ABOUT: {
        FULL_PATH: '/about',
        PATH: 'about'
    },
    LOGIN: {
        FULL_PATH: '/login',
        PATH: 'login'
    }
};


export const RoutesComponent = (props) => <Route path={ROUTES.FULL_PATH} component={Main}>
    <LoginRoutes />
    <ThemesRoutes options={props.options}/>
    <AboutRoutes />
</Route>;
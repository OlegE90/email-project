import React from 'react';
import {Route} from 'react-router-dom';

import ThemePage from './Pages/ThemePage';
import {ThemeForm} from './Components/ThemeForm';
import {Details} from './Components/Details';
import {ROUTES} from './../../routes';

export const ThemesRoutes = (props) => props.options.auth &&
    <Route component={ThemePage} path={ROUTES.THEMES.PATH}>
        <Route component={ThemeForm} path={ROUTES.THEMES.EDIT.PATH}/>
        <Route component ={Details} path={ROUTES.THEMES.DETAILS.PATH}/>
    </Route>;
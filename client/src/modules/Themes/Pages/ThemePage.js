import React from 'react';
import { Route } from 'react-router-dom'

import {ROUTES} from './../../../routes';

import {ThemeForm} from '../Components/ThemeForm';
import {Details} from '../Components/Details';
import {LeftSidebar} from '../Components/LeftSidebar';
import {Chat} from '../Components/Chat';

class ThemePage extends React.Component {
    render() {
        return (
            <div className="section no-pad-bot">
                <div className="container themePage">

                    <div className="row">

                        <div className="col s3 themePage-nav">
                            <LeftSidebar/>
                        </div>

                        <div className="col s9">

                            <Route component={ThemeForm} path='/'/>
                            <Route component={ThemeForm} path={ROUTES.THEMES.EDIT.PATH}/>
                            <Route component={Details} path={ROUTES.THEMES.DETAILS.PATH}/>

                            <div className="themePage-chat">
                                <Chat />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThemePage;

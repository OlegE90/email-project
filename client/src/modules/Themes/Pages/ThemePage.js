import React from 'react';
import { Route } from 'react-router-dom'

import {ROUTES} from './../../../routes';

import {ThemeForm} from '../Components/ThemeForm';
import {Hello} from '../Components/Hello';
import {Details} from '../Components/Details';
import {LeftSidebar} from '../Components/LeftSidebar';
import {Chat} from '../Components/Chat';

class ThemePage extends React.Component {
    render() {
        const {match} = this.props;

        return (
            <div className="section no-pad-bot">
                <div className="container themePage">

                    <div className="row">

                        <div className="col s3 themePage-nav">
                            <LeftSidebar/>
                        </div>

                        <div className="col s9">

                            <Route exact component={Hello} path={`${match.url}`} />
                            <Route exact component={ThemeForm} path={`${match.url}/${ROUTES.THEMES.EDIT.PATH}`}/>
                            <Route exact component={Details} path={`${match.url}/${ROUTES.THEMES.DETAILS.PATH}`}/>

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

import React from 'react';
import { Link } from 'react-router-dom'

import {ROUTES} from './../routes';

class Main extends React.Component {

    render() {

        console.log(this.props.children);
        return (
            <div>
                <header className="App-header">
                    <nav>
                        <div className="nav-wrapper container">
                            {<ul className="left hide-on-med-and-down">
                                <li><Link to={ROUTES.ABOUT.FULL_PATH}>About</Link></li>
                                <li><Link to={ROUTES.THEMES.FULL_PATH}>Theme</Link></li>
                            </ul>}
                            {<div className="right">
                                <span className="padding-right-10">Hello!</span>
                                <a className="waves-effect waves-light btn amber accent-4 z-depth-0"
                                   href="/api/logout">Logout</a>
                            </div>}
                        </div>
                    </nav>
                </header>
                {this.props.children}
            </div>
        );
    }
}

export default Main;

import React from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './assets/css/App.css';
import Main from './core/Main';

import * as actions from './modules/Users/actions';
import {ROUTES} from './routes'

class App extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        const {user} = this.props;

        return (
            <Router className="App">
                <div>
                    <div>
                        <header className="App-header">
                            <nav>
                                <div className="nav-wrapper container">
                                    {user && <ul  className="left hide-on-med-and-down">
                                        <li><Link to={ROUTES.ABOUT.FULL_PATH}>About</Link></li>
                                        <li><Link to={ROUTES.THEMES.FULL_PATH}>Theme</Link></li>
                                    </ul>}
                                    {user && <div className="right">
                                        <span className="padding-right-10">Hello {user.name}!</span>
                                        <a className="waves-effect waves-light btn amber accent-4 z-depth-0" href="/api/logout" >Logout</a>
                                    </div>}
                                </div>
                            </nav>
                        </header>
                        <Route path={ROUTES.FULL_PATH} component={Main} />
                    </div>

                    <footer className="page-footer">
                        <div className="footer-copyright">
                            <div className="container">
                                © 2017 Copyright Text
                            </div>
                        </div>
                    </footer>
                </div>
            </Router>
        );
    }
}

function mapStateProps ({user}) {
    return {user}
}

export default connect(mapStateProps, actions)(App);

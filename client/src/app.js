import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './assets/css/App.css';

import * as actions from './actions';

import LoginPage from './components/Pages/LoginPage';
import ThemePage from './modules/Themes/Pages/ThemePage';
import AboutPage from './components/Pages/AboutPage';

class App extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        const {auth} = this.props;

        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <header className="App-header">
                            <nav>
                                <div className="nav-wrapper container">
                                    {auth && <ul  className="left hide-on-med-and-down">
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/theme">Theme</Link></li>
                                    </ul>}
                                    {auth && <div className="right">
                                        <span className="padding-right-10">Hello {auth.name}!</span>
                                        <a className="waves-effect waves-light btn amber accent-4 z-depth-0" href="/api/logout" >Logout</a>
                                    </div>}
                                </div>
                            </nav>
                        </header>
                        <Route exact component={LoginPage} path="/"/>
                        {auth && <Route exact component={ThemePage} path="/theme"/>}
                        <Route component={AboutPage} path="/about"/>
                    </div>
                </BrowserRouter>

                <footer className="page-footer">
                    <div className="footer-copyright">
                        <div className="container">
                            © 2017 Copyright Text
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

function mapStateProps ({auth}) {
    return {auth}
}

export default connect(mapStateProps, actions)(App);

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import '../css/App.css';

import LoginPage from './Pages/LoginPage';
import ThemePage from './Pages/ThemePage';
import AboutPage from './Pages/AboutPage';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <header className="App-header">
                            <nav>
                                <div className="nav-wrapper container" role="navigation">
                                    <Link to="/" className="brand-logo"><i className="large material-icons" >cloud circle</i></Link>
                                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/theme">Theme</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </header>
                        <Route exact component={LoginPage} path="/"/>
                        <Route exact component={ThemePage} path="/theme"/>
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

export default App;

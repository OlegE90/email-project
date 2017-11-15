import React from 'react';

import googlePlus from '../../assets/icons/social/google_plus.svg';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                        <h3 className="header center orange-text">Please Login</h3>
                        <div className="row center">
                        </div>
                        <div className="row center">
                            <a href="/auth/google">
                                <img src={googlePlus} width="100"/>
                            </a>
                        </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;

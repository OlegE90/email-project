import React from 'react';

class ThemePage extends React.Component {
    render() {
        return (
            <div className="section no-pad-bot">
                <div className="container themePage">

                    <div className="row">

                        <div className="col s4 themePage-nav">
                            <div className="themePage-add section">
                                    <a className="btn-floating waves-effect waves-light red"><i
                                        className="material-icons">add</i></a>
                                    <span>Add new theme</span>
                            </div>
                            <div className="collection">
                                <a href="#!" className="collection-item">Theme 1</a>
                                <a href="#!" className="collection-item active">Theme</a>
                                <a href="#!" className="collection-item">Theme</a>
                                <a href="#!" className="collection-item">Theme</a>
                            </div>
                        </div>

                        <div className="col s8">

                            <form>
                                <div className="themePage-link row">
                                    <div className="col s9">
                                        <div className="input-field">
                                            <input disabled type="text" value="http://materializecss.com/buttons.html" className="validate"/>
                                        </div>
                                    </div>
                                    <div className="col s3 themePage-link-button ">
                                            <a className="waves-effect waves-light btn grey lighten-2">Copy link</a>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input placeholder="Name theme"  type="text" className="validate"/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea  className="materialize-textarea"></textarea>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col offset-s8 s4 right-align">
                                        <a className="waves-effect waves-light btn">Save</a>
                                    </div>
                                </div>
                            </form>

                            <div className="themePage-chat">

                                <div className="themePage-chatMessages">
                                    <div className="row">
                                        <div className="col s1">
                                            <i className="material-icons blue-text text-lighten-5">account_circle</i>
                                        </div>
                                        <div className="col s9">
                                            Here some messages....
                                        </div>
                                        <div className="col s2 right-align">20:23</div>
                                    </div>
                                </div>

                                <div className="themePage-chatMessages">
                                    <div className="row">
                                        <div className="col s1">
                                            <i className="material-icons blue-text text-lighten-5">account_circle</i>
                                        </div>
                                        <div className="col s9 blue lighten-5">
                                            Here some messages....
                                        </div>
                                        <div className="col s2 right-align">20:23</div>
                                    </div>
                                </div>
                                <div className="row divider"></div>
                                <form className="row">
                                    <textarea className="materialize-textarea"></textarea>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThemePage;

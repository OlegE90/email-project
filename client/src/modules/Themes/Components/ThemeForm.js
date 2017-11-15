import React from 'react';

export class ThemeForm extends React.Component {
    render() {
        return (
            <form>
                <div className="themePage-link row">
                    <div className="col s9">
                        <div className="input-field">
                            <input disabled type="text" value="http://materializecss.com/buttons.html" className="validate"/>
                        </div>
                    </div>
                    <div className="col s3 themePage-link-button ">
                        <a className="waves-effect waves-light z-depth-0 btn grey lighten-2">Copy link</a>
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
        );
    }
}

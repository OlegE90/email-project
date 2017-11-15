import React from 'react';

export class Chat extends React.Component {
    render() {
        return (
            <div>
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
        );
    }
}

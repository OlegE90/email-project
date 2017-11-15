import React from 'react';

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

                            {this.props.children}

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

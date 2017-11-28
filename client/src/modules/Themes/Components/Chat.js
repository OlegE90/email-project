import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../Actions';
import {isFinalStatus} from '../../../core/Utils';
import {STATUS} from '../../../core/Consts';

export class ChatComponent extends React.Component {
    
    componentDidMount(){
        this.props.fetchChat(this.props.currentThemeId);
    };
    
    render() {
        const {messages} = this.props;
        
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

function mapStateProps({themes: {item, messages}}){
    return {
        messages: messages,
        //TODO Передовать параметр currentItemId из url-а.
        currentThemeId: item.data && item.data._id || null
    }
}

export const Chat = connect(mapStateProps, actions)(ChatComponent);

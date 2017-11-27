import React from 'react';
import {connect} from 'react-redux';

import {STATUS} from '../../../core/Consts';
import {isFinalStatus} from '../../../core/Utils';
import Spinner from '../../../core/Common/Spinner';

import * as actions from '../Actions';

// Форма создания/редактирования темы.
export class ThemeFormComponent extends React.Component {
    
    state = {
        theme: {
            title: '',
            description: '',
        }
    };
    
    componentWillReceiveProps({match: {params}, theme, theme: {status, data}}){
        if(!params.id) return;

        const {fetchThemeItem} = this.props;

        if(status === STATUS.INIT || isFinalStatus(status) && params.id !== data._id) {
            fetchThemeItem(params.id);
        }

        theme.data && this.setState({status: theme.status, theme: theme.data});
    };
    
    handlerTitleChange = (e) =>{
        const title = e.target.value;
        
        this.setState((prevState) => ({
            theme: {...prevState.theme, title}
        }));
    };
    
    handlerDescriptionChange = (e) =>{
        const description = e.target.value;

        this.setState((prevState) => ({
            theme: {...prevState.theme, description}
        }));
    };
    
    handleUpdate = () =>{
        this.props.updateTheme(this.state.theme)
    };
    
    render(){
        const {theme: {_id, title, description}, status} = this.state;
        
        return (
            <div>
                {isFinalStatus(status) ? <form>
                    <div className="themePage-link row">
                        <div className="col s9">
                            <div className="input-field">
                                <input disabled type="text" value="http://materializecss.com/buttons.html"
                                       className="validate"/>
                            </div>
                        </div>
                        <div className="col s3 themePage-link-button ">
                            <a className="waves-effect waves-light z-depth-0 btn grey lighten-2">Copy link</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Name theme" name="title" value={title}
                                   onChange={this.handlerTitleChange}
                                   type="text" className="validate"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                        <textarea value={description} onChange={this.handlerDescriptionChange}
                                  className="materialize-textarea"></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col offset-s8 s4 right-align">
                            <a onClick={this.handleUpdate} className="waves-effect waves-light btn">
                                {_id ? 'Update' : 'Save'}
                            </a>
                        </div>
                    </div>
                </form> :  <Spinner className="center-align" />}
            </div>
        );
    }
}

function mapStateProps({themes}){
    return {
        theme: themes.item
    }
}

export const ThemeForm = connect(mapStateProps, actions)(ThemeFormComponent);
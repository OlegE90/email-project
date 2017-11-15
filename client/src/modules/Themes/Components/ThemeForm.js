import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../Actions';

export class ThemeFormComponent extends React.Component {

    state = {
        title: '',
        description: '',
    };

    componentWillReceiveProps({match: {params}}) {
        const {
            themes: {item}
        } = this.props;
        // TODO. Если будет обновленна тема, title не обновится.
        params.id && (!item.data || item.data._id !== params.id) && this.props.fetchThemeItem(params.id);
        item.data && this.setState({...item.data});
    };

    handlerTitleChange = (e) => {
        const title = e.target.value;

        this.setState({
            title
        });
    };

    handlerDescriptionChange = (e) => {
        const description = e.target.value;

        this.setState({
            description
        });
    };

    handleUpdate = () => {
        this.props.updateTheme(this.state)
    };

    render() {
        const {title, description} = this.state;

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
                        <input placeholder="Name theme" name="title" value={title} onChange={this.handlerTitleChange} type="text" className="validate"/>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <textarea value={description} onChange={this.handlerDescriptionChange} className="materialize-textarea"></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col offset-s8 s4 right-align">
                        <a onClick={this.handleUpdate} className="waves-effect waves-light btn">Save</a>
                    </div>
                </div>
            </form>
        );
    }
}

function mapStateProps ({themes}) {
    return {themes}
}

export const ThemeForm = connect(mapStateProps, actions)(ThemeFormComponent);
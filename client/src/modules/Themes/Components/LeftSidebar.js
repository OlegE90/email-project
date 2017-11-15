import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Spinner from '../../../core/Common/Spinner';

import * as actions from '../Actions';

class LeftSidebarComponent extends React.Component {
    componentDidMount() {
        this.props.fetchThemesList();
    }

    render() {
        const {list} = this.props.theme;

        return (
            <div>
                <div className="themePage-add section">
                    <a className="btn-floating waves-effect waves-light red">
                        <i className="material-icons">add</i></a>
                    <span>Add new theme</span>
                </div>
                {list.data ? <div className="collection">
                    {list.data.map((item, key) => <Link to={`/theme/${item._id}`} key={key} className="collection-item">{item.title}</Link>)}
                </div> : <Spinner className="center-align" />}
            </div>
        );
    }
}

function mapStateProps ({theme}) {
    return {theme}
}

export const LeftSidebar = connect(mapStateProps, actions)(LeftSidebarComponent);
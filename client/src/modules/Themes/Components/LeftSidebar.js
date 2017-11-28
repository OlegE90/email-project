import React from 'react';
import {replace} from 'lodash';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {ROUTES} from './../../../routes';
import Spinner from '../../../core/Common/Spinner';
import {isFinalStatus} from '../../../core/Utils';

import * as actions from '../Actions';

class LeftSidebarComponent extends React.Component {
    componentDidMount() {
        this.props.fetchThemesList();
    }

    render() {
        const {list, currentThemeId} = this.props;

        return (
            <div>
                <div className="themePage-add section">
                    <a className="btn-floating waves-effect waves-light red">
                        <i className="material-icons">add</i></a>
                    <span>Add new theme</span>
                </div>
                {isFinalStatus(list.status) ? <div className='collection'>
                    {list.data.map((item, key) =>
                        <Link to={replace(ROUTES.THEMES.EDIT.FULL_PATH, ':id', item._id)}
                              key={key}
                              className={`collection-item ${currentThemeId === item._id ? 'active' : ''}`}>
                            {item.title}
                        </Link>)
                    }
                </div> : <Spinner className="center-align" />}
            </div>
        );
    }
}

function mapStateProps ({themes: {list, item}}) {
    return {
        list,
        //TODO Передовать параметр currentItemId из url-а.
        currentThemeId: item.data && item.data._id || null
    }
}

export const LeftSidebar = connect(mapStateProps, actions)(LeftSidebarComponent);
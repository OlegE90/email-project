import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reduxThunk from 'redux-thunk'

import 'materialize-css/dist/css/materialize.min.css';
import App from './app';
import reducers from './reducers'

const store = createStore(reducers, {},
    applyMiddleware(reduxThunk),
    applyMiddleware(promiseMiddleware()),
);

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));

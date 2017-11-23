import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';
import App from './app';

import sagas from './sagas'
import configureStore from './configureStore'

const store = configureStore();
store.runSaga(sagas);

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));

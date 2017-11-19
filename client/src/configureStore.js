import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';

import reducers from './reducers';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(reducers, initialState, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run
    }
}
import { call, put, fork, takeEvery, takeLatest } from 'redux-saga/effects';

import {getPayloadFailure, getPayloadSuccess} from '../../core/Utils';

import {fetchThemesList} from './Actions/index';

import {
    UPDATE_THEME,
    FETCH_THEME_ITEM_DATA,
    FETCH_THEME_LIST_DATA
} from './Actions/types';
import Services from './services';

function* fetchThemeList({payload}) {
    if(payload && payload._fromSaga) return;
    
    try {
        const theme = yield call(Services.getList, payload);
        
        yield put({
            type: FETCH_THEME_LIST_DATA,
            payload: getPayloadSuccess(theme.data)
        });
    } catch (e) {
        yield put({
            type: FETCH_THEME_LIST_DATA,
            payload: getPayloadFailure(e)
        });
    }
}

function* fetchThemeItem({payload}) {
    if(payload && payload._fromSaga) return;
    
    try {
        const theme = yield call(Services.getItem, payload);
        
        yield put({
            type: FETCH_THEME_ITEM_DATA,
            payload: getPayloadSuccess(theme.data)
        });
    } catch (e) {
        yield put({
            type: FETCH_THEME_ITEM_DATA,
            payload: getPayloadFailure(e)
        });
    }
}


function* updateTheme({payload}) {
    if(payload && payload._fromSaga) return;
    
    try {
        const theme = yield call(Services.updateItem, payload);
        yield put(fetchThemesList());
        
        yield put({
            type: UPDATE_THEME,
            payload: getPayloadSuccess(theme.data)
        });
    } catch (e) {
        yield put({
            type: UPDATE_THEME,
            payload: getPayloadFailure(e)
        });
    }
}


function* watchThemesSagas() {
    yield [
        takeEvery(FETCH_THEME_LIST_DATA, fetchThemeList),
        takeLatest(FETCH_THEME_ITEM_DATA, fetchThemeItem),
        takeEvery(UPDATE_THEME, updateTheme),
    ];
}


export default watchThemesSagas;
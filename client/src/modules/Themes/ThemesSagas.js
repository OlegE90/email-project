import { call, put, takeEvery } from 'redux-saga/effects';

import {getPayloadFailure, getPayloadSuccess} from '../../core/Utils';

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


function* main({payload}) {
    if(payload && payload._fromSaga) return;
    
    debugger;
    if(payload.type === FETCH_THEME_LIST_DATA) yield fetchThemeList(payload)
    
}


function* watchThemesSagas() {
    yield takeEvery([FETCH_THEME_LIST_DATA, FETCH_THEME_ITEM_DATA], main);
  //  yield takeEvery(FETCH_THEME_ITEM_DATA, fetchThemeItem);
 //   yield takeEvery(UPDATE_THEME, updateTheme);
}


export default watchThemesSagas;
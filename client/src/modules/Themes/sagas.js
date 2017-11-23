import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


import {
    FETCH_THEME_LIST_DATA,
    FETCH_THEME_LIST_DATA_SUCCESS,
    FETCH_THEME_LIST_DATA_FAILURE
} from './Actions/types'
import Services from './services';


function* fetchThemeList(action) {
    try {
        const user = yield call(Services.getList, action.payload);
        yield put({type: FETCH_THEME_LIST_DATA_SUCCESS, payload: {status: "SUCCESS", data: user.data}});
    } catch (e) {
        yield put({type:FETCH_THEME_LIST_DATA_FAILURE, payload: {status: "FAILURE", data: null, errors: e.message}});
    }
}

function* fetchThemeItem(action) {
    try {
        const user = yield call(Services.getList, action.payload);
        yield put({type: FETCH_THEME_LIST_DATA_SUCCESS, payload: {status: "SUCCESS", data: user.data}});
    } catch (e) {
        yield put({type:FETCH_THEME_LIST_DATA_FAILURE, payload: {status: "FAILURE", data: null, errors: e.message}});
    }
}


function* watchThemesSagas() {
    yield takeEvery("FETCH_THEME_LIST_DATA", fetchThemeList);
}


export default watchThemesSagas;
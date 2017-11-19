import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import {
    FETCH_USER_DATA,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAILURE
} from './actions/types'
import Services from './services'

function* fetchUser(action) {
    try {
        const user = yield call(Services.getItem, action.payload);
        yield put({type: FETCH_USER_DATA_SUCCESS, payload: {status: "SUCCESS", data: user.data}});
    } catch (e) {
        yield put({type: FETCH_USER_DATA_FAILURE, payload: {status: "FAILURE", data: null, errors: e.message}});
    }
}

function* watchUsersSaga() {
    yield takeEvery(FETCH_USER_DATA, fetchUser);
}

export default watchUsersSaga;
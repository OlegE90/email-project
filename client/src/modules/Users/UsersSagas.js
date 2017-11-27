import { call, put, takeEvery } from 'redux-saga/effects';

import {
    FETCH_USER_DATA
} from './actions/types';
import Services from './services';

import {getPayloadFailure, getPayloadSuccess} from '../../core/Utils';

function* fetchUser({payload}) {
    if(payload && payload._fromSaga) return;
    
    try {
        const user = yield call(Services.getItem, payload);
        
        yield put({
            type: FETCH_USER_DATA,
            payload: getPayloadSuccess(user.data)
        });
    } catch (e) {
        yield put({
            type: FETCH_USER_DATA,
            payload: getPayloadFailure(e)
        });
    }
}

function* watchUsersSaga() {
    yield takeEvery(FETCH_USER_DATA, fetchUser);
}

export default watchUsersSaga;
import { take, put, call, fork, select, all } from 'redux-saga/effects';

import watchUsersSaga from '../modules/Users/sagas';
import watchThemesSagas from '../modules/Themes/sagas';

export default function* root() {
    yield all([
        fork(watchUsersSaga),
        fork(watchThemesSagas),
    ])
}
import { take, put, call, fork, select, all } from 'redux-saga/effects';

import watchUsersSaga from '../modules/Users/UsersSagas';
import watchThemesSagas from '../modules/Themes/ThemesSagas';

export default function* root() {
    yield all([
        fork(watchUsersSaga),
        fork(watchThemesSagas),
    ])
}
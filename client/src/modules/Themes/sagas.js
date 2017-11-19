import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
 */
function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", {});
}

export default mySaga;
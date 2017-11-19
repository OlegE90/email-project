import { take, put, call, fork, select, all } from 'redux-saga/effects'

export default function* root() {
    yield all([
        fork(watchNavigate),
        fork(watchLoadUserPage),
        fork(watchLoadRepoPage),
        fork(watchLoadMoreStarred),
        fork(watchLoadMoreStargazers)
    ])
}
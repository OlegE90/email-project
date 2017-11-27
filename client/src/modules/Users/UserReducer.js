import {STATUS} from '../../core/Consts'

import {
    FETCH_USER_DATA
} from './actions/types';

const getDefaultState = () => ({
    data: null,
    errors: null,
    status: STATUS.INIT
});


export default function(state = getDefaultState(), action) {
    switch (action.type) {
        case FETCH_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
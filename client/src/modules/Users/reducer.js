import {
    FETCH_USER_DATA,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAILURE
} from './actions/types'

const getDefaultState = () =>({
    users: {
        data: null,
        errors: null,
        status: "INIT"
    }
});


export default function(state = getDefaultState(), action) {
    console.log(action);
    switch (action.type) {
        case FETCH_USER_DATA:
        case FETCH_USER_DATA_SUCCESS:
        case FETCH_USER_DATA_FAILURE:
            return {...state.users, ...action.payload} || state.users;
        default:
            return state.users;
    }
}
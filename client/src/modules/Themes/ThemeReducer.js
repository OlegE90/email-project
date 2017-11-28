import {STATUS} from '../../core/Consts'

import {
    FETCH_CHAT,
    FETCH_THEME_LIST_DATA,
    FETCH_THEME_ITEM_DATA
} from './Actions/types';

const getDefaultState = () => ({
    list: {
        data: null,
        errors: null,
        status: STATUS.INIT
    },
    item: {
        data: null,
        errors: null,
        status: STATUS.INIT
    },
    messages: {
        data: null,
        errors: null,
        status: STATUS.INIT
    }
});

export default function(state = getDefaultState(), action) {
    switch (action.type) {
        case FETCH_THEME_LIST_DATA:
            return {
                ...state,
                list: {
                    ...state.list,
                    ...action.payload
                }
            };
        case FETCH_THEME_ITEM_DATA:
            return {
                ...state,
                item: {
                    ...state.item,
                    ...action.payload
                }
            };
        case FETCH_CHAT:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    ...action.payload
                }
            };
        default:
            return state;
    }
}
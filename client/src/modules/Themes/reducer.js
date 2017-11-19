import {
    FETCH_THEME_LIST_DATA,
    FETCH_THEME_ITEM_DATA
} from './Actions/types';

const getDefaultState = () => ({
   list: {
       data: null
   },
    item: {
       data: null
    }
});

export default function(state = getDefaultState(), action) {
    switch (action.type) {
        case FETCH_THEME_LIST_DATA:
            return {
                ...state,
                list: {
                    data: action.payload || false
                }
            };
        case FETCH_THEME_ITEM_DATA:
            return {
                ...state,
                item: {
                    data: action.payload || false
                }
            };
        default:
            return state;
    }
}
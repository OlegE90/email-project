import {FETCH_THEME_LIST_DATA} from './Actions/types'

const getDefaultState = () => ({
   list: {
       data: null
   }
});

export default function(state = getDefaultState(), action) {
    console.log(action.payload);
    switch (action.type) {
        case FETCH_THEME_LIST_DATA:
            return {
                ...state,
                list: {
                    data: action.payload || false
                }
            };
        default:
            return state;
    }
}
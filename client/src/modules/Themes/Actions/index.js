import axios from 'axios';
import {FETCH_THEME_LIST_DATA} from './types'

export const fetchThemesList = () => {
    return (dispatch) => {
        axios
            .get('/api/theme/list')
            .then(res => dispatch({type: FETCH_THEME_LIST_DATA, payload: res.data}));
    }
};

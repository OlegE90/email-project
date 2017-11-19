import axios from 'axios';
import {
    FETCH_THEME_LIST_DATA,
    FETCH_THEME_ITEM_DATA,
    UPDATE_THEME,
} from './types'

export const fetchThemesList = () => ({type: FETCH_THEME_LIST_DATA});


// export const fetchThemesList = () => async (dispatch) => {
//         const result = await axios.get('/api/theme/list');
//         dispatch({type: FETCH_THEME_LIST_DATA, payload: result.data})
// };


export const fetchThemeItem = (themeId) => async (dispatch) => {
        const result = await axios.get(`/api/theme/${themeId}`);
        dispatch({type: FETCH_THEME_ITEM_DATA, payload: result.data})
};

export const updateTheme = (theme) => async (dispatch) => {
        const result = await axios.put(`/api/theme/${theme._id}`, theme);
        dispatch({type: UPDATE_THEME, payload: result.data});
};
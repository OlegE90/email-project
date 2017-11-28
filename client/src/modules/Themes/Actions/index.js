import {STATUS} from '../../../core/Consts'

import {
    ADD_MESSAGE,
    FETCH_CHAT,
    FETCH_THEME_LIST_DATA,
    FETCH_THEME_ITEM_DATA,
    UPDATE_THEME,
} from './types'

export const fetchThemesList = () => ({type: FETCH_THEME_LIST_DATA, payload: {status: STATUS.BEGIN}});

export const fetchThemeItem = (themeId) => ({type: FETCH_THEME_ITEM_DATA, payload: {themeId, status: STATUS.BEGIN}});

export const updateTheme = (theme) => ({type: UPDATE_THEME, payload: {theme, status: STATUS.BEGIN}});

export const addMessage = (theme) => ({type: ADD_MESSAGE, payload: {theme, status: STATUS.BEGIN}});

export const fetchChat = (theme) => ({type: FETCH_CHAT, payload: {theme, status: STATUS.BEGIN}});
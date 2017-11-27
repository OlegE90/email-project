import {combineReducers} from 'redux';
import userReducer from '../modules/Users/UserReducer';
import themeReducer from '../modules/Themes/ThemeReducer';

export default combineReducers({
    user: userReducer,
    themes: themeReducer
})
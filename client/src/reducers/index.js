import {combineReducers} from 'redux';
import userReducer from '../modules/Users/reducer';
import themeReducer from '../modules/Themes/reducer';

export default combineReducers({
    user: userReducer,
    themes: themeReducer
})
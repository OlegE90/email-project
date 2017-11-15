import {combineReducers} from 'redux';
import authReducer from './authReducer';
import themeReducer from '../modules/Themes/reducer';

export default combineReducers({
    auth: authReducer,
    theme: themeReducer
})
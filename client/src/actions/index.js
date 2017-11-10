import axios from 'axios';
import {FETCH_USER_DATA} from './types'


export const fetchUser = () => {
    return (dispatch) => {
        axios
            .get('/api/current_user')
            .then(res => dispatch({type: FETCH_USER_DATA, payload: res.data}));
    }
};

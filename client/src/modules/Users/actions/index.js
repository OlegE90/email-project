import {FETCH_USER_DATA} from './types'
import {STATUS} from '../../../core/Consts'

export const fetchUser = () => ({type: FETCH_USER_DATA, payload: {status: STATUS.BEGIN}});

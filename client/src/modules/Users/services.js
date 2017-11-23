import axios from 'axios';

export default class UserService {

    static getItem = async (themeId) => await axios.get(`/api/current_user`);
}

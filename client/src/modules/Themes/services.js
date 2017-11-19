import axios from 'axios';

export default class ThemeService {

    static getList = async () => await axios.get('/api/theme/list');

    static getItem = async (themeId) => await axios.get(`/api/theme/${themeId}`);

    static updateItem = async (theme) => await axios.put(`/api/theme/${theme._id}`, theme);
}
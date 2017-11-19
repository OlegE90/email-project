import axios from 'axios';

export default class ThemeService {

    getList = async () => await axios.get('/api/theme/list');

    getItem = async (themeId) => await axios.get(`/api/theme/${themeId}`);

    updateItem = async (theme) => await axios.put(`/api/theme/${theme._id}`, theme);
}
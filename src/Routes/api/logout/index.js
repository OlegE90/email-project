const ROUTES = require('../../consts');
const {API} = ROUTES;

const page = {

    fullPath: API.LOGOUT.FULL_PATH,

    getPage(req, res) {
        req.logout();
        res.redirect('/');
    }
};

module.exports = {
    index: page,
};

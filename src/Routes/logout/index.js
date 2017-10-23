const ROUTES = require('../consts');

const page = {

    fullPath: ROUTES.LOGOUT.FULL_PATH,

    getPage(req, res) {
        req.logout();
        res.redirect('/');
    }
};


module.exports = {
    index: page,
};
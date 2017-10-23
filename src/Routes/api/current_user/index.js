const passport = require('passport');
const ROUTES = require('../../consts');
const {API} = ROUTES;

const page = {

    fullPath: API.CURRENT_USER.FULL_PATH,

    getPage(req, res) {
        res.send(req.user)
    }
};

module.exports = {
    index: page,
};

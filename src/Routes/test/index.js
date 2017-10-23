const ROUTES = require('../consts');

const page = {

    fullPath: ROUTES.TEST.FULL_PATH,

    getPage(req, res) {
        res.json(req.user);
    }
};


module.exports = {
    index: page,
};
const ROUTES = require('../../consts');
const {API} = ROUTES;

const page = {

    fullPath: API.CURRENT_USER.FULL_PATH,

    getPage(req, res) {
        console.log(req.user);
        res.send(req.user)
    }
};

module.exports = {
    index: page,
};

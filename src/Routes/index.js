const googleOAuthPage = require('./auth/google');
const testPage = require('./test');
const apiCurrentUser = require('./api/current_user');
const apiLogout = require('./api/logout');

const page = {

    fullPath: '/',

    getPage (req, res) {
        res.send('MainPage');

    },

    postPage(req, res) {

    }
};


module.exports = [
    {
        index: page,
        sub: [
            apiCurrentUser,
            apiLogout,
            googleOAuthPage,
            testPage
        ]
    }
];
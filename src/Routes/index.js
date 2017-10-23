const googleOAuthPage = require('./auth/google');
const logoutPage = require('./logout');
const testPage = require('./test');
const apiCurrentUser = require('./api/current_user');

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
            logoutPage,
            googleOAuthPage,
            testPage
        ]
    }
];
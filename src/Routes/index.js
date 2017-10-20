const googleOAuthPage = require('./auth/google');
const logoutPage = require('./logout');
const testPage = require('./test');

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
            logoutPage,
            googleOAuthPage,
            testPage
        ]
    }
];
const passport = require('passport');
const ROUTES = require('../../consts');
const {AUTH} = ROUTES;


const pageCallback = {

    fullPath: AUTH.GOOGLE.CALLBACK.FULL_PATH,

    get: [
         passport.authenticate('google', {scope: ['profile']}),
        (req, res) => res.redirect('/')
    ],

};

const page = {

    fullPath: AUTH.GOOGLE.FULL_PATH,

    get: [
        passport.authenticate('google', {scope: ['profile']})
    ]
};

module.exports = {
    index: page,
    sub: [
        {index: pageCallback}
    ]
};

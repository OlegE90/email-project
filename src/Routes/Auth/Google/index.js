var passport = require('passport');

module.exports = (App) => {

    App.get('/auth/google', passport.authenticate('google', {scope: ['profile']}));
    App.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/login'}),
        (req, res) => {
            // Successful authentication, redirect home.
            res.redirect('/');
        });

    return App;
};

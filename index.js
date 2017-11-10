var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var cookieSession = require('cookie-session');

const keys = require('./config/keys');
const routes = require('./src/Routes/main');
const UserSchemas = require('./src/Schemas/User');

const PORT = process.env.PORT || 5000;

mongoose.connect(keys.MONGODB_URI);

const User = mongoose.model('User', UserSchemas);

passport.use(new GoogleStrategy({
        clientID: keys.GOOGLE_CLIENT_ID,
        clientSecret: keys.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
        proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        const social_id = profile.id;
        const name = profile.displayName;

        User.findOne({ 'social_id': social_id }, (err, user) => {
            if (!user) {
                new User({
                    social_id: social_id,
                    network: 'google',
                    name
                }).save().then(user => done(null, user));
            }

            return done(null, user);
        });
    }
));

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

let app = express();
app.use(cookieSession({
    name: 'session',
    keys: [keys.COOKIE_KEY],
    maxAge: 30 * 24 * 60 * 60 * 1000
}));

app.use(passport.initialize());
app.use(passport.session());

app = routes(app);

app.listen(PORT);

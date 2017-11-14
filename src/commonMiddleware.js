import Google from 'passport-google-oauth20';
import cookieSession from 'cookie-session';
import passport from 'passport';
import bodyParser from 'body-parser';

import config from './config';

// Shemes
import User from './Schemas/User';

const GoogleStrategy = Google.Strategy;

export default function(app) {

    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());

    passport.use(new GoogleStrategy({
            clientID: config.google.google_client_id,
            clientSecret: config.google.google_client_secret,
            callbackURL: '/auth/google/callback',
            proxy: true,
        },
        (accessToken, refreshToken, profile, done) => {
            const social_id = profile.id;
            const name = profile.displayName;

            User.findOne({social_id}, (err, user) => {
                if (!user) {
                    new User({
                        social_id,
                        network: 'google',
                        name
                    }).save().then(user => done(null, user));
                }
                return done(null, user);
            });
        }
    ));

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    app.use(cookieSession({
        name: 'session',
        keys: [config.cookie_key],
        maxAge: 30 * 24 * 60 * 60 * 1000
    }));

    app.use(passport.initialize());
    app.use(passport.session());
};
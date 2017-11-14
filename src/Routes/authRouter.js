import express from 'express';
import passport from 'passport';

const authRouter = express.Router();

authRouter.get(
    '/google',
    passport.authenticate('google', {scope: ['profile']})
);

authRouter.get(
    '/google/callback',
    passport.authenticate('google', {scope: ['profile']}),
    (req, res) => res.redirect('/theme')
);

export default authRouter;
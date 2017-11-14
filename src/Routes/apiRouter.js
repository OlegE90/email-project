import express from 'express';

import ThemeRouter from '../Modules/Theme/ThemeRouter';

const apiRouter = express.Router();

apiRouter.get(
    '/current_user',
    (req, res) => {
        res.send(req.user)
    }
);

apiRouter.get(
    '/logout',
    (req, res) => {
        req.logout();
        res.redirect('/');
    }
);

apiRouter.use('/theme', ThemeRouter);

export default  apiRouter;
import express from 'express';

import ThemeRouter from '../Modules/Themes/ThemeRouter';
import MessageRouter from '../Modules/Messages/MessageRouter';

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
apiRouter.use('/message', MessageRouter);

export default  apiRouter;